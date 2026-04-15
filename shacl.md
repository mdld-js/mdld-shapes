<a id="index"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>

# MDLD SHACL Catalog {=cat:index .Container label}

> A comprehensive guide to SHACL validation in MDLD (Markdown Linked Data) - self-validating documentation for semantic authors. {?comment}

This catalog [includes] {+cat:includes .rdf:Property label} all constraints and targeting mechanisms available in SHACL.

## Contents

[Targeting](#targeting-index)
[Constraints](#constraints-index)






{=}



<a id="targeting-index"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>

# Catalog {=cat:index}

## Targeting Mechanism {+class:Targeting ?member .Class label}

These are targeting predicates that determine which nodes get validated (not constraints themselves): 

- [Target Class](#targeting-targetclass) {+sh:targetClass ?cat:includes .class:TargetingPredicate}
- [Target Node](#targeting-targetnode) {+sh:targetNode ?cat:includes .class:TargetingPredicate}
- [Target Subjects](#targeting-targetsubjectsof) {+sh:targetSubjectsOf ?cat:includes .class:TargetingPredicate}
- [Target Objects](#targeting-targetobjectsof) {+sh:targetObjectsOf ?cat:includes .class:TargetingPredicate}






{=}



<a id="targeting-targetclass"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/targeting/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Target Class {=sh:targetClass .class:TargetingMechanism label}

> Targets all nodes that are instances of a specific RDF class (rdf:type) for shape validation. Essential for class-based validation scenarios across entire domains. {comment}

<http://www.w3.org/ns/shacl#targetClass> {?cat:fullIRI}

---






{=}



<a id="targeting-targetnode"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/targeting/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Target Node {=sh:targetNode .class:TargetingMechanism label}

> Targets specific individual nodes identified by their IRI for precise, node-by-node validation. Perfect for critical infrastructure, testing scenarios, and executive-level validation. {comment}

<http://www.w3.org/ns/shacl#targetNode> {?cat:fullIRI}

---






{=}



<a id="targeting-targetsubjectsof"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/targeting/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Target Subjects Of {=sh:targetSubjectsOf .class:TargetingMechanism label}

> Targets all subjects (nodes) that have a specific property pointing to any value. Useful for reverse relationship targeting, source validation, and validating entities that initiate relationships. {comment}

<http://www.w3.org/ns/shacl#targetSubjectsOf> {?cat:fullIRI}

---






{=}



<a id="targeting-targetobjectsof"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/targeting/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Target Objects Of {=sh:targetObjectsOf .class:TargetingMechanism label}

> Targets all objects (values) that are pointed to by a specific property. Ideal for validating referenced entities, relationship targets, and entities that are the destination of relationships. {comment}

<http://www.w3.org/ns/shacl#targetObjectsOf> {?cat:fullIRI}

---






{=}



<a id="constraints-index"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>

### 📋 Constraint {=class:Constraint ?member .Class label}

> A SHACL constraint is a rule that defines a validation condition for a specific shape and target node. {comment}

We can broadly divide them into these type groups: 
- Metadata Predicate {+class:MetadataPredicate !subClassOf label}
- Targeting Predicate {+class:TargetingPredicate !subClassOf label}
- Value Type Constraint {+class:ValueTypeConstraint !subClassOf label}
- Cardinality Constraint {+class:CardinalityConstraint !subClassOf label}
- String-based Constraint {+class:StringConstraint !subClassOf label}
- Property Pair Constraint {+class:PropertyPairConstraint !subClassOf label}
- Logical Constraint {+class:LogicalConstraint !subClassOf label}
- Shape-based Constraint {+class:ShapeConstraint !subClassOf label}
- Property Path {+class:PropertyPath !subClassOf label}
- JavaScript Constraint {+class:JSConstraint !subClassOf label}
- SPARQL Constraint {+class:SPARQLConstraint !subClassOf label}

# Catalog {=cat:index}

This catalog includes these constraints: 

## Value Type Constraints

- [Class](#constraints-class) {+sh:class ?cat:includes .class:ValueTypeConstraint}
- [Data Type](#constraints-datatype) {+sh:datatype ?cat:includes .class:ValueTypeConstraint}
- [Node Kind](#constraints-nodekind) {+sh:nodeKind ?cat:includes .class:ValueTypeConstraint}

## Cardinality Constraints

- [Min Count](#constraints-count) {+sh:minCount ?cat:includes .class:CardinalityConstraint}
- [Max Count](#constraints-count) {+sh:maxCount ?cat:includes .class:CardinalityConstraint}

## Value Range Constraints

- [Min Inclusive](#constraints-range) {+sh:minInclusive ?cat:includes .class:ValueRangeConstraint}
- [Max Inclusive](#constraints-range) {+sh:maxInclusive ?cat:includes .class:ValueRangeConstraint}
- [Min Exclusive](#constraints-range) {+sh:minExclusive ?cat:includes .class:ValueRangeConstraint}
- [Max Exclusive](#constraints-range) {+sh:maxExclusive ?cat:includes .class:ValueRangeConstraint}

## Property Pair Constraints

- [Equals](#constraints-comparison) {+sh:equals ?cat:includes .class:PropertyPairConstraint}
- [Disjoint](#constraints-disjoint) {+sh:disjoint ?cat:includes .class:PropertyPairConstraint}
- [Less Than](#constraints-comparison) {+sh:lessThan ?cat:includes .class:PropertyPairConstraint}
- [Less Than or Equals](#constraints-comparison) {+sh:lessThanOrEquals ?cat:includes .class:PropertyPairConstraint}

## Logical Constraints

- [NOT](#constraints-not) {+sh:not ?cat:includes .class:LogicalConstraint}
- [AND](#constraints-and) {+sh:and ?cat:includes .class:LogicalConstraint}

## String Constraints

- [Minimum Length](#constraints-length) {+sh:minLength ?cat:includes .class:StringConstraint}
- [Maximum Length](#constraints-length) {+sh:maxLength ?cat:includes .class:StringConstraint}
- [Pattern](#constraints-pattern) {+sh:pattern ?cat:includes .class:StringConstraint}
- [Pattern Flags](#constraints-pattern) {+sh:flags ?cat:includes .class:StringConstraint}
- [Language In](#constraints-language) {+sh:languageIn ?cat:includes .class:StringConstraint}
- [Unique Languages](#constraints-uniquelang) {+sh:uniqueLang ?cat:includes .class:StringConstraint}

## Other Constraints

- [Has Value](#constraints-hasvalue) {+sh:hasValue ?cat:includes}
- [Entity type](#constraints-node) {+sh:node ?cat:includes .class:ShapeConstraint}
- [Value enumeration](#constraints-in) {+sh:in ?cat:includes}
- [Qualified Min Count](#constraints-qualifiedcount) {+sh:qualifiedMinCount ?cat:includes}
- [Qualified Max Count](#constraints-qualifiedcount) {+sh:qualifiedMaxCount ?cat:includes}
- [Closed world](#constraints-closed) {+sh:closed ?cat:includes .class:MetadataPredicate}
- [Deactivation flag](#constraints-deactivated) {+sh:deactivated ?cat:includes .class:MetadataPredicate}
- [Severity levels](#constraints-severity) {+sh:severity ?cat:includes .class:MetadataPredicate}
- [Violation message](#constraints-message) {+sh:message ?cat:includes .class:MetadataPredicate}

Some parts are still completely uncovered and don't work even on ttl or pure quads - something might be wrong in the validator or in examples we use in tests, need deeper investigation:

- Ignored Properties {+sh:ignoredProperties ?cat:includes .class:MetadataPredicate .cat:notCovered}

## JavaScript Constraints

- [JavaScript Function](#constraints-js) {+sh:js ?cat:includes .class:JSConstraint}
- JS Function Name {+sh:jsFunctionName ?cat:includes .class:JSConstraint .cat:notCovered}
- JS Library {+sh:jsLibrary ?cat:includes .class:JSConstraint .cat:notCovered}
- JS Library URL {+sh:jsLibraryURL ?cat:includes .class:JSConstraint .cat:notCovered}

## SPARQL Constraints

- SPARQL ASK Query {+sh:ask ?cat:includes .class:SPARQLConstraint .cat:notCovered}
- SPARQL SELECT Query {+sh:select ?cat:includes .class:SPARQLConstraint .cat:notCovered}
- SPARQL CONSTRUCT Query {+sh:construct ?cat:includes .class:SPARQLConstraint .cat:notCovered}
- SPARQL UPDATE Query {+sh:update ?cat:includes .class:SPARQLConstraint .cat:notCovered}

## Logical Constraints (Broken)

These seem to be broken in the validator:

- OR {+sh:or ?cat:includes .class:LogicalConstraint .cat:notCovered}
- XONE {+sh:xone ?cat:includes .class:LogicalConstraint .cat:notCovered}

## Property Path Constraints

Need to check if these are working:

- Qualified Value Shape {+sh:qualifiedValueShape ?cat:includes .class:ShapeConstraint .cat:notCovered}
- Qualified Value Shapes Disjoint {+sh:qualifiedValueShapesDisjoint ?cat:includes .class:ShapeConstraint .cat:notCovered}
- Inverse Path {+sh:inversePath ?cat:includes .class:PropertyPath .cat:notCovered}
- Alternative Path {+sh:alternativePath ?cat:includes .class:PropertyPath .cat:notCovered}
- Zero or More Path {+sh:zeroOrMorePath ?cat:includes .class:PropertyPath .cat:notCovered}
- One or More Path {+sh:oneOrMorePath ?cat:includes .class:PropertyPath .cat:notCovered}
- Zero or One Path {+sh:zeroOrOnePath ?cat:includes .class:PropertyPath .cat:notCovered}

---

## Some constraints are environment dependent, are not tested to be working and are [Not covered] {=cat:notCovered .Class label} by this calalog.






{=}



<a id="constraints-class"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>
[ex] <cat:example/class/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Class {=sh:class .class:Constraint label}

> Expects each value to be an instance of a specific class (RDF type) {comment}

<http://www.w3.org/ns/shacl#class> {?cat:fullIRI}

---






{=}



<a id="constraints-datatype"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>
[ex] <cat:example/datatype/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Data Type {=sh:datatype .class:Constraint label}

<http://www.w3.org/ns/shacl#datatype> {?cat:fullIRI}

> Expects a literal value to have certain datatype {comment}

---






{=}



<a id="constraints-nodekind"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>

# Node Kind {=sh:nodeKind .class:Constraint label}

> Expects a node to be of a specific kind (blank node, IRI, or literal) {comment}

<http://www.w3.org/ns/shacl#nodeKind> {?cat:fullIRI}

---

## 📝 MDLD Syntax Patterns

**Recommended pattern for node kind constraints:**

1. Use `sh:targetClass` for class-based targeting
2. Focus on IRI and Literal node kinds (MDLD doesn't produce blank nodes)
3. Use correct property syntax: IRIs without brackets, literals with brackets
4. Test both valid and invalid node kind combinations

**Use cases:**
- **Type safety** - ensure references are IRIs, content is literal
- **Data integrity** - validate node types match expected patterns
- **Schema validation** - enforce proper RDF node kind constraints

**Key advantages:**
- ✅ **Type checking** - validates node kinds at the semantic level
- ✅ **Data quality** - ensures proper node type usage
- ✅ **Schema enforcement** - maintains RDF graph integrity

---

## 🎯 Real-World Examples

### **Document Management:**
```md
# Document content must be literal, references must be IRI
{+ex:content ?sh:path ?sh:Literal ?sh:nodeKind}
{+ex:reference ?sh:path ?sh:IRI ?sh:nodeKind}
```

### **API Endpoints:**
```md
# API URLs must be IRIs, response bodies must be literals
{+ex:endpoint ?sh:path ?sh:IRI ?sh:nodeKind}
{+ex:response ?sh:path ?sh:Literal ?sh:nodeKind}
```

### **User Profiles:**
```md
# User IDs must be IRIs, names must be literals
{+ex:userId ?sh:path ?sh:IRI ?sh:nodeKind}
{+ex:userName ?sh:path ?sh:Literal ?sh:nodeKind}
```

---

## 🏗️ **Node Kind Reference**

### IRI {=sh:IRI .sh:NodeKind label}

> Internationalized Resource Identifier - a global identifier for resources {?comment}

### Literal {=sh:Literal .sh:NodeKind label}

> Literal value such as strings, numbers, dates {?comment}

### BlankNodeOrIRI {=sh:BlankNodeOrIRI .sh:NodeKind label}

> Either a blank node or an IRI (but not a literal) {?comment}

**Note:** MDLD doesn't produce blank nodes, so focus on IRI and Literal constraints for practical demonstrations.






{=}



<a id="constraints-count"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>
[ex] <cat:example/count/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Min Count {=sh:minCount .class:Constraint label}

> Specifies the minimum number of values a property must have {comment}

<http://www.w3.org/ns/shacl#minCount> {?cat:fullIRI}

# Max Count {=sh:maxCount .class:Constraint label}

> Specifies the maximum number of values a property can have {comment}

<http://www.w3.org/ns/shacl#maxCount> {?cat:fullIRI}

---


**Person must have exactly one email address** {=ex:#emailExact .sh:PropertyShape  sh:message} requires the [email] {+ex:email ?sh:path} property to have exactly  [1] {sh:minCount sh:maxCount ^^xsd:integer}.

**Person can have at most two phone numbers** {=ex:#phoneOptional .sh:PropertyShape  sh:message} allows the [phone] {+ex:phone ?sh:path} property to have at most [2] {sh:maxCount ^^xsd:integer} values.

---

### 📋 Test Data {=ex:data .Container}

#### Valid Person {=ex:ValidPerson ?member}

Email: [work@example.com] {ex:email}
Phone: [555-1234] {ex:phone}
Phone: [555-5678] {ex:phone}

#### Invalid Person - Too Few {=ex:InvalidPersonFew ?member}

Phone: [555-1234] {ex:phone}

#### Invalid Person - Too Many {=ex:InvalidPersonMany ?member}

Email: [work@example.com] {ex:email}
Email: [personal@example.com] {ex:email}
Phone: [555-1234] {ex:phone}
Phone: [555-5678] {ex:phone}
Phone: [555-9999] {ex:phone}

---

[Demo] {=ex:demo} must produce exactly **3** {cat:expectsViolations ^^xsd:integer} violations.

### Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid Person** - passes (1 email, 2 phones - all within limits)
2. **Invalid Person - Too Few** - fails (0 emails - below minCount of 1)
3. **Invalid Person - Too Many** - fails 2 times (2 emails - exceeds maxCount of 1, 3 phones exceed the maxCount of 2)

### 🔍 Test Validation

```bash
# This should show 3 violations for count constraint violations
ig-cli validate ./constraints/count.md
```

---

## 📝 MDLD Syntax Patterns

**Recommended pattern for count constraints:**

1. Use exact values with both minCount and maxCount for required properties
2. Use maxCount alone for optional multi-valued properties
3. Combine multiple count constraints in a single NodeShape
4. Provide clear validation messages that specify the exact requirement

This approach ensures precise cardinality control while maintaining readability.






{=}



<a id="constraints-range"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/range/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Minimum Inclusive {=sh:minInclusive .class:Constraint label}

> Specifies the minimum inclusive value for range constraints - the value must be greater than or equal to this bound. Works with numbers, dates, times, and other ordered datatypes. {comment}

<http://www.w3.org/ns/shacl#minInclusive> {?cat:fullIRI}

# Maximum Inclusive {=sh:maxInclusive .class:Constraint label}

> Specifies the maximum inclusive value for range constraints - the value must be less than or equal to this bound. Works with numbers, dates, times, and other ordered datatypes. {comment}

<http://www.w3.org/ns/shacl#maxInclusive> {?cat:fullIRI}

# Minimum Exclusive {=sh:minExclusive .class:Constraint label}

> Specifies the minimum exclusive value for range constraints - the value must be greater than this bound. Works with numbers, dates, times, and other ordered datatypes. {comment}

<http://www.w3.org/ns/shacl#minExclusive> {?cat:fullIRI}

# Maximum Exclusive {=sh:maxExclusive .class:Constraint label}

> Specifies the maximum exclusive value for range constraints - the value must be less than this bound. Works with numbers, dates, times, and other ordered datatypes. {comment}

<http://www.w3.org/ns/shacl#maxExclusive> {?cat:fullIRI}

---






{=}



<a id="constraints-comparison"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/comparison/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Comparison Constraints {=sh:lessThan .class:ComparisonConstraint label}

> Validates property values against reference nodes using comparison operators. Essential for ordering, version control, date validation, and business rule enforcement where values must be smaller than or equal to specific reference points. {comment}

<http://www.w3.org/ns/shacl#lessThan> {?cat:fullIRI}
<http://www.w3.org/ns/shacl#lessThanOrEquals> {?cat:fullIRI}
<http://www.w3.org/ns/shacl#equals> {?cat:fullIRI}

---






{=}



<a id="constraints-disjoint"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Disjoint Constraint {=sh:disjoint .class:DisjointConstraint label}

> Ensures that values of a property are disjoint with values of another property. Essential for preventing value overlap between related properties like labels, categories, or mutually exclusive attributes. {comment}

<http://www.w3.org/ns/shacl#disjoint> {?cat:fullIRI}

---






{=}



<a id="constraints-not"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/not/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# NOT Constraint {=sh:not .class:LogicalConstraint label}

> Requires value nodes to NOT conform to a given shape. Essential for negation patterns and exclusion rules. {comment}

<http://www.w3.org/ns/shacl#not> {?cat:fullIRI}

---






{=}



<a id="constraints-and"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/logical/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# AND Constraint {=sh:and .class:LogicalConstraint label}

> Requires all constraints in the list to be satisfied. Essential when multiple conditions must all pass for validation to succeed. {comment}

<http://www.w3.org/ns/shacl#and> {?cat:fullIRI}

---






{=}



<a id="constraints-length"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/length/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Min Length {=sh:minLength .class:Constraint label}

> Specifies the minimum length of string values - useful for password requirements, username validation, or content length limits. {comment}

<http://www.w3.org/ns/shacl#minLength> {?cat:fullIRI}

# Max Length {=sh:maxLength .class:Constraint label}

> Specifies the maximum length of string values - useful for field size limits, message length restrictions, or data entry constraints. {comment}

<http://www.w3.org/ns/shacl#maxLength> {?cat:fullIRI}

---


**Username must be 3-20 characters long** {=ex:#usernameLength .sh:PropertyShape sh:message} requires the [username] {+ex:username ?sh:path} property to have at least [3] {sh:minLength ^^xsd:integer} and at most [20] {sh:maxLength ^^xsd:integer} characters.

**Password must be at least 8 characters long** {=ex:#passwordLength .sh:PropertyShape sh:message} 
[password] {+ex:password ?sh:path} property to have at least [8] {sh:minLength ^^xsd:integer} characters.

**Bio must be at most 200 characters long** {=ex:#bioLength .sh:PropertyShape sh:message}  
[bio] {+ex:bio ?sh:path} property has at most [200] {sh:maxLength ^^xsd:integer} characters.

---

### 📋 Test Data {=ex:data .Container}

#### Valid User {=ex:ValidUser ?member}

A user with properly sized fields.

Username: [john_doe] {ex:username}
Password: [securepass123] {ex:password}
Bio: [Software developer with 5 years of experience in web technologies] {ex:bio}

#### Invalid User - Short Username {=ex:InvalidUserShort ?member}

A user with username that's too short.

Username: [jd] {ex:username}
Password: [securepass123] {ex:password}
Bio: [Software developer] {ex:bio}

#### Invalid User - Long Username {=ex:InvalidUserLong ?member}

A user with username that's too long.

Username: [this_username_is_way_too_long_for_the_system] {ex:username}
Password: [securepass123] {ex:password}
Bio: [Software developer] {ex:bio}

#### Invalid User - Short Password {=ex:InvalidUserPassword ?member}

A user with password that's too short.

Username: [john_doe] {ex:username}
Password: [short] {ex:password}
Bio: [Software developer] {ex:bio}

#### Invalid User - Long Bio {=ex:InvalidUserBio ?member}

A user with bio that's too long.

Username: [john_doe] {ex:username}
Password: [securepass123] {ex:password}
Bio: [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.] {ex:bio}

---

{=ex:demo} must produce exactly **4** {cat:expectsViolations ^^xsd:integer} violations.

### Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid User** - passes (all length constraints satisfied)
2. **Invalid User - Short Username** - fails once (username too short: 2 < 3)
3. **Invalid User - Long Username** - fails once (username too long: 33 > 20)
4. **Invalid User - Short Password** - fails once (password too short: 5 < 8)
5. **Invalid User - Long Bio** - fails once (bio too long: > 200 characters)

Note: Length constraints enforce string size limits for usernames, passwords, and bio fields. Both minLength and maxLength can be used together or separately.

### 🔍 Test Validation

```bash
# This should show 4 violations - various length constraint failures
ig-cli validate ./constraints/length.md
```

---

## 📝 MDLD Syntax Patterns

**Recommended pattern for length constraints:**

1. Use container member targeting for comprehensive validation
2. Apply inline subject redeclaration for multiple PropertyShapes
3. Combine minLength and maxLength in single PropertyShape when needed
4. Use integer literals with xsd:integer datatype for bounds

**Key advantages:**
- ✅ **String size validation** - enforce minimum and maximum lengths
- ✅ **Input validation** - prevent too short or too long entries
- ✅ **User experience** - ensure appropriate field sizes
- ✅ **Data quality** - maintain consistent string lengths

---

## 🎯 Use Cases

- **Username validation** - enforce reasonable username lengths
- **Password policies** - ensure minimum password complexity
- **Content limits** - restrict post/comment/message sizes
- **Form validation** - enforce field size requirements
- **Database constraints** - match column length limits
- **API validation** - ensure request payload sizes






{=}



<a id="constraints-pattern"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Pattern Constraint {=sh:pattern .class:PatternConstraint label}

> Validates string values against regular expression patterns. Essential for email validation, phone number formatting, identifier patterns, and any text-based data format requirements. {comment}

<http://www.w3.org/ns/shacl#pattern> {?cat:fullIRI}
<http://www.w3.org/ns/shacl#flags> {?cat:fullIRI}

---






{=}



<a id="constraints-language"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/language/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Language In {=sh:languageIn .class:StringConstraint label}

> Constrains string literals to have language tags from a specified list using RDF lists. Essential for multilingual content validation and internationalization support. {comment}

<http://www.w3.org/ns/shacl#languageIn> {?cat:fullIRI}

***






{=}



<a id="constraints-uniquelang"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <ttps://mdld.js.org/shacl/catalog/uniqueLang/example/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Unique Languages Constraint {=sh:uniqueLang .class:UniqueLanguageConstraint label}

> Ensures that language tags of string literals are unique within a property. Essential for multilingual content management, preventing duplicate language entries, and maintaining clean internationalization data. {comment}

<http://www.w3.org/ns/shacl#uniqueLang> {?cat:fullIRI}

***






{=}



<a id="constraints-hasvalue"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/hasvalue/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Has Value {=sh:hasValue .class:Constraint label}

> Requires a property to have exactly this specific value - useful for fixed status fields, required constants, or mandatory identifiers. {comment}

<http://www.w3.org/ns/shacl#hasValue> {?cat:fullIRI}

---






{=}



<a id="constraints-node"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/node/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Node Constraint {=sh:node .class:NodeConstraint label}

> Requires property values to conform to a specific node shape. Essential for validating complex nested objects and ensuring structural integrity of related entities. {comment}

<http://www.w3.org/ns/shacl#node> {?cat:fullIRI}

---






{=}



<a id="constraints-in"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/in/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Value Enumeration {=sh:in .class:PresenceConstraint label}

> Constrains property values to be within a specified list of allowed values using RDF lists. Essential for controlled vocabularies, status codes, and enumeration validation. {comment}

<http://www.w3.org/ns/shacl#in> {?cat:fullIRI}

---






{=}



<a id="constraints-qualifiedcount"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/qualified/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Qualified Count Constraints {=sh:qualifiedMinCount .class:QualifiedConstraint label}

> Applies count constraints only to values that meet additional shape criteria. Essential for conditional validation where only certain values should be counted. {comment}

<http://www.w3.org/ns/shacl#qualifiedMinCount> {?cat:fullIRI}
<http://www.w3.org/ns/shacl#qualifiedMaxCount> {?cat:fullIRI}

---






{=}



<a id="constraints-closed"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[schema] <http://schema.org/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Closed World Constraint {=sh:closed .class:ClosedWorldConstraint label}

> Enables closed world validation where only explicitly declared properties are allowed. Essential for strict data modeling, schema enforcement, and preventing property proliferation in RDF graphs. {comment}

<http://www.w3.org/ns/shacl#closed> {?cat:fullIRI}

***






{=}



<a id="constraints-deactivated"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Deactivated Constraint {=sh:deactivated .class:DeactivatedConstraint label}

> Temporarily disables specific constraints during validation. Essential for phased validation, conditional rule enforcement, and managing constraint lifecycle in evolving schemas. {comment}

<http://www.w3.org/ns/shacl#deactivated> {?cat:fullIRI}

---






{=}



<a id="constraints-severity"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Severity Levels {=sh:severity .class:SeverityConstraint label}

> Defines the severity level of validation violations (Info, Warning, Violation). Essential for prioritizing validation results and managing different types of constraint failures. {comment}

<http://www.w3.org/ns/shacl#severity> {?cat:fullIRI}
<http://www.w3.org/ns/shacl#message> {?cat:fullIRI}

---






{=}



<a id="constraints-message"></a>

[mdld] <https://mdld.js.org/vocab/>
[cat] <https://mdld.js.org/shacl/catalog/>
[ex] <http://example.org/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Violation Message {=sh:message .class:MessageConstraint label}

> Provides human-readable error messages for constraint violations. Essential for user-friendly validation feedback, debugging, and actionable error reporting. {comment}

<http://www.w3.org/ns/shacl#message> {?cat:fullIRI}

---


### Valid Contract {=ex:ValidContract .ex:Contract}

Contract that meets all business requirements.

Value: [50000.00] {ex:contractValue ^^xsd:decimal}
Approval Date: [2024-01-15] {ex:approvalDate ^^xsd:date}
Start Date: [2024-02-01] {ex:startDate ^^xsd:date}

### Invalid Contract {=ex:InvalidContract .ex:Contract}

Contract with multiple business rule violations.

Value: [-1000.00] {ex:contractValue ^^xsd:decimal}  # Negative value
Approval Date: [2024-03-01] {ex:approvalDate ^^xsd:date}  # After start date
Start Date: [2024-02-01] {ex:startDate ^^xsd:date}

---

[This demo] {=ex:demo} must produce exactly **2** {cat:expectsViolations ^^xsd:integer} violations.

## Expected Validation Results {=ex:results ?cat:hasResults}

1. **Valid Contract** - passes (positive value, approved before start, acceptable risk ✓)
2. **Invalid Contract** - fails two times:
   - **Value violation**: Contract value must be positive for financial compliance ✗
   - **Date violation**: Contract must be approved before start date ✗

### 🔍 Test Validation

```bash
# This should show 2 violations with semantic business messages
ig-cli validate ./constraints/message.md
```

---

## 📝 Message Design Principles

**Semantic clarity:**
- **Business context** - Explain what business rule is violated
- **Impact description** - Describe why this matters
- **Actionable guidance** - Suggest how to fix the issue
- **Domain terminology** - Use appropriate business language

**Message structure patterns:**

### 1. Comparison Constraints
```md
**[Property] must be [relationship] [reference property]**: **[Business consequence]**
```
*Example*: "Contract must be approved before start date"
*Why*: Explains temporal business rule clearly

### 2. Value Range Constraints  
```md
**[Property] must be [condition] for [business requirement]**: **[Compliance reason]**
```
*Example*: "Contract value must be positive for financial compliance"
*Why*: Connects technical rule to business purpose

### 3. Enumeration Constraints
```md
**[Property] must be within acceptable [domain] parameters**: **[Business justification]**
```
*Example*: "Risk level must be within acceptable business parameters"
*Why*: Explains domain validation in business terms

## 🎯 Advanced Message Techniques

**Context-aware messaging:**
- **Multi-constraint scenarios** - Different messages for related violations
- **Severity-appropriate language** - Critical vs. informational tone
- **User role consideration** - Technical vs. business audience
- **Internationalization ready** - Clear, translatable messages

**Complex scenario handling:**
- **Cascading violations** - When one failure causes others
- **Interdependent rules** - Messages that reference related constraints
- **Business process flow** - Messages that follow workflow logic
- **Compliance reporting** - Regulatory and audit-focused language

**Message quality checklist:**
- ✅ **Specific** - Identifies exact constraint violated
- ✅ **Semantic** - Carries business meaning, not just technical
- ✅ **Actionable** - Provides clear resolution path
- ✅ **Consistent** - Uses uniform terminology across constraints
- ✅ **Concise** - Delivers maximum information efficiently






{=}



<a id="constraints-js"></a>

[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>
[ex] <cat:example/js/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# JavaScript Function {=sh:js .class:Constraint label}

<http://www.w3.org/ns/shacl#js> {?cat:fullIRI}

> Allows custom JavaScript validation functions for complex constraint logic {comment}

---
