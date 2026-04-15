[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[class] <cat:class/>
[ex] <cat:example/count/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Min Count {=sh:minCount .class:Constraint label} Demo

## Shapes {=ex:demo ?cat:hasDemo}

The **Person Test Shape** {=ex:PersonTestShape .sh:NodeShape ?cat:hasShape label} validates all [member] {+member ?sh:targetObjectsOf} entities of the test data container to demonstrate count constraints - [email] {+ex:#emailExact ?sh:property} and [phone] {+ex:#phoneOptional ?sh:property}.
