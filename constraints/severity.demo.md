[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Severity Levels {=sh:severity .class:SeverityConstraint label} Demo

## Demo {=ex:demo ?cat:hasDemo}

This demo demonstrates severity levels and custom messages using user account validation.

### User Account Validation Demo

The **User Validation Shape** {=ex:UserValidationShape .sh:NodeShape ?cat:hasShape label} targets all [users] {+ex:User ?sh:targetClass} to validate account requirements with different severity levels: **Critical Email Rule** {+ex:CriticalRule ?sh:property label}, **Warning Age Rule** {+ex:WarningRule ?sh:property label} and **Info Name Rule** {+ex:InfoNameRule ?sh:property label}.

**Email address is required and must be valid** {=ex:CriticalRule .sh:PropertyShape sh:message} that requires [email] {+ex:email ?sh:path} to be [string] {+xsd:string ?sh:datatype} and at least [1] {sh:minCount ^^xsd:integer} corporate email [example.com] {sh:pattern} with [Violation severity] {+sh:Violation ?sh:severity}.

**Age should be between 18 and 120** {=ex:WarningRule .sh:PropertyShape sh:message} that requires [age] {+ex:age ?sh:path} to be [integer] {+xsd:integer ?sh:datatype}, more than [18] {sh:minInclusive ^^xsd:integer} and less than [120] {sh:maxInclusive ^^xsd:integer} with [Warning severity] {+sh:Warning ?sh:severity}.

**Name should be a string of 2+ letters** {=ex:InfoNameRule .sh:PropertyShape sh:message} that requires [name] {+ex:name ?sh:path} to be [string] {+xsd:string ?sh:datatype} at least [1] {sh:minCount} and longer than [3] {sh:minInclusive} with [Info severity] {+sh:Info ?sh:severity}.

### 📋 Test Data {=ex:data .Container}

#### Valid User {=ex:ValidUser .ex:User}

User with complete valid information.

Email: [user@example.com] {ex:email}
Age: [25] {ex:age ^^xsd:integer}
Name: [John Doe] {ex:name}

#### Invalid User {=ex:InvalidUser .ex:User}

User with multiple issues at different severity levels.

Email: [invalid-email] {ex:email}  # Critical violation
Age: [150] {ex:age ^^xsd:integer}  # Warning violation
Name: [] {ex:name}  # Info violation (empty string)

---

[This demo] {=ex:demo} must produce exactly **3** {cat:expectsViolations ^^xsd:integer} violations.

### Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid User** - passes (has valid email, reasonable age, and name ✓)
2. **Invalid User** - fails three times:
   - **Critical**: Email is invalid format ✗
   - **Warning**: Age is unusually high ✗  
   - **Info**: Name is missing ✗

### 🔍 Test Validation

```bash
# This should show 3 violations with different severity levels
ig-cli validate ./constraints/severity.md
```

---
