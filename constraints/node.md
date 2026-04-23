[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# Node {=sh:node .class:NodeConstraint label}

> Requires property values to conform to a specific node shape {comment}

<http://www.w3.org/ns/shacl#node> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

The node constraint requires property values to conform to a specific node shape. This example validates that employee addresses must conform to an AddressShape with minimum street length.

~~~~~~md
[ex] <tag:my@example.org,2026:node/>

## Employee Validation Shape {=ex:EmployeeValidationShape .sh:NodeShape ?cat:hasShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities to have correct **address** {+ex:#addressRule ?sh:property sh:name}.

**Employee must have valid address** {=ex:#addressRule .sh:PropertyShape sh:message} requires [address] {+ex:address ?sh:path} to conform to [Address Shape] {+ex:AddressShape ?sh:node}.

**Address Shape** {=ex:AddressShape .sh:NodeShape} requires [street] {+ex:street ?sh:path} to have at least [5] {sh:minLength ^^xsd:integer} characters.

---

## Test Data {=ex:data .Container}

### Valid Employee {=ex:ValidEmployee ?member}
Address: [Valid Address] {=ex:ValidAddress .ex:Address ?ex:address}
Street: [Main Street] {ex:street}

### Invalid Employee {=ex:InvalidEmployee ?member}
Address: [Short Address] {=ex:ShortAddress .ex:Address ?ex:address}
Street: [St] {ex:street}
~~~~~~

**Expected Result:** 1 violation (InvalidEmployee fails because address doesn't conform to AddressShape - street is too short)

---

## 📝 MDLD Syntax Patterns

~~~~~~md
[Property] {+ex:propertyName ?sh:path} must conform to [Shape] {+ex:ShapeName ?sh:node}.
~~~~~~

**Use for:** Nested object validation, complex data models, structural integrity

**Important:**
- Only applies to node values (IRIs/blank nodes), not literal values
- Referenced shape must be defined in ontology
- Enables validation of complex nested objects

---

## 🔧 Implementation Guidelines

**When to use:** Property values are complex objects

**Best practices:**
- Define referenced shapes clearly
- Use descriptive shape names

**Common pitfalls:**
- ❌ Forgetting node only applies to nodes, not literals
- ❌ Not defining the referenced shape
- ❌ Confusing node with class constraint (node for structure, class for type)
