function dfs(node, find, traversed) {
  traversed = traversed || [];
  traversed.push(node);

  // Find node?
  if (node === find) return true;

  for (var i = 0; i < node.adj.length; i++) {
    var n = node.adj[i];

    // Ignore if already traversed
    if (traversed.indexOf(n) !== -1) continue;

    // Break if found
    if (dfs(n, find, traversed)) {
      return true;
    }
  }

  return false;
}

module.exports = function hasRoute(a, b) {
  return dfs(a, b) || dfs(b, a);
};
