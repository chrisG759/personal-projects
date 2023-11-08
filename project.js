function spin () {
    for (let i = 0; i <= 10; i++) {
        var input = Math.floor(Math.random() * i)

        if (input === 0) {
            document.getElementById("text").innerHTML = `Something good is comming your way`
        } else if (input === 1) {
            document.getElementById("text").innerHTML = `this decision may effect your entire life`
        } else if (input === 2) {
            document.getElementById("text").innerHTML = `This is a once in a lifetime oppurtunity`
        } else if (input === 3) {
            document.getElementById("text").innerHTML = `go for it`
        } else if (input === 4) {
            document.getElementById("text").innerHTML = `think about the consequenses`
        } else if (input === 5) {
            document.getElementById("text").innerHTML = `love is in your favor`
        } else if (input === 6) {
            document.getElementById("text").innerHTML = `find yourself a fat ass latina`
        } else if (input === 7) {
            document.getElementById("text").innerHTML = `take time to figure this out`
        } else if (input === 8) {
            document.getElementById("text").innerHTML = `every situation is better than it may appear`
        } else if (input === 9) {
            document.getElementById("text").innerHTML = `grow out that flavor saver`
        } else if (input === 10) {
            document.getElementById("text").innerHTML = `bitches are comming your way`
        } else {
            document.getElementById("text").innerHTML = `find the people who support you through life's ordeals`
        }
    }
}

function reset () {
    location.reload()
}