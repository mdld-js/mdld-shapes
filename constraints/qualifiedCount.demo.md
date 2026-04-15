[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/qualified/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Qualified Count Constraints {=sh:qualifiedMinCount .class:QualifiedConstraint label} Demo

## Demo {=ex:demo ?cat:hasDemo}

This demo demonstrates qualified constraints using work email validation scenario.

### Work Email Validation Demo

The **Employee Validation Shape** {=ex:EmployeeValidationShape .sh:NodeShape ?cat:hasShape label} targets all [employees] {+ex:Employee ?sh:targetClass} to validate work email requirements:

**Employee must have exactly one work email** {=ex:#workEmailRule .sh:PropertyShape ?sh:property sh:message} applies to every [email] {+ex:email ?sh:path} property with qualified constraints: it must have exactly [1] {sh:qualifiedMinCount sh:qualifiedMaxCount ^^xsd:integer} work email that matches the **Work Email Shape** {=ex:WorkEmailShape .sh:NodeShape ?sh:qualifiedValueShape} which defines what counts as a work email: must be a [literal] {+sh:Literal ?sh:nodeKind} with [string] {+xsd:string ?sh:datatype} type and pattern [company.org] {sh:pattern}.

### 📋 Test Data {=ex:data .Container}

#### Valid Employee {=ex:ValidEmployee .ex:Employee}

A valid employee with exactly one work email.

Name: [John Doe] {ex:name}
Email: [john@company.org] {ex:email}

#### Invalid Employee - Multiple Work Emails {=ex:MultipleWorkEmployee .ex:Employee}

An employee with multiple work emails (violates qualifiedMaxCount).

Name: [Jane Smith] {ex:name}
Email: [jane@company.org] {ex:email}
Email: [jane.smith@company.org] {ex:email}

#### Invalid Employee - No Work Email {=ex:NoWorkEmployee .ex:Employee}

An employee with no work email (violates qualifiedMinCount).

Name: [Bob Wilson] {ex:name}
Email: [bob@gmail.com] {ex:email}

#### Valid Employee - Mixed Emails {=ex:MixedEmailEmployee .ex:Employee}

A valid employee with one work email and one personal email.

Name: [Alice Brown] {ex:name}
Email: [alice@company.org] {ex:email}
Email: [alice.personal@gmail.com] {ex:email}

---

[This demo] {=ex:demo} must produce exactly **2** {cat:expectsViolations ^^xsd:integer} violations.

### Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid Employee** - passes (1 work email ✓, meets qualifiedMinCount 1 and qualifiedMaxCount 1)
2. **Invalid Employee - Multiple Work Emails** - fails once (2 work emails ✗, exceeds qualifiedMaxCount 1)
3. **Invalid Employee - No Work Email** - fails once (0 work emails ✗, below qualifiedMinCount 1)
4. **Valid Employee - Mixed Emails** - passes (1 work email ✓, personal email ignored by qualified constraint)

Note: Qualified constraints only count values that conform to the qualified shape.

### 🔍 Test Validation

```bash
# This should show 2 violations - multiple work emails and no work email
ig-cli validate ./constraints/qualified.md
```

---
