[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# Minimum Inclusive {=sh:minInclusive .class:Constraint label}

> Specifies the minimum inclusive value for range constraints {comment}

<http://www.w3.org/ns/shacl#minInclusive> {?cat:fullIRI}

# Maximum Inclusive {=sh:maxInclusive .class:Constraint label}

> Specifies the maximum inclusive value for range constraints {comment}

<http://www.w3.org/ns/shacl#maxInclusive> {?cat:fullIRI}

# Minimum Exclusive {=sh:minExclusive .class:Constraint label}

> Specifies the minimum exclusive value for range constraints {comment}

<http://www.w3.org/ns/shacl#minExclusive> {?cat:fullIRI}

# Maximum Exclusive {=sh:maxExclusive .class:Constraint label}

> Specifies the maximum exclusive value for range constraints {comment}

<http://www.w3.org/ns/shacl#maxExclusive> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

Range constraints specify minimum and maximum values for numeric or date properties. This example validates that product prices must be between 10 and 100 inclusive.

~~~~~~md
[ex] <tag:my@example.org,2026:range/>

## Product Test Shape {=ex:ProductTestShape .sh:NodeShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with conforming **price** {+ex:#priceRange ?sh:property}.

**Price must be between 10 and 100 inclusive** {=ex:#priceRange .sh:PropertyShape sh:message} requires [price] {+ex:price ?sh:path} to be at least [10] {sh:minInclusive ^^xsd:decimal} and at most [100] {sh:maxInclusive ^^xsd:decimal}.

---

## Test Data {=ex:data .Container}

### Valid Product {=ex:ValidProduct ?member}
Price: [50] {ex:price ^^xsd:decimal}

### Invalid Product {=ex:InvalidProduct ?member}
Price: [5] {ex:price ^^xsd:decimal}
~~~~~~

**Expected Result:** 1 violation (InvalidProduct fails because price is 5, below the minimum of 10)

---

## 📝 MDLD Syntax Patterns

~~~~~~md
[Property] {+ex:propertyName ?sh:path} must be at least [min] {sh:minInclusive ^^xsd:datatype} and at most [max] {sh:maxInclusive ^^xsd:datatype}.
~~~~~~

**Use for:** Price validation, age restrictions, date validation, numeric ranges

**Important:**
- Works with ordered datatypes (numbers, dates, times)
- Inclusive bounds include boundary values
- Exclusive bounds exclude boundary values
- Use minInclusive for "at least X", maxInclusive for "at most X"

---

## 🔧 Implementation Guidelines

**When to use:** Values must be within numeric or date bounds

**Best practices:**
- Use inclusive bounds for "at least/at most"
- Use exclusive bounds for "greater than/less than"
- Test with boundary values

**Common pitfalls:**
- ❌ Using wrong inclusive/exclusive bound
- ❌ Forgetting to specify the datatype
- ❌ Confusing inclusive with exclusive bounds
