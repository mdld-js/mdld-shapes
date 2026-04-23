[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# Class {=sh:class .class:Constraint label}

> Expects each value to be an instance of a specific class (RDF type) {comment}

<http://www.w3.org/ns/shacl#class> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

The class constraint ensures property values are instances of a specific RDF class. This example validates that employee managers must be Person instances.

~~~~~~md
[ex] <tag:my@example.org,2026:class/>

## Employee Test Shape {=ex:EmployeeTestShape .sh:NodeShape ?cat:hasShape label}

All [employees] {+member ?sh:targetObjectsOf} must have **manager** {+ex:#managerClass ?sh:property sh:name} class assigned.

**Manager must be a Person instance** {=ex:#managerClass .sh:PropertyShape sh:message} requires the [manager] {+ex:manager ?sh:path} property to be an instance of a [Person] {+ex:Person ?sh:class}.

---

## Test Data {=ex:data .Container}

### Valid Employee {=ex:ValidEmployee ?member}
Manager: [john] {+ex:john ?ex:manager .ex:Person}

### Invalid Employee {=ex:InvalidEmployee ?member}
Manager: [robot] {+ex:robot ?ex:manager ex:Role}
~~~~~~

**Expected Result:** 1 violation (InvalidEmployee fails because manager is not a Person)

---

## 📝 MDLD Syntax Patterns

~~~~~~md
[Property] {+ex:propertyName ?sh:path} must be an instance of [Class] {+ex:Class ?sh:class}
~~~~~~

**Use for:** Type safety, referential integrity, data quality

**Important:**
- Works with IRI values only (use nodeKind for literals)
- Class must be defined in ontology
- Combine with minCount for required properties

---

## 🔧 Implementation Guidelines

**When to use:** Ensure property values have correct RDF types

**Best practices:**
- Define classes in ontology first
- Use descriptive class names
- Combine with minCount for required properties

**Common pitfalls:**
- ❌ Using on literal values (use nodeKind instead)
- ❌ Forgetting to define the class
- ❌ Not combining with minCount for required properties
