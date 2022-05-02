const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

constructor(){
  this.tree = null;
}

  root() {
    return this.tree;
  }


  add(data){
    this.tree = addWithin(this.tree, data)

    function addWithin(node, data){
      if(!node){
        return new Node(data);
      }

      if(node.data===data){
        return node;
      }

  
    if (data < node.data){
      node.left = addWithin(node.left, data);
    } else {
      node.right = addWithin(node.right, data)
    }

  return node;


}
}


  has(data) {
      let current = this.tree;
      while (current){
        if (data === current.data){
          return true;
        }
        if(data < current.data){
          current = current.left;
        }else{
          current = current.right;
        }
      }
      return false;
  }

  find(data) {
  let current = this.tree;
  while (current.data !== data){
    if (data< current.data){
      current = current.left
    }else{
      current = current.right
    }
    if (current === null){
      return null;
    }
  }
  return current;
  }

  remove(data) {
   const removeNode = function(node, data){
     if (node == null){
       return null;
     }
     if(data == node.data){
       if (node.left == null && node.right == null){
         return null
       }
       if (node.left == null){
         return node.right
       }
       if (node.right == null){
        return node.left
      }
      let tempNode = node.right;

      while (tempNode.left !== null){
        tempNode = tempNode.left
      }
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data)
      return node;
     }else if (data < node.data){
       node.left=removeNode(node.left,data);
       return node;
     }else {
      node.right=removeNode(node.right,data);
      return node;
    }
   }
   this.tree = removeNode(this.tree, data)
  }


  min() {
   let current = this.tree;
   while (current.left !== null){
     current=current.left
   }
   return current.data;
  }

  max() {
    let current = this.tree;
    while (current.right !== null){
      current=current.right
    }
    return current.data;
   }

}

module.exports = {
  BinarySearchTree
};