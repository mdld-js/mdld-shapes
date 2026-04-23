[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# Unique Languages {=sh:uniqueLang .class:UniqueLanguageConstraint label}

> Ensures that language tags of string literals are unique within a property {comment}

<http://www.w3.org/ns/shacl#uniqueLang> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

The uniqueLang constraint ensures that language tags of string literals are unique within a property. This example validates that document titles cannot have duplicate language tags.

~~~~~~md
[ex] <tag:my@example.org,2026:uniqueLang/>

## Unique Language Example Shape {=ex:UniqueLangExampleShape .sh:NodeShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with unique **language** {+ex:TitleProperty ?sh:property sh:name}.

**Each language tag must appear only once** {=ex:TitleProperty .sh:PropertyShape sh:message} requires [title] {+ex:title ?sh:path} values to have [true] {sh:uniqueLang ^^xsd:boolean}.

---

## Test Data {=ex:data .Container}

### Valid Document {=ex:ValidNode ?member}
Title: [Hello World] {ex:title @en}
Title: [Bonjour Monde] {ex:title @fr}

### Invalid Document {=ex:InvalidNode ?member}
Title: [Hello World] {ex:title @en}
Title: [Hola Mundo] {ex:title @en}
~~~~~~

**Expected Result:** 1 violation (InvalidDocument fails because it has duplicate @en language tags)

---

## 📝 MDLD Syntax Patterns

~~~~~~md
[Property] {+ex:propertyName ?sh:path} values have [true] {sh:uniqueLang ^^xsd:boolean}.
~~~~~~

**Use for:** Multilingual content, translation management, content localization

**Important:**
- Only applies to language-tagged string literals
- Prevents duplicate language tags within same property
- Use @lang syntax for language-tagged literals

---

## 🔧 Implementation Guidelines

**When to use:** Prevent duplicate language entries

**Best practices:**
- Use with language-tagged string literals
- Combine with languageIn for complete validation

**Common pitfalls:**
- ❌ Using uniqueLang on non-language-tagged literals
- ❌ Forgetting to use @lang syntax
