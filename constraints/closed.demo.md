[cat] <https://mdld.js.org/shacl/catalog/>
[schema] <http://schema.org/>
[ex] <tag:my@example.org,2026:closed/>


# Closed World Constraint {=ex:demo .Container}

## Demo 

This demo demonstrates closed world validation using person data.

### Person Data Demo

**Only declared properties allowed** {=ex:ClosedExampleShape .sh:NodeShape label} targets [ValidPerson] {+ex:ValidPerson ?sh:targetNode} and [InvalidPerson] {+ex:InvalidPerson ?sh:targetNode} with **no additional properties** {sh:closed} constraint except [Name] {+ex:NameProperty ?sh:property sh:name} and [Age] {+ex:AgeProperty ?sh:property sh:name}.

**Person must have a name** {=ex:NameProperty .sh:PropertyShape  sh:message} ensures [name] {+schema:name ?sh:path} is [string] {+xsd:string ?sh:datatype} and [1] {sh:minCount ^^xsd:integer}.

**Person must have exactly one age** {=ex:AgeProperty .sh:PropertyShape sh:message} ensures [age] {+ex:age ?sh:path} is [integer] {+xsd:integer ?sh:datatype} and exactly [1] {sh:minCount sh:maxCount ^^xsd:integer}.

### 📋 Test Data {=ex:data .Container}

#### Valid Person {=ex:ValidPerson}

Person with only declared properties.

Name: [John Doe] {schema:name ^^xsd:string}
Age: [30] {ex:age ^^xsd:integer}

#### Invalid Person {=ex:InvalidPerson}

Person with undeclared property (violates closed world constraint).

Name: [Jane Smith] {schema:name ^^xsd:string}
Age: [25] {ex:age ^^xsd:integer}
Email: [<jane@example.com>] {ex:email}  # Undeclared property

***

[This demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid Person** - passes (only declared properties: name, age ✓)
2. **Invalid Person** - fails once (has undeclared property: email ✗)

### 🔍 Test Validation

```bash
# This should show 1 violation - InvalidPerson has undeclared email property
node validate.js ./constraints/closed.demo.md
```

***
