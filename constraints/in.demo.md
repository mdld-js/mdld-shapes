[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:in/>

# Value Enumeration Demo {=ex:demo .Container} 


## Status Validation Shape {=ex:StatusValidationShape .sh:NodeShape  label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with correct **status** {+#allowedStatus ?sh:property sh:name}.

**Status must be Active or Inactive** {=#allowedStatus .sh:PropertyShape sh:message} requires [status] {+ex:status ?sh:path} to be in allowed list.

**Allowed Values List** {=ex:in-l1 ?sh:in .rdf:List}: **Active** {+ex:Active ?rdf:first} [or] {=ex:in-l2 ?rdf:rest} **Inactive** {+ex:Inactive ?rdf:first} - [only] {+rdf:nil ?rdf:rest} these 2 values are allowed.

---

## Test Data {=ex:data .Container}

### Valid Employee {=ex:ValidEmployee ?member}
Status: [Active] {+ex:Active ?ex:status}

### Invalid Employee {=ex:InvalidStatusEmployee ?member}
Status: [Pending] {+ex:Pending ?ex:status}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

## Expected Validation Results 

1. **Valid Employee** - passes (status is Active)
2. **Invalid Employee** - fails (status is Pending, not allowed)

### 🔍 Test Validation

```bash
node validate.js ./constraints/in.demo.md
```

---
