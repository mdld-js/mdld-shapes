[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>

# Severity Levels {=sh:severity .class:SeverityConstraint label}

> Defines the severity level of validation violations (Info, Warning, Violation). Essential for prioritizing validation results and managing different types of constraint failures. {comment}

<http://www.w3.org/ns/shacl#severity> {?cat:fullIRI}
<http://www.w3.org/ns/shacl#message> {?cat:fullIRI}

---

## 📋 Quick Start Pattern

The severity constraint defines the severity level of validation violations (Info, Warning, Violation). This example demonstrates user account validation with different severity levels for different constraints.

~~~~~~md
[ex] <tag:my@example.org,2026:range/>

## User Validation Shape {=ex:UserValidationShape .sh:NodeShape label}

Targets all [users] {+ex:User ?sh:targetClass} to validate account requirements with different severity levels: critical **email** {+ex:CriticalRule ?sh:property sh:name}, warning **age** {+ex:WarningRule ?sh:property sh:name} and info **name** {+ex:InfoNameRule ?sh:property sh:name}.

**Email address is required and must be valid** {=ex:CriticalRule .sh:PropertyShape sh:message} requires [email] {+ex:email ?sh:path} to be [string] {+xsd:string ?sh:datatype} and at least [1] {sh:minCount ^^xsd:integer} corporate email [example.com] {sh:pattern} with [Violation severity] {+sh:Violation ?sh:severity}.

**Age should be between 18 and 120** {=ex:WarningRule .sh:PropertyShape sh:message} requires [age] {+ex:age ?sh:path} to be [integer] {+xsd:integer ?sh:datatype}, more than [18] {sh:minInclusive ^^xsd:integer} and less than [120] {sh:maxInclusive ^^xsd:integer} with [Warning severity] {+sh:Warning ?sh:severity}.

**Name should be a string of 2+ letters** {=ex:InfoNameRule .sh:PropertyShape sh:message} requires [name] {+ex:name ?sh:path} to be [string] {+xsd:string ?sh:datatype} at least [1] {sh:minCount} and longer than [3] {sh:minInclusive} with [Info severity] {+sh:Info ?sh:severity}.

---

## Test Data {=ex:data .Container}

### Valid User {=ex:ValidUser .ex:User}
Email: [user@example.com] {ex:email}
Age: [25] {ex:age ^^xsd:integer}
Name: [John Doe] {ex:name}

### Invalid User {=ex:InvalidUser .ex:User}
Email: [invalid-email] {ex:email}
Age: [150] {ex:age ^^xsd:integer}
Name: [] {ex:name}
~~~~~~

**Expected Result:** 3 violations (InvalidUser fails three times: Critical for invalid email, Warning for age > 120, Info for missing name)

---

## 📝 MDLD Syntax Patterns

The severity constraint defines the severity level of validation violations.

~~~~~~md
**[Constraint description]** {=ex:PropertyConstraint .sh:PropertyShape sh:message}

[Property Name] {+ex:propertyName ?sh:path} [constraint description] with [Severity] {+sh:SeverityLevel ?sh:severity}.
~~~~~~

**Key components:**
- **Validation message** - Human-readable error message (`{sh:message}`)
- **Severity level** - Severity of the violation (`{+sh:Violation ?sh:severity}`, `{+sh:Warning ?sh:severity}`, `{+sh:Info ?sh:severity}`)
- **Constraint description** - The constraint being validated
- **Priority management** - Helps prioritize validation results
- **Categorization** - Manages different types of constraint failures

**Important notes:**
- Use `sh:Violation` for critical failures that must be fixed
- Use `sh:Warning` for issues that should be addressed but aren't critical
- Use `sh:Info` for informational violations or recommendations
- Severity helps prioritize validation results
- Combine with message for clear user feedback

---

## 🎯 Use Cases

- **Prioritization** - Prioritize critical vs non-critical issues
- **User feedback** - Provide different feedback based on severity
- **Compliance** - Distinguish between critical compliance issues and recommendations
- **Data quality** - Manage different types of data quality issues
- **Workflow management** - Route issues based on severity

---

## 🔧 Implementation Guidelines

**When to use severity:**
- **Critical constraints** - Use `sh:Violation` for must-fix issues
- **Warnings** - Use `sh:Warning` for should-fix issues
- **Informational** - Use `sh:Info` for recommendations
- **Prioritization** - Help users prioritize fixes
- **Compliance** - Distinguish critical vs non-critical compliance issues

**Best practices:**
- Use severity consistently across constraints
- Document why certain constraints have specific severity
- Combine with message for clear feedback
- Consider user workflow when assigning severity
- Test with violations at different severity levels

**Common pitfalls:**
- ❌ Using wrong severity level for the constraint
- ❌ Not using severity consistently
- ❌ Overusing high severity for minor issues
- ❌ Not combining severity with message
- ❌ Forgetting to assign severity to constraints
