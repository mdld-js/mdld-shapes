[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>
[ex] <tag:my@example.org,2026:class/>

# Class Demo {=ex:demo .Container}

## Employee Test Shape {=ex:EmployeeTestShape .sh:NodeShape  label}

All [employees] {+member ?sh:targetObjectsOf} must have **manager** {+#managerClass ?sh:property sh:name} class assigned.

**Manager must be a Person instance** {=#managerClass .sh:PropertyShape sh:message} requires the [manager] {+ex:manager ?sh:path} property to be an instance of a [Person] {+ex:Person ?sh:class}.

---

## 📋 Test Data {=ex:data .Container}

### Valid Employee {=ex:ValidEmployee ?member}
Manager: [john] {+ex:john ?ex:manager .ex:Person}

### Invalid Employee {=ex:InvalidEmployee ?member}
Manager: [robot] {+ex:robot ?ex:manager ex:Role}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

## Expected Validation Results

1. **Valid Employee** - passes (manager is a Person)
2. **Invalid Employee** - fails (manager is not a Person)

## 🔍 Test Validation

```bash
# This should show 1 violation for class constraint violation
node validate.js ./constraints/class.demo.md
```

---
