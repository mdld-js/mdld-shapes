[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# AND Constraint {=sh:and .class:LogicalConstraint label}

> Requires all constraints in the list to be satisfied {comment}

<http://www.w3.org/ns/shacl#and> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

The AND constraint requires all specified constraints to be satisfied. This example validates that products must have both a price and a category.

~~~~~~md
[ex] <tag:my@example.org,2026:and/>

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
~~~~~~

**Expected Result:** 1 violation (MissingPriceProduct fails because it lacks price)

---

## 📝 MDLD Syntax Patterns

~~~~~~md
[Constraints List] {=ex:and-l1 ?sh:and .rdf:List}: [First] {+ex:first ?rdf:first}, then [rest] {=ex:and-l2 ?rdf:rest} by [Second] {+ex:second ?rdf:first} and [nil] {+rdf:nil ?rdf:rest}. {=}
~~~~~~

**Use for:** Multi-property validation, cross-field validation, business rule combinations

**Important:**
- Uses RDF list syntax (rdf:first, rdf:rest, rdf:nil)
- All constraints in list must be satisfied
- Use unique list identifiers (and-l1, and-l2)
- Always reset subject with {=} after list definition

---

## 🔧 Implementation Guidelines

**When to use:** Multiple conditions must all pass

**Best practices:**
- Keep list short (2-3 constraints)
- Test each constraint individually first

**Common pitfalls:**
- ❌ Forgetting subject reset {=} after list
- ❌ Reusing list identifiers causing collisions
