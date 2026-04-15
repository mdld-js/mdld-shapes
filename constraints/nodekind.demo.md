[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>
[ex] <cat:example/nodekind/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Node Kind {=sh:nodeKind .class:Constraint label} Demo

## Demo {=ex:demo ?cat:hasDemo}

This demo demonstrates node kind constraints using document validation scenario.

Validates all [Document] {+ex:Document ?sh:targetClass} entities to demonstrate node kind constraints: **Content Literal Rule** {+ex:#contentLiteral ?sh:property} and **Reference IRI Rule** {+ex:#referenceIRI ?sh:property}.

## Rules

**Document content must be a literal** {=ex:#contentLiteral .sh:PropertyShape sh:message} -  all [content] {+ex:content ?sh:path} must be a [Literal] {+sh:Literal ?sh:nodeKind}.

**Document reference must be an IRI** {=ex:#referenceIRI .sh:PropertyShape sh:message} - each [reference] {+ex:reference ?sh:path} must be an [IRI] {+sh:IRI ?sh:nodeKind}.

---

### 📋 Test Data {=ex:data .Container}

#### Valid Document {=ex:ValidDocument .ex:Document ?member}

Content: [This is the document content] {ex:content}
Reference: <https://example.org/reference> {?ex:reference}

#### Invalid Document {=ex:InvalidDocument .ex:Document ?member}

Content: <https://example.org/invalid-content> {?ex:content}
Reference: [Invalid Reference String] {ex:reference}

---

[Demo] {=ex:demo} must produce exactly **2** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid Document** - passes (title is IRI, content is literal, reference is IRI)
2. **Invalid Document** - fails 2 times (title is string instead of IRI and content is IRI, but should be a literal)

Note: SHACL may report only one violation per focus node. The Invalid Document has multiple node kind violations but only the first is reported.

### 🔍 Test Validation

```bash
# This should show 1 violation for node kind constraint violation
ig-cli validate ./constraints/nodekind.demo.md
```
