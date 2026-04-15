[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Pattern Constraint {=sh:pattern .class:PatternConstraint label} Demo

## Demo {=ex:demo ?cat:hasDemo}

This demo demonstrates pattern validation using email addresses.

### Email Validation Demo

The **Pattern Example Shape** {=ex:PatternExampleShape .sh:NodeShape ?cat:hasShape label} targets [ValidNode] {+ex:ValidNode ?sh:targetNode} and [InvalidNode] {+ex:InvalidNode ?sh:targetNode} to validate [email addresses] {+ex:email ?sh:path} match [example.com] {sh:pattern} with [i] {sh:flags}: **Email must follow standard format** {sh:message}.

### 📋 Test Data {=ex:data .Container}

#### Valid Email {=ex:ValidNode}

Email address that matches standard pattern.

Email: [user@example.com] {ex:email ^^xsd:string}

#### Invalid Email {=ex:InvalidNode}

Email address that doesn't match standard pattern.

Email: [user@example.org] {ex:email ^^xsd:string}

---

[This demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid Email** - passes (matches email pattern ✓)
2. **Invalid Email** - fails once (doesn't match email pattern ✗)

### 🔍 Test Validation

```bash
# This should show 1 violation - InvalidNode has malformed email
ig-cli validate ./constraints/pattern.md
```

---
