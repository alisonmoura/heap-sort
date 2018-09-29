import { Heap } from './Heap' 

class Main {
  
  constructor () {
    let array = new Array<Number>()
    array.push(1)
    array.push(4)
    array.push(3)
    array.push(5)
    array.push(7)
    array.push(6)
    array.push(8)
    array.push(1)
    array.push(4)
    array.push(3)
    array.push(5)
    array.push(7)
    let heap = new Heap(array)
    heap.printHeap()
  }

}

new Main();