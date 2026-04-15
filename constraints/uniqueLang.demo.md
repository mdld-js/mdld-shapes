[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <ttps://mdld.js.org/shacl/catalog/uniqueLang/example/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Unique Languages Constraint {=sh:uniqueLang .class:UniqueLanguageConstraint label} Demo

## Demo {=ex:demo ?cat:hasDemo}

This demo demonstrates unique language constraint using multilingual document titles.

### Multilingual Document Demo

The **Unique Language Example Shape** {=ex:UniqueLangExampleShape .sh:NodeShape ?cat:hasShape label} targets [ValidNode] {+ex:ValidNode ?sh:targetNode} and [InvalidNode] {+ex:InvalidNode ?sh:targetNode} to validate 

**Each language tag must appear only once** {=ex:TitleProperty .sh:PropertyShape ?sh:property sh:message} - [title] {+ex:title ?sh:path} values have [true] {sh:uniqueLang ^^xsd:boolean}. 


### 📋 Test Data {=ex:data .Container}

#### Valid Document {=ex:ValidNode}

Document with unique language tags.

Title: [Hello World] {ex:title @en}
Title: [Bonjour Monde] {ex:title @fr}

#### Invalid Document {=ex:InvalidNode}

Document with duplicate language tag (violates unique language constraint).

Title: [Hello World] {ex:title @en}
Title: [Hola Mundo] {ex:title @en}  # Duplicate "en" language tag

***

[This demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid Document** - passes (unique "en" and "fr" language tags ✓)
2. **Invalid Document** - fails once (duplicate "en" language tag ✗)

### 🔍 Test Validation

```bash
# This should show 1 violation - InvalidNode has duplicate "en" language tag
ig-cli validate ./constraints/uniqueLang.md
```

***
