[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>
[ex] <cat:example/datatype/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Data Type {=sh:datatype .class:Constraint label} Demo

## 🛡️ Self-Validation Demo {=ex:demo ?cat:hasDemo}

### Shapes

The **Product Test Shape** {=ex:ProductTestShape .sh:NodeShape ?cat:hasShape label} validates both [Valid Product] {+ex:ValidProduct ?sh:targetNode} and [Invalid Product] {+ex:InvalidProduct ?sh:targetNode} entities to demonstrate datatype constraints: **Decimal Price Rule** {+ex:#priceDecimal ?sh:property} and **Integer Quantity Rule** {+ex:#quantityInteger ?sh:property}.

### Rules

**Product price must be a decimal number** {=ex:#priceDecimal .sh:PropertyShape sh:message} requires the [price] {+ex:price ?sh:path} property to be a [decimal] {+xsd:decimal ?sh:datatype} value for accurate calculations.

**Product quantity must be an integer** {=ex:#quantityInteger .sh:PropertyShape sh:message} requires the [quantity] {+ex:quantity ?sh:path} property to be an [integer] {+xsd:integer ?sh:datatype} value.

---

## Demo {=ex:demo}

### 📋 Test Data {=ex:data .Container}

#### Valid Product {=ex:ValidProduct ?member}

Price: [29.99] {ex:price ^^xsd:decimal}
Quantity: [5] {ex:quantity ^^xsd:integer}

#### Invalid Product {=ex:InvalidProduct ?member}

Price: [29.99] {ex:price ^^xsd:string}
Quantity: [five] {ex:quantity ^^xsd:string}

---

[Demo] {=ex:demo} must produce exactly **2** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid Product** - passes (decimal price, integer quantity)
2. **Invalid Product** - fails 2 times (price is string instead of decimal, quantity must be integer)

### 🔍 **Test Validation**

```bash
# This should show 1 violation for incorrect datatype
ig-cli validate ./constraints/datatype.md
```

---
