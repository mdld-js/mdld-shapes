[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:not/>

# NOT {=sh:not .class:LogicalConstraint label} Demo

## Demo {=ex:demo ?cat:hasDemo}

### User Status Shape {=ex:UserStatusShape .sh:NodeShape  label}

Validates all [member] {+member ?sh:targetObjectsOf} entities to not conform to the forbidden **shape** {+ex:ForbiddenStatusShape ?sh:not}.

**Forbidden Status Shape** {=ex:ForbiddenStatusShape .sh:NodeShape} requires [status] {+ex:status ?sh:path} to be exactly [deleted] {sh:hasValue}.

---

### Test Data {=ex:data .Container}

#### Valid User {=ex:ValidActiveUser ?member}
Status: [active] {ex:status}

#### Invalid User {=ex:InvalidDeletedUser ?member}
Status: [deleted] {ex:status}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results

1. **Valid User** - passes (status is not deleted)
2. **Invalid User** - fails (status is deleted)

### 🔍 Test Validation

```bash
node validate.js ./constraints/not.demo.md
```

---
