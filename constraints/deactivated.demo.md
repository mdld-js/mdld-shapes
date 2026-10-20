[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:deactivated/>

# Deactivated Demo {=ex:demo .Container}

## Deactivated Example Shape {=ex:DeactivatedExampleShape .sh:NodeShape label}

Validates all **member** {+member ?sh:targetObjectsOf} entities to be an active *user* {+ex:ActiveProperty ?sh:property sh:name} and have an active *category* {+ex:CategoryProperty ?sh:property sh:name}.

**User status must be active** {=ex:ActiveProperty .sh:PropertyShape sh:message} requires [status] {+ex:status ?sh:path} to be [active] {sh:hasValue}.

**Category rule** {=ex:DeactivatedProperty .sh:PropertyShape sh:message} requires [category] {+ex:category ?sh:path} to be [active] {sh:hasValue}. This rule is temporarily [deactivated] {sh:deactivated}.

---

## Test Data {=ex:data .Container}

### Valid Account {=ex:ValidNode ?member}
Status: [active] {ex:status}
Category: [active] {ex:status}

### Invalid Account {=ex:InvalidNode ?member}
Status: [inactive] {ex:status}
Category: [inactive] {ex:status}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

## Expected Validation Results

1. **Valid Account** - passes (status is active)
2. **Invalid Account** - fails (status is inactive)

### 🔍 Test Validation

```bash
node validate.js ./constraints/deactivated.demo.md
```

---
