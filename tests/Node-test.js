import { expect } from 'chai';
import  Node  from '../lib/Node.js';


describe('Node', () => {

  let node;

  beforeEach(() => {
    node = new Node('z');
  });

  it('should be a object', () => {
    expect(node).to.be.an('object');

  });

  it('should take a letter as a property', () => {
    expect(node.letter).to.equal('z');

  });

  it('should take children as a property', () => {
    expect(node.children).to.deep.equal({});

  });

  it('should have word end as a property', () => {
    expect(node.wordEnd).to.equal(false);

  });

  it('should have a popularity that starts at 0', () => {
    expect(node.popularity).to.equal(0);
  })

});


