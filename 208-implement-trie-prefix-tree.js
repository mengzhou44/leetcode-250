class TrieNode {
        constructor() {
                this.isWord = false;
                this.children = new Map();
        }
}

class Trie {
        constructor() {
                this.root = new TrieNode();
        }

        insert(word) {
                let cur = this.root;
                for (let ch of word) {
                        if (!cur.children.has(ch)) {
                                cur.children.set(ch, new TrieNode());
                        }
                        cur = cur.children.get(ch);
                }
                cur.isWord = true;
        }

        search(word) {
                return dfs(this.root, 0);

                function dfs(cur, index) {
                        if (index === word.length) {
                                return cur.isWord;
                        }

                        if (cur.children.has(word[index])) {
                                return dfs(
                                        cur.children.get(word[index]),
                                        index + 1
                                );
                        }
                        return false;
                }
        }

        startsWith(prefix) {
                let cur = this.root;
                for (let ch of prefix) {
                        if (!cur.children.has(ch)) {
                                return false;
                        }
                        cur = cur.children.get(ch);
                }
                return true;
        }
}
