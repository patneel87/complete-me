import { expect } from 'chai';
import index from '../lib/index'
import { bubbleSort, insertionSort, mergeSort, quickSort } from '@patneel87/sorting-suite';

describe('example test file', () => {
  it('should sort some stuff', () => {
    expect(bubbleSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
  })
})
