import Node from './Node.js';

export default class Trie {
  constructor() {
    this.root = new Node('');
    this.count = 0;

  }

  insert(word) {
    this.count++;
    word = word.split('');
    let currentNode = this.root.children;
    let currentChild = this.root;
    for(let i = 0; i < word.length; i++) {
      if(currentNode.hasOwnProperty(word[i])) {
        currentNode = currentNode[word[i]].children;
        currentChild = currentChild.children[word[i]]
      } else {
        currentNode[word[i]] = new Node(word[i]);
        currentNode = currentNode[word[i]].children;
        currentChild = currentChild.children[word[i]];
      }
    }
    currentChild.wordEnd = true;
  }

  suggest() {
    let suggest = [];
    

  }

  populate(list) {
    list.forEach( (word) => {
      this.insert(word);
    })

  }

  count() {

  }

  select() {

  }

};