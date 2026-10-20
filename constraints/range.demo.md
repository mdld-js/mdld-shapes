[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:range/>

# Range Demo {=ex:demo .Container}

## Product Test Shape {=ex:ProductTestShape .sh:NodeShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with conforming **price** {+#priceRange ?sh:property}.

**Price must be between 10 and 100 inclusive** {=#priceRange .sh:PropertyShape sh:message} requires [price] {+ex:price ?sh:path} to be at least [10] {sh:minInclusive ^^xsd:decimal} and at most [100] {sh:maxInclusive ^^xsd:decimal}.

---

## Test Data {=ex:data .Container}

### Valid Product {=ex:ValidProduct ?member}
Price: [50] {ex:price ^^xsd:decimal}

### Invalid Product {=ex:InvalidProduct ?member}
Price: [5] {ex:price ^^xsd:decimal}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results

1. **Valid Product** - passes (price is within range)
2. **Invalid Product** - fails (price is below minimum)

## 🔍 Test Validation

```bash
node validate.js ./constraints/range.demo.md
```

---
