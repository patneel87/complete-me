import { expect } from 'chai';
import index from '../lib/index'
import { bubbleSort, insertionSort, mergeSort, quickSort } from '@patneel87/sorting-suite';
import { trie } from '../lib/Trie.js';
import { node } from '../lib/Node.js';


describe('example test file', () => {
  it('should sort some stuff', () => {
    expect(bubbleSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
  })
})


describe('should describe Trie', () => {
  it('should do some stuff', () => {
    expect(trie).is.object;
  })
})