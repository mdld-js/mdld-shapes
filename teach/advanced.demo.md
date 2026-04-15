[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <tag:my@example.org,2026:advanced/>

# Advanced Shape Composition Demo {=ex:demo ?cat:hasDemo}

This demo demonstrates advanced SHACL techniques: shape composition, NOT constraint, qualified count, AND constraint, and multiple constraints on same property.

## Employee Validation Shape {=ex:EmployeeValidationShape .sh:NodeShape ?cat:hasShape label}

Validates all [Employee] {+ex:Employee ?sh:targetClass} instances with comprehensive business rules: [department] {+ex:DepartmentRule ?sh:property}, [status] {+ex:StatusRule ?sh:property}, [2 projects] {+ex:ProjectsRule ?sh:property}, [salary] {+ex:SalaryRule ?sh:property}.

### Property Rules

**Employee must have valid department** {=ex:DepartmentRule .sh:PropertyShape}
[department] {+ex:department ?sh:path} must have exactly [1] {sh:minCount sh:maxCount ^^xsd:integer} value and must be in allowed list.

**Allowed Departments List** {=ex:dept-l1 ?sh:in .rdf:List}: [Engineering] {rdf:first}, then [rest] {=ex:dept-l2 ?rdf:rest} by [Sales] {rdf:first} and [nil] {+rdf:nil ?rdf:rest}. {=}

**Employee status cannot be terminated** {=ex:StatusRule .sh:PropertyShape}
Employee status must not conform to [Terminated Status Shape] {+ex:TerminatedStatusShape ?sh:not}.

**Employee must have at least 2 completed projects** {=ex:ProjectsRule .sh:PropertyShape}
[projects] {+ex:projects ?sh:path} must have at least [2] {sh:qualifiedMinCount ^^xsd:integer} values that conform to [Completed Project Shape] {=ex:CompletedProjectShape .sh:NodeShape ?sh:qualifiedValueShape}.

**Salary must be positive** {=ex:SalaryRule .sh:PropertyShape}
[salary] {+ex:salary ?sh:path} must be at least [0.01] {sh:minInclusive ^^xsd:decimal}.

---

## Terminated Status Shape {=ex:TerminatedStatusShape .sh:NodeShape ?cat:hasShape label}
Defines the forbidden terminated status pattern.

**Status must be terminated** {=ex:TerminatedStatusRule .sh:PropertyShape ?sh:property}
[status] {+ex:status ?sh:path} must be exactly [terminated] {sh:hasValue}.

---

## Completed Project Shape {=ex:CompletedProjectShape .sh:NodeShape ?cat:hasShape label}

Validates completed projects - [completed] {+ex:ProjectStatusRule ?sh:property} and [positive budget] {+ex:ProjectBudgetRule ?sh:property}.

**Project must be completed** {=ex:ProjectStatusRule .sh:PropertyShape }
[status] {+ex:status ?sh:path} must be exactly [completed] {sh:hasValue}.

**Project must have positive budget** {=ex:ProjectBudgetRule .sh:PropertyShape}
[budget] {+ex:budget ?sh:path} must be at least [0.01] {sh:minInclusive ^^xsd:decimal}.

---

### Test Data {=ex:data .Container}

#### Valid Employee {=ex:Employee1 .ex:Employee ?member}
Department: [Engineering] {ex:department}
Status: [active] {ex:status}
Salary: [75000.00] {ex:salary ^^xsd:decimal}
Projects: [project1] {+ex:Project1 ?ex:projects} and [project2] {+ex:Project2 ?ex:projects}

##### Project 1 {=ex:Project1 .ex:Project}
Status: [completed] {ex:status}
Budget: [50000.00] {ex:budget ^^xsd:decimal}

##### Project 2 {=ex:Project2 .ex:Project}
Status: [completed] {ex:status}
Budget: [30000.00] {ex:budget ^^xsd:decimal}

#### Invalid Employee - Invalid Department {=ex:Employee2 .ex:Employee ?member}
Department: [invalid-dept] {ex:department}
Status: [active] {ex:status}
Salary: [65000.00] {ex:salary ^^xsd:decimal}
Projects: [project3] {+ex:Project3 ?ex:projects} and [project3b] {+ex:Project3b ?ex:projects}.

##### Project 3 {=ex:Project3 .ex:Project}
Status: [completed] {ex:status}
Budget: [40000.00] {ex:budget ^^xsd:decimal}

##### Project 3b {=ex:Project3b .ex:Project}
Status: [completed] {ex:status}
Budget: [20000.00] {ex:budget ^^xsd:decimal}

#### Invalid Employee - Terminated Status {=ex:Employee3 .ex:Employee ?member}
Department: [Engineering] {ex:department}
Status: [terminated] {ex:status}
Salary: [60000.00] {ex:salary ^^xsd:decimal}
Projects: [project4] {+ex:Project4 ?ex:projects} and [project4b] {+ex:Project4b ?ex:projects}

##### Project 4 {=ex:Project4 .ex:Project}
Status: [completed] {ex:status}
Budget: [35000.00] {ex:budget ^^xsd:decimal}

##### Project 4b {=ex:Project4b .ex:Project}
Status: [completed] {ex:status}
Budget: [15000.00] {ex:budget ^^xsd:decimal}

#### Invalid Employee - Insufficient Completed Projects {=ex:Employee4 .ex:Employee ?member}
Department: [Engineering] {ex:department}
Status: [active] {ex:status}
Salary: [70000.00] {ex:salary ^^xsd:decimal}
Projects: [project5] {+ex:Project5 ?ex:projects}

##### Project 5 {=ex:Project5 .ex:Project}
Status: [completed] {ex:status}
Budget: [45000.00] {ex:budget ^^xsd:decimal}

#### Invalid Employee - Negative Salary {=ex:Employee5 .ex:Employee ?member}
Department: [Engineering] {ex:department}
Status: [active] {ex:status}
Salary: [-1000.00] {ex:salary ^^xsd:decimal}
Projects: [project6] {+ex:Project6 ?ex:projects} and [project6b] {+ex:Project6b ?ex:projects}

##### Project 6 {=ex:Project6 .ex:Project}
Status: [completed] {ex:status}
Budget: [20000.00] {ex:budget ^^xsd:decimal}

##### Project 6b {=ex:Project6b .ex:Project}
Status: [completed] {ex:status}
Budget: [15000.00] {ex:budget ^^xsd:decimal}

---

[Demo] {=ex:demo} must produce exactly **4** {cat:expectsViolations ^^xsd:integer} violations.

### Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid Employee** - passes (all constraints satisfied)
2. **Invalid Employee - Invalid Department** - fails (department doesn't conform to Valid Department Shape)
3. **Invalid Employee - Terminated Status** - fails (NOT constraint - status is terminated)
4. **Invalid Employee - Insufficient Completed Projects** - fails (only 1 completed project, needs 2)
5. **Invalid Employee - Negative Salary** - fails (salary < 0.01)

### 🔍 Test Validation

```bash
ig-cli validate ./teach/advanced.demo.md
```
