import { expect } from 'chai';
import  Trie  from '../lib/Trie.js';
import Node from '../lib/Node.js';
import fs from 'fs';

const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n')

let trie;

beforeEach(() => {
  trie = new Trie();
});

describe('Trie', () => {

  it('it should be an object', () => {
    expect(trie).to.be.an('object');

  });

  it('should have a node as the root property', () => {
    let node = new Node('');
    expect(trie.root).to.deep.equal(node);

  });

  it('should have a starting count of zero', () => {
    expect(trie.count).to.deep.equal(0);

  });

});

describe('Insert', () => {

  it('should be able to insert a word', () => {
    trie.insert('corgi');
    expect(
      trie.root.children
      .c.children
      .o.children
      .r.children
      .g.children
      .i.letter).to.equal('i');
   
  });

  it('should be able to insert many words', () => {
    trie.insert('stuff');
    trie.insert('thing');
    expect(
      trie.root.children
      .s.children
      .t.children
      .u.children
      .f.children
      .f.letter).to.equal('f');
    expect(
      trie.root.children
      .t.children
      .h.children
      .i.children
      .n.children
      .g.letter).to.equal('g');
    
  });

});

  
describe('Count', () => {

  it('should be able to count a word', () => {
    expect(trie.count).to.equal(0);
    trie.insert('corgi');
    expect(trie.count).to.equal(1);

  });

  it('should be able to count many words', () => {
    expect(trie.count).to.equal(0);
    trie.insert('cobra');
    expect(trie.count).to.equal(1);
    trie.insert('gazelle');
    expect(trie.count).to.equal(2);
    trie.insert('snake');
    expect(trie.count).to.equal(3);

  });

});

describe('Suggest', () => {

  it('should take a suggestion', () => {
    trie.insert('pirate');
    trie.insert('pirate-fishing');
    expect(trie.suggest('pirat')).to.deep.equal(['pirate', 'pirate-fishing']);

  });

  it('should only suggest words that are similar', () => {
    trie.insert('pirate');
    trie.insert('pirate-fishing');
    trie.insert('corgi');
    expect(trie.suggest('pirat')).to.deep.equal(['pirate', 'pirate-fishing']);

  });

  it('should be able to suggest a small amount of words', () => {
    trie.populate(dictionary);
    trie.insert('dum');
    expect(trie.suggest('dum')).to.include.members(['dumb', 'dump','dumpy', 'dummel', 'dumbledore', 'dumbcow', 'dumbfounder']);

  });
  
});

describe('Populate', () => {

  it('should populate the dictionary', () => {
    trie.populate(dictionary);
    expect(trie.count).to.equal(235886);

  });

});

