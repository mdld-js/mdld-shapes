[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# Has Value {=sh:hasValue .class:Constraint label}

> Requires a property to have exactly this specific value {comment}

<http://www.w3.org/ns/shacl#hasValue> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

The hasValue constraint requires a property to have exactly a specific value. This example validates that server status must be exactly "active".

~~~~~~md
[ex] <tag:my@example.org,2026:hasvalue/>

## System Status Test Shape {=ex:SystemStatusTestShape .sh:NodeShape label}

Validates all [member] {+member ?sh:targetObjectsOf} entities with active **status** {+ex:#statusRequired ?sh:property sh:name}.

**Status must be active** {=ex:#statusRequired .sh:PropertyShape sh:message} requires [status] {+ex:status ?sh:path} to be exactly [active] {sh:hasValue ^^xsd:string}.

---

## Test Data {=ex:data .Container}

### Valid Server {=ex:MainServer ?member}
Status: [active] {ex:status}

### Invalid Server {=ex:BackupServer ?member}
Status: [standby] {ex:status}
~~~~~~

**Expected Result:** 1 violation (BackupServer fails because status is standby, not active)

---

## 📝 MDLD Syntax Patterns

~~~~~~md
[Property] {+ex:propertyName ?sh:path} must be exactly [Value] {sh:hasValue}.
~~~~~~

**Use for:** Fixed status fields, required constants, environment flags, system identifiers

**Important:**
- Requires exact match, no partial matches
- Works with both literal values and IRIs
- Property must have the value (use minCount for required properties)
- Often used with NOT constraint to forbid specific values

---

## 🔧 Implementation Guidelines

**When to use:** Property must have a specific constant value

**Best practices:**
- Use for fixed, unchanging values
- Combine with NOT to forbid specific values

**Common pitfalls:**
- ❌ Using hasValue for variable values
- ❌ Forgetting hasValue requires exact match
- ❌ Not combining with minCount for required properties
