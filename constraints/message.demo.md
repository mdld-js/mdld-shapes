[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Violation Message {=sh:message .class:MessageConstraint label} Demo

## Demo {=ex:demo ?cat:hasDemo}

This demo demonstrates semantic message design using complex business validation scenarios.

### Shape

The **Business Rule Validation Shape** {=ex:BusinessRuleValidationShape .sh:NodeShape ?cat:hasShape label} targets all [contracts] {+ex:Contract ?sh:targetClass} to validate complex business requirements: **Contract Value Rule** {+ex:ContractValueRule ?sh:property label} and  **Approval Date Rule** {+ex:ApprovalDateRule ?sh:property label}.

### Rules

**Contract value must be positive for financial compliance** {=ex:ContractValueRule .sh:PropertyShape sh:message} ensures [contract value] {+ex:contractValue ?sh:path} is greater than [0] {sh:minInclusive ^^xsd:decimal}.

**Contract must be approved before start date** {=ex:ApprovalDateRule .sh:PropertyShape sh:message}: [approval date] {+ex:approvalDate ?sh:path} is [before start date] {+ex:startDate ?sh:lessThan}.


## 📋 Test Data {=ex:data .Container}

### Valid Contract {=ex:ValidContract .ex:Contract}

Contract that meets all business requirements.

Value: [50000.00] {ex:contractValue ^^xsd:decimal}
Approval Date: [2024-01-15] {ex:approvalDate ^^xsd:date}
Start Date: [2024-02-01] {ex:startDate ^^xsd:date}

### Invalid Contract {=ex:InvalidContract .ex:Contract}

Contract with multiple business rule violations.

Value: [-1000.00] {ex:contractValue ^^xsd:decimal}  # Negative value
Approval Date: [2024-03-01] {ex:approvalDate ^^xsd:date}  # After start date
Start Date: [2024-02-01] {ex:startDate ^^xsd:date}

---

[This demo] {=ex:demo} must produce exactly **2** {cat:expectsViolations ^^xsd:integer} violations.

## Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid Contract** - passes (positive value, approved before start, acceptable risk ✓)
2. **Invalid Contract** - fails two times:
   - **Value violation**: Contract value must be positive for financial compliance ✗
   - **Date violation**: Contract must be approved before start date ✗

### 🔍 Test Validation

```bash
# This should show 2 violations with semantic business messages
ig-cli validate ./constraints/message.md
```

---
