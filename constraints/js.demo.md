[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:js/>

# JavaScript Function Demo {=ex:demo .Container} 

## Date Validation Shape {=ex:DateValidationShape .sh:NodeShape  label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with valid **date** {+ex:DatePropertyShape ?sh:property sh:name}.

**Event date must be valid** {=ex:DatePropertyShape .sh:PropertyShape sh:message} requires [eventDate] {+ex:eventDate ?sh:path} to be a valid JS date:

~~~~~~js {=ex:DateJSConstraint ?sh:JSConstraint sh:js}
const date = new Date(value);
return !isNaN(date.getTime());
~~~~~~

---

## Test Data {=ex:data .Container}

### Valid Event {=ex:ValidEvent ?member}
Event Date: [2024-12-25] {ex:eventDate ^^xsd:date}

### Invalid Event {=ex:InvalidEvent ?member}
Event Date: [not-a-date] {ex:eventDate}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

## Expected Validation Results

1. **Valid Event** - passes (valid date string)
2. **Invalid Event** - fails (not a valid date)

### 🔍 Test Validation

```bash
node validate.js ./constraints/js.demo.md
```

---
