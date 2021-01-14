class TrieNode {
        constructor() {
                this.children = new Map();
                this.isWord = false;
        }
}

class WordDictionary {
        constructor() {
                this.root = new TrieNode();
        }

        addWord(word) {
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

                        if (word[index] !== '.') {
                                if (!cur.children.has(word[index]))
                                        return false;
                                cur = cur.children.get(word[index]);
                                return dfs(cur, index + 1);
                        }

                        for (let ch of cur.children.keys()) {
                                if (dfs(cur.children.get(ch), index + 1)) {
                                        return true;
                                }
                        }

                        return false;
                }
        }
}
