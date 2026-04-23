[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# Deactivated {=sh:deactivated .class:DeactivatedConstraint label}

> Temporarily disables specific constraints during validation {comment}

<http://www.w3.org/ns/shacl#deactivated> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

The deactivated constraint temporarily disables specific constraints during validation. This example shows a deactivated category rule while the status rule remains active.

~~~~~~md
[ex] <tag:my@example.org,2026:deactivated/>

## Deactivated Example Shape {=ex:DeactivatedExampleShape .sh:NodeShape label}

Validates all **member** {+member ?sh:targetObjectsOf} entities to be an active *user* {+ex:ActiveProperty ?sh:property sh:name} and have an active *category* {+ex:CategoryProperty ?sh:property sh:name}.

**User status must be active** {=ex:ActiveProperty .sh:PropertyShape sh:message} requires [status] {+ex:status ?sh:path} to be [active] {sh:hasValue}.

**Category rule** {=ex:DeactivatedProperty .sh:PropertyShape sh:message} requires [category] {+ex:category ?sh:path} to be [active] {sh:hasValue}. This rule is temporarily [deactivated] {sh:deactivated}.

---

## Test Data {=ex:data .Container}

### Valid Account {=ex:ValidNode ?member}
Status: [active] {ex:status}
Category: [active] {ex:status}

### Invalid Account {=ex:InvalidNode ?member}
Status: [inactive] {ex:status}
Category: [inactive] {ex:status}
~~~~~~

**Expected Result:** 1 violation (InvalidAccount fails because status is inactive; category rule is deactivated so it doesn't cause a violation)

---

## 📝 MDLD Syntax Patterns

~~~~~~md
[Constraint] {=ex:PropertyConstraint .sh:PropertyShape} is [deactivated] {sh:deactivated}.
~~~~~~

**Use for:** Phased validation, conditional rules, schema evolution, testing

**Important:**
- Deactivated constraints are skipped during validation
- Useful for temporary constraint disabling
- Can be reactivated by removing the flag

---

## 🔧 Implementation Guidelines

**When to use:** Temporarily disable constraints

**Best practices:**
- Document why constraint is deactivated
- Plan for reactivation

**Common pitfalls:**
- ❌ Forgetting to reactivate deactivated constraints
- ❌ Using deactivated instead of removing obsolete constraints
