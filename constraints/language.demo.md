[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:language/>

# Language Demo {ex:demo.Container} 

## Multilingual Document Shape {=ex:MultilingualDocumentShape .sh:NodeShape  label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with english or french **title** {+#titleLanguage ?sh:property sh:name}.

**Title language must be en or fr** {=#titleLanguage .sh:PropertyShape sh:message} requires [title] {+ex:title ?sh:path} language tags to be in the **Allowed Languages List** {=ex:lang-l1 ?sh:languageIn .rdf:List}: **en** {rdf:first},  [or] {=ex:lang-l2 ?rdf:rest} **fr** {rdf:first} - [only these 2 languages are allowed] {+rdf:nil ?rdf:rest}. {=}

---

## Test Data {=ex:data .Container}

### English Document {=ex:EnglishDocument ?member}
Title: [Hello World] {ex:title @en}

### Invalid Document {=ex:GermanDocument ?member}
Title: [Hallo Welt] {ex:title @de}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

## Expected Validation Results

1. **English Document** - passes (title language is en)
2. **Invalid Document** - fails (title language is de, not allowed)

## 🔍 Test Validation

```bash
node validate.js ./constraints/language.demo.md
```
