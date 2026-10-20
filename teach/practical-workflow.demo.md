[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:product/>

# Practical Workflow Demo {=ex:demo ?cat:hasDemo}

This demo demonstrates a complete e-commerce product validation shape with multiple constraints: required properties, value constraints, enumeration, optional properties, and pattern matching.

## Product Validation Shape {=ex:ProductShape .sh:NodeShape label}

Validates all [Product] {+ex:Product ?sh:targetClass} instances to have mandatory [name] {+ex:NameRule ?sh:property sh:name}, [price] {+ex:PriceRule ?sh:property sh:name} and [category] {+ex:CategoryRule ?sh:property sh:name} assigned, must have a positive [price] {+ex:PriceRule ?sh:property sh:name}, must have an allowed [category] {+ex:CategoryRule ?sh:property sh:name}, an optional [description] {+ex:DescriptionRule ?sh:property sh:name} and a correct [SKU] {+ex:SKURule ?sh:property sh:name}.

### Property Rules

**Product name is required** {=ex:NameRule .sh:PropertyShape sh:message} requires that [name] {+ex:name ?sh:path} must have exactly [1] {sh:minCount sh:maxCount ^^xsd:integer} value.

**Product price is required and positive** {=ex:PriceRule .sh:PropertyShape sh:message} requires that [price] {+ex:price ?sh:path} must have exactly [1] {sh:minCount sh:maxCount ^^xsd:integer} value and be at least [0.01] {sh:minInclusive ^^xsd:decimal}.

**Product category is required and from allowed list** {=ex:CategoryRule .sh:PropertyShape sh:message} requires that [category] {+ex:category ?sh:path} must have exactly [1] {sh:minCount sh:maxCount ^^xsd:integer} value and be in **Allowed Categories List** {=ex:cat-l1 ?sh:in .rdf:List}: [Electronics] {rdf:first}, then [rest] {=ex:cat-l2 ?rdf:rest} by [Clothing] {rdf:first} and [nil] {+rdf:nil ?rdf:rest}. {=}

**Product description is optional but must be 10+ characters** {=ex:DescriptionRule .sh:PropertyShape sh:message} requires that [description] {+ex:description ?sh:path} must have at least [10] {sh:minLength ^^xsd:integer} characters.

**Product SKU must match pattern** {=ex:SKURule .sh:PropertyShape sh:message} requires that [sku] {+ex:sku ?sh:path} must match [PROD-\d{5}] {sh:pattern}.

---

## Test Data {=ex:data .Container}

### Valid Product {=ex:Laptop .ex:Product ?member}
Name: [MacBook Pro] {ex:name}
Price: [1299.99] {ex:price ^^xsd:decimal}
Category: [Electronics] {ex:category}
Description: [High-performance laptop] {ex:description}
SKU: [PROD-12345] {ex:sku}

### Invalid Product - Missing Name {=ex:InvalidProduct1 .ex:Product ?member}
Price: [99.99] {ex:price ^^xsd:decimal}
Category: [Clothing] {ex:category}
SKU: [PROD-67890] {ex:sku}

### Invalid Product - Negative Price {=ex:InvalidProduct2 .ex:Product ?member}
Name: [T-Shirt] {ex:name}
Price: [-10.00] {ex:price ^^xsd:decimal}
Category: [Clothing] {ex:category}
SKU: [PROD-11111] {ex:sku}

### Invalid Product - Invalid Category {=ex:InvalidProduct3 .ex:Product ?member}
Name: [Shoes] {ex:name}
Price: [50.00] {ex:price ^^xsd:decimal}
Category: [Books] {ex:category}
SKU: [PROD-22222] {ex:sku}

### Invalid Product - Short Description {=ex:InvalidProduct4 .ex:Product ?member}
Name: [Hat] {ex:name}
Price: [25.00] {ex:price ^^xsd:decimal}
Category: [Clothing] {ex:category}
Description: [Small] {ex:description}
SKU: [PROD-33333] {ex:sku}

### Invalid Product - Invalid SKU Pattern {=ex:InvalidProduct5 .ex:Product ?member}
Name: [Jacket] {ex:name}
Price: [150.00] {ex:price ^^xsd:decimal}
Category: [Clothing] {ex:category}
SKU: [SKU-99999] {ex:sku}

---

{=ex:demo} must produce exactly **5** {cat:expectsViolations ^^xsd:integer} violations.

### Expected Validation Results

1. **Valid Product (Laptop)** - passes (all constraints satisfied)
2. **Invalid Product 1** - fails (missing name)
3. **Invalid Product 2** - fails (negative price)
4. **Invalid Product 3** - fails (invalid category - not in allowed list)
5. **Invalid Product 4** - fails (description too short - less than 10 characters)
6. **Invalid Product 5** - fails (SKU doesn't match pattern PROD-\d{5})

### 🔍 Test Validation

```bash
node validate.js ./teach/practical-workflow.demo.md
```
