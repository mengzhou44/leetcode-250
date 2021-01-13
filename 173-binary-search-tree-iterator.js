class BSTIterator {
        constructor(root) {
                this.array = [];
                this.dfs(root);
        }

        next() {
                return this.array.shift();
        }

        hasNext() {
                return this.array.length > 0;
        }

        dfs(node) {
                if (node === null) return;
                this.dfs(node.left);
                this.array.push(node.val);
                this.dfs(node.right);
        }
}
