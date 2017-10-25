export default class Node {
  constructor(letter, wordEnd) {
    this.letter = letter;
    this.children = {};
    this.wordEnd = false;
    this.popular = 0;

  }
}