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
