// Given an input string __ , reverse the string word by word.

function reverseWords(str) {
        let array = str.split('');
        reverse(array, 0, str.length - 1);

        let index = 0;
        let start = 0;

        while (index < array.length) {
                if (array[index] === ' ') {
                        reverse(array, start, index - 1);
                        start = index + 1;
                }
                index++;
        }
        reverse(array, start, array.length - 1);
        return array.join('');
}

function reverse(array, i, j) {
        let left = i;
        let right = j;

        while (left < right) {
                temp = array[left];
                array[left] = array[right];
                array[right] = temp;
                left++;
                right--;
        }
}

console.log(reverseWords('the sky is blue'));
