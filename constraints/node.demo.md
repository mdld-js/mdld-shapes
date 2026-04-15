[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/node/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Node Constraint {=sh:node .class:NodeConstraint label} Demo

## Demo {=ex:demo ?cat:hasDemo}

This demo demonstrates node constraint using address validation scenario.

### Employee Validation Shape {=ex:EmployeeValidationShape .sh:NodeShape ?cat:hasShape label}

Targets all [employees] {+ex:Employee ?sh:targetClass} to validate address structure: **Employee must have valid address** {=ex:#addressRule .sh:PropertyShape ?sh:property sh:message}. Each [address] {+ex:address ?sh:path} property must point at a proper [Address node] {+ex:AddressShape ?sh:node} validation.

#### Address Shape {=ex:AddressShape .sh:NodeShape label}

Defines address requirements: **Street Rule** {=ex:#streetProperty ?sh:property label} and **City Rule** {=ex:#cityProperty ?sh:property label}.

**Street Rule** {=ex:#streetProperty .sh:PropertyShape} validates the [street] {+ex:street ?sh:path} property with at least [5] {sh:minLength ^^xsd:integer} characters.

**City Rule** {=ex:#cityProperty .sh:PropertyShape} validates the [city] {+ex:city ?sh:path} property with at least [2] {sh:minLength ^^xsd:integer} characters.

---

### 📋 Test Data {=ex:data .Container}

#### Valid Employee {=ex:ValidEmployee .ex:Employee}

An employee with a complete, valid address.

Name: [John Doe] {ex:name}

Address: [Valid Address] {=ex:ValidAddress .ex:Address ?ex:address}
Street: [Main Street] {ex:street}
City: [New York] {ex:city}

#### Invalid Employee - Short Address {=ex:InvalidEmployee .ex:Employee}

An employee with an address that has insufficient detail.

Name: [Jane Smith] {ex:name}

Address: [Short Address] {=ex:ShortAddress .ex:Address ?ex:address}
Street: [St] {ex:street}
City: [NY] {ex:city}

#### Employee with Literal Address {=ex:LiteralEmployee .ex:Employee}

An employee with a literal address (node constraint doesn't apply to literals).

Name: [Bob Wilson] {ex:name}
Address: [123 Main St, Anytown] {ex:address}

---

[This demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid Employee** - passes (address node conforms to AddressShape ✓)
2. **Invalid Employee - Short Address** - fails once (address node doesn't conform to AddressShape ✗)
3. **Employee with Literal Address** - passes (literal values are not validated by sh:node ✓)

Note: `sh:node` only applies to node values (IRIs/blank nodes), not literal values.

### 🔍 Test Validation

```bash
# This should show 1 violation - address with insufficient detail
ig-cli validate ./constraints/node.md
```

---
