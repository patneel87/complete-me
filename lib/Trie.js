import Node from './Node.js';

export default class Trie {
  constructor() {
    this.root = new Node('');
    this.count = 0;
    this.suggestions = [];
  }

  insert(word) {
    //incremitaing the word count when word inserted
    this.count++;
    //splitting word into an array
    word = word.split(''); 
    //setting variable to root and child
    let currentNode = this.root; 
    let currentChild = this.root.children; 
    //iterate over the entire word. if current child doesn't exit, create new node with the letter

    word.forEach( (letter) => { 
      if (!currentChild[letter]) { 
        currentChild[letter] = new Node(letter);
      }
      //if current child exists, reassign var to current child and current node so k
      currentNode = currentNode.children[letter];
      currentChild = currentChild[letter].children;
    });
    //when reach end , change node property from false to true.
    currentNode.wordEnd = true; 
  }

  count() {
    return this.count;
  }

  suggest(phrase) {
    this.suggestions = [];
    phrase = phrase.split('');
    let currentNode = this.root;

    phrase.forEach(letter => {
      currentNode = currentNode.children[letter];
    });
    return this.findSuggestions(currentNode, phrase.join(''));
  }
  findSuggestions(currentNode, phrase) {
    let childrenLetters = Object.keys(currentNode.children);

    childrenLetters.forEach(childLetter => {
      let letterNode = currentNode.children[childLetter];
      let newPhrase = phrase + childLetter;

      if (letterNode.wordEnd) {
        this.suggestions.push(
          {word: newPhrase, popCount: letterNode.popularity}
          );
      }
      return this.findSuggestions(letterNode, newPhrase);
    });
    this.suggestions.sort((a, b) => {
      return b.popCount - a.popCount;
    });
    return this.suggestions.map(newWord => {
      return newWord.word;
    });
  }

  populate(list) {
    list.forEach( (word) => {
      this.insert(word);
    });

  }

  select(word) {
    let currentNode = this.root;

    word = word.split('');
    word.forEach((letter) => {
      currentNode = currentNode.children[letter];
    });
    currentNode.popular++;
  }

}