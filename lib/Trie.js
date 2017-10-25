import Node from './Node.js';

export default class Trie {
  constructor() {
    this.root = new Node('');
    this.count = 0;

  }

  insert(word) {
    this.count++;
    word = word.split(''); 
    let currentNode = this.root; 
    let currentChild = this.root.children; 

    word.forEach( (letter) => { 
      if (!currentChild[letter]) { 
        currentChild[letter] = new Node(letter);
      }
      currentNode = currentNode.children[letter];
      currentChild = currentChild[letter].children;
    });
    currentNode.wordEnd = true; 
  }

  suggest(phrase) {
    phrase = phrase.split('');
    let currentNode = this.root; 

    phrase.forEach((letter) => {
      currentNode = currentNode.children[letter];
      
    });
    
    return this.findSuggestion(currentNode, phrase.join(''));
  }

  findSuggestion(currentNode, phrase) {
    let childrenLetters = Object.keys(currentNode.children);
    let suggestions = [];

    childrenLetters.forEach((childLetter) => {
      let letterNode = currentNode.children[childLetter];
      let newPhrase = phrase + childLetter;

      if (letterNode.children === {}) {
        suggestions.push(newPhrase);
      } else if (letterNode.wordEnd) {
        suggestions.push(newPhrase);
        suggestions.push(...this.findSuggestion(letterNode, newPhrase));
      } else {
        suggestions.push(...this.findSuggestion(letterNode, newPhrase));
      }
    });
    return suggestions;
  }

  populate(list) {
    list.forEach( (word) => {
      this.insert(word);
    });

  }

  count() {
    return this.count;
  }

  select() {

  }

}