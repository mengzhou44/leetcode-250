// By using the read4 method, implement the method read
//that reads n characters from the file and store it in the buffer array buf.
//Consider that you cannotmanipulate the file directly.
// The return value is the number of actual characters read.
// Definition of read:
// Parameters:	char[] buf, int n
//     Returns:	int
// Note: buf[] is destination not source, you will need to write the results to buf[]

function read(buf, n) {
        let array = new Array(4);
        let count = 0;
        while (read4(array) === 4 && n > 0) {
                for (let ch of array) {
                        buf.push(ch);
                        count++;
                }
                n = n - 4;
        }

        read4(array);
        for (let ch of array) {
                buf.push(ch);
                count++;
        }

        return count;
}
