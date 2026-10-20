[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:pattern/>

# Pattern Demo {=ex:demo .Container} 

## Email Validation Shape {=ex:PatternExampleShape .sh:NodeShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with corporate **email** {+ex:EmailPatternConstraint ?sh:property sh:name}.

**Email must end with example.com** {=ex:EmailPatternConstraint .sh:PropertyShape sh:message} requires [email] {+ex:email ?sh:path} to match [example\.com$] {sh:pattern} with [i] {sh:flags}.

---

## Test Data {=ex:data .Container}

### Valid Email {=ex:ValidEmail ?member}
Email: [user@example.com] {ex:email}

### Invalid Email {=ex:InvalidEmail ?member}
Email: [user@example.org] {ex:email}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

## Expected Validation Results

1. **Valid Email** - passes (matches pattern)
2. **Invalid Email** - fails (doesn't match pattern)

### 🔍 Test Validation

```bash
node validate.js ./constraints/pattern.demo.md
```

---
