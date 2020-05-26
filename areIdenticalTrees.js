function areIdentical(root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  if (root1.data != root2.data) return false;

  return areIdentical(root1.left, root2.left) && areIdentical(root1.right, root2.right);
}