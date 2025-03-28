const array = new Array(10_000_000).fill(0);
console.time('loopTime');

for (let i = 0; i < array.length; i++) {
  // Simple operation
  array[i] = i;
}

console.timeEnd('loopTime');