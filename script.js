let num = 70;
while (num < 77) {
  num++;
  console.log(num);
}

let num1 = 70;
do {
  console.log(num1);
  num1++;
} while (num1 < 77);

for (let i = 1; i <= 8; i++) {
  console.log(i);
}

for (let i = 1; i <= 8; i++) {
  if (i === 7) {
    continue;
    // break
  }
  console.log(i);
}
