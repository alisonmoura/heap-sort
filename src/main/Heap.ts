export class Heap {
  
  private array: Array<Number>
  private height: Number;
  
  constructor (array: Array<Number>) {
    this.array = array;
    this.height = Math.round(Math.log(this.array.length) * Math.LOG2E)
  }
  
  printHeap () {
    let str = '\n\n'
    let nodeToPrint = 0
    let gridWidth = 2*(Math.pow(2,Number(this.height)-1))
    console.log(`Número de nós = ${this.array.length}`)
    console.log(`Altura da árvore = ${this.height}`)
    console.log(`Largura da grade = ${gridWidth}`)
    for (let i = 0; i < this.height; i++) {
      let lineNodesQuantity = Math.pow(2,i)
      let spaces = gridWidth/lineNodesQuantity
      for (let j = 0; j < lineNodesQuantity && nodeToPrint < this.array.length; j++) {
        str += this.printSpaces(spaces, this.array[nodeToPrint], i == Number(this.height)-1)
        nodeToPrint++
      }
      str += '\n\n'
    }
    console.log(str)
  }
  
  printSpaces (spaces: Number, node: Number, lastLine: Boolean) {
    let str = ''
    for (let i = 0; i < spaces; i++) {
      str += ' '
    }
    if(!lastLine) str += ' '
    str += node
    for (let i = 0; i < spaces; i++) {
      str += ' '
    }
    return str;
  }
  
}