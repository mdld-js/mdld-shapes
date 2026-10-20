[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:qualified/>

# Qualified Count Demo {=ex:demo}

## Employee Validation Shape {=ex:EmployeeValidationShape .sh:NodeShape  label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with one work **email** {+#workEmailRule ?sh:property sh:name}.

**Employee must have exactly one work email** {=#workEmailRule .sh:PropertyShape sh:message} requires [email] {+ex:email ?sh:path} to have exactly [1] {sh:qualifiedMinCount sh:qualifiedMaxCount ^^xsd:integer} work email matching **Work Email Shape** {=ex:WorkEmailShape .sh:NodeShape ?sh:qualifiedValueShape}.

**Work Email Shape** {=ex:WorkEmailShape .sh:NodeShape} must be a [literal] {+sh:Literal ?sh:nodeKind} with pattern [company.org] {sh:pattern}.

---

## Test Data {=ex:data .Container}

### Valid Employee {=ex:ValidEmployee ?member}
Email: [john@company.org] {ex:email}

### Invalid Employee {=ex:NoWorkEmployee ?member}
Email: [bob@gmail.com] {ex:email}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

## Expected Validation Results

1. **Valid Employee** - passes (1 work email)
2. **Invalid Employee** - fails (0 work emails)

### 🔍 Test Validation

```bash
node validate.js ./constraints/qualifiedCount.demo.md
```

---
