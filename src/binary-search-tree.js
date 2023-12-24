const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let node = new Node(data);
    if (this.rootNode) {
      let cur = this.rootNode;
      let parent = null;
      while (cur !== null) {
        parent = cur;
        if (cur.data < data) {
          cur = cur.right;
        } else if (cur.data > data) {
          cur = cur.left;
        } else return;
      }
      if (cur === null) {
        if (parent.data > data) {
          parent.left = node;
        }  else {
          parent.right = node;
        }
      }
      return;
    }
    this.rootNode = node;
  }

  has( data ) {
      let cur = this.rootNode;
      while (cur !== null) {
        if (cur.data < data) {
          cur = cur.right;
        }else if (cur.data > data) {
          cur = cur.left;
        } else if(cur.data===data){
          return true;
        }
      }
    return false;
  }

  find(data) {
    let cur = this.rootNode;
      while (cur !== null) {
        if (cur.data < data) {
          cur = cur.right;
        }else if (cur.data > data) {
          cur = cur.left;
        } else {
          return cur;
        }
      }
    return null;
  }

  remove(data) {

    /* let cur = this.rootNode;
    let parent = null;
    while (cur !== null) {
      if (cur.data < data) {
        parent = cur;
        cur = cur.right;
      } else if (cur.data > data) {
        parent = cur;
        cur = cur.left;
      } else if (cur.data === data) {
        if (parent === null) {
          if (this.rootNode.left === null && this.rootNode.right === null) {
            this.rootNode = null;
            return;
          } else {
            let right = this.rootNode.right;
            let left = this.rootNode.left;
            
            while (right !== null) {
              cur = right;
              while (cur.left !== null) {
                parent = cur;
                cur = cur.left;
              }
              right = cur.right;
            }
          }
        }
      }
    } */
    let cur = this.rootNode;
    let parent = null;
    while (cur !== null) {
      if (cur.data < data) {
        parent = cur;
        cur = cur.right;
      } else if (cur.data > data) {
        parent = cur;
        cur = cur.left;
      } else if (cur.data === data) {
        /*         if (parent === null) {
                  if (this.rootNode.left === null && this.rootNode.right === null) {
                    this.rootNode = null;
                    return;
                  } else {
                  } */
        cur.data = this.setNodeData(parent, cur);
        return;
      }
    }
  }

  setNodeData(parent, node) {
    let value;
    while (node.left !== null) {
      parent = node;
      node = node.left;
    }
    if (node.right !== null) {
      value = node.data;
      node.data = this.setNodeData(node, node.right);
      return value;
    } else {
      return this.removeLeaf(parent, node);
    }
  }

  removeLeaf(parent,node) {
    if (node.left === null && node.right === null) {
      if (node.data > parent.data) {
        parent.right = null;
      } else {
        parent.left = null;
      }
      return node.data;
    }
  }

  min() {
    if (this.rootNode) {
    let cur = this.rootNode;
     while (cur.left !== null) {
       cur = cur.left;
      }
      return cur.data;
    }
    return null;
  }

  max() {
    if (this.rootNode) {
    let cur = this.rootNode;
     while (cur.right !== null) {
       cur = cur.right;
      }
      return cur.data;
    }
    return null;
  }
}

module.exports = {
  BinarySearchTree
};