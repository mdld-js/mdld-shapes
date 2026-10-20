[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:node/>

# Node Demo {=ex:demo .Container}

## Employee Validation Shape {=ex:EmployeeValidationShape .sh:NodeShape  label}

Validates all [member] {+member ?sh:targetObjectsOf} entities to have correct **address** {+#addressRule ?sh:property sh:name}.

**Employee must have valid address** {=#addressRule .sh:PropertyShape sh:message} requires [address] {+ex:address ?sh:path} to conform to [Address Shape] {+ex:AddressShape ?sh:node}.

**Address Shape** {=ex:AddressShape .sh:NodeShape} requires [street] {+ex:street ?sh:path} to have at least [5] {sh:minLength ^^xsd:integer} characters.

---

## Test Data {=ex:data .Container}

### Valid Employee {=ex:ValidEmployee ?member}
Address: [Valid Address] {=ex:ValidAddress .ex:Address ?ex:address}
Street: [Main Street] {ex:street}

### Invalid Employee {=ex:InvalidEmployee ?member}
Address: [Short Address] {=ex:ShortAddress .ex:Address ?ex:address}
Street: [St] {ex:street}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

## Expected Validation Results

1. **Valid Employee** - passes (address conforms to AddressShape)
2. **Invalid Employee** - fails (address doesn't conform to AddressShape)

## 🔍 Test Validation

```bash
node validate.js ./constraints/node.demo.md
```

---
