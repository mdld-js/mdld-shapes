[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:hasvalue/>

# Has Value Demo {=ex:demo .Container} 

## System Status Test Shape {=ex:SystemStatusTestShape .sh:NodeShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with active **status** {+#statusRequired ?sh:property sh:name}.

**Status must be active** {=#statusRequired .sh:PropertyShape sh:message} requires [status] {+ex:status ?sh:path} to be exactly [active] {sh:hasValue ^^xsd:string}.

---

### Test Data {=ex:data .Container}

#### Valid Server {=ex:MainServer ?member}
Status: [active] {ex:status}

#### Invalid Server {=ex:BackupServer ?member}
Status: [standby] {ex:status}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results 

1. **Valid Server** - passes (status is active)
2. **Invalid Server** - fails (status is standby, not active)

### 🔍 Test Validation

```bash
node validate.js ./constraints/hasvalue.demo.md
```

---
