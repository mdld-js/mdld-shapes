[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>

# AND Constraint {=sh:and .class:LogicalConstraint label}

> Requires all constraints in the list to be satisfied. Essential when multiple conditions must all pass for validation to succeed. {comment}

<http://www.w3.org/ns/shacl#and> {?cat:fullIRI}

---

## � Quick Start Pattern

~~~~~~md {cat:quick-start}
[mdld] <https://mdld.js.org/>
[ex] <mdld:shacl/example/logical/>


# AND Constraint Demo

### Shape Definition

**Product must have a price and at least 1 category defined** {sh:message}

**Constraints List** {=ex:and-l1 ?sh:and .rdf:List}: [Min Count] {+ex:priceRequired ?rdf:first}, 
then [followed] {=ex:and-l2 ?rdf:rest} by the second constraint [Class] {+ex:categoryRequired ?rdf:first} 
and a [nil] {+rdf:nil ?rdf:rest} node (end of list). Reset current subject: {=}

**Price Required Constraint** {=ex:priceRequired .sh:PropertyShape} ensures [price] {+ex:price ?sh:path} has at least [1] {sh:minCount ^^xsd:integer} value.

**Category Required Constraint** {=ex:categoryRequired .sh:PropertyShape} ensures [category] {+ex:category ?sh:path} has at least [1] {sh:minCount ^^xsd:integer} value.

---

### Test Data {=ex:data .Container}

#### Valid Product {=ex:ValidProduct ?member}
Name: [Laptop] {ex:name}
Price: [999] {ex:price ^^xsd:integer}
Category: [Electronics] {ex:category}

#### Missing Price Product {=ex:MissingPriceProduct ?member}
Name: [Phone] {ex:name}
Category: [Electronics] {ex:category}

---

[Demo] {=ex:demo} must produce exactly **1** {cat:expectsViolations ^^xsd:integer} violation.
~~~~~~

---

## �📝 MDLD Syntax Patterns

The AND constraint uses verbose RDF list syntax to specify multiple constraints that must all be satisfied.

~~~~~~md
# AND Constraint Pattern
**Constraints List** {=ex:and-l1 ?sh:and .rdf:List}: [First Constraint] {+ex:firstConstraint ?rdf:first}, 
then [followed] {=ex:and-l2 ?rdf:rest} by the second constraint [Second Constraint] {+ex:secondConstraint ?rdf:first} 
and a [nil] {+rdf:nil ?rdf:rest} node (end of list). Reset current subject to avoid accidental further assignments: {=}
~~~~~~

**Key components:**
- **List node** - Anonymous RDF list container (`{=ex:and-l1 ?sh:and .rdf:List}`)
- **First element** - First constraint in the list (`{+ex:firstConstraint ?rdf:first}`)
- **Rest elements** - Subsequent list nodes (`{=ex:and-l2 ?rdf:rest}`)
- **Termination** - List ends with `rdf:nil`
- **Subject reset** - `{=}` prevents unintended subject continuation

**Important notes:**
- Each list element must reference a previously defined constraint (PropertyShape or NodeShape)
- Use unique list identifiers (e.g., `and-l1`, `and-l2`) to avoid collisions
- Always reset subject with `{=}` after defining the list structure
- All constraints in the list must be satisfied for the node to pass validation

---

## 🎯 Use Cases

- **Multi-property validation** - Product must have price AND category
- **Cross-field validation** - User must have email AND phone number
- **Business rule combinations** - Order must be paid AND shipped

---

## 🔧 Implementation Guidelines

**When to use AND:**
- **Multiple required properties** - When several properties must all be present
- **Cross-property dependencies** - When one property's validity depends on another
- **Complex business rules** - When business logic requires multiple conditions
- **Data integrity** - When multiple aspects of data must be valid together

**Best practices:**
- Keep the list short (2-3 constraints) for maintainability
- Use descriptive constraint names for clarity
- Test each constraint individually before combining
- Consider using separate shapes if the logic becomes complex

**Common pitfalls:**
- ❌ Forgetting the subject reset `{=}` after list definition
- ❌ Reusing list identifiers causing collisions
- ❌ Creating circular dependencies between constraints
- ❌ Making the constraint list too complex to debug
