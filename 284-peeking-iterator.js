/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
class PeekingIterator {
        constructor(iterator) {
                this.iterator = iterator;
                this.current = this.getNext();
        }

        peek() {
                return this.current;
        }

        next() {
                let temp = this.current;
                this.current = this.getNext();
                return temp;
        }

        getNext() {
                if (this.iterator.hasNext()) {
                        return this.iterator.next();
                }
                return null;
        }

        hasNext() {
                return this.current !== null;
        }
}
