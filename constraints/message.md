[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# Violation Message {=sh:message .class:MessageConstraint label}

> Provides human-readable error messages for constraint violations {comment}

<http://www.w3.org/ns/shacl#message> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

The message constraint provides human-readable error messages for constraint violations. This example shows a custom violation message for contract value validation.

~~~~~~md
[ex] <tag:my@example.org,2026:message/>

## Business Rule Validation Shape {=ex:BusinessRuleValidationShape .sh:NodeShape ?cat:hasShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with positive **contract** {+ex:ContractValueRule ?sh:property sh:name}.

**Contract value must be positive** {=ex:ContractValueRule .sh:PropertyShape sh:message} ensures [contract value] {+ex:contractValue ?sh:path} is greater than [0] {sh:minInclusive ^^xsd:decimal}.

---

## Test Data {=ex:data .Container}

### Valid Contract {=ex:ValidContract ?member}
Value: [50000.00] {ex:contractValue ^^xsd:decimal}

### Invalid Contract {=ex:InvalidContract ?member}
Value: [-1000.00] {ex:contractValue ^^xsd:decimal}
~~~~~~

**Expected Result:** 1 violation (InvalidContract fails with message "Contract value must be positive")

---

## 📝 MDLD Syntax Patterns

~~~~~~md
**[Business rule]** {=ex:PropertyConstraint .sh:PropertyShape sh:message}
[Property] {+ex:propertyName ?sh:path} [constraint description].
~~~~~~

**Use for:** User-friendly feedback, debugging, actionable reporting, business context

**Important:**
- Messages should be specific and actionable
- Use business terminology, not just technical
- Keep messages concise but informative

---

## 🔧 Implementation Guidelines

**When to use:** Always provide messages for user-friendly feedback

**Best practices:**
- Use semantic, business-focused language
- Keep messages concise but informative

**Common pitfalls:**
- ❌ Using technical jargon instead of business language
- ❌ Writing vague or unclear messages
