[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/not/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# NOT Constraint {=sh:not .class:LogicalConstraint label} Demo

## Demo {=ex:demo ?cat:hasDemo}

This demo demonstrates logical NOT constraint using forbidden status validation scenario.

### Forbidden Status Demo

The **User Status Shape** {=ex:UserStatusShape .sh:NodeShape ?cat:hasShape label} targets all [users] {+ex:User ?sh:targetClass} to validate forbidden status: **User cannot have deleted status** {sh:message}

User status must not conform to the forbidden shape using [Forbidden Status Shape] {+ex:ForbiddenStatusShape ?sh:not}.

**Forbidden Status Shape** {=ex:ForbiddenStatusShape .sh:NodeShape} requires the [status] {+ex:status ?sh:path} property to be exactly [deleted] {sh:hasValue}.


### 📋 Test Data {=ex:data .Container}

#### Valid User - Active {=ex:ValidActiveUser .ex:User}

A valid user with active status.

Name: [Alice] {ex:name}
Status: [active] {ex:status}

#### Valid User - Inactive {=ex:ValidInactiveUser .ex:User}

A valid user with inactive status.

Name: [Bob] {ex:name}
Status: [inactive] {ex:status}

#### Invalid User - Deleted {=ex:InvalidDeletedUser .ex:User}

An invalid user with deleted status (forbidden).

Name: [Charlie] {ex:name}
Status: [deleted] {ex:status}

#### Valid User - No Status {=ex:ValidNoStatusUser .ex:User}

A valid user with no status (doesn't match forbidden shape).

Name: [Dana] {ex:name}

---

[This demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.

### Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid User - Active** - passes (status: active ≠ deleted)
2. **Valid User - Inactive** - passes (status: inactive ≠ deleted)  
3. **Invalid User - Deleted** - fails once (status: deleted = forbidden)
4. **Valid User - No Status** - passes (no status property, doesn't match forbidden shape)

Note: sh:not only validates nodes that would conform to the forbidden shape.

### 🔍 Test Validation

```bash
# This should show 1 violation - user with deleted status
ig-cli validate ./constraints/not.md
```

---
