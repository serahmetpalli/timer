const array = process.argv.slice(2);
console.log(array);
let i=0;
let intInput = parseInt(array[i]);

if (intInput > 0) {
  for (let arg of array) {
    setTimeout(() => {
      console.log("Beep");
      process.stdout.write('\x07');
    }, Number(arg) * 1000);
  }
}
