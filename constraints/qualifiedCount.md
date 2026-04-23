[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# Qualified Count {=sh:qualifiedMinCount .class:QualifiedConstraint label}

> Applies count constraints only to values that meet additional shape criteria {comment}

<http://www.w3.org/ns/shacl#qualifiedMinCount> {?cat:fullIRI}
<http://www.w3.org/ns/shacl#qualifiedMaxCount> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

Qualified count constraints apply count constraints only to values that meet additional shape criteria. This example validates that employees must have exactly one work email (matching the WorkEmailShape pattern).

~~~~~~md
[ex] <tag:my@example.org,2026:qualified/>

## Employee Validation Shape {=ex:EmployeeValidationShape .sh:NodeShape ?cat:hasShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with one work **email** {+ex:#workEmailRule ?sh:property sh:name}.

**Employee must have exactly one work email** {=ex:#workEmailRule .sh:PropertyShape sh:message} requires [email] {+ex:email ?sh:path} to have exactly [1] {sh:qualifiedMinCount sh:qualifiedMaxCount ^^xsd:integer} work email matching **Work Email Shape** {=ex:WorkEmailShape .sh:NodeShape ?sh:qualifiedValueShape}.

**Work Email Shape** {=ex:WorkEmailShape .sh:NodeShape} must be a [literal] {+sh:Literal ?sh:nodeKind} with pattern [company.org] {sh:pattern}.

---

## Test Data {=ex:data .Container}

### Valid Employee {=ex:ValidEmployee ?member}
Email: [john@company.org] {ex:email}

### Invalid Employee {=ex:NoWorkEmployee ?member}
Email: [bob@gmail.com] {ex:email}
~~~~~~

**Expected Result:** 1 violation (NoWorkEmployee fails because it has 0 work emails - the email doesn't match the WorkEmailShape pattern)

---

## 📝 MDLD Syntax Patterns

~~~~~~md
[Property] {+ex:propertyName ?sh:path} must have exactly [count] {sh:qualifiedMinCount sh:qualifiedMaxCount ^^xsd:integer} values that conform to [Shape] {=ex:ShapeName ?sh:qualifiedValueShape}.
~~~~~~

**Use for:** Work email validation, primary contact validation, conditional counting

**Important:**
- Only counts values that conform to the qualified shape
- Other values are ignored for the count
- Use for conditional validation scenarios

---

## 🔧 Implementation Guidelines

**When to use:** Only certain values should be counted

**Best practices:**
- Define the qualified shape clearly
- Test with mixed value scenarios

**Common pitfalls:**
- ❌ Forgetting to define the qualified shape
- ❌ Confusing qualified count with regular count
