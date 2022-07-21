function apple() {
    if (c1.checked)
        alert("Selected apple, cost is Rs. 59")
    else
        alert("Apple removed from the cart")
}

function orange() {
    if (c2.checked)
        alert("Selected orange, cost is Rs. 49")
    else
        alert("Orange removed from the cart")
}

function banana() {
    if (c3.checked)
        alert("Selected banana, cost is Rs. 39")
    else
        alert("Banana removed from the cart")
}

function calculate() {
    var c1 = document.getElementById("c1")
    var c2 = document.getElementById("c2")
    var c3 = document.getElementById("c3")
    var total = 0

    if (c1.checked) {
        total += +c1.value
    }

    if (c2.checked) {
        total += +c2.value
    }

    if (c3.checked) {
        total += +c3.value
    }

    tax = total * 0.05
    tax = tax.toFixed(2)
    /* toFixed() method converts a number into a string, rounding to a 
           specified number or decimal  */
    t1 = +tax + +total
    alert('Your Total Cost = ' + total + '\nSales tax (5%) = ' + tax + '\n\n' +
        'Total cost = ' + t1)
}
