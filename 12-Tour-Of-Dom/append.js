
let li1 = document.createElement('li')
li1.innerHTML = "Paneer-Biriyani"

let li2 = document.createElement('li')
li2.innerText = 'Pakora'

let li3 = document.createElement('li')
li3.innerText = "Soyabean Masala"

let ul = document.createElement('ul')
ul.appendChild(li1)

let section = document.createElement('section')
let h1 = document.createElement('h1')

h1.innerHTML = "Best Food Item"
section.append(h1)

document.body.appendChild(section)
section.append(ul)
ul.appendChild(li2)
ul.append(li3)

section.childNodes
section.firstChild.style.color = 'Blue'
section.firstChild.style.color = 'white'