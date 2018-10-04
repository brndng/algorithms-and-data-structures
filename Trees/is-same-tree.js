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
