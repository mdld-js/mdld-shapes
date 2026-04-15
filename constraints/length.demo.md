[mdld] <https://mdld.js.org/>
[cat] <mdld:shacl/>
[ex] <mdld:shacl/example/length/>
[xsd] <http://www.w3.org/2001/XMLSchema#>

# Min Length {=sh:minLength .class:Constraint label} Demo

## Demo {=ex:demo ?cat:hasDemo}

## Shapes

The **User Account Test Shape** {=ex:UserAccountTestShape .sh:NodeShape ?cat:hasShape label} validates all [member] {+member ?sh:targetObjectsOf} entities of the test data container to demonstrate length constraints with **Username Length Rule** {+ex:#usernameLength ?sh:property}, **Password Length Rule** {+ex:#passwordLength ?sh:property label} and **Bio Length Rule** {+ex:#bioLength .sh:PropertyShape ?sh:property label}
