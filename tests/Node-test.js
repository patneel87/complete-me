import { expect } from 'chai';
import  Node  from '../lib/Node.js';


describe('Node', () => {
  let node;

  beforeEach(() => {
    node = new Node();
  });

  it('should be a function', () => {
    expect(Node).to.be.a('function');

  });

  

});


