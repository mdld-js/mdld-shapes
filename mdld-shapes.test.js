import assert from 'node:assert/strict'
import test from 'node:test'
import { DataFactory } from 'mdld-parse'
import { Store } from './mdld-shapes.js'

const { defaultGraph, namedNode, quad } = DataFactory

test('Store matches indexed subject and predicate with RDF term equality', () => {
  const subject = namedNode('urn:subject')
  const predicate = namedNode('urn:predicate')
  const object = namedNode('urn:object')
  const other = quad(subject, namedNode('urn:other'), object)
  const expected = quad(subject, predicate, object)
  const store = new Store([other, expected])

  assert.deepEqual([...store.match(subject, predicate, null)], [expected])
  assert.deepEqual([...store.match(null, predicate, object)], [expected])
  assert.deepEqual([...store.match(null, null, object)], [other, expected])
})

test('Store indexes stay consistent after add and delete', () => {
  const subject = namedNode('urn:subject')
  const predicate = namedNode('urn:predicate')
  const first = quad(subject, predicate, namedNode('urn:first'))
  const second = quad(subject, predicate, namedNode('urn:second'))
  const store = new Store([first])

  store.add(second)
  assert.equal(store.match(subject, predicate, null).size, 2)

  store.delete(first)
  assert.equal(store.match(subject, predicate, null).size, 1)
  assert.equal(store.match(subject, predicate, null).has(second), true)
})

test('Store match preserves graph filtering', () => {
  const subject = namedNode('urn:subject')
  const predicate = namedNode('urn:predicate')
  const object = namedNode('urn:object')
  const graph = namedNode('urn:graph')
  const defaultGraphQuad = quad(subject, predicate, object, defaultGraph)
  const namedGraphQuad = quad(subject, predicate, object, graph)
  const store = new Store([defaultGraphQuad, namedGraphQuad])

  assert.equal(store.match(subject, predicate, object).size, 2)
  assert.deepEqual([...store.match(null, predicate, null, graph)], [namedGraphQuad])
})
