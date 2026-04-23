[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>

# Min Count {=sh:minCount .class:Constraint label}

> Specifies the minimum number of values a property must have {comment}

<http://www.w3.org/ns/shacl#minCount> {?cat:fullIRI}

# Max Count {=sh:maxCount .class:Constraint label}

> Specifies the maximum number of values a property can have {comment}

<http://www.w3.org/ns/shacl#maxCount> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

Count constraints specify the minimum and maximum number of values a property must have. This example validates that email must be exactly one value.

~~~~~~md
[ex] <tag:my@example.org,2026:count/>

## Person Test Shape {=ex:PersonTestShape .sh:NodeShape ?cat:hasShape sh:name}

Validates all [member] {+member ?sh:targetObjectsOf} entities with **email** {+ex:#emailExact ?sh:property sh:name}.

**Email must be exactly one** {=ex:#emailExact .sh:PropertyShape sh:message} requires [email] {+ex:email ?sh:path} to have exactly [1] {sh:minCount sh:maxCount ^^xsd:integer} value.

---

## Test Data {=ex:data .Container}

### Valid Person {=ex:ValidPerson ?member}
Email: [work@example.com] {ex:email}

### Invalid Person {=ex:InvalidPerson ?member}
Email: [work@example.com] {ex:email}
Email: [personal@example.com] {ex:email}
~~~~~~

**Expected Result:** 1 violation (InvalidPerson fails because it has two emails instead of one)

---

## 📝 MDLD Syntax Patterns

~~~~~~md
[Property] {+ex:propertyName ?sh:path} must have at least [min] {sh:minCount ^^xsd:integer} and at most [max] {sh:maxCount ^^xsd:integer} values.
~~~~~~

**Use for:** Required properties, single-valued properties, multi-valued limits

**Important:**
- Use minCount alone for "at least X values"
- Use maxCount alone for "at most X values"
- Use both with same value for "exactly X values"
- Empty properties fail minCount validation

---

## 🔧 Implementation Guidelines

**When to use:** Ensure property has correct number of values

**Best practices:**
- Use minCount: 1 for required properties
- Use both minCount and maxCount: 1 for single-valued properties

**Common pitfalls:**
- ❌ Forgetting to specify the datatype ^^xsd:integer
- ❌ Using negative values for counts
- ❌ Confusing minCount with maxCount
