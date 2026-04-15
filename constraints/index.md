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

- [Class](./class.md) {+sh:class ?cat:includes .class:ValueTypeConstraint}
- [Data Type](./datatype.md) {+sh:datatype ?cat:includes .class:ValueTypeConstraint}
- [Node Kind](./nodekind.md) {+sh:nodeKind ?cat:includes .class:ValueTypeConstraint}

## Cardinality Constraints

- [Min Count](./count.md) {+sh:minCount ?cat:includes .class:CardinalityConstraint}
- [Max Count](./count.md) {+sh:maxCount ?cat:includes .class:CardinalityConstraint}

## Value Range Constraints

- [Min Inclusive](./range.md) {+sh:minInclusive ?cat:includes .class:ValueRangeConstraint}
- [Max Inclusive](./range.md) {+sh:maxInclusive ?cat:includes .class:ValueRangeConstraint}
- [Min Exclusive](./range.md) {+sh:minExclusive ?cat:includes .class:ValueRangeConstraint}
- [Max Exclusive](./range.md) {+sh:maxExclusive ?cat:includes .class:ValueRangeConstraint}

## Property Pair Constraints

- [Equals](./comparison.md) {+sh:equals ?cat:includes .class:PropertyPairConstraint}
- [Disjoint](./disjoint.md) {+sh:disjoint ?cat:includes .class:PropertyPairConstraint}
- [Less Than](./comparison.md) {+sh:lessThan ?cat:includes .class:PropertyPairConstraint}
- [Less Than or Equals](./comparison.md) {+sh:lessThanOrEquals ?cat:includes .class:PropertyPairConstraint}

## Logical Constraints

- [NOT](./not.md) {+sh:not ?cat:includes .class:LogicalConstraint}
- [AND](./and.md) {+sh:and ?cat:includes .class:LogicalConstraint}

## String Constraints

- [Minimum Length](./length.md) {+sh:minLength ?cat:includes .class:StringConstraint}
- [Maximum Length](./length.md) {+sh:maxLength ?cat:includes .class:StringConstraint}
- [Pattern](./pattern.md) {+sh:pattern ?cat:includes .class:StringConstraint}
- [Pattern Flags](./pattern.md) {+sh:flags ?cat:includes .class:StringConstraint}
- [Language In](./language.md) {+sh:languageIn ?cat:includes .class:StringConstraint}
- [Unique Languages](./uniqueLang.md) {+sh:uniqueLang ?cat:includes .class:StringConstraint}

## Other Constraints

- [Has Value](./hasvalue.md) {+sh:hasValue ?cat:includes}
- [Entity type](./node.md) {+sh:node ?cat:includes .class:ShapeConstraint}
- [Value enumeration](./in.md) {+sh:in ?cat:includes}
- [Qualified Min Count](./qualifiedCount.md) {+sh:qualifiedMinCount ?cat:includes}
- [Qualified Max Count](./qualifiedCount.md) {+sh:qualifiedMaxCount ?cat:includes}
- [Closed world](./closed.md) {+sh:closed ?cat:includes .class:MetadataPredicate}
- [Deactivation flag](./deactivated.md) {+sh:deactivated ?cat:includes .class:MetadataPredicate}
- [Severity levels](./severity.md) {+sh:severity ?cat:includes .class:MetadataPredicate}
- [Violation message](./message.md) {+sh:message ?cat:includes .class:MetadataPredicate}

Some parts are still completely uncovered and don't work even on ttl or pure quads - something might be wrong in the validator or in examples we use in tests, need deeper investigation:

- Ignored Properties {+sh:ignoredProperties ?cat:includes .class:MetadataPredicate .cat:notCovered}

## JavaScript Constraints

- [JavaScript Function](./js.md) {+sh:js ?cat:includes .class:JSConstraint}
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
