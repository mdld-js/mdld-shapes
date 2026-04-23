[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[schema] <http://schema.org/>


# Closed World Constraint {=sh:closed .class:ClosedWorldConstraint label}

> Enables closed world validation where only explicitly declared properties are allowed. Essential for strict data modeling, schema enforcement, and preventing property proliferation in RDF graphs. {comment}

<http://www.w3.org/ns/shacl#closed> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

The closed constraint enables closed world validation where only explicitly declared properties are allowed. This example validates that person data can only have declared properties (name, age).

~~~~~~md
[ex] <tag:my@example.org,2026:closed/>
[schema] <http://schema.org/>

## Person Data Demo

**Only declared properties allowed** {=ex:ClosedExampleShape .sh:NodeShape label} targets [ValidPerson] {+ex:ValidPerson ?sh:targetNode} and [InvalidPerson] {+ex:InvalidPerson ?sh:targetNode} with **no additional properties** {sh:closed} constraint except [Name] {+ex:NameProperty ?sh:property sh:name} and [Age] {+ex:AgeProperty ?sh:property sh:name}.

**Person must have a name** {=ex:NameProperty .sh:PropertyShape sh:message} ensures [name] {+schema:name ?sh:path} is [string] {+xsd:string ?sh:datatype} and [1] {sh:minCount ^^xsd:integer}.

**Person must have exactly one age** {=ex:AgeProperty .sh:PropertyShape sh:message} ensures [age] {+ex:age ?sh:path} is [integer] {+xsd:integer ?sh:datatype} and exactly [1] {sh:minCount sh:maxCount ^^xsd:integer}.

---

## Test Data {=ex:data .Container}

### Valid Person {=ex:ValidPerson}

Person with only declared properties.

Name: [John Doe] {schema:name ^^xsd:string}
Age: [30] {ex:age ^^xsd:integer}

### Invalid Person {=ex:InvalidPerson}

Person with undeclared property (violates closed world constraint).

Name: [Jane Smith] {schema:name ^^xsd:string}
Age: [25] {ex:age ^^xsd:integer}
Email: [<jane@example.com>] {ex:email}
~~~~~~

**Expected Result:** 1 violation (InvalidPerson fails because it has undeclared email property)

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
