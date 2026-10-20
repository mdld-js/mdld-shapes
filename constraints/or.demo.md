[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:or/>

# OR Demo {=ex:demo .Container}

This demo demonstrates the OR constraint, which requires a value to conform to at least one of several shapes.

## Contact Validation Shape {=ex:ContactValidationShape .sh:NodeShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with **Contact must be email or phone** {sh:message}.

**Options List** {=ex:or-l1 ?sh:or .rdf:List}: [Email Contact] {+ex:emailContact ?rdf:first}, then [followed] {=ex:or-l2 .rdf:List ?rdf:rest} by [Phone Contact] {+ex:phoneContact ?rdf:first} and [nil] {+rdf:nil ?rdf:rest}. {=}

**Email Contact** {=ex:emailContact .sh:PropertyShape} ensures [contact] {+ex:contact ?sh:path} contains [@] {sh:pattern}.

**Phone Contact** {=ex:phoneContact .sh:PropertyShape} ensures [contact] {+ex:contact ?sh:path} contains [-] {sh:pattern}.

---

## Test Data {=ex:data .Container}

### Valid Email Contact {=ex:ValidEmail ?member}
Contact: [user@example.com] {ex:contact}

### Valid Phone Contact {=ex:ValidPhone ?member}
Contact: [555-123-4567] {ex:contact}

### Invalid Contact {=ex:InvalidContact ?member}
Contact: [invalid] {ex:contact}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

## Expected Validation Results

1. **Valid Email Contact** - passes (matches email pattern)
2. **Valid Phone Contact** - passes (matches phone pattern)
3. **Invalid Contact** - fails (matches neither email nor phone pattern)

### 🔍 Test Validation

```bash
node validate.js ./constraints/or.demo.md
```
