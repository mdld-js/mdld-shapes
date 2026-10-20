/**
 * Centralized SHACL Shape Detector
 * 
 * Provides a single, reusable function to classify RDF quads as SHACL shapes vs data.
 * Used by all parsers to ensure consistent shape detection and storage.
 * 
 * Rules:
 * 1. rdf:type declarations for SHACL shapes (NodeShape, PropertyShape)
 * 2. SHACL namespace predicates (sh:*)
 * 3. Subject-scoped classification (known shape subjects and their dependencies)
 * 4. List structure used by SHACL constraints (rdf:first, rdf:rest for shape-related lists)
 */

const SHACL_NS = 'http://www.w3.org/ns/shacl#'
const RDF_TYPE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
const RDF_FIRST = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#first'
const RDF_REST = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#rest'
const RDF_LIST = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#List'
const RDF_NIL = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#nil'

/**
 * Creates a shape detector instance with tracking state
 * @returns {Object} Detector instance with classify method
 */
export function createShapeDetector() {
    const shapeSubjects = new Set()
    const listNodes = new Set()
    const shapeReferences = new Set()

    /**
     * Classify a quad as shape or data
     * @param {Object} quad - N3 quad to classify
     * @returns {boolean} true if shape, false if data
     */
    function classify(quad) {
        // Safety check
        if (!quad || !quad.predicate || !quad.object || !quad.subject) {
            return false
        }

        const { predicate, object, subject } = quad

        // Rule 1: rdf:type declarations for SHACL shapes (check first!)
        if (predicate.value === RDF_TYPE &&
            (object.value === `${SHACL_NS}NodeShape` ||
                object.value === `${SHACL_NS}PropertyShape`)) {
            shapeSubjects.add(subject.value)
            return true
        }

        // Rule 2: SHACL namespace predicates (sh:*)
        if (predicate.value.startsWith(SHACL_NS)) {
            // Track objects that are referenced by SHACL predicates
            shapeReferences.add(object.value)
            return true
        }

        // Rule 3: Subject-scoped classification (known shape subjects)
        if (shapeSubjects.has(subject.value)) {
            return true
        }

        // Rule 4: List structure used by SHACL constraints
        if (predicate.value === RDF_FIRST || predicate.value === RDF_REST) {
            // Check if this list is referenced by a SHACL shape
            if (shapeReferences.has(subject.value)) {
                listNodes.add(subject.value)
                // Track the rest of the list chain
                if (predicate.value === RDF_REST && object.value !== RDF_NIL) {
                    listNodes.add(object.value)
                }
                return true
            }

            // Check if this list is part of a known shape subject
            if (shapeSubjects.has(subject.value)) {
                listNodes.add(subject.value)
                // Track the rest of the list chain
                if (predicate.value === RDF_REST && object.value !== RDF_NIL) {
                    listNodes.add(object.value)
                }
                return true
            }

            // Check if this is part of an already identified shape list
            if (listNodes.has(subject.value)) {
                // Track the rest of the list chain
                if (predicate.value === RDF_REST && object.value !== RDF_NIL) {
                    listNodes.add(object.value)
                }
                return true
            }
        }

        // Rule 5: rdf:List types for shape-related lists
        if (predicate.value === RDF_TYPE && object.value === RDF_LIST) {
            if (shapeReferences.has(subject.value)) {
                listNodes.add(subject.value)
                return true
            }
        }

        // Default: data quad
        return false
    }

    /**
     * Get statistics about detected shapes
     * @returns {Object} Detection statistics
     */
    function getStats() {
        return {
            shapeSubjects: shapeSubjects.size,
            listNodes: listNodes.size,
            shapeReferences: shapeReferences.size
        }
    }

    /**
     * Reset detector state (for new parsing sessions)
     */
    function reset() {
        shapeSubjects.clear()
        listNodes.clear()
        shapeReferences.clear()
    }

    return {
        classify,
        getStats,
        reset
    }
}

/**
 * Convenience function for single-use classification
 * @param {Array} quads - Array of N3 quads to classify
 * @returns {Object} Classification result with shape and data arrays
 */
export function classifyQuads(quads) {
    const detector = createShapeDetector()
    const shapes = []
    const data = []

    for (const quad of quads) {
        if (detector.classify(quad)) {
            shapes.push(quad)
        } else {
            data.push(quad)
        }
    }

    return {
        shapes,
        data,
        stats: detector.getStats()
    }
}
