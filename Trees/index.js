// Merge two binary trees
const mergeTrees = (t1, t2) => {
  if (!t1) return t2;
  if (!t2) return t1;

  t1.val = t1.val + t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  return t1;
};

// Invert a binary tree
const invertTree = root => {
  const swapChildrenValues = node => {
    if (!node) return;

    const leftSubtree = node.left;
    node.left = node.right;
    node.right = leftSubtree;

    swapChildrenValues(node.left);
    swapChildrenValues(node.right);
  };

  swapChildrenValues(root);
  return root;
};

// Check if two binary trees are the same (identical structure and values)
const isSameTree = (t1, t2) => {
  if (!t1 && !t2) return true;

  if (t1 && t2) {
    if (
      t1.val === t2.val &&
      isSameTree(t1.left, t2.left) &&
      isSameTree(t1.right, t2.right)
    ) {
      return true;
    }
  }
  return false;
};
