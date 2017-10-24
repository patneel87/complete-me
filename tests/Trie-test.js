import { expect } from 'chai';
import  Trie  from '../lib/Trie.js';
import Node from '../lib/Node.js';
import fs from 'fs';

const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n')


describe('Trie', () => {

  it('it should be function', () => {
    expect(Trie).to.be.a('function');
  });

  it('should be able to insert a word', () => {
    const completion = new Trie();
    completion.insert('corgi');
    completion.insert('court');
    console.log(JSON.stringify(completion, null, 2))
  })

  it('should populate the dictionary', () => {
    const completion = new Trie();
    completion.populate(dictionary);
    expect(completion.count).to.equal(235886);
  });

});