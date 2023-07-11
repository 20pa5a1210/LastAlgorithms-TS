export default function two_crystal_balls(breaks: boolean[]): number {

  const jmpAmout = Math.floor(Math.sqrt(breaks.length));
  let jmp = jmpAmout;

  while (breaks[jmp] === false) {
    jmp += jmpAmout;
    if (breaks[jmp] === true) {
      break;
    }
  }

  let i = jmp - jmpAmout;

  for (let j = 0; j < jmpAmout && i < breaks.length; j++) {
    if (breaks[i] === true) {
      return i;
    }
    i++;
  }
  return -1;
}
