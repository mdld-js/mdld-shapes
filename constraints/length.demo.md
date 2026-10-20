[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:length/>

# Length {=sh:minLength .class:Constraint label} Demo

## Demo {=ex:demo ?cat:hasDemo}

### User Account Test Shape {=ex:UserAccountTestShape .sh:NodeShape  label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with correct length of the **username** {+#usernameLength ?sh:property sh:name}.

**Username must be 3-20 characters** {=#usernameLength .sh:PropertyShape sh:message} requires [username] {+ex:username ?sh:path} to have at least [3] {sh:minLength ^^xsd:integer} and at most [20] {sh:maxLength ^^xsd:integer} characters.

---

### Test Data {=ex:data .Container}

#### Valid User {=ex:ValidUser ?member}
Username: [john_doe] {ex:username}

#### Invalid User {=ex:InvalidUser ?member}
Username: [jd] {ex:username}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results

1. **Valid User** - passes (username is 8 characters)
2. **Invalid User** - fails (username is only 2 characters)

### 🔍 Test Validation

```bash
node validate.js ./constraints/length.demo.md
```
