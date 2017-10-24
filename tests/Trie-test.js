import { expect } from 'chai';
import  Trie  from '../lib/Trie.js';
import Node from '../lib/Node.js';
import fs from 'fs';

const text = "/usr/share/dict/words"
const dictionary = fs.readFileSync(text).toString().trim().split('\n')

let completion;

beforeEach(() => {
  completion = new Trie();
});

describe('Trie', () => {

  it('it should be function', () => {
    expect(Trie).to.be.a('function');

  });

  it('should take a root', () => {

    expect(Trie)

  });

});

describe('Insert', () => {

  it('should be able to insert a word', () => {
    completion.insert('corgi');
    // console.log(JSON.stringify(completion, null, 2))

  });

  it('should be able to insert many words', () => {
    completion.insert('stuff');
    completion.insert('things');
    completion.insert('cobra');

  });

  it('should be able to count a word', () => {
    expect(completion.count).to.equal(0);
    completion.insert('corgi');
    expect(completion.count).to.equal(1);

  });

  it('should be able to count many words', () => {
    expect(completion.count).to.equal(0);
    completion.insert('cobra');
    expect(completion.count).to.equal(1);
    completion.insert('gazelle');
    expect(completion.count).to.equal(2);
    completion.insert('snake');
    expect(completion.count).to.equal(3);

  });

  it('should populate the dictionary', () => {
    completion.populate(dictionary);
    expect(completion.count).to.equal(235886);

  });

});
