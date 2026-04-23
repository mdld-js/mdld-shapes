[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/targeting/>


# Target Subjects Of {=sh:targetSubjectsOf .class:TargetingMechanism label} Demo

## Demo {=ex:demo ?cat:hasDemo}

This demo demonstrates subject-based targeting using management and approval scenarios where we validate entities that initiate relationships.

### Management Validation Demo

The **Manager Validation Shape** {=ex:ManagerValidationShape .sh:NodeShape ?cat:hasShape label} targets all [managers] {+ex:manages ?sh:targetSubjectsOf} of the manages relationship to validate management requirements: [level] {+#managementLevel ?sh:property sh:name} and [teamSize] {+#teamSize ?sh:property sh:name}.

**Managers must have level 3 or higher** {=#managementLevel .sh:PropertyShape sh:message} requires the [level] {+ex:level ?sh:path} property to be at least [3] {sh:minInclusive ^^xsd:integer}.

**Managers can oversee at most 10 team members** {=#teamSize .sh:PropertyShape sh:message} that requires the [teamSize] {+ex:teamSize ?sh:path} property to be at most [10] {sh:maxInclusive ^^xsd:integer}.

### Approval Validation Demo

**Approver Validation Shape** {=ex:ApproverValidationShape .sh:NodeShape ?cat:hasShape label} targets all [approvers] {+ex:approves ?sh:targetSubjectsOf} of the approves relationship to validate approval [authority] {+#approvalAuthority ?sh:property sh:name}.

**Approvers must have authority level 2 or higher** {=#approvalAuthority .sh:PropertyShape sh:message} requires the [authority] {+ex:authority ?sh:path} property to be at least [2] {sh:minInclusive ^^xsd:integer}.

---

### 📋 Test Data {=ex:data .Container}

#### Engineering Manager {=ex:EngineeringManager}

A manager with insufficient level and oversized team.

Level: [2] {ex:level ^^xsd:integer}
Team Size: [15] {ex:teamSize ^^xsd:integer}
Manages: [EngineeringTeam] {ex:manages}

#### Senior Manager {=ex:SeniorManager}

A manager with appropriate level and team size.

Level: [4] {ex:level ^^xsd:integer}
Team Size: [8] {ex:teamSize ^^xsd:integer}
Manages: [QATeam] {ex:manages}

#### Junior Developer {=ex:JuniorDeveloper}

A team member who doesn't manage anyone (not targeted).

Level: [1] {ex:level ^^xsd:integer}
Team Size: [0] {ex:teamSize ^^xsd:integer}

#### Finance Approver {=ex:FinanceApprover}

An approver with insufficient authority.

Authority: [1] {ex:authority ^^xsd:integer}
Approves: [ExpenseReport] {ex:approves}

#### Executive Approver {=ex:ExecutiveApprover}

An approver with sufficient authority.

Authority: [3] {ex:authority ^^xsd:integer}
Approves: [BudgetRequest] {ex:approves}

#### Regular Employee {=ex:RegularEmployee}

An employee who doesn't approve anything (not targeted).

Authority: [0] {ex:authority ^^xsd:integer}

---

{=ex:demo} must produce exactly **3** {cat:expectsViolations ^^xsd:integer} violations.

### Expected Validation Results 

#### Management Validation (subjects of manages):
1. **Engineering Manager** - fails twice (level 2 < 3 AND teamSize 15 > 10)
2. **Senior Manager** - passes (level 4 ≥ 3 AND teamSize 8 ≤ 10)
3. **Junior Developer** - not validated (doesn't manage anyone)

#### Approval Validation (subjects of approves):
4. **Finance Approver** - fails once (authority 1 < 2)
5. **Executive Approver** - passes (authority 3 ≥ 2)
6. **Regular Employee** - not validated (doesn't approve anything)

Note: Subject-based targeting validates entities that initiate relationships, making it ideal for management, approval, and source validation scenarios.

### 🔍 Test Validation

```bash
# This should show 3 violations - management level, team size, and approval authority
ig-cli validate ./targeting/targetSubjectsOf.md
```

---
