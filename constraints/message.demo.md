[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:message/>

# Violation Message Demo {=ex:demo .Container} 

## Business Rule Validation Shape {=ex:BusinessRuleValidationShape .sh:NodeShape  label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with positive **contract** {+ex:ContractValueRule ?sh:property sh:name}.

**Contract value must be positive** {=ex:ContractValueRule .sh:PropertyShape sh:message} ensures [contract value] {+ex:contractValue ?sh:path} is greater than [0] {sh:minInclusive ^^xsd:decimal}.

---

## Test Data {=ex:data .Container}

### Valid Contract {=ex:ValidContract ?member}
Value: [50000.00] {ex:contractValue ^^xsd:decimal}

### Invalid Contract {=ex:InvalidContract ?member}
Value: [-1000.00] {ex:contractValue ^^xsd:decimal}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

## Expected Validation Results

1. **Valid Contract** - passes (positive value)
2. **Invalid Contract** - fails (negative value)

### 🔍 Test Validation

```bash
node validate.js ./constraints/message.demo.md
```

---
