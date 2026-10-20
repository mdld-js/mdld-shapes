[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:disjoint/>

# Disjoint {=ex:demo .Container}

### Label Test Shape {=ex:DisjointExampleShape .sh:NodeShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with **disjoint labels** {+#disjointRule ?sh:property sh:name}.

**Preferred labels must be different from alternative labels** {=#disjointRule .sh:PropertyShape sh:message} requires [preferred labels] {+ex:prefLabel ?sh:path} to be disjoint with [alternative labels] {+ex:altLabel ?sh:disjoint}.

---

### Test Data {=ex:data .Container}

#### Valid Case {=ex:USA ?member}
Preferred Label: [USA] {ex:prefLabel}
Alternative Label: [United States] {ex:altLabel}

#### Invalid Case {=ex:Germany ?member}
Preferred Label: [Germany] {ex:prefLabel}
Alternative Label: [Germany] {ex:altLabel}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results

1. **Valid Case** - passes (labels are different)
2. **Invalid Case** - fails (labels are the same)

### 🔍 Test Validation

```bash
node validate.js ./constraints/disjoint.demo.md
```

---
