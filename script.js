n = parseInt(prompt("enter the number"));
console.log("input", n);
i = 1;
while (i <= n) {
    // console.log(i)
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i);
    }
    i++
}
