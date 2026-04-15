[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/logical/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# AND Constraint {=sh:and .class:LogicalConstraint label} Demo

## Demo {=ex:demo ?cat:hasDemo}

This demo demonstrates logical AND constraint using product validation scenario.

### Product Validation Demo

The **Product Validation Shape** {=ex:ProductValidationShape .sh:NodeShape ?cat:hasShape label} targets all [products] {+ex:Product ?sh:targetClass} to validate multiple conditions: **Product must have a price and at least 1 category defined** {sh:message}

Product must satisfy all constraints using verbose RDF list syntax for sh:and.

**Constraints List** {=ex:and-l1 ?sh:and .rdf:List}: [Min Count] {+ex:priceRequired ?rdf:first}, then [followed] {=ex:and-l2 ?rdf:rest} by the second constraint [Class] {+ex:categoryRequired ?rdf:first} and a [nil] {+rdf:nil ?rdf:rest} node (end of list). Reset current subject to avoid accidental further assignments with {=}.

**Price Required Constraint** {=ex:priceRequired .sh:PropertyShape} ensures the [price] {+ex:price ?sh:path} property has at least [1] {sh:minCount ^^xsd:integer} value.

**Category Required Constraint** {=ex:categoryRequired .sh:PropertyShape} ensures the [category] {+ex:category ?sh:path} property has at least [1] {sh:minCount ^^xsd:integer} value.

{=ex:demo}

### 📋 Test Data {=ex:data .Container}

#### Valid Product {=ex:ValidProduct .ex:Product}

A valid product with both price and category.

Name: [Laptop] {ex:name}
Price: [999] {ex:price ^^xsd:integer}
Category: [Electronics] {ex:category}

#### Missing Price Product {=ex:MissingPriceProduct .ex:Product}

A product missing price.

Name: [Phone] {ex:name}
Category: [Electronics] {ex:category}

#### Missing Category Product {=ex:MissingCategoryProduct .ex:Product}

A product missing category.

Name: [Tablet] {ex:name}
Price: [299] {ex:price ^^xsd:integer}

#### Empty Product {=ex:EmptyProduct .ex:Product}

A product with no required properties.

Name: [Monitor] {ex:name}

---

[This demo] {=ex:demo} must produce exactly **3** {cat:expectsViolations ^^xsd:integer} violations.

### Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid Product** - passes (has price ✓, has category ✓)
2. **Missing Price Product** - fails once (missing price ✗, has category ✓)
3. **Missing Category Product** - fails once (has price ✓, missing category ✗)
4. **Empty Product** - fails once (missing price ✗, missing category ✗)

Note: Each failing node produces one violation for sh:and, even if multiple constraints fail.

### 🔍 Test Validation

```bash
# This should show 3 violations - products missing required properties
ig-cli validate ./constraints/logical.md
```

---
