i = 5;
n = 10;

while (i < 10) {
    i++;
    if (i == 8)
        continue;
    n += i;
    console.log(n + "");
}