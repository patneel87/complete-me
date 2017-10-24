import { expect } from 'chai';
import  Node  from '../lib/Node.js';


describe('Node', () => {
  let node;

  beforeEach(() => {
    node = new Node();
  });

  it('should be a object', () => {
    expect(node).to.be.an('object');

  });

  

});


