export class Node {

  public value: Number
  public leftChild: Node
  public rightChild: Node

  constructor (value: Number, leftChild: Node, rightChild: Node) {
    this.value = value
    this.leftChild = leftChild
    this.rightChild = rightChild
  }

}