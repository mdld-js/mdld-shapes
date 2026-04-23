[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>

# Node Kind {=sh:nodeKind .class:Constraint label}

> Expects a node to be of a specific kind (blank node, IRI, or literal) {comment}

<http://www.w3.org/ns/shacl#nodeKind> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

The nodeKind constraint expects a node to be of a specific kind (blank node, IRI, or literal). This example validates that content must be literal and references must be IRIs.

~~~~~~md
[ex] <tag:my@example.org,2026:nodekind/>

## Document Test Shape {=ex:DocumentTestShape .sh:NodeShape ?cat:hasShape label}

Validates [Valid Document] {+ex:ValidDocument ?sh:targetNode} and [Invalid Document] {+ex:InvalidDocument ?sh:targetNode} with literal **content** {+ex:#contentLiteral ?sh:property sh:name} and IRI for **reference** {+ex:#referenceIRI ?sh:property sh:name}.

**Content must be literal** {=ex:#contentLiteral .sh:PropertyShape sh:message} requires [content] {+ex:content ?sh:path} to be a [Literal] {+sh:Literal ?sh:nodeKind}.

**Reference must be IRI** {=ex:#referenceIRI .sh:PropertyShape sh:message} requires [reference] {+ex:reference ?sh:path} to be an [IRI] {+sh:IRI ?sh:nodeKind}.

---

## Test Data {=ex:data .Container}

### Valid Document {=ex:ValidDocument ?member}
Content: [text] {ex:content}
Reference: <https://example.org> {?ex:reference}

### Invalid Document {=ex:InvalidDocument ?member}
Content: <https://example.org> {?ex:content}
Reference: [text] {ex:reference}
~~~~~~

**Expected Result:** 2 violations (InvalidDocument fails twice: content is IRI not literal, reference is text not IRI)

---

## 📝 MDLD Syntax Patterns

~~~~~~md
[Property] {+ex:propertyName ?sh:path} must be a [NodeKind] {+sh:NodeKind ?sh:nodeKind}.
~~~~~~

**Use for:** Type safety, IRI vs literal validation

**Important:**
- MDLD doesn't produce blank nodes (focus on IRI/Literal)
- IRI values use `<URL> {?property}` syntax
- Literal values use `[text] {property}` syntax
- Use datatype constraint for literal types, class for IRI types

---

## 🔧 Implementation Guidelines

**When to use:** Ensure references are IRIs, content is literal

**Best practices:**
- Use correct syntax for IRI vs literal
- Combine with datatype for literal types, class for IRI types

**Common pitfalls:**
- ❌ Wrong syntax for IRI vs literal
- ❌ Confusing with datatype (nodeKind for IRI/Literal, datatype for literal types)
