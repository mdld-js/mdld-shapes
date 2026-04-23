[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/targeting/>


# Target Class Demo {=ex:demo} 

This demo demonstrates class-based targeting using a product management scenario where all Product instances are validated for business requirements:

The **Product Validation Shape** {=ex:ProductValidationShape .sh:NodeShape ?cat:hasShape label} targets all [Product] {+ex:Product ?sh:targetClass} instances to validate core product requirements: [name] {=#productName ?sh:property sh:name} and [price] {+#productPrice ?sh:property sh:name}.

**Product must have exactly one name** {=#productName .sh:PropertyShape sh:message} requires the [name] {+ex:name ?sh:path} property to have exactly [1] {sh:minCount sh:maxCount ^^xsd:integer} value.

**Product price must be positive** {=#productPrice .sh:PropertyShape sh:message} requires the [price] {+ex:price ?sh:path} property to be at least [0.01] {sh:minInclusive ^^xsd:decimal}

---

## 📋 Test Data {=ex:data .Container}

### Laptop {=ex:Laptop .ex:Product}

A valid product with name and positive price.

Name: [MacBook Pro] {ex:name}
Price: [1299.99] {ex:price ^^xsd:decimal}

### Invalid Product {=ex:InvalidProduct .ex:Product}

A product with missing name and negative price.

Price: [-50.00] {ex:price ^^xsd:decimal}

### Service {=ex:Service .ex:Service}

A service that shouldn't be targeted by product validation.

Name: [Consulting] {ex:name}
Price: [200.00] {ex:price ^^xsd:decimal}

---

[Demo] {=ex:demo} must produce exactly **2** {cat:expectsViolations ^^xsd:integer} violations.

## Expected Validation Results

1. **Laptop** - passes (has name and positive price)
2. **Invalid Product** - fails twice (missing name AND negative price)
3. **Service** - not validated (not a Product, so not targeted by class-based validation)

Note: Class-based targeting validates all instances of the specified class, making it ideal for domain-wide validation rules.

### 🔍 Test Validation

```bash
# This should show 2 violations - missing name and negative price
ig-cli validate ./targeting/targetClass.md
```

---
