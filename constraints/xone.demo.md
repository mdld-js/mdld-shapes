[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:xone/>

# XONE Demo {=ex:demo .Container}

This demo demonstrates the XONE constraint, which requires a value to conform to exactly one of several shapes (exclusive OR).

## Role Validation Shape {=ex:RoleValidationShape .sh:NodeShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with **Role must be exactly one type** {sh:message}.

**Options List** {=ex:xone-l1 ?sh:xone .rdf:List}: [Admin Role] {+ex:adminRole ?rdf:first}, then [followed] {=ex:xone-l2 ?rdf:rest} by [User Role] {+ex:userRole ?rdf:first} and [nil] {+rdf:nil ?rdf:rest}. {=}

**Admin Role** {=ex:adminRole .sh:PropertyShape} ensures [role] {+ex:role ?sh:path} is exactly [admin] {sh:hasValue}.

**User Role** {=ex:userRole .sh:PropertyShape} ensures [role] {+ex:role ?sh:path} is exactly [user] {sh:hasValue}.

---

## Test Data {=ex:data .Container}

### Valid Admin {=ex:ValidAdmin ?member}
Role: [admin] {ex:role}

### Valid User {=ex:ValidUser ?member}
Role: [user] {ex:role}

### Invalid - No Role {=ex:NoRole ?member}
Role: [guest] {ex:role}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

## Expected Validation Results

1. **Valid Admin** - passes (role is admin - matches exactly one)
2. **Valid User** - passes (role is user - matches exactly one)
3. **Invalid - No Role** - fails (role is guest - matches none)

### 🔍 Test Validation

```bash
node validate.js ./constraints/xone.demo.md
```
