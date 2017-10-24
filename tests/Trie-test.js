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

});

describe('Insert', () => {

  it('should be able to insert a word', () => {
    trie.insert('corgi');
    // console.log(JSON.stringify(trie, null, 2))

  });

  it('should be able to insert many words', () => {
    trie.insert('stuff');
    trie.insert('things');
    trie.insert('cobra');

  });

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

  it.skip('should be able to suggest a word based on the prefix', () => {


  });


  
});

describe('Populate', () => {

  it('should populate the dictionary', () => {
    trie.populate(dictionary);
    expect(trie.count).to.equal(235886);

  });

});

