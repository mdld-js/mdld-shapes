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
