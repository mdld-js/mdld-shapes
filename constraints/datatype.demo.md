[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>
[ex] <tag:my@example.org,2026:datatype/>

# Data Type Demo {=ex:demo .Container}

## Product Test Shape {=ex:ProductTestShape .sh:NodeShape sh:name}

Validates [Valid Product] {+ex:ValidProduct ?sh:targetNode} and [Invalid Product] {+ex:InvalidProduct ?sh:targetNode} with **price** {+#priceDecimal ?sh:property sh:name}.

**Price must be decimal** {=#priceDecimal .sh:PropertyShape sh:message} requires the [price] {+ex:price ?sh:path} property to be a [decimal] {+xsd:decimal ?sh:datatype} value.

---

## 📋 Test Data {=ex:data .Container}

### Valid Product {=ex:ValidProduct ?member}
Price: [29.99] {ex:price ^^xsd:decimal}

### Invalid Product {=ex:InvalidProduct ?member}
Price: [29.99] {ex:price ^^xsd:string}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results

1. **Valid Product** - passes (price is decimal)
2. **Invalid Product** - fails (price is string, not decimal)

### 🔍 Test Validation

```bash
node validate.js ./constraints/datatype.demo.md
```

---
