// Use bitwise operators to extract individual flag bits.
const permissions = 0b1010; // read + execute
const canRead = (permissions & 0b1000) !== 0;
const canWrite = (permissions & 0b0100) !== 0;
const canExecute = (permissions & 0b0010) !== 0;
const canShare = (permissions & 0b0001) !== 0;

console.log({ canRead, canWrite, canExecute, canShare });