// for

for (let i = 0; i <= 500; i++) {
  // console.log(`i = ${i}`)
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 6) {
    // console.log("my best number is ", element);
  }
  //   console.log(i);
}

let array = [10, 20, 30, 40, 50];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  //   console.log(element);
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  //   console.log(i);
  for (let j = 0; j <= 10; j++) {
    const element = j;
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

// break
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 6) {
    console.log("final number is", element);
    break;
  }
  console.log(i);
}

// continue
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 6) {
    console.log("final number is", element + " but continue you work");
    continue;
  }
  console.log(i);
}
