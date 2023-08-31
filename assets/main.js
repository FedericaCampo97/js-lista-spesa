/*Data una lista della spesa, stampare sulla pagina 
(anche brutalmente, basta che si vedano) 
gli elementi della lista individualmente con un ciclo while.*/

let listShopping = ["pasta","pane","sale","sugo","zucchero"]
let containerShopping = document.getElementById('shopping')

let i = 0
while (i < listShopping.length) {
    console.log(listShopping[i])
    let element = document.createElement('div')
    element.append(listShopping[i])
    containerShopping.append(element)
    i++
}