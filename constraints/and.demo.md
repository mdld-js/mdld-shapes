[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:and/>

# AND Demo {=ex:demo .prov:Entity label}

## Product Validation Shape {=ex:ProductValidationShape .sh:NodeShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with **Product must have price and category** {sh:message}.

**Constraints List** {=ex:and-l1 ?sh:and .rdf:List}: [Price Required] {+ex:priceRequired ?rdf:first}, then [followed] {=ex:and-l2 ?rdf:rest} by [Category Required] {+ex:categoryRequired ?rdf:first} and [nil] {+rdf:nil ?rdf:rest}. {=}

**Price Required** {=ex:priceRequired .sh:PropertyShape} ensures [price] {+ex:price ?sh:path} has at least [1] {sh:minCount ^^xsd:integer} value.

**Category Required** {=ex:categoryRequired .sh:PropertyShape} ensures [category] {+ex:category ?sh:path} has at least [1] {sh:minCount ^^xsd:integer} value.

---

## Test Data {=ex:data .Container}

### Valid Product {=ex:ValidProduct ?member}
Price: [999] {ex:price ^^xsd:integer}
Category: [Electronics] {ex:category}

### Invalid Product {=ex:MissingPriceProduct ?member}
Category: [Electronics] {ex:category}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results

1. **Valid Product** - passes (has price and category)
2. **Invalid Product** - fails (missing price)

### 🔍 Test Validation

```bash
node validate.js ./constraints/and.demo.md
```

---
