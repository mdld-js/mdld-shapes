<a id="index.ontology"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>

# MDLD SHACL Ontology {=cat:index .Container label}

> A comprehensive guide to SHACL validation in MDLD (Markdown Linked Data) - ontology definitions and documentation for semantic authors. {?comment}

This catalog includes all constraints and targeting mechanisms available in SHACL.

## Contents

[Targeting](#targeting-index)
[Constraints](#constraints-index)






{=}



<a id="targeting-index"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>

# Catalog {=cat:index}

## Targeting Mechanism {+class:Targeting ?member .Class label}

These are targeting predicates that determine which nodes get validated (not constraints themselves): 

- [Target Class](#targeting-targetclass) {+sh:targetClass ?cat:includes .class:TargetingPredicate}
- [Target Node](#targeting-targetnode) {+sh:targetNode ?cat:includes .class:TargetingPredicate}
- [Target Subjects](#targeting-targetsubjectsof) {+sh:targetSubjectsOf ?cat:includes .class:TargetingPredicate}
- [Target Objects](#targeting-targetobjectsof) {+sh:targetObjectsOf ?cat:includes .class:TargetingPredicate}

---

[Syntax Reference](#syntax-reference)






{=}



<a id="targeting-targetclass"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/targeting/>


# Target Class {=sh:targetClass .class:TargetingMechanism label}

> Targets all nodes that are instances of a specific RDF class (rdf:type) for shape validation. Essential for class-based validation scenarios across entire domains. {comment}

<http://www.w3.org/ns/shacl#targetClass> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:targeting/>

### Shape Definition

**Product Validation Shape** {=ex:ProductValidationShape .sh:NodeShape label} targets all [Product] {+ex:Product ?sh:targetClass} instances to validate core product requirements.

**Product Name Rule** {=ex:#productName .sh:PropertyShape ?sh:property} requires the [name] {+ex:name ?sh:path} property to have exactly [1] {sh:minCount sh:maxCount ^^xsd:integer} value: **Product must have exactly one name** {sh:message}

**Product Price Rule** {=ex:#productPrice .sh:PropertyShape ?sh:property} requires the [price] {+ex:price ?sh:path} property to be at least [0.01] {sh:minInclusive ^^xsd:decimal}: **Product price must be positive** {sh:message}

---

### Test Data {=ex:data .Container}

#### Valid Product {=ex:Laptop .ex:Product ?member}
Name: [MacBook Pro] {ex:name}
Price: [1299.99] {ex:price ^^xsd:decimal}

#### Invalid Product {=ex:InvalidProduct .ex:Product ?member}
Price: [-50.00] {ex:price ^^xsd:decimal}

#### Service {=ex:Service .ex:Service ?member}
Name: [Consulting] {ex:name}
Price: [200.00] {ex:price ^^xsd:decimal}

---

[Demo] {=ex:demo} must produce exactly **2** violations.
~~~~~~

---

## 📝 MDLD Syntax Patterns

Target class targets all nodes that are instances of a specific RDF class for shape validation.

~~~~~~md
**[Shape] targets [Class] instances** {=ex:ShapeName .sh:NodeShape label}

[Shape Name] {=ex:ShapeName .sh:NodeShape label} targets all [Class] {+ex:Class ?sh:targetClass} instances to validate requirements.
~~~~~~

**Key components:**
- **Shape declaration** - The shape being defined (`{=ex:ShapeName .sh:NodeShape label}`)
- **Target class** - The class to target (`{+ex:Class ?sh:targetClass}`)
- **Validation rules** - Property constraints within the shape
- **Class-based selection** - Validates all instances of the specified class

**Important notes:**
- Target class validates all instances of the specified class
- Ideal for domain-wide validation rules
- Works with rdf:type relationships
- Combine with targeting mechanisms for complex scenarios
- Use for consistent validation across class instances

---

## 🎯 Use Cases

- **Domain validation** - Validate all instances of a domain class
- **Business rules** - Enforce class-specific business requirements
- **Data quality** - Ensure data consistency across class instances
- **Schema enforcement** - Apply validation rules to entire class hierarchies
- **Compliance** - Validate regulatory requirements for specific entity types

---

## 🔧 Implementation Guidelines

**When to use target class:**
- **Domain-wide validation** - When validating entire classes of entities
- **Business rules** - Enforce class-specific business requirements
- **Data quality** - Ensure consistency across class instances
- **Schema enforcement** - Apply validation to class hierarchies
- **Compliance** - Validate regulatory requirements

**Best practices:**
- Use descriptive shape names that reflect the target class
- Combine with other targeting mechanisms for complex scenarios
- Test with valid and invalid instances
- Document the validation scope clearly
- Consider performance for large class instances

**Common pitfalls:**
- ❌ Forgetting that target class validates all instances
- ❌ Not testing with instances outside the target class
- ❌ Confusing target class with target node
- ❌ Not considering performance for large datasets
- ❌ Overusing target class when target node would be more appropriate






{=}



<a id="targeting-targetnode"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/targeting/>


# Target Node {=sh:targetNode .class:TargetingMechanism label}

> Targets specific individual nodes identified by their IRI for precise, node-by-node validation. Perfect for critical infrastructure, testing scenarios, and executive-level validation. {comment}

<http://www.w3.org/ns/shacl#targetNode> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:targeting/>

### Shape Definition

**Database Validation Shape** {=ex:DatabaseValidationShape .sh:NodeShape label} targets the [Main Database] {+ex:MainDatabase ?sh:targetNode} for critical infrastructure validation.

**Database Status Rule** {=ex:#databaseStatus .sh:PropertyShape ?sh:property} requires the [status] {+ex:status ?sh:path} property to be exactly [online] {sh:hasValue}: **Main database must be online** {sh:message}

**Database Uptime Rule** {=ex:#databaseUptime .sh:PropertyShape ?sh:property} requires the [uptime] {+ex:uptime ?sh:path} property to be at least [99.9] {sh:minInclusive ^^xsd:decimal}: **Database uptime must be at least 99.9%** {sh:message}

---

### Test Data {=ex:data .Container}

#### Main Database {=ex:MainDatabase ?member}
Status: [offline] {ex:status}
Uptime: [95.5] {ex:uptime ^^xsd:decimal}

#### Backup Database {=ex:BackupDatabase ?member}
Status: [online] {ex:status}
Uptime: [99.8] {ex:uptime ^^xsd:decimal}

---

[Demo] {=ex:demo} must produce exactly **2** violations.
~~~~~~

---

## 📝 MDLD Syntax Patterns

Target node targets specific individual nodes identified by their IRI for precise validation.

~~~~~~md
**[Shape] targets [Node]** {=ex:ShapeName .sh:NodeShape label}

[Shape Name] {=ex:ShapeName .sh:NodeShape label} targets the [Node] {+ex:Node ?sh:targetNode} for validation.
~~~~~~

**Key components:**
- **Shape declaration** - The shape being defined (`{=ex:ShapeName .sh:NodeShape label}`)
- **Target node** - The specific node to target (`{+ex:Node ?sh:targetNode}`)
- **Validation rules** - Property constraints within the shape
- **Node-specific selection** - Validates only the specified node

**Important notes:**
- Target node validates only the specified individual node
- Ideal for critical infrastructure and executive validation
- Provides precise control over validation scope
- Use for testing specific scenarios
- Combine with other targeting mechanisms for complex scenarios

---

## 🎯 Use Cases

- **Critical infrastructure** - Validate critical systems and infrastructure
- **Executive validation** - Validate executive-level entities
- **Testing scenarios** - Test specific nodes in isolation
- **Compliance** - Validate specific regulatory entities
- **Quality assurance** - Validate specific production nodes

---

## 🔧 Implementation Guidelines

**When to use target node:**
- **Critical infrastructure** - When validating specific critical systems
- **Executive validation** - When validating executive-level entities
- **Testing** - When testing specific nodes in isolation
- **Compliance** - When validating specific regulatory entities
- **Quality assurance** - When validating specific production nodes

**Best practices:**
- Use descriptive node identifiers for clarity
- Combine with target class for comprehensive validation
- Test with valid and invalid node states
- Document why specific nodes are targeted
- Consider using target class for broader validation

**Common pitfalls:**
- ❌ Forgetting that target node validates only one specific node
- ❌ Overusing target node when target class would be more appropriate
- ❌ Not testing with nodes outside the target
- ❌ Confusing target node with target class
- ❌ Not documenting why specific nodes are targeted






{=}



<a id="targeting-targetsubjectsof"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/targeting/>


# Target Subjects Of {=sh:targetSubjectsOf .class:TargetingMechanism label}

> Targets all subjects (nodes) that have a specific property pointing to any value. Useful for reverse relationship targeting, source validation, and validating entities that initiate relationships. {comment}

<http://www.w3.org/ns/shacl#targetSubjectsOf> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:targeting/>

### Shape Definition

**Manager Validation Shape** {=ex:ManagerValidationShape .sh:NodeShape label} targets all [managers] {+ex:manages ?sh:targetSubjectsOf} of the manages relationship to validate management requirements.

**Management Level Rule** {=ex:#managementLevel .sh:PropertyShape ?sh:property} requires the [level] {+ex:level ?sh:path} property to be at least [3] {sh:minInclusive ^^xsd:integer}: **Managers must have level 3 or higher** {sh:message}

**Team Size Rule** {=ex:#teamSize .sh:PropertyShape ?sh:property} requires the [teamSize] {+ex:teamSize ?sh:path} property to be at most [10] {sh:maxInclusive ^^xsd:integer}: **Managers can oversee at most 10 team members** {sh:message}

---

### Test Data {=ex:data .Container}

#### Engineering Manager {=ex:EngineeringManager ?member}
Level: [2] {ex:level ^^xsd:integer}
Team Size: [15] {ex:teamSize ^^xsd:integer}
Manages: [EngineeringTeam] {ex:manages}

#### Senior Manager {=ex:SeniorManager ?member}
Level: [4] {ex:level ^^xsd:integer}
Team Size: [8] {ex:teamSize ^^xsd:integer}
Manages: [QATeam] {ex:manages}

#### Junior Developer {=ex:JuniorDeveloper ?member}
Level: [1] {ex:level ^^xsd:integer}
Team Size: [0] {ex:teamSize ^^xsd:integer}

---

[Demo] {=ex:demo} must produce exactly **2** violations.
~~~~~~

---

## 📝 MDLD Syntax Patterns

Target subjects of targets all subjects that have a specific property pointing to any value.

~~~~~~md
**[Shape] targets subjects of [Property]** {=ex:ShapeName .sh:NodeShape label}

[Shape Name] {=ex:ShapeName .sh:NodeShape label} targets all subjects of [Property] {+ex:property ?sh:targetSubjectsOf} to validate requirements.
~~~~~~

**Key components:**
- **Shape declaration** - The shape being defined (`{=ex:ShapeName .sh:NodeShape label}`)
- **Target property** - The property to target subjects of (`{+ex:property ?sh:targetSubjectsOf}`)
- **Validation rules** - Property constraints within the shape
- **Subject-based selection** - Validates entities that initiate relationships

**Important notes:**
- Target subjects of validates entities that initiate relationships
- Ideal for management, approval, and source validation
- Works in reverse direction of the property
- Use for validating relationship sources
- Combine with other targeting mechanisms for complex scenarios

---

## 🎯 Use Cases

- **Management validation** - Validate managers who manage teams
- **Approval validation** - Validate approvers who approve requests
- **Source validation** - Validate entities that initiate relationships
- **Reverse relationship targeting** - Target based on outgoing relationships
- **Business rules** - Enforce rules on relationship initiators

---

## 🔧 Implementation Guidelines

**When to use target subjects of:**
- **Management validation** - When validating managers or supervisors
- **Approval validation** - When validating approvers or authorizers
- **Source validation** - When validating relationship sources
- **Reverse targeting** - When targeting based on outgoing relationships
- **Business rules** - When enforcing rules on relationship initiators

**Best practices:**
- Use descriptive property names for clarity
- Combine with target objects of for bidirectional validation
- Test with entities that do and don't have the property
- Document the relationship direction clearly
- Consider performance for large relationship graphs

**Common pitfalls:**
- ❌ Confusing target subjects of with target objects of
- ❌ Forgetting that it targets relationship sources, not destinations
- ❌ Not testing with entities that don't have the property
- ❌ Not considering the direction of the relationship
- ❌ Overusing when target class would be more appropriate






{=}



<a id="targeting-targetobjectsof"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/targeting/>


# Target Objects Of {=sh:targetObjectsOf .class:TargetingMechanism label}

> Targets all objects (values) that are pointed to by a specific property. Ideal for validating referenced entities, relationship targets, and entities that are the destination of relationships. {comment}

<http://www.w3.org/ns/shacl#targetObjectsOf> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:targeting/>

### Shape Definition

**Team Member Validation Shape** {=ex:TeamMemberValidationShape .sh:NodeShape label} targets all [team members] {+ex:memberOf ?sh:targetObjectsOf} to validate team membership requirements.

**Workload Rule** {=ex:#workloadRule .sh:PropertyShape ?sh:property} requires the [workload] {+ex:workload ?sh:path} property to be at most [40] {sh:maxInclusive ^^xsd:integer}: **Team members must not exceed 40 hours workload** {sh:message}

**Active Status Rule** {=ex:#activeStatus .sh:PropertyShape ?sh:property} requires the [status] {+ex:status ?sh:path} property to be exactly [active] {sh:hasValue}: **Team members must be active** {sh:message}

---

### Test Data {=ex:data .Container}

#### Senior Developer {=ex:SeniorDeveloper ?member}
Workload: [45] {ex:workload ^^xsd:integer}
Status: [inactive] {ex:status}
Member Of: [EngineeringTeam] {ex:memberOf}

#### Junior Developer {=ex:JuniorDeveloper ?member}
Workload: [35] {ex:workload ^^xsd:integer}
Status: [active] {ex:status}
Member Of: [EngineeringTeam] {ex:memberOf}

#### Manager {=ex:Manager ?member}
Workload: [50] {ex:workload ^^xsd:integer}
Status: [active] {ex:status}

---

[Demo] {=ex:demo} must produce exactly **2** violations.
~~~~~~

---

## 📝 MDLD Syntax Patterns

Target objects of targets all objects that are pointed to by a specific property.

~~~~~~md
**[Shape] targets objects of [Property]** {=ex:ShapeName .sh:NodeShape label}

[Shape Name] {=ex:ShapeName .sh:NodeShape label} targets all objects of [Property] {+ex:property ?sh:targetObjectsOf} to validate requirements.
~~~~~~

**Key components:**
- **Shape declaration** - The shape being defined (`{=ex:ShapeName .sh:NodeShape label}`)
- **Target property** - The property to target objects of (`{+ex:property ?sh:targetObjectsOf}`)
- **Validation rules** - Property constraints within the shape
- **Object-based selection** - Validates entities that are referenced by others

**Important notes:**
- Target objects of validates entities that are referenced by others
- Ideal for team membership, product references, and destination validation
- Works in forward direction of the property
- Use for validating relationship destinations
- Combine with other targeting mechanisms for complex scenarios

---

## 🎯 Use Cases

- **Team membership validation** - Validate team members referenced by teams
- **Product reference validation** - Validate products referenced by orders
- **Destination validation** - Validate entities that are relationship targets
- **Referenced entity validation** - Validate entities referenced by others
- **Business rules** - Enforce rules on relationship destinations

---

## 🔧 Implementation Guidelines

**When to use target objects of:**
- **Team membership** - When validating team members
- **Product references** - When validating referenced products
- **Destination validation** - When validating relationship targets
- **Referenced entities** - When validating entities referenced by others
- **Business rules** - When enforcing rules on relationship destinations

**Best practices:**
- Use descriptive property names for clarity
- Combine with target subjects of for bidirectional validation
- Test with entities that do and don't have the property
- Document the relationship direction clearly
- Consider performance for large relationship graphs

**Common pitfalls:**
- ❌ Confusing target objects of with target subjects of
- ❌ Forgetting that it targets relationship destinations, not sources
- ❌ Not testing with entities that don't have the property
- ❌ Not considering the direction of the relationship
- ❌ Overusing when target class would be more appropriate






{=}



<a id="syntax-reference"></a>

## 📝 MDLD Syntax Reference

**Authors should refer to MDLD Spec and few-shot examples for complete syntax documentation. Key patterns:**

| Symbol | Meaning | Example |
|--------|---------|---------|
| `{=}` | Subject declaration (persists) | `{=ex:shape .sh:NodeShape}` |
| `{+}` | Object introduction (temporary for ?/! predicates) | `{+ex:target ?sh:targetClass}` |
| `?` | Object predicate (Subject → Object) | `?sh:targetClass`, `?sh:targetNode` |
| `!` | Reverse predicate (Object → Subject) | `!member` |
| `.` | Class type declaration | `.sh:NodeShape` |
| `^^` | Literal datatype | `^^xsd:integer` |
| `{}` | Subject reset (clears current subject) | `{=}` |

**Test data pattern:**
~~~~~~md
[Label] {+ex:instanceID ?ex:propertyName .ex:ClassName}
~~~~~~

**For detailed syntax, see:**
- MDLD Spec: `/Users/davay/Documents/DeFUCC/MDLD/mdld-parse/spec/Spec.md`
- Few-shot examples: `/Users/davay/Documents/DeFUCC/MDLD/mdld-parse/examples/few-shot.md`






{=}



<a id="constraints-index"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>

### 📋 Constraint {=class:Constraint ?member .Class label}

> A SHACL constraint is a rule that defines a validation condition for a specific shape and target node. {comment}

We can broadly divide them into these type groups: 
- Metadata Predicate {+class:MetadataPredicate !subClassOf label}
- Targeting Predicate {+class:TargetingPredicate !subClassOf label}
- Value Type Constraint {+class:ValueTypeConstraint !subClassOf label}
- Cardinality Constraint {+class:CardinalityConstraint !subClassOf label}
- String-based Constraint {+class:StringConstraint !subClassOf label}
- Property Pair Constraint {+class:PropertyPairConstraint !subClassOf label}
- Logical Constraint {+class:LogicalConstraint !subClassOf label}
- Shape-based Constraint {+class:ShapeConstraint !subClassOf label}
- Property Path {+class:PropertyPath !subClassOf label}
- JavaScript Constraint {+class:JSConstraint !subClassOf label}
- SPARQL Constraint {+class:SPARQLConstraint !subClassOf label}

---

[Syntax Reference](#syntax-reference)

---

# Catalog {=cat:index}

This catalog includes these constraints: 

## Value Type Constraints

- [Class](#constraints-class) {+sh:class ?cat:includes .class:ValueTypeConstraint}
- [Data Type](#constraints-datatype) {+sh:datatype ?cat:includes .class:ValueTypeConstraint}
- [Node Kind](#constraints-nodekind) {+sh:nodeKind ?cat:includes .class:ValueTypeConstraint}

## Cardinality Constraints

- [Min Count](#constraints-count) {+sh:minCount ?cat:includes .class:CardinalityConstraint}
- [Max Count](#constraints-count) {+sh:maxCount ?cat:includes .class:CardinalityConstraint}

## Value Range Constraints

- [Min Inclusive](#constraints-range) {+sh:minInclusive ?cat:includes .class:ValueRangeConstraint}
- [Max Inclusive](#constraints-range) {+sh:maxInclusive ?cat:includes .class:ValueRangeConstraint}
- [Min Exclusive](#constraints-range) {+sh:minExclusive ?cat:includes .class:ValueRangeConstraint}
- [Max Exclusive](#constraints-range) {+sh:maxExclusive ?cat:includes .class:ValueRangeConstraint}

## Property Pair Constraints

- [Equals](#constraints-comparison) {+sh:equals ?cat:includes .class:PropertyPairConstraint}
- [Disjoint](#constraints-disjoint) {+sh:disjoint ?cat:includes .class:PropertyPairConstraint}
- [Less Than](#constraints-comparison) {+sh:lessThan ?cat:includes .class:PropertyPairConstraint}
- [Less Than or Equals](#constraints-comparison) {+sh:lessThanOrEquals ?cat:includes .class:PropertyPairConstraint}

## Logical Constraints

- [NOT](#constraints-not) {+sh:not ?cat:includes .class:LogicalConstraint}
- [AND](#constraints-and) {+sh:and ?cat:includes .class:LogicalConstraint}

## String Constraints

- [Minimum Length](#constraints-length) {+sh:minLength ?cat:includes .class:StringConstraint}
- [Maximum Length](#constraints-length) {+sh:maxLength ?cat:includes .class:StringConstraint}
- [Pattern](#constraints-pattern) {+sh:pattern ?cat:includes .class:StringConstraint}
- [Pattern Flags](#constraints-pattern) {+sh:flags ?cat:includes .class:StringConstraint}
- [Language In](#constraints-language) {+sh:languageIn ?cat:includes .class:StringConstraint}
- [Unique Languages](#constraints-uniquelang) {+sh:uniqueLang ?cat:includes .class:StringConstraint}

## Other Constraints

- [Has Value](#constraints-hasvalue) {+sh:hasValue ?cat:includes}
- [Entity type](#constraints-node) {+sh:node ?cat:includes .class:ShapeConstraint}
- [Value enumeration](#constraints-in) {+sh:in ?cat:includes}
- [Qualified Min Count](#constraints-qualifiedcount) {+sh:qualifiedMinCount ?cat:includes}
- [Qualified Max Count](#constraints-qualifiedcount) {+sh:qualifiedMaxCount ?cat:includes}
- [Closed world](#constraints-closed) {+sh:closed ?cat:includes .class:MetadataPredicate}
- [Deactivation flag](#constraints-deactivated) {+sh:deactivated ?cat:includes .class:MetadataPredicate}
- [Severity levels](#constraints-severity) {+sh:severity ?cat:includes .class:MetadataPredicate}
- [Violation message](#constraints-message) {+sh:message ?cat:includes .class:MetadataPredicate}

Some parts are still completely uncovered and don't work even on ttl or pure quads - something might be wrong in the validator or in examples we use in tests, need deeper investigation:

- Ignored Properties {+sh:ignoredProperties ?cat:includes .class:MetadataPredicate .cat:notCovered}

## JavaScript Constraints

- [JavaScript Function](#constraints-js) {+sh:js ?cat:includes .class:JSConstraint}
- JS Function Name {+sh:jsFunctionName ?cat:includes .class:JSConstraint .cat:notCovered}
- JS Library {+sh:jsLibrary ?cat:includes .class:JSConstraint .cat:notCovered}
- JS Library URL {+sh:jsLibraryURL ?cat:includes .class:JSConstraint .cat:notCovered}

## SPARQL Constraints

- SPARQL ASK Query {+sh:ask ?cat:includes .class:SPARQLConstraint .cat:notCovered}
- SPARQL SELECT Query {+sh:select ?cat:includes .class:SPARQLConstraint .cat:notCovered}
- SPARQL CONSTRUCT Query {+sh:construct ?cat:includes .class:SPARQLConstraint .cat:notCovered}
- SPARQL UPDATE Query {+sh:update ?cat:includes .class:SPARQLConstraint .cat:notCovered}

## Logical Constraints (Broken)

These seem to be broken in the validator:

- OR {+sh:or ?cat:includes .class:LogicalConstraint .cat:notCovered}
- XONE {+sh:xone ?cat:includes .class:LogicalConstraint .cat:notCovered}

## Property Path Constraints

Need to check if these are working:

- Qualified Value Shape {+sh:qualifiedValueShape ?cat:includes .class:ShapeConstraint .cat:notCovered}
- Qualified Value Shapes Disjoint {+sh:qualifiedValueShapesDisjoint ?cat:includes .class:ShapeConstraint .cat:notCovered}
- Inverse Path {+sh:inversePath ?cat:includes .class:PropertyPath .cat:notCovered}
- Alternative Path {+sh:alternativePath ?cat:includes .class:PropertyPath .cat:notCovered}
- Zero or More Path {+sh:zeroOrMorePath ?cat:includes .class:PropertyPath .cat:notCovered}
- One or More Path {+sh:oneOrMorePath ?cat:includes .class:PropertyPath .cat:notCovered}
- Zero or One Path {+sh:zeroOrOnePath ?cat:includes .class:PropertyPath .cat:notCovered}

---

## Some constraints are environment dependent, are not tested to be working and are [Not covered] {=cat:notCovered .Class label} by this calalog.






{=}



<a id="constraints-class"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# Class {=sh:class .class:Constraint label}

> Expects each value to be an instance of a specific class (RDF type) {comment}

<http://www.w3.org/ns/shacl#class> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <cat:example/class/>

### Shape Definition

**Employee manager must be a Person instance** {=ex:#managerClass .sh:PropertyShape message}
[manager] {+ex:manager ?sh:path} must be an instance of [Person] {+ex:Person ?sh:class}

---


### Test Data {=ex:data .Container}

#### Valid Employee {=ex:ValidEmployee ?member}
Manager: [john-manager] {+ex:john ?ex:manager .ex:Person}

#### Invalid Employee {=ex:InvalidEmployee ?member}
Manager: [robot-ai] {+ex:ai ?ex:manager ex:Role}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The class constraint ensures that property values are instances of specific RDF classes.

~~~~~~md
# Class Constraint Pattern
**[Property] must be [Class Type] instance** {=ex:PropertyClassConstraint .sh:PropertyShape ?sh:message}

[Property Name] {+ex:propertyName ?sh:path} must be an instance of [Class Type] {+ex:ClassType ?sh:class}
~~~~~~

**Key components:**
- **Property definition** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **Class reference** - The required class type (`{+ex:ClassType ?sh:class}`)
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Type checking** - Ensures values have correct RDF type

**Important notes:**
- The class must be defined in the ontology or imported from another source
- Class constraint works with IRI values, not literals
- Multiple class constraints can be applied to the same property
- Empty values automatically pass class constraints (use minCount for required properties)

---

## 🎯 Use Cases

- **Employee management** - Ensure manager is a Person instance
- **Department validation** - Ensure department is a Department instance
- **Product categorization** - Ensure category is a valid Category instance

---

## 🔧 Implementation Guidelines

**When to use class:**
- **Type safety** - Ensure property values have correct RDF types
- **Referential integrity** - Validate relationships to proper entity types
- **Data quality** - Prevent incorrect type assignments
- **Schema validation** - Enforce proper RDF graph structure

**Best practices:**
- Define classes clearly in your ontology before using them
- Use descriptive class names that reflect their purpose
- Combine with minCount for required properties
- Consider using nodeKind constraint for IRI vs literal validation

**Common pitfalls:**
- ❌ Using class constraint on literal values (use nodeKind instead)
- ❌ Forgetting to define the class in the ontology
- ❌ Not combining with minCount for required properties
- ❌ Creating circular class dependencies
- ❌ Using `=` instead of `+` for property assignments
- ❌ Forgetting the `.` prefix on class names
- ❌ Using literals instead of IRIs for class instances






{=}



<a id="constraints-datatype"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>

# Data Type {=sh:datatype .class:Constraint label}

> Expects a literal value to have certain datatype {comment}

<http://www.w3.org/ns/shacl#datatype> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:datatype/>

### Shape Definition

**Product price must be a decimal number** {=ex:#priceDecimal .sh:PropertyShape sh:message}
[price] {+ex:price ?sh:path} must be a [decimal] {+xsd:decimal ?sh:datatype} value.

**Product quantity must be an integer** {=ex:#quantityInteger .sh:PropertyShape sh:message}
[quantity] {+ex:quantity ?sh:path} must be an [integer] {+xsd:integer ?sh:datatype} value.

---

### Test Data {=ex:data .Container}

#### Valid Product {=ex:ValidProduct ?member}
Price: [29.99] {ex:price ^^xsd:decimal}
Quantity: [5] {ex:quantity ^^xsd:integer}

#### Invalid Product {=ex:InvalidProduct ?member}
Price: [29.99] {ex:price ^^xsd:string}
Quantity: [five] {ex:quantity ^^xsd:string}

---

[Demo] {=ex:demo} must produce exactly **2** violations.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The datatype constraint validates that literal values have the correct RDF datatype.

~~~~~~md
**[Property] must be [Datatype]** {=ex:PropertyDatatypeConstraint .sh:PropertyShape sh:message}

[Property Name] {+ex:propertyName ?sh:path} must be a [Datatype] {+xsd:datatype ?sh:datatype} value.
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **Datatype reference** - The required datatype (`{+xsd:datatype ?sh:datatype}`)
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Type checking** - Ensures literal values have correct datatype

**Important notes:**
- Datatype constraint only works with literal values, not IRIs
- Common datatypes: `xsd:string`, `xsd:integer`, `xsd:decimal`, `xsd:boolean`, `xsd:date`
- Use `nodeKind` constraint for IRI vs literal validation
- Empty values automatically pass datatype constraints (use minCount for required properties)

---

## 🎯 Use Cases

- **Price validation** - Ensure price is decimal for calculations
- **Quantity validation** - Ensure quantity is integer
- **Date validation** - Ensure dates are proper date datatype
- **Boolean validation** - Ensure boolean properties have correct type

---

## 🔧 Implementation Guidelines

**When to use datatype:**
- **Type safety** - Ensure literal values have correct datatypes
- **Data quality** - Prevent incorrect datatype assignments
- **Calculations** - Ensure numeric values can be used in computations
- **Interoperability** - Ensure data conforms to expected types

**Best practices:**
- Use appropriate datatypes for the data (decimal for money, integer for counts)
- Combine with minCount/maxCount for required properties
- Use nodeKind constraint for IRI vs literal validation
- Test with both valid and invalid datatype examples

**Common pitfalls:**
- ❌ Using datatype constraint on IRI values (use nodeKind instead)
- ❌ Forgetting to specify the datatype prefix
- ❌ Not combining with minCount for required properties
- ❌ Using wrong datatype for the data (e.g., integer for decimal values)
- ❌ Confusing datatype with class constraint (datatype for literals, class for IRIs)






{=}



<a id="constraints-nodekind"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>

# Node Kind {=sh:nodeKind .class:Constraint label}

> Expects a node to be of a specific kind (blank node, IRI, or literal) {comment}

<http://www.w3.org/ns/shacl#nodeKind> {?cat:fullIRI}

---

## � Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:nodekind/>

### Shape Definition

**Document content must be a literal** {=ex:#contentLiteral .sh:PropertyShape sh:message}
[content] {+ex:content ?sh:path} must be a [Literal] {+sh:Literal ?sh:nodeKind}.

**Document reference must be an IRI** {=ex:#referenceIRI .sh:PropertyShape sh:message}
[reference] {+ex:reference ?sh:path} must be an [IRI] {+sh:IRI ?sh:nodeKind}.

---

### Test Data {=ex:data .Container}

#### Valid Document {=ex:ValidDocument .ex:Document ?member}
Content: [This is the document content] {ex:content}
Reference: <https://example.org/reference> {?ex:reference}

#### Invalid Document {=ex:InvalidDocument .ex:Document ?member}
Content: <https://example.org/invalid-content> {?ex:content}
Reference: [Invalid Reference String] {ex:reference}

---

[Demo] {=ex:demo} must produce exactly **2** violations.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The node kind constraint validates that values are IRIs or literals (MDLD doesn't produce blank nodes).

~~~~~~md
**[Property] must be [NodeKind]** {=ex:PropertyNodeKindConstraint .sh:PropertyShape sh:message}

[Property Name] {+ex:propertyName ?sh:path} must be a [NodeKind] {+sh:NodeKind ?sh:nodeKind}.
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **Node kind reference** - The required node kind (`{+sh:IRI ?sh:nodeKind}` or `{+sh:Literal ?sh:nodeKind}`)
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Type checking** - Ensures values are IRI or literal

**Important notes:**
- MDLD doesn't produce blank nodes, focus on IRI and Literal
- IRI values use `<URL> {?property}` syntax
- Literal values use `[text] {property}` syntax
- Use `datatype` constraint for literal type validation
- Use `class` constraint for IRI type validation

---

## 🎯 Use Cases

- **Document management** - Content must be literal, references must be IRI
- **API endpoints** - URLs must be IRI, response bodies must be literal
- **User profiles** - User IDs must be IRI, names must be literal
- **Type safety** - Ensure references are IRIs, content is literal

---

## 🔧 Implementation Guidelines

**When to use nodeKind:**
- **Type safety** - Ensure references are IRIs, content is literal
- **Data integrity** - Validate node types match expected patterns
- **Schema validation** - Enforce proper RDF node kind constraints
- **MDLD-specific** - Since MDLD doesn't produce blank nodes, focus on IRI/Literal

**Best practices:**
- Use correct syntax: IRIs with `<URL> {?property}`, literals with `[text] {property}`
- Combine with `datatype` constraint for literal type validation
- Combine with `class` constraint for IRI type validation
- Test both valid and invalid node kind examples

**Common pitfalls:**
- ❌ Using wrong syntax for IRI vs literal values
- ❌ Confusing nodeKind with datatype (nodeKind for IRI/Literal, datatype for literal types)
- ❌ Forgetting MDLD doesn't produce blank nodes
- ❌ Not combining with other constraints for complete validation
- ❌ Using nodeKind when datatype or class constraint would be more specific






{=}



<a id="constraints-count"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>

# Min Count {=sh:minCount .class:Constraint label}

> Specifies the minimum number of values a property must have {comment}

<http://www.w3.org/ns/shacl#minCount> {?cat:fullIRI}

# Max Count {=sh:maxCount .class:Constraint label}

> Specifies the maximum number of values a property can have {comment}

<http://www.w3.org/ns/shacl#maxCount> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:count/>

### Shape Definition

**Person must have exactly one email address** {=ex:#emailExact .sh:PropertyShape sh:message}
[email] {+ex:email ?sh:path} must have exactly [1] {sh:minCount sh:maxCount ^^xsd:integer} value.

**Person can have at most two phone numbers** {=ex:#phoneOptional .sh:PropertyShape sh:message}
[phone] {+ex:phone ?sh:path} can have at most [2] {sh:maxCount ^^xsd:integer} values.

---

### Test Data {=ex:data .Container}

#### Valid Person {=ex:ValidPerson ?member}
Email: [work@example.com] {ex:email}
Phone: [555-1234] {ex:phone}
Phone: [555-5678] {ex:phone}

#### Invalid Person - Too Few {=ex:InvalidPersonFew ?member}
Phone: [555-1234] {ex:phone}

#### Invalid Person - Too Many {=ex:InvalidPersonMany ?member}
Email: [work@example.com] {ex:email}
Email: [personal@example.com] {ex:email}
Phone: [555-1234] {ex:phone}
Phone: [555-5678] {ex:phone}
Phone: [555-9012] {ex:phone}

---

[Demo] {=ex:demo} must produce exactly **2** violations.
~~~~~~

---

## 📝 MDLD Syntax Patterns

Count constraints control the number of values a property can have.

~~~~~~md
**[Property] must have [Count] values** {=ex:PropertyCountConstraint .sh:PropertyShape sh:message}

[Property Name] {+ex:propertyName ?sh:path} must have at least [min] {sh:minCount ^^xsd:integer} and at most [max] {sh:maxCount ^^xsd:integer} values.
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **Minimum count** - Minimum number of values (`{sh:minCount ^^xsd:integer}`)
- **Maximum count** - Maximum number of values (`{sh:maxCount ^^xsd:integer}`)
- **Exact count** - Both minCount and maxCount with same value
- **Validation message** - Human-readable error message (`{sh:message}`)

**Important notes:**
- Use `minCount` alone for "at least X values"
- Use `maxCount` alone for "at most X values"
- Use both with same value for "exactly X values"
- Combine with other constraints for complete validation
- Empty properties fail minCount validation

---

## 🎯 Use Cases

- **Required properties** - Ensure property has at least 1 value (minCount: 1)
- **Single-valued properties** - Ensure property has exactly 1 value (minCount: 1, maxCount: 1)
- **Multi-valued limits** - Limit number of values for optional properties (maxCount: N)
- **Exact cardinality** - Enforce specific number of values

---

## � Implementation Guidelines

**When to use count constraints:**
- **Required properties** - Ensure data completeness
- **Data modeling** - Enforce cardinality constraints
- **Validation rules** - Ensure proper number of values
- **Data quality** - Prevent missing or excessive values

**Best practices:**
- Use minCount: 1 for required properties
- Use both minCount and maxCount: 1 for single-valued properties
- Combine with datatype/class constraints for complete validation
- Provide clear validation messages specifying exact requirements

**Common pitfalls:**
- ❌ Forgetting to specify the datatype ^^xsd:integer
- ❌ Using negative values for counts
- ❌ Confusing minCount with maxCount
- ❌ Not combining with other constraints for complete validation
- ❌ Using count constraints when other constraints would be more appropriate






{=}



<a id="constraints-range"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/range/>


# Minimum Inclusive {=sh:minInclusive .class:Constraint label}

> Specifies the minimum inclusive value for range constraints - the value must be greater than or equal to this bound. Works with numbers, dates, times, and other ordered datatypes. {comment}

<http://www.w3.org/ns/shacl#minInclusive> {?cat:fullIRI}

# Maximum Inclusive {=sh:maxInclusive .class:Constraint label}

> Specifies the maximum inclusive value for range constraints - the value must be less than or equal to this bound. Works with numbers, dates, times, and other ordered datatypes. {comment}

<http://www.w3.org/ns/shacl#maxInclusive> {?cat:fullIRI}

# Minimum Exclusive {=sh:minExclusive .class:Constraint label}

> Specifies the minimum exclusive value for range constraints - the value must be greater than this bound. Works with numbers, dates, times, and other ordered datatypes. {comment}

<http://www.w3.org/ns/shacl#minExclusive> {?cat:fullIRI}

# Maximum Exclusive {=sh:maxExclusive .class:Constraint label}

> Specifies the maximum exclusive value for range constraints - the value must be less than this bound. Works with numbers, dates, times, and other ordered datatypes. {comment}

<http://www.w3.org/ns/shacl#maxExclusive> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:range/>

### Shape Definition

**Event ticket prices must be between $10.00 and $1000.00 inclusive** {=ex:#priceRange .sh:PropertyShape sh:message}
[ticketPrice] {+ex:price ?sh:path} must be at least [10.00] {sh:minInclusive ^^xsd:decimal} and at most [1000.00] {sh:maxInclusive ^^xsd:decimal}.

**Event attendees must be strictly between 18 and 65 years old** {=ex:#ageRange .sh:PropertyShape sh:message}
[attendeeAge] {+ex:age ?sh:path} must be greater than [18] {sh:minExclusive ^^xsd:integer} and less than [65] {sh:maxExclusive ^^xsd:integer}.

---

### Test Data {=ex:data .Container}

#### Valid Event {=ex:ValidEvent ?member}
Ticket Price: [99.99] {ex:price ^^xsd:decimal}
Attendee Age: [25] {ex:age ^^xsd:integer}

#### Invalid Event - Low Price {=ex:InvalidEventLowPrice ?member}
Ticket Price: [5.99] {ex:price ^^xsd:decimal}
Attendee Age: [25] {ex:age ^^xsd:integer}

#### Invalid Event - Underage {=ex:InvalidEventYoungAge ?member}
Ticket Price: [99.99] {ex:price ^^xsd:decimal}
Attendee Age: [18] {ex:age ^^xsd:integer}

---

[Demo] {=ex:demo} must produce exactly **2** violations.
~~~~~~

---

## 📝 MDLD Syntax Patterns

Range constraints control the value range for ordered datatypes.

~~~~~~md
**[Property] must be in [Min]-[Max] range** {=ex:PropertyRangeConstraint .sh:PropertyShape sh:message}

[Property Name] {+ex:propertyName ?sh:path} must be at least [min] {sh:minInclusive ^^xsd:datatype} and at most [max] {sh:maxInclusive ^^xsd:datatype}.
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **Minimum inclusive** - Minimum value inclusive (`{sh:minInclusive ^^xsd:datatype}`)
- **Maximum inclusive** - Maximum value inclusive (`{sh:maxInclusive ^^xsd:datatype}`)
- **Minimum exclusive** - Minimum value exclusive (`{sh:minExclusive ^^xsd:datatype}`)
- **Maximum exclusive** - Maximum value exclusive (`{sh:maxExclusive ^^xsd:datatype}`)
- **Validation message** - Human-readable error message (`{sh:message}`)

**Important notes:**
- Works with ordered datatypes (numbers, dates, times, strings)
- Inclusive bounds include boundary values
- Exclusive bounds exclude boundary values
- Use minInclusive for "at least X"
- Use maxInclusive for "at most X"
- Use minExclusive for "greater than X"
- Use maxExclusive for "less than X"

---

## 🎯 Use Cases

- **Price validation** - Ensure prices are within acceptable range
- **Age restrictions** - Enforce age limits (inclusive vs exclusive)
- **Date validation** - Ensure dates are within valid period
- **Quantity limits** - Validate numeric ranges
- **Score validation** - Ensure scores are within bounds

---

## 🔧 Implementation Guidelines

**When to use range:**
- **Numeric validation** - When values must be within numeric bounds
- **Date validation** - When dates must be within time period
- **Age restrictions** - Enforce age limits with inclusive/exclusive
- **Business rules** - Implement range-based business logic
- **Data quality** - Ensure values are within expected ranges

**Best practices:**
- Use inclusive bounds for "at least/at most"
- Use exclusive bounds for "greater than/less than"
- Combine min and max for complete range validation
- Test with boundary values
- Document why range limits are needed

**Common pitfalls:**
- ❌ Using wrong inclusive/exclusive bound for the use case
- ❌ Forgetting to specify the datatype
- ❌ Not testing boundary values
- ❌ Confusing inclusive with exclusive bounds
- ❌ Using range when comparison constraint would be more appropriate






{=}



<a id="constraints-comparison"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/comparison/>

# Comparison Constraints {=sh:lessThan .class:ComparisonConstraint label}

> Validates property values against reference nodes using comparison operators. Essential for ordering, version control, date validation, and business rule enforcement where values must be smaller than or equal to specific reference points. {comment}

<http://www.w3.org/ns/shacl#lessThan> {?cat:fullIRI}
<http://www.w3.org/ns/shacl#lessThanOrEquals> {?cat:fullIRI}
<http://www.w3.org/ns/shacl#equals> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:comparison/>

### Shape Definition

**Event must follow business planning rules** {=ex:EventPlanningShape .sh:NodeShape label}

**Order Date Rule** {=ex:#orderDateRule .sh:PropertyShape ?sh:property}
[order date] {+ex:orderDate ?sh:path} must be before [shipping date] {+ex:shippingDate ?sh:lessThan}: **Order must be placed before shipping** {sh:message}.

**Version Rule** {=ex:#versionRule .sh:PropertyShape ?sh:property}
[current version] {+ex:currentVersion ?sh:path} must be ≤ [latest version] {+ex:latestVersion ?sh:lessThanOrEquals}: **Current version must be ≤ latest version** {sh:message}.

---

### Test Data {=ex:data .Container}

#### Valid Event {=ex:ValidEvent .ex:Event ?member}
Order Date: [2024-06-15] {ex:orderDate ^^xsd:date}
Shipping Date: [2024-06-20] {ex:shippingDate ^^xsd:date}
Current Version: [2.1] {ex:currentVersion ^^xsd:string}
Latest Version: [3.0] {ex:latestVersion ^^xsd:string}

#### Invalid Event - Late Order {=ex:LateOrderEvent .ex:Event ?member}
Order Date: [2024-06-25] {ex:orderDate ^^xsd:date}
Shipping Date: [2024-06-20] {ex:shippingDate ^^xsd:date}
Current Version: [2.1] {ex:currentVersion ^^xsd:string}
Latest Version: [3.0] {ex:latestVersion ^^xsd:string}

---

[Demo] {=ex:demo} must produce exactly **1** violation.
~~~~~~

---

## 📝 MDLD Syntax Patterns

Comparison constraints validate property values against reference nodes using comparison operators.

~~~~~~md
**[Property] must be [Operator] [Reference]** {=ex:PropertyComparisonConstraint .sh:PropertyShape ?sh:property sh:message}

[Property Name] {+ex:propertyName ?sh:path} must be [operator] {sh:lessThan} [Reference Property] {+ex:referenceProperty ?sh:lessThan}.
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **Comparison operator** - The comparison constraint (`{sh:lessThan}`, `{sh:lessThanOrEquals}`, `{sh:equals}`)
- **Reference property** - The property to compare against (`{+ex:referenceProperty ?sh:lessThan}`)
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Comparison logic** - Validates ordering and equality relationships

**Important notes:**
- Works with comparable values (dates, numbers, strings)
- Compares values within the same node
- Use `lessThan` for strict ordering
- Use `lessThanOrEquals` for inclusive ordering
- Use `equals` for exact value matching
- Both properties must be present for comparison

---

## 🎯 Use Cases

- **Date validation** - Ensure start date is before end date
- **Version control** - Ensure current version ≤ latest version
- **Pricing validation** - Ensure price matches standard price
- **Business rules** - Enforce ordering constraints
- **Range validation** - Ensure values are within expected ranges

---

## 🔧 Implementation Guidelines

**When to use comparison:**
- **Temporal validation** - When dates must follow chronological order
- **Version control** - Ensure version numbers are valid
- **Pricing rules** - Enforce pricing policies
- **Business logic** - Implement ordering constraints
- **Range validation** - Ensure values are within bounds

**Best practices:**
- Use appropriate comparison operator for the use case
- Ensure both properties have compatible datatypes
- Test with boundary values
- Combine with other constraints for complete validation
- Document the business rule being enforced

**Common pitfalls:**
- ❌ Comparing incompatible datatypes (e.g., string vs number)
- ❌ Forgetting that both properties must be present
- ❌ Using wrong comparison operator for the use case
- ❌ Not testing boundary values
- ❌ Confusing comparison with other constraints






{=}



<a id="constraints-disjoint"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>


# Disjoint Constraint {=sh:disjoint .class:DisjointConstraint label}

> Ensures that values of a property are disjoint with values of another property. Essential for preventing value overlap between related properties like labels, categories, or mutually exclusive attributes. {comment}

<http://www.w3.org/ns/shacl#disjoint> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:disjoint/>

### Shape Definition

**Preferred labels must be different from alternative labels** {=ex:DisjointExampleShape .sh:NodeShape label sh:message}
[preferred labels] {+ex:prefLabel ?sh:path} must be [disjoint] {+ex:altLabel ?sh:disjoint} with [alternative labels].

---

### Test Data {=ex:data .Container}

#### Valid Case - USA {=ex:USA ?member}
Preferred Label: [USA] {ex:prefLabel}
Alternative Label: [United States] {ex:altLabel}

#### Invalid Case - Germany {=ex:Germany ?member}
Preferred Label: [Germany] {ex:prefLabel}
Alternative Label: [Germany] {ex:altLabel}

---

[Demo] {=ex:demo} must produce exactly **1** violation.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The disjoint constraint ensures that values of a property are disjoint with values of another property.

~~~~~~md
**[Property] must be disjoint with [Other Property]** {=ex:PropertyDisjointConstraint .sh:PropertyShape sh:message}

[Property Name] {+ex:propertyName ?sh:path} must be [disjoint] {+ex:otherProperty ?sh:disjoint} with [Other Property Name].
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **Disjoint reference** - The property to be disjoint with (`{+ex:otherProperty ?sh:disjoint}`)
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Value separation** - Ensures no value overlap between properties

**Important notes:**
- Prevents any value from appearing in both properties
- Works with both literal values and IRIs
- Both properties must be present for validation
- Useful for mutually exclusive attributes
- Ensures data integrity and prevents redundancy

---

## 🎯 Use Cases

- **Label validation** - Ensure preferred and alternative labels are different
- **Category separation** - Prevent category overlap
- **Mutually exclusive attributes** - Ensure properties don't share values
- **Data integrity** - Prevent value duplication
- **Business rules** - Enforce separation constraints

---

## 🔧 Implementation Guidelines

**When to use disjoint:**
- **Mutually exclusive values** - When properties must not share values
- **Label management** - Ensure distinct labels
- **Category validation** - Prevent category overlap
- **Data integrity** - Prevent value duplication
- **Business rules** - Enforce separation constraints

**Best practices:**
- Use for properties that should never share values
- Combine with other constraints for complete validation
- Test with overlapping and non-overlapping values
- Document why properties must be disjoint
- Consider cardinality constraints alongside disjoint

**Common pitfalls:**
- ❌ Using disjoint when properties should be related
- ❌ Not testing with overlapping values
- ❌ Forgetting that both properties must be present
- ❌ Not combining with other constraints
- ❌ Confusing disjoint with other property pair constraints






{=}



<a id="constraints-not"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# NOT Constraint {=sh:not .class:LogicalConstraint label}

> Requires value nodes to NOT conform to a given shape. Essential for negation patterns and exclusion rules. {comment}

<http://www.w3.org/ns/shacl#not> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <mdld:shacl/example/not/>

### Shape Definition

**User cannot have deleted status** {sh:message}

**User Status Shape** {=ex:UserStatusShape .sh:NodeShape ?cat:hasShape label} targets all [users] {+ex:User ?sh:targetClass}.

User status must not conform to the forbidden shape using [Forbidden Status Shape] {+ex:ForbiddenStatusShape ?sh:not}.

**Forbidden Status Shape** {=ex:ForbiddenStatusShape .sh:NodeShape} requires the [status] {+ex:status ?sh:path} property to be exactly [deleted] {sh:hasValue}.

---

### Test Data {=ex:data .Container}

#### Valid User - Active {=ex:ValidActiveUser .ex:User}
Name: [Alice] {ex:name}
Status: [active] {ex:status}

#### Invalid User - Deleted {=ex:InvalidDeletedUser .ex:User}
Name: [Charlie] {ex:name}
Status: [deleted] {ex:status}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.
~~~~~~

---

## �� MDLD Syntax Patterns

The NOT constraint requires a shape reference that defines the forbidden pattern.

~~~~~~md
# NOT Constraint Pattern
**[Shape Name] must not conform to forbidden pattern** {=ex:ForbiddenShape .sh:NodeShape ?sh:not}

**Forbidden Pattern Shape** {=ex:ForbiddenPattern .sh:NodeShape} defines the pattern to reject:
[Property] {+ex:property ?sh:path} must be [forbidden value] {sh:hasValue}
~~~~~~

**Key components:**
- **NOT reference** - Links to the forbidden shape (`{+ex:ForbiddenShape ?sh:not}`)
- **Forbidden shape** - Defines the pattern to reject (PropertyShape or NodeShape)
- **Shape definition** - Can be a simple property constraint or complex shape
- **Validation logic** - Any node conforming to the forbidden shape fails validation

**Important notes:**
- The forbidden shape must be defined before or alongside the NOT constraint
- NOT only validates nodes that would conform to the forbidden shape
- Nodes that don't match the forbidden shape pass validation automatically
- Can be used with both PropertyShape and NodeShape contexts

---

## 🎯 Use Cases

- **Forbidden values** - Prevent users from having deleted status
- **Exclusion patterns** - Prevent products from being in certain categories
- **Business rule negation** - Ensure orders don't have invalid states

---

## 🔧 Implementation Guidelines

**When to use NOT:**
- **Forbidden values** - When certain values must be explicitly prohibited
- **Exclusion patterns** - When nodes must not conform to a specific pattern
- **Business rule negation** - When business logic requires negation
- **Data integrity** - When certain states must be prevented

**Best practices:**
- Keep forbidden shapes simple and focused
- Use descriptive names for forbidden shapes
- Test the forbidden shape independently first
- Document why the pattern is forbidden

**Common pitfalls:**
- ❌ Creating circular dependencies between shapes
- ❌ Making forbidden shapes too complex to understand
- ❌ Forgetting that non-matching nodes automatically pass
- ❌ Using NOT when a positive constraint would be clearer






{=}



<a id="constraints-and"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# AND Constraint {=sh:and .class:LogicalConstraint label}

> Requires all constraints in the list to be satisfied. Essential when multiple conditions must all pass for validation to succeed. {comment}

<http://www.w3.org/ns/shacl#and> {?cat:fullIRI}

---

## � Quick Start Pattern

~~~~~~md {cat:quick-start}
[mdld] <https://mdld.js.org/>
[ex] <mdld:shacl/example/logical/>


# AND Constraint Demo

### Shape Definition

**Product must have a price and at least 1 category defined** {sh:message}

**Constraints List** {=ex:and-l1 ?sh:and .rdf:List}: [Min Count] {+ex:priceRequired ?rdf:first}, 
then [followed] {=ex:and-l2 ?rdf:rest} by the second constraint [Class] {+ex:categoryRequired ?rdf:first} 
and a [nil] {+rdf:nil ?rdf:rest} node (end of list). Reset current subject: {=}

**Price Required Constraint** {=ex:priceRequired .sh:PropertyShape} ensures [price] {+ex:price ?sh:path} has at least [1] {sh:minCount ^^xsd:integer} value.

**Category Required Constraint** {=ex:categoryRequired .sh:PropertyShape} ensures [category] {+ex:category ?sh:path} has at least [1] {sh:minCount ^^xsd:integer} value.

---

### Test Data {=ex:data .Container}

#### Valid Product {=ex:ValidProduct ?member}
Name: [Laptop] {ex:name}
Price: [999] {ex:price ^^xsd:integer}
Category: [Electronics] {ex:category}

#### Missing Price Product {=ex:MissingPriceProduct ?member}
Name: [Phone] {ex:name}
Category: [Electronics] {ex:category}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.
~~~~~~

---

## �📝 MDLD Syntax Patterns

The AND constraint uses verbose RDF list syntax to specify multiple constraints that must all be satisfied.

~~~~~~md
# AND Constraint Pattern
**Constraints List** {=ex:and-l1 ?sh:and .rdf:List}: [First Constraint] {+ex:firstConstraint ?rdf:first}, 
then [followed] {=ex:and-l2 ?rdf:rest} by the second constraint [Second Constraint] {+ex:secondConstraint ?rdf:first} 
and a [nil] {+rdf:nil ?rdf:rest} node (end of list). Reset current subject to avoid accidental further assignments: {=}
~~~~~~

**Key components:**
- **List node** - Anonymous RDF list container (`{=ex:and-l1 ?sh:and .rdf:List}`)
- **First element** - First constraint in the list (`{+ex:firstConstraint ?rdf:first}`)
- **Rest elements** - Subsequent list nodes (`{=ex:and-l2 ?rdf:rest}`)
- **Termination** - List ends with `rdf:nil`
- **Subject reset** - `{=}` prevents unintended subject continuation

**Important notes:**
- Each list element must reference a previously defined constraint (PropertyShape or NodeShape)
- Use unique list identifiers (e.g., `and-l1`, `and-l2`) to avoid collisions
- Always reset subject with `{=}` after defining the list structure
- All constraints in the list must be satisfied for the node to pass validation

---

## 🎯 Use Cases

- **Multi-property validation** - Product must have price AND category
- **Cross-field validation** - User must have email AND phone number
- **Business rule combinations** - Order must be paid AND shipped

---

## 🔧 Implementation Guidelines

**When to use AND:**
- **Multiple required properties** - When several properties must all be present
- **Cross-property dependencies** - When one property's validity depends on another
- **Complex business rules** - When business logic requires multiple conditions
- **Data integrity** - When multiple aspects of data must be valid together

**Best practices:**
- Keep the list short (2-3 constraints) for maintainability
- Use descriptive constraint names for clarity
- Test each constraint individually before combining
- Consider using separate shapes if the logic becomes complex

**Common pitfalls:**
- ❌ Forgetting the subject reset `{=}` after list definition
- ❌ Reusing list identifiers causing collisions
- ❌ Creating circular dependencies between constraints
- ❌ Making the constraint list too complex to debug






{=}



<a id="constraints-length"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/length/>


# Min Length {=sh:minLength .class:Constraint label}

> Specifies the minimum length of string values - useful for password requirements, username validation, or content length limits. {comment}

<http://www.w3.org/ns/shacl#minLength> {?cat:fullIRI}

# Max Length {=sh:maxLength .class:Constraint label}

> Specifies the maximum length of string values - useful for field size limits, message length restrictions, or data entry constraints. {comment}

<http://www.w3.org/ns/shacl#maxLength> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:length/>

### Shape Definition

**Username must be 3-20 characters long** {=ex:#usernameLength .sh:PropertyShape sh:message}
[username] {+ex:username ?sh:path} must have at least [3] {sh:minLength ^^xsd:integer} and at most [20] {sh:maxLength ^^xsd:integer} characters.

**Password must be at least 8 characters long** {=ex:#passwordLength .sh:PropertyShape sh:message}
[password] {+ex:password ?sh:path} must have at least [8] {sh:minLength ^^xsd:integer} characters.

---

### Test Data {=ex:data .Container}

#### Valid User {=ex:ValidUser ?member}
Username: [john_doe] {ex:username}
Password: [securepass123] {ex:password}

#### Invalid User - Short Username {=ex:InvalidUserShort ?member}
Username: [jd] {ex:username}
Password: [securepass123] {ex:password}

#### Invalid User - Short Password {=ex:InvalidUserPassword ?member}
Username: [john_doe] {ex:username}
Password: [short] {ex:password}

---

[Demo] {=ex:demo} must produce exactly **2** violations.
~~~~~~

---

## 📝 MDLD Syntax Patterns

Length constraints control the length of string values.

~~~~~~md
**[Property] must be [Min]-[Max] characters** {=ex:PropertyLengthConstraint .sh:PropertyShape sh:message}

[Property Name] {+ex:propertyName ?sh:path} must have at least [min] {sh:minLength ^^xsd:integer} and at most [max] {sh:maxLength ^^xsd:integer} characters.
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **Minimum length** - Minimum string length (`{sh:minLength ^^xsd:integer}`)
- **Maximum length** - Maximum string length (`{sh:maxLength ^^xsd:integer}`)
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Character counting** - Counts characters in string values

**Important notes:**
- Only works with literal string values
- Length is measured in characters, not bytes
- Use minLength alone for minimum length requirements
- Use maxLength alone for maximum length requirements
- Use both together for exact length range
- Empty strings have length 0

---

## 🎯 Use Cases

- **Username validation** - Enforce reasonable username lengths
- **Password policies** - Ensure minimum password complexity
- **Content limits** - Restrict post/comment/message sizes
- **Form validation** - Enforce field size requirements
- **Database constraints** - Match column length limits
- **API validation** - Ensure request payload sizes

---

## 🔧 Implementation Guidelines

**When to use length:**
- **Input validation** - When string length must be controlled
- **Password policies** - Ensure minimum password length
- **Content limits** - Restrict message/comment sizes
- **Form validation** - Enforce field size requirements
- **Data quality** - Maintain consistent string lengths

**Best practices:**
- Use reasonable length limits based on use case
- Combine with other string constraints (pattern, datatype)
- Test with edge cases (empty strings, boundary values)
- Consider internationalization (character vs byte length)
- Document why length limits are needed

**Common pitfalls:**
- ❌ Forgetting to specify the datatype ^^xsd:integer
- ❌ Using negative values for lengths
- ❌ Not considering international character lengths
- ❌ Not testing boundary values
- ❌ Confusing length with count constraints (length for string size, count for number of values)






{=}



<a id="constraints-pattern"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>


# Pattern Constraint {=sh:pattern .class:PatternConstraint label}

> Validates string values against regular expression patterns. Essential for email validation, phone number formatting, identifier patterns, and any text-based data format requirements. {comment}

<http://www.w3.org/ns/shacl#pattern> {?cat:fullIRI}
<http://www.w3.org/ns/shacl#flags> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:pattern/>

### Shape Definition

**Email must follow standard format** {=ex:EmailPatternConstraint .sh:PropertyShape sh:message}
[email] {+ex:email ?sh:path} must match [example\.com$] {sh:pattern} with [i] {sh:flags}.

---

### Test Data {=ex:data .Container}

#### Valid Email {=ex:ValidEmail ?member}
Email: [user@example.com] {ex:email ^^xsd:string}

#### Invalid Email {=ex:InvalidEmail ?member}
Email: [user@example.org] {ex:email ^^xsd:string}

---

[Demo] {=ex:demo} must produce exactly **1** violation.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The pattern constraint validates string values against regular expression patterns.

~~~~~~md
**[Property] must match [Pattern]** {=ex:PropertyPatternConstraint .sh:PropertyShape sh:message}

[Property Name] {+ex:propertyName ?sh:path} must match [regex pattern] {sh:pattern} with [flags] {sh:flags}.
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **Regex pattern** - Regular expression pattern (`{sh:pattern}`)
- **Pattern flags** - Optional regex flags (`{sh:flags}`)
- **Validation message** - Human-readable error message (`{sh:message}`)
- **String matching** - Validates literal string values

**Important notes:**
- Only works with literal string values
- Supports standard regex syntax
- Common flags: `i` (case-insensitive), `m` (multiline), `s` (dotall)
- Combine with datatype constraint for string validation
- Empty values automatically pass pattern validation

---

## 🎯 Use Cases

- **Email validation** - Ensure email addresses follow standard format
- **Phone number formatting** - Validate phone number patterns
- **Identifier patterns** - Ensure IDs follow required format
- **URL validation** - Validate URL patterns
- **Code validation** - Validate code formats (ISBN, SKU, etc.)

---

## 🔧 Implementation Guidelines

**When to use pattern:**
- **Format validation** - When values must match specific format
- **Email validation** - Ensure email addresses are valid
- **Phone validation** - Validate phone number formats
- **Identifier validation** - Ensure IDs follow required pattern
- **Data quality** - Enforce text-based data format requirements

**Best practices:**
- Use well-tested regex patterns for common formats
- Keep patterns simple and maintainable
- Test patterns with both valid and invalid examples
- Document what the pattern validates
- Combine with datatype constraint for string validation

**Common pitfalls:**
- ❌ Using overly complex regex patterns
- ❌ Forgetting that pattern only works with literal strings
- ❌ Not testing edge cases in regex patterns
- ❌ Not combining with datatype constraint
- ❌ Using pattern when other constraints would be more appropriate






{=}



<a id="constraints-language"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/language/>


# Language In {=sh:languageIn .class:StringConstraint label}

> Constrains string literals to have language tags from a specified list using RDF lists. Essential for multilingual content validation and internationalization support. {comment}

<http://www.w3.org/ns/shacl#languageIn> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:language/>

### Shape Definition

**Title language must be in allowed list** {=ex:#titleLanguage .sh:PropertyShape ?sh:property sh:message}
[title] {+ex:title ?sh:path} language tags must be in the allowed list.

**Allowed Languages List** {=ex:lang-l1 ?sh:languageIn .rdf:List}: [en] {rdf:first}, 
then [followed] {=ex:lang-l2 ?rdf:rest} by [fr] {rdf:first} 
and [nil] {+rdf:nil ?rdf:rest}. Reset subject: {=}

---

### Test Data {=ex:data .Container}

#### English Document {=ex:EnglishDocument .ex:Document ?member}
Title: [Hello World] {ex:title @en}

#### French Document {=ex:FrenchDocument .ex:Document ?member}
Title: [Bonjour le monde] {ex:title @fr}

#### German Document {=ex:GermanDocument .ex:Document ?member}
Title: [Hallo Welt] {ex:title @de}

---

[Demo] {=ex:demo} must produce exactly **1** violation.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The languageIn constraint constrains string literals to have language tags from a specified list.

~~~~~~md
**[Property] language must be in [List]** {=ex:PropertyLanguageInConstraint .sh:PropertyShape ?sh:property sh:message}

[Property Name] {+ex:propertyName ?sh:path} language tags must be in the allowed list.

**Allowed Languages List** {=ex:lang-l1 ?sh:languageIn .rdf:List}: [en] {rdf:first}, 
then [followed] {=ex:lang-l2 ?rdf:rest} by [fr] {rdf:first} 
and [nil] {+rdf:nil ?rdf:rest}. Reset subject: {=}
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **List node** - RDF list container (`{=ex:lang-l1 ?sh:languageIn .rdf:List}`)
- **List elements** - Allowed language tags in the list (`{rdf:first}`)
- **List structure** - Linked list with `rdf:first`, `rdf:rest`, `rdf:nil`
- **Subject reset** - `{=}` prevents unintended subject continuation

**Important notes:**
- Uses verbose RDF list syntax (similar to AND and IN constraints)
- Only validates language tags if they exist
- Use `@lang` syntax for language-tagged literals
- Use `minCount` to check for required properties
- Language tags must be valid BCP 47 language codes

---

## 🎯 Use Cases

- **Multilingual content** - Restrict documents to specific languages
- **Regional compliance** - Ensure content meets language requirements
- **Content localization** - Validate language-specific versions
- **International standards** - Enforce language tag standards
- **Translation workflows** - Control which languages are allowed

---

## 🔧 Implementation Guidelines

**When to use languageIn:**
- **Multilingual support** - When content must be in specific languages
- **Regional compliance** - Ensure content meets regional language requirements
- **Content localization** - Validate language-specific content
- **Translation control** - Manage translation workflows
- **Internationalization** - Support global applications

**Best practices:**
- Use valid BCP 47 language codes (en, fr, de, es, etc.)
- Keep the language list short for maintainability
- Combine with `minCount` for required language tags
- Test with both valid and invalid language tags
- Use unique list identifiers to avoid collisions

**Common pitfalls:**
- ❌ Forgetting the subject reset `{=}` after list definition
- ❌ Reusing list identifiers causing collisions
- ❌ Using invalid BCP 47 language codes
- ❌ Not combining with `minCount` for required properties
- ❌ Confusing languageIn with other string constraints






{=}



<a id="constraints-uniquelang"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <ttps://mdld.js.org/shacl/catalog/uniqueLang/example/>


# Unique Languages Constraint {=sh:uniqueLang .class:UniqueLanguageConstraint label}

> Ensures that language tags of string literals are unique within a property. Essential for multilingual content management, preventing duplicate language entries, and maintaining clean internationalization data. {comment}

<http://www.w3.org/ns/shacl#uniqueLang> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:uniqueLang/>

### Shape Definition

**Each language tag must appear only once** {=ex:UniqueLangExampleShape .sh:NodeShape label}
[title] {+ex:title ?sh:path} values have [unique language tags] {sh:uniqueLang ^^xsd:boolean}: **Each language tag must appear only once** {sh:message}.

---

### Test Data {=ex:data .Container}

#### Valid Document {=ex:ValidNode ?member}
Title: [Hello World] {ex:title @en}
Title: [Bonjour Monde] {ex:title @fr}

#### Invalid Document {=ex:InvalidNode ?member}
Title: [Hello World] {ex:title @en}
Title: [Hola Mundo] {ex:title @en}

---

[Demo] {=ex:demo} must produce exactly **1** violation.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The uniqueLang constraint ensures that language tags of string literals are unique within a property.

~~~~~~md
**[Property] must have unique language tags** {=ex:PropertyUniqueLangConstraint .sh:PropertyShape sh:message}

[Property Name] {+ex:propertyName ?sh:path} values have [true] {sh:uniqueLang ^^xsd:boolean}.
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **Unique language flag** - Enables unique language validation (`{sh:uniqueLang ^^xsd:boolean}`)
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Language tag uniqueness** - Prevents duplicate language tags

**Important notes:**
- Only applies to language-tagged string literals
- Prevents duplicate language tags within the same property
- Works with multilingual content management
- Use `@lang` syntax for language-tagged literals
- Boolean value must be `true` to enable constraint

---

## 🎯 Use Cases

- **Multilingual content** - Prevent duplicate language entries
- **Internationalization** - Maintain clean i18n data
- **Translation management** - Ensure unique language tags
- **Content localization** - Prevent redundant translations
- **Language consistency** - Ensure one entry per language

---

## 🔧 Implementation Guidelines

**When to use uniqueLang:**
- **Multilingual content** - When content has language-tagged values
- **Translation management** - Prevent duplicate language entries
- **Internationalization** - Maintain clean i18n data
- **Content localization** - Ensure unique language tags
- **Language consistency** - One entry per language

**Best practices:**
- Use with language-tagged string literals
- Combine with languageIn for complete language validation
- Test with duplicate and unique language tags
- Document why language tags must be unique
- Consider cardinality constraints alongside uniqueLang

**Common pitfalls:**
- ❌ Using uniqueLang on non-language-tagged literals
- ❌ Forgetting to use `@lang` syntax
- ❌ Not testing with duplicate language tags
- ❌ Not combining with languageIn for complete validation
- ❌ Confusing uniqueLang with other string constraints






{=}



<a id="constraints-hasvalue"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/hasvalue/>


# Has Value {=sh:hasValue .class:Constraint label}

> Requires a property to have exactly this specific value - useful for fixed status fields, required constants, or mandatory identifiers. {comment}

<http://www.w3.org/ns/shacl#hasValue> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:hasvalue/>

### Shape Definition

**Main server must have active status** {=ex:#statusRequired .sh:PropertyShape sh:message}
[status] {+ex:status ?sh:path} must be exactly [active] {sh:hasValue}.

**Main server must be in production environment** {=ex:#environmentRequired .sh:PropertyShape sh:message}
[environment] {+ex:environment ?sh:path} must be exactly [production] {sh:hasValue}.

---

### Test Data {=ex:data .Container}

#### Main Server {=ex:MainServer ?member}
Status: [active] {ex:status}
Environment: [production] {ex:environment}

#### Backup Server {=ex:BackupServer ?member}
Status: [standby] {ex:status}
Environment: [production] {ex:environment}

#### Development Server {=ex:DevelopmentServer ?member}
Status: [active] {ex:status}
Environment: [development] {ex:environment}

---

[Demo] {=ex:demo} must produce exactly **2** violations.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The hasValue constraint requires a property to have exactly a specific value.

~~~~~~md
**[Property] must be [Value]** {=ex:PropertyHasValueConstraint .sh:PropertyShape sh:message}

[Property Name] {+ex:propertyName ?sh:path} must be exactly [Value] {sh:hasValue}.
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **Required value** - The exact value required (`{sh:hasValue}`)
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Exact match** - Property must have exactly this value

**Important notes:**
- HasValue requires exact match, no partial matches
- Works with both literal values and IRIs
- Property must have the value (use minCount for required properties)
- Often used with NOT constraint to forbid specific values
- Cannot be used with other value constraints on same property

---

## 🎯 Use Cases

- **Fixed status fields** - Ensure status is exactly "active" or "inactive"
- **Required constants** - Enforce mandatory constant values
- **Environment flags** - Ensure environment is "production" or "development"
- **System identifiers** - Validate specific system identifiers
- **Configuration validation** - Ensure configuration values are correct

---

## 🔧 Implementation Guidelines

**When to use hasValue:**
- **Fixed values** - When a property must have a specific constant value
- **Status validation** - Ensure status fields have required values
- **Configuration** - Validate configuration properties
- **Business rules** - Enforce specific business rule values
- **Data integrity** - Ensure critical properties have correct values

**Best practices:**
- Use hasValue for fixed, unchanging values
- Combine with NOT constraint to forbid specific values
- Use descriptive property names for clarity
- Test with both valid and invalid values
- Consider using enum patterns for multiple allowed values

**Common pitfalls:**
- ❌ Using hasValue for variable values (use other constraints instead)
- ❌ Forgetting that hasValue requires exact match
- ❌ Not combining with minCount for required properties
- ❌ Using hasValue when datatype constraint would be more appropriate
- ❌ Confusing hasValue with in constraint (hasValue for single value, in for multiple)






{=}



<a id="constraints-node"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/node/>


# Node Constraint {=sh:node .class:NodeConstraint label}

> Requires property values to conform to a specific node shape. Essential for validating complex nested objects and ensuring structural integrity of related entities. {comment}

<http://www.w3.org/ns/shacl#node> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:node/>

### Shape Definition

**Employee must have valid address** {=ex:#addressRule .sh:PropertyShape ?sh:property sh:message}
Each [address] {+ex:address ?sh:path} must conform to [Address Shape] {+ex:AddressShape ?sh:node}.

#### Address Shape {=ex:AddressShape .sh:NodeShape label}
**Street Rule** {=ex:#streetProperty .sh:PropertyShape} validates [street] {+ex:street ?sh:path} with at least [5] {sh:minLength ^^xsd:integer} characters.
**City Rule** {=ex:#cityProperty .sh:PropertyShape} validates [city] {+ex:city ?sh:path} with at least [2] {sh:minLength ^^xsd:integer} characters.

---

### Test Data {=ex:data .Container}

#### Valid Employee {=ex:ValidEmployee .ex:Employee ?member}
Name: [John Doe] {ex:name}
Address: [Valid Address] {=ex:ValidAddress .ex:Address ?ex:address}
Street: [Main Street] {ex:street}
City: [New York] {ex:city}

#### Invalid Employee {=ex:InvalidEmployee .ex:Employee ?member}
Name: [Jane Smith] {ex:name}
Address: [Short Address] {=ex:ShortAddress .ex:Address ?ex:address}
Street: [St] {ex:street}
City: [NY] {ex:city}

---

[Demo] {=ex:demo} must produce exactly **1** violation.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The node constraint requires property values to conform to a specific node shape.

~~~~~~md
**[Property] must conform to [Shape]** {=ex:PropertyNodeConstraint .sh:PropertyShape ?sh:property sh:message}

[Property Name] {+ex:propertyName ?sh:path} must conform to [Shape Name] {+ex:ShapeName ?sh:node}.
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **Node shape reference** - The shape to conform to (`{+ex:ShapeName ?sh:node}`)
- **Shape definition** - Define the referenced shape with its constraints
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Structural validation** - Validates nested object structure

**Important notes:**
- Only applies to node values (IRIs/blank nodes), not literal values
- The referenced shape must be defined in the ontology
- Enables validation of complex nested objects
- Use for structural integrity of related entities
- Combine with other constraints for complete validation

---

## 🎯 Use Cases

- **Nested object validation** - Validate address, contact info structures
- **Complex data models** - Ensure nested entities conform to shapes
- **Structural integrity** - Validate related entity structures
- **Composite objects** - Validate multi-part data structures
- **Relationship validation** - Ensure related nodes conform to shapes

---

## 🔧 Implementation Guidelines

**When to use node:**
- **Nested validation** - When property values are complex objects
- **Structural integrity** - Ensure related entities have correct structure
- **Complex data models** - Validate nested object hierarchies
- **Composite objects** - Validate multi-part data structures
- **Relationship validation** - Ensure related nodes conform to shapes

**Best practices:**
- Define referenced shapes clearly with their constraints
- Use descriptive shape names for clarity
- Combine with other constraints for complete validation
- Test with both valid and invalid nested structures
- Document the structure being validated

**Common pitfalls:**
- ❌ Forgetting that node constraint only applies to nodes, not literals
- ❌ Not defining the referenced shape
- ❌ Creating circular dependencies between shapes
- ❌ Not combining with other constraints for complete validation
- ❌ Confusing node constraint with class constraint (node for structure, class for type)






{=}



<a id="constraints-in"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/in/>


# Value Enumeration {=sh:in .class:PresenceConstraint label}

> Constrains property values to be within a specified list of allowed values using RDF lists. Essential for controlled vocabularies, status codes, and enumeration validation. {comment}

<http://www.w3.org/ns/shacl#in> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:in/>

### Shape Definition

**Status must be in allowed list** {=ex:#allowedStatus .sh:PropertyShape ?sh:property sh:message}
[Status] {+ex:status ?sh:path} must be either Active or Inactive.

**Allowed Status List** {=ex:in-l1 ?sh:in .rdf:List}: [Active] {+ex:Active ?rdf:first}, 
then [followed] {=ex:in-l2 ?rdf:rest} by [Inactive] {+ex:Inactive ?rdf:first} 
and [nil] {+rdf:nil ?rdf:rest}. Reset subject: {=}

---

### Test Data {=ex:data .Container}

#### Valid Employee {=ex:ValidEmployee .ex:Employee ?member}
Status: [Active] {ex:status}

#### Invalid Status Employee {=ex:InvalidStatusEmployee .ex:Employee ?member}
Status: [Pending] {ex:status}

---

[Demo] {=ex:demo} must produce exactly **1** violation.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The in constraint constrains property values to be within a specified list of allowed values using RDF lists.

~~~~~~md
**[Property] must be in [List]** {=ex:PropertyInConstraint .sh:PropertyShape ?sh:property sh:message}

[Property Name] {+ex:propertyName ?sh:path} must be in the allowed list.

**Allowed List** {=ex:in-l1 ?sh:in .rdf:List}: [First Value] {+ex:firstValue ?rdf:first}, 
then [followed] {=ex:in-l2 ?rdf:rest} by [Second Value] {+ex:secondValue ?rdf:first} 
and [nil] {+rdf:nil ?rdf:rest}. Reset subject: {=}
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **List node** - RDF list container (`{=ex:in-l1 ?sh:in .rdf:List}`)
- **List elements** - Allowed values in the list (`{+ex:value ?rdf:first}`)
- **List structure** - Linked list with `rdf:first`, `rdf:rest`, `rdf:nil`
- **Subject reset** - `{=}` prevents unintended subject continuation

**Important notes:**
- Uses verbose RDF list syntax (similar to AND constraint)
- Only validates values if the property exists
- Use `minCount` to check for required properties
- Each list element must be a valid value
- Always reset subject with `{=}` after list definition

---

## 🎯 Use Cases

- **Controlled vocabularies** - Restrict values to predefined terms
- **Status codes** - Ensure status is one of allowed values
- **Enumeration validation** - Validate against allowed value sets
- **Category validation** - Restrict categories to predefined list
- **Configuration options** - Validate configuration settings

---

## 🔧 Implementation Guidelines

**When to use in:**
- **Controlled vocabularies** - When values must be from a predefined set
- **Status validation** - Ensure status codes are valid
- **Enumeration** - Validate against allowed value sets
- **Data integrity** - Prevent invalid value assignments
- **Business rules** - Enforce allowed value constraints

**Best practices:**
- Use descriptive value names for clarity
- Keep the list short for maintainability
- Combine with `minCount` for required properties
- Test with both valid and invalid values
- Use unique list identifiers to avoid collisions

**Common pitfalls:**
- ❌ Forgetting the subject reset `{=}` after list definition
- ❌ Reusing list identifiers causing collisions
- ❌ Not combining with `minCount` for required properties
- ❌ Making the list too complex to maintain
- ❌ Confusing in constraint with hasValue (in for multiple values, hasValue for single)






{=}



<a id="constraints-qualifiedcount"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/qualified/>


# Qualified Count Constraints {=sh:qualifiedMinCount .class:QualifiedConstraint label}

> Applies count constraints only to values that meet additional shape criteria. Essential for conditional validation where only certain values should be counted. {comment}

<http://www.w3.org/ns/shacl#qualifiedMinCount> {?cat:fullIRI}
<http://www.w3.org/ns/shacl#qualifiedMaxCount> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:qualified/>

### Shape Definition

**Employee must have exactly one work email** {=ex:#workEmailRule .sh:PropertyShape ?sh:property sh:message}
[email] {+ex:email ?sh:path} must have exactly [1] {sh:qualifiedMinCount sh:qualifiedMaxCount ^^xsd:integer} work email that matches **Work Email Shape** {=ex:WorkEmailShape .sh:NodeShape ?sh:qualifiedValueShape}.

#### Work Email Shape {=ex:WorkEmailShape .sh:NodeShape label}
Must be a [literal] {+sh:Literal ?sh:nodeKind} with [string] {+xsd:string ?sh:datatype} type and pattern [company.org] {sh:pattern}.

---

### Test Data {=ex:data .Container}

#### Valid Employee {=ex:ValidEmployee .ex:Employee ?member}
Name: [John Doe] {ex:name}
Email: [john@company.org] {ex:email}

#### Invalid Employee - Multiple Work Emails {=ex:MultipleWorkEmployee .ex:Employee ?member}
Name: [Jane Smith] {ex:name}
Email: [jane@company.org] {ex:email}
Email: [jane.smith@company.org] {ex:email}

#### Invalid Employee - No Work Email {=ex:NoWorkEmployee .ex:Employee ?member}
Name: [Bob Wilson] {ex:name}
Email: [bob@gmail.com] {ex:email}

#### Valid Employee - Mixed Emails {=ex:MixedEmailEmployee .ex:Employee ?member}
Name: [Alice Brown] {ex:name}
Email: [alice@company.org] {ex:email}
Email: [alice.personal@gmail.com] {ex:email}

---

[Demo] {=ex:demo} must produce exactly **2** violations.
~~~~~~

---

## 📝 MDLD Syntax Patterns

Qualified count constraints apply count constraints only to values that meet additional shape criteria.

~~~~~~md
**[Property] must have [Count] values matching [Shape]** {=ex:PropertyQualifiedCountConstraint .sh:PropertyShape ?sh:property sh:message}

[Property Name] {+ex:propertyName ?sh:path} must have exactly [count] {sh:qualifiedMinCount sh:qualifiedMaxCount ^^xsd:integer} values that conform to [Shape] {=ex:ShapeName ?sh:qualifiedValueShape}.
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **Qualified min count** - Minimum count of matching values (`{sh:qualifiedMinCount ^^xsd:integer}`)
- **Qualified max count** - Maximum count of matching values (`{sh:qualifiedMaxCount ^^xsd:integer}`)
- **Qualified shape** - Shape that values must conform to (`{=ex:ShapeName ?sh:qualifiedValueShape}`)
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Conditional counting** - Only counts values matching the shape

**Important notes:**
- Only counts values that conform to the qualified shape
- Other values are ignored for the count
- Use for conditional validation scenarios
- The qualified shape must be defined separately
- Combine with other constraints for complete validation

---

## 🎯 Use Cases

- **Work email validation** - Ensure exactly one work email (ignore personal emails)
- **Primary contact validation** - Ensure exactly one primary contact
- **Conditional counting** - Count only values meeting specific criteria
- **Business rules** - Enforce conditional count requirements
- **Data quality** - Ensure specific value counts

---

## 🔧 Implementation Guidelines

**When to use qualified count:**
- **Conditional validation** - When only certain values should be counted
- **Business rules** - Enforce conditional count requirements
- **Mixed data** - When property has mixed value types
- **Specific validation** - Count only values meeting criteria
- **Data quality** - Ensure specific value counts

**Best practices:**
- Define the qualified shape clearly
- Test with mixed value scenarios
- Combine with other constraints for complete validation
- Document what values are counted
- Use descriptive shape names for clarity

**Common pitfalls:**
- ❌ Forgetting to define the qualified shape
- ❌ Confusing qualified count with regular count
- ❌ Not testing with mixed value scenarios
- ❌ Not combining with other constraints
- ❌ Making the qualified shape too complex






{=}



<a id="constraints-closed"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[schema] <http://schema.org/>


# Closed World Constraint {=sh:closed .class:ClosedWorldConstraint label}

> Enables closed world validation where only explicitly declared properties are allowed. Essential for strict data modeling, schema enforcement, and preventing property proliferation in RDF graphs. {comment}

<http://www.w3.org/ns/shacl#closed> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:closed/>
[schema] <http://schema.org/>

### Shape Definition

**Only declared properties allowed** {=ex:ClosedExampleShape .sh:NodeShape ?cat:hasShape label} with **no additional properties** {sh:closed}.

**Person must have a name** {=ex:NameProperty .sh:PropertyShape sh:message}
[name] {+schema:name ?sh:path} is [string] {+xsd:string ?sh:datatype} and [1] {sh:minCount}.

**Person must have exactly one age** {=ex:AgeProperty .sh:PropertyShape sh:message}
[age] {+ex:age ?sh:path} is [integer] {+xsd:integer ?sh:datatype} and exactly [1] {sh:minCount sh:maxCount}.

---

### Test Data {=ex:data .Container}

#### Valid Person {=ex:ValidPerson}
Name: [John Doe] {schema:name ^^xsd:string}
Age: [30] {ex:age ^^xsd:integer}

#### Invalid Person {=ex:InvalidPerson}
Name: [Jane Smith] {schema:name ^^xsd:string}
Age: [25] {ex:age ^^xsd:integer}
Email: [<jane@example.com>] {ex:email}

---

[Demo] {=ex:demo} must produce exactly **1** violation.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The closed constraint enables closed world validation where only explicitly declared properties are allowed.

~~~~~~md
**[Shape] with closed world validation** {=ex:ClosedShape .sh:NodeShape ?cat:hasShape label}

[Shape Name] {=ex:ShapeName .sh:NodeShape} has **no additional properties** {sh:closed}.
~~~~~~

**Key components:**
- **Shape declaration** - The shape to apply closed world validation (`{=ex:ShapeName .sh:NodeShape}`)
- **Closed constraint** - Enables closed world validation (`{sh:closed}`)
- **Property declarations** - Only declared properties are allowed
- **Property shapes** - Define allowed properties with constraints

**Important notes:**
- Only explicitly declared properties are allowed
- Undeclared properties cause validation violations
- Apply at NodeShape level, not PropertyShape level
- Useful for strict data modeling and schema enforcement
- Prevents property proliferation in RDF graphs

---

## 🎯 Use Cases

- **Strict data modeling** - Enforce exact schema compliance
- **Schema enforcement** - Prevent property proliferation
- **Data validation** - Ensure only declared properties exist
- **API contracts** - Enforce exact API contract compliance
- **Data quality** - Prevent unexpected properties

---

## 🔧 Implementation Guidelines

**When to use closed:**
- **Strict schemas** - When exact schema compliance is required
- **API contracts** - Enforce exact API contract compliance
- **Data quality** - Prevent unexpected properties
- **Schema enforcement** - Strict property validation
- **Closed world assumptions** - When business logic requires closed world

**Best practices:**
- Declare all required properties explicitly
- Combine with property constraints for complete validation
- Use descriptive property names for clarity
- Test with both valid and invalid data
- Document why closed world validation is needed

**Common pitfalls:**
- ❌ Forgetting to declare all required properties
- ❌ Using closed when open world is more appropriate
- ❌ Not combining with property constraints
- ❌ Overusing closed world validation
- ❌ Not documenting the closed world assumption






{=}



<a id="constraints-deactivated"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>


# Deactivated Constraint {=sh:deactivated .class:DeactivatedConstraint label}

> Temporarily disables specific constraints during validation. Essential for phased validation, conditional rule enforcement, and managing constraint lifecycle in evolving schemas. {comment}

<http://www.w3.org/ns/shacl#deactivated> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:deactivated/>

### Shape Definition

**Deactivated Example Shape** {=ex:DeactivatedExampleShape .sh:NodeShape label} targets [Valid Node] {+ex:ValidNode ?sh:targetNode} and [Invalid Node] {+ex:InvalidNode ?sh:targetNode}.

**User status must be active** {=ex:ActiveProperty .sh:PropertyShape sh:message}
[status] {+ex:status ?sh:path} must be [active] {sh:hasValue}.

**Must have premium category** {=ex:DeactivatedProperty .sh:PropertyShape sh:message}
[category] {+ex:category ?sh:path} is always [premium] {sh:hasValue}. Was temporarily [deactivated] {sh:deactivated}.

---

### Test Data {=ex:data .Container}

#### Valid Account {=ex:ValidNode ?member}
Status: [active] {ex:status}
Category: [basic] {ex:category}

#### Invalid Account {=ex:InvalidNode ?member}
Status: [inactive] {ex:status}
Category: [basic] {ex:category}

---

[Demo] {=ex:demo} must produce exactly **1** violation.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The deactivated constraint temporarily disables specific constraints during validation.

~~~~~~md
**[Constraint description]** {=ex:PropertyConstraint .sh:PropertyShape sh:message}

[Property Name] {+ex:propertyName ?sh:path} [constraint description]. Was temporarily [deactivated] {sh:deactivated}.
~~~~~~

**Key components:**
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Deactivated flag** - Disables the constraint (`{sh:deactivated}`)
- **Constraint description** - The constraint being temporarily disabled
- **Lifecycle management** - Manage constraint lifecycle in evolving schemas
- **Phased validation** - Enable/disable constraints as needed

**Important notes:**
- Deactivated constraints are skipped during validation
- Useful for phased validation and conditional rule enforcement
- Helps manage constraint lifecycle in evolving schemas
- Can be reactivated by removing the deactivated flag
- Combine with message for documentation

---

## 🎯 Use Cases

- **Phased validation** - Enable constraints in phases during migration
- **Conditional rules** - Temporarily disable rules for specific scenarios
- **Schema evolution** - Manage constraints during schema changes
- **Testing** - Disable constraints for testing purposes
- **Lifecycle management** - Manage constraint lifecycle

---

## 🔧 Implementation Guidelines

**When to use deactivated:**
- **Phased validation** - When rolling out new constraints gradually
- **Schema migration** - During schema evolution and migration
- **Conditional rules** - When rules need to be temporarily disabled
- **Testing** - When testing without certain constraints
- **Lifecycle management** - Manage constraint lifecycle

**Best practices:**
- Document why a constraint is deactivated
- Plan for reactivation of deactivated constraints
- Use deactivated for temporary situations only
- Combine with message for documentation
- Review deactivated constraints regularly

**Common pitfalls:**
- ❌ Forgetting to reactivate deactivated constraints
- ❌ Using deactivated instead of removing obsolete constraints
- ❌ Not documenting why a constraint is deactivated
- ❌ Leaving constraints deactivated indefinitely
- ❌ Confusing deactivated with other constraint features






{=}



<a id="constraints-severity"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>

# Severity Levels {=sh:severity .class:SeverityConstraint label}

> Defines the severity level of validation violations (Info, Warning, Violation). Essential for prioritizing validation results and managing different types of constraint failures. {comment}

<http://www.w3.org/ns/shacl#severity> {?cat:fullIRI}
<http://www.w3.org/ns/shacl#message> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:severity/>

### Shape Definition

**Email address is required and must be valid** {=ex:CriticalRule .sh:PropertyShape sh:message}
[email] {+ex:email ?sh:path} must be [string] {?xsd:string ?sh:datatype} and at least [1] {sh:minCount ^^xsd:integer} corporate email [example.com] {sh:pattern} with [Violation severity] {+sh:Violation ?sh:severity}.

**Age should be between 18 and 120** {=ex:WarningRule .sh:PropertyShape sh:message}
[age] {+ex:age ?sh:path} must be [integer] {?xsd:integer ?sh:datatype}, more than [18] {sh:minInclusive ^^xsd:integer} and less than [120] {sh:maxInclusive ^^xsd:integer} with [Warning severity] {+sh:Warning ?sh:severity}.

**Name should be a string of 2+ letters** {=ex:InfoNameRule .sh:PropertyShape sh:message}
[name] {+ex:name ?sh:path} must be [string] {?xsd:string ?sh:datatype} at least [1] {sh:minCount} and longer than [3] {sh:minInclusive} with [Info severity] {+sh:Info ?sh:severity}.

---

### Test Data {=ex:data .Container}

#### Valid User {=ex:ValidUser .ex:User ?member}
Email: [user@example.com] {ex:email}
Age: [25] {ex:age ^^xsd:integer}
Name: [John Doe] {ex:name}

#### Invalid User {=ex:InvalidUser .ex:User ?member}
Email: [invalid-email] {ex:email}
Age: [150] {ex:age ^^xsd:integer}
Name: [] {ex:name}

---

[Demo] {=ex:demo} must produce exactly **3** violations.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The severity constraint defines the severity level of validation violations.

~~~~~~md
**[Constraint description]** {=ex:PropertyConstraint .sh:PropertyShape sh:message}

[Property Name] {+ex:propertyName ?sh:path} [constraint description] with [Severity] {+sh:SeverityLevel ?sh:severity}.
~~~~~~

**Key components:**
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Severity level** - Severity of the violation (`{+sh:Violation ?sh:severity}`, `{+sh:Warning ?sh:severity}`, `{+sh:Info ?sh:severity}`)
- **Constraint description** - The constraint being validated
- **Priority management** - Helps prioritize validation results
- **Categorization** - Manages different types of constraint failures

**Important notes:**
- Use `sh:Violation` for critical failures that must be fixed
- Use `sh:Warning` for issues that should be addressed but aren't critical
- Use `sh:Info` for informational violations or recommendations
- Severity helps prioritize validation results
- Combine with message for clear user feedback

---

## 🎯 Use Cases

- **Prioritization** - Prioritize critical vs non-critical issues
- **User feedback** - Provide different feedback based on severity
- **Compliance** - Distinguish between critical compliance issues and recommendations
- **Data quality** - Manage different types of data quality issues
- **Workflow management** - Route issues based on severity

---

## 🔧 Implementation Guidelines

**When to use severity:**
- **Critical constraints** - Use `sh:Violation` for must-fix issues
- **Warnings** - Use `sh:Warning` for should-fix issues
- **Informational** - Use `sh:Info` for recommendations
- **Prioritization** - Help users prioritize fixes
- **Compliance** - Distinguish critical vs non-critical compliance issues

**Best practices:**
- Use severity consistently across constraints
- Document why certain constraints have specific severity
- Combine with message for clear feedback
- Consider user workflow when assigning severity
- Test with violations at different severity levels

**Common pitfalls:**
- ❌ Using wrong severity level for the constraint
- ❌ Not using severity consistently
- ❌ Overusing high severity for minor issues
- ❌ Not combining severity with message
- ❌ Forgetting to assign severity to constraints






{=}



<a id="constraints-message"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>


# Violation Message {=sh:message .class:MessageConstraint label}

> Provides human-readable error messages for constraint violations. Essential for user-friendly validation feedback, debugging, and actionable error reporting. {comment}

<http://www.w3.org/ns/shacl#message> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:message/>

### Shape Definition

**Contract value must be positive for financial compliance** {=ex:#valueRule .sh:PropertyShape sh:message}
[contract value] {+ex:contractValue ?sh:path} must be greater than [0] {sh:minInclusive ^^xsd:decimal}.

**Contract must be approved before start date** {=ex:#dateRule .sh:PropertyShape sh:message}
[approval date] {+ex:approvalDate ?sh:path} must be before [start date] {+ex:startDate ?sh:lessThan}.

---

### Test Data {=ex:data .Container}

#### Valid Contract {=ex:ValidContract .ex:Contract ?member}
Value: [50000.00] {ex:contractValue ^^xsd:decimal}
Approval Date: [2024-01-15] {ex:approvalDate ^^xsd:date}
Start Date: [2024-02-01] {ex:startDate ^^xsd:date}

#### Invalid Contract {=ex:InvalidContract .ex:Contract ?member}
Value: [-1000.00] {ex:contractValue ^^xsd:decimal}
Approval Date: [2024-03-01] {ex:approvalDate ^^xsd:date}
Start Date: [2024-02-01] {ex:startDate ^^xsd:date}

---

[Demo] {=ex:demo} must produce exactly **2** violations.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The message constraint provides human-readable error messages for constraint violations.

~~~~~~md
**[Business rule description]** {=ex:PropertyConstraint .sh:PropertyShape sh:message}

[Property Name] {+ex:propertyName ?sh:path} [constraint description].
~~~~~~

**Key components:**
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Business context** - Explain what business rule is violated
- **Impact description** - Describe why this matters
- **Actionable guidance** - Suggest how to fix the issue
- **Domain terminology** - Use appropriate business language

**Important notes:**
- Messages should be specific and actionable
- Use business terminology, not just technical
- Keep messages concise but informative
- Consider the target audience (technical vs business)
- Messages help with debugging and user feedback

---

## 🎯 Use Cases

- **User-friendly feedback** - Provide clear error messages to users
- **Debugging** - Help developers identify constraint violations
- **Actionable reporting** - Guide users on how to fix issues
- **Business context** - Explain violations in business terms
- **Compliance reporting** - Regulatory and audit-focused language

---

## 🔧 Implementation Guidelines

**When to use message:**
- **All constraints** - Always provide messages for user-friendly feedback
- **Business rules** - Explain violations in business terms
- **Complex validation** - Help users understand what went wrong
- **Compliance** - Provide regulatory and audit context
- **Debugging** - Aid in identifying constraint violations

**Best practices:**
- Use semantic, business-focused language
- Keep messages concise but informative
- Provide actionable guidance
- Use consistent terminology across constraints
- Consider internationalization (clear, translatable messages)

**Common pitfalls:**
- ❌ Using technical jargon instead of business language
- ❌ Writing vague or unclear messages
- ❌ Not providing actionable guidance
- ❌ Making messages too long or verbose
- ❌ Forgetting to include messages on constraints






{=}



<a id="constraints-js"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>


# JavaScript Function {=sh:js .class:Constraint label}

> Allows custom JavaScript validation functions for complex constraint logic {comment}

<http://www.w3.org/ns/shacl#js> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

~~~~~~md
[ex] <tag:my@example.org,2026:js/>

### Shape Definition

**Date Validation Shape** {=ex:DateValidationShape .sh:NodeShape label} targets all [Events] {+ex:Event ?sh:targetClass}.

#### Event date must be a valid date string {=ex:DatePropertyShape .sh:PropertyShape ?sh:property sh:message}
Must have an [eventDate] {+ex:eventDate ?sh:path} that is a valid JS date.

~~~~~~js {=ex:DateJSConstraint ?sh:JSConstraint sh:js}
// Check if value is a valid date string
const date = new Date(value);
return !isNaN(date.getTime());
~~~~~~

---

### Test Data {=ex:data .Container}

#### Valid Event {=ex:ValidEvent .ex:Event ?member}
Event Date: [2024-12-25] {ex:eventDate ^^xsd:date}

#### Invalid Event {=ex:InvalidEvent1 .ex:Event ?member}
Event Date: [not-a-date] {ex:eventDate}

---

[Demo] {=ex:demo} must produce exactly **1** violation.
~~~~~~

---

## 📝 MDLD Syntax Patterns

The JavaScript constraint allows custom JavaScript validation functions for complex constraint logic.

~~~~~~md
**[Property] must pass [JavaScript validation]** {=ex:PropertyJSConstraint .sh:PropertyShape ?sh:property sh:message}

[Property Name] {+ex:propertyName ?sh:path} must pass custom validation.

~~~~~~js {=ex:JSConstraintName ?sh:JSConstraint sh:js}
// Custom validation logic
const result = validate(value);
return result;
~~~~~~
~~~~~~

**Key components:**
- **Property path** - The property to validate (`{+ex:propertyName ?sh:path}`)
- **JavaScript constraint** - Reference to JS constraint (`{=ex:JSConstraintName ?sh:JSConstraint sh:js}`)
- **JS function** - Custom validation function in fenced code block
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Custom logic** - Implement complex validation rules

**Important notes:**
- JavaScript code is executed during validation
- Function receives `value` parameter
- Return `true` for valid, `false` for invalid
- Use for complex validation not possible with standard constraints
- Ensure JavaScript code is safe and well-tested

---

## 🎯 Use Cases

- **Custom validation** - Implement business-specific validation rules
- **Complex logic** - Validate patterns not supported by standard constraints
- **Cross-property validation** - Validate relationships between properties
- **External API validation** - Check values against external services
- **Data transformation** - Transform and validate data

---

## 🔧 Implementation Guidelines

**When to use JavaScript:**
- **Complex validation** - When standard constraints are insufficient
- **Business rules** - Implement custom business logic
- **Cross-property validation** - Validate relationships between properties
- **External validation** - Check against external services
- **Data transformation** - Transform and validate data

**Best practices:**
- Keep JavaScript functions simple and focused
- Test JavaScript functions thoroughly
- Document the validation logic clearly
- Use descriptive function names
- Consider performance implications

**Common pitfalls:**
- ❌ Writing overly complex JavaScript functions
- ❌ Not testing JavaScript functions thoroughly
- ❌ Using JavaScript when standard constraints would suffice
- ❌ Not handling edge cases in JavaScript logic
- ❌ Forgetting that JavaScript code is executed during validation
