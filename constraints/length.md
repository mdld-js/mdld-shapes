[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# Min Length {=sh:minLength .class:Constraint label}

> Specifies the minimum length of string values {comment}

<http://www.w3.org/ns/shacl#minLength> {?cat:fullIRI}

# Max Length {=sh:maxLength .class:Constraint label}

> Specifies the maximum length of string values {comment}

<http://www.w3.org/ns/shacl#maxLength> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

Length constraints specify the minimum and maximum length of string values. This example validates that usernames must be between 3 and 20 characters.

~~~~~~md
[ex] <tag:my@example.org,2026:length/>

## User Account Test Shape {=ex:UserAccountTestShape .sh:NodeShape ?cat:hasShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with correct length of the **username** {+ex:#usernameLength ?sh:property sh:name}.

**Username must be 3-20 characters** {=ex:#usernameLength .sh:PropertyShape sh:message} requires [username] {+ex:username ?sh:path} to have at least [3] {sh:minLength ^^xsd:integer} and at most [20] {sh:maxLength ^^xsd:integer} characters.

---

## Test Data {=ex:data .Container}

### Valid User {=ex:ValidUser ?member}
Username: [john_doe] {ex:username}

### Invalid User {=ex:InvalidUser ?member}
Username: [jd] {ex:username}
~~~~~~

**Expected Result:** 1 violation (InvalidUser fails because username is only 2 characters, below the minimum of 3)

---

## 📝 MDLD Syntax Patterns

~~~~~~md
[Property] {+ex:propertyName ?sh:path} must have at least [min] {sh:minLength ^^xsd:integer} and at most [max] {sh:maxLength ^^xsd:integer} characters.
~~~~~~

**Use for:** Username validation, password policies, content limits, form validation

**Important:**
- Works with literal string values only
- Length measured in characters, not bytes
- Empty strings have length 0

---

## 🔧 Implementation Guidelines

**When to use:** String length must be controlled

**Best practices:**
- Use reasonable length limits
- Test with boundary values

**Common pitfalls:**
- ❌ Forgetting datatype ^^xsd:integer
- ❌ Using negative values for lengths
