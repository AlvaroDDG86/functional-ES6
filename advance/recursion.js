const countDown = x => {
    console.log(x--)
    if (x >= 0) countDown(x)
}

countDown(10)