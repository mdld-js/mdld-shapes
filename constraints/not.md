[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# NOT Constraint {=sh:not .class:LogicalConstraint label}

> Requires value nodes to NOT conform to a given shape {comment}

<http://www.w3.org/ns/shacl#not> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

The NOT constraint requires value nodes to NOT conform to a given shape. This example validates that users cannot have a deleted status.

~~~~~~md
[ex] <tag:my@example.org,2026:not/>

## User Status Shape {=ex:UserStatusShape .sh:NodeShape ?cat:hasShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities to not conform to the forbidden **shape** {+ex:ForbiddenStatusShape ?sh:not}.

**Forbidden Status Shape** {=ex:ForbiddenStatusShape .sh:NodeShape} requires [status] {+ex:status ?sh:path} to be exactly [deleted] {sh:hasValue}.

---

## Test Data {=ex:data .Container}

### Valid User {=ex:ValidActiveUser ?member}
Status: [active] {ex:status}

### Invalid User {=ex:InvalidDeletedUser ?member}
Status: [deleted] {ex:status}
~~~~~~

**Expected Result:** 1 violation (InvalidDeletedUser fails because status is deleted, which conforms to the forbidden shape)

---

## 📝 MDLD Syntax Patterns

~~~~~~md
[Shape] {=ex:Shape .sh:NodeShape} must not conform to [Forbidden Shape] {+ex:ForbiddenShape ?sh:not}.
~~~~~~

**Use for:** Forbidden values, exclusion patterns, business rule negation

**Important:**
- Forbidden shape defines pattern to reject
- Nodes not matching forbidden shape pass automatically
- Can be used with PropertyShape and NodeShape

---

## 🔧 Implementation Guidelines

**When to use:** Certain values must be explicitly prohibited

**Best practices:**
- Keep forbidden shapes simple
- Use descriptive names for forbidden shapes

**Common pitfalls:**
- ❌ Creating circular dependencies
- ❌ Making forbidden shapes too complex
