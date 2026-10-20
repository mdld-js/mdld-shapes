[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/targeting/>

# Target Objects Of Demo {=ex:demo .Container}

This demo demonstrates object-based targeting using team membership and product reference scenarios where we validate entities that are referenced by others.

### Team Membership Demo

The **Team Member Validation Shape** {=ex:TeamMemberValidationShape .sh:NodeShape label} targets all [team members] {+ex:memberOf ?sh:targetObjectsOf} to validate team membership requirements: [workload] {+#workloadRule ?sh:property sh:name} and [status] {+#activeStatus ?sh:property sh:name}.

**Team members must not exceed 40 hours workload** {=#workloadRule .sh:PropertyShape sh:message} requires the [workload] {+ex:workload ?sh:path} property to be at most [40] {sh:maxInclusive ^^xsd:integer}.

**Team members must be active** {=#activeStatus .sh:PropertyShape sh:message} that requires the [status] {+ex:status ?sh:path} property to be exactly [active] {sh:hasValue}.

### Product Reference Demo

**Referenced Product Validation Shape** {=ex:ReferencedProductValidationShape .sh:NodeShape label} targets all [referenced products] {+ex:references ?sh:targetObjectsOf} to validate product reference requirements: [availability] {+#productAvailability ?sh:property sh:name} and [price] {+#productPrice ?sh:property sh:name}.

**Referenced products must be available** {=#productAvailability .sh:PropertyShape sh:message} requires the [available] {+ex:available ?sh:path} property to be exactly [true] {sh:hasValue}.

**Referenced products must cost $1000 or less** {=#productPrice .sh:PropertyShape sh:message} that requires the [price] {+ex:price ?sh:path} property to be at most [1000.00] {sh:maxInclusive ^^xsd:decimal}.

---

### 📋 Test Data {=ex:data .Container}

#### EngineeringTeam {=ex:EngineeringTeam}

A team with excessive workload and inactive status (targeted as object of memberOf).

Workload: [45] {ex:workload ^^xsd:integer}
Status: [inactive] {ex:status}

#### QATeam {=ex:QATeam}

A team with appropriate workload and active status.

Workload: [35] {ex:workload ^^xsd:integer}
Status: [active] {ex:status}

#### Senior Developer {=ex:SeniorDeveloper}

A team member (not targeted as subject).

Member Of: [Engineering team] {+ex:EngineeringTeam ?ex:memberOf}

#### Junior Developer {=ex:JuniorDeveloper}

A team member (not targeted as subject).

Member Of: [QATeam] {+ex:QATeam ?ex:memberOf}

#### Expensive Product {=ex:ExpensiveProduct}

A product that's too expensive and unavailable (targeted as object of references).

Price: [1500.00] {ex:price ^^xsd:decimal}
Available: [false] {ex:available}

#### Affordable Product {=ex:AffordableProduct}

A product that meets all requirements.

Price: [299.99] {ex:price ^^xsd:decimal}
Available: [true] {ex:available}

#### Order123 {=ex:Order123}

An order referencing expensive product (not targeted as subject).

References: [Expensive product] {+ex:ExpensiveProduct ?ex:references}

#### Order456 {=ex:Order456}

An order referencing affordable product (not targeted as subject).

References: [Affordable product] {+ex:AffordableProduct ?ex:references}

#### Unreferenced Product {=ex:UnreferencedProduct}

A product not referenced by any order (not targeted).

Price: [500.00] {ex:price ^^xsd:decimal}
Available: [true] {ex:available}

---

{=ex:demo} must produce exactly **4** {cat:expectsViolations ^^xsd:integer} violations.

### Expected Validation Results 

#### Team Membership Validation (objects of memberOf):
1. **EngineeringTeam** - fails twice (workload 45 > 40 AND status: inactive ≠ active)
2. **QATeam** - passes (workload 35 ≤ 40 AND status: active)
3. **Senior Developer** - not validated (is a subject, not an object of memberOf)
4. **Junior Developer** - not validated (is a subject, not an object of memberOf)

#### Product Reference Validation (objects of references):
5. **Expensive Product** - fails twice (price 1500.00 > 1000.00 AND available: false ≠ true)
6. **Affordable Product** - passes (price 299.99 ≤ 1000.00 AND available: true)
7. **Order123** - not validated (is a subject, not an object of references)
8. **Order456** - not validated (is a subject, not an object of references)
9. **Unreferenced Product** - not validated (not referenced by any order)

Note: Object-based targeting validates entities that are referenced by others, making it ideal for team membership, product references, and destination validation scenarios.

### 🔍 Test Validation

```bash
# This should show 4 violations - workload, status, price, and availability
node validate.js ./targeting/targetObjectsOf.md
```

---
