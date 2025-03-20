let transactions = []
let total  = document.getElementById("total")
let min = document.getElementById("min")
let sum = 0
let summi =[0]
let button = document.getElementById("butto")
button.addEventListener("click",event =>{
    let amount = document.getElementById("amount").value
    let category = document.getElementById("category").value
    let description = document.getElementById("description").value
    let pinj = document.getElementById("pinj")
    let des = document.getElementById("des")
const transaction = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    amount: amount,
    category: category,
    description: description
}

if( !isNaN(Number(amount)) && description != "" ){
summi.push(Number(amount))
    let dates = document.createElement("p")
    dates.textContent = new Date().toLocaleString()
    let cate = document.createElement("p")
    cate.textContent = category
    let descr = document.createElement("p")
    descr.textContent = description
    let pin = document.createElement("p")
    let but = document.createElement("button")
    but.textContent = "Delete"
    pin.appendChild(but)
    
    let div = document.createElement("div")
    if(amount > 0){
        div.classList.add("plus")
    }
    else{
        div.classList.add('minus')
    }
    div.appendChild(dates )
    div.appendChild(cate )
    div.appendChild(descr )
    div.appendChild(pin)
    min.appendChild(div)
    transactions.push(transaction)
     pinj.textContent = ""
      des.textContent = ""
      
   document.getElementById("amount").value = ""
     sum += Number(amount)
   document.getElementById("description").value =""
    total.textContent = `oбщая сумма ${sum}$` 
}
else{
    pinj.textContent = "Write a number"
    des.textContent = "write something"
}


 })


 min.addEventListener("click", event => {


    if (event.target && event.target.tagName === "BUTTON") {
        let div = event.target.closest("div");
        
        let index = Array.from(min.children).indexOf(div);
        console.log(summi[index])
let summa = summi[index]
              sum -= summa
        total.textContent = `oбщая сумма ${sum}$`
    
      div.remove()
}})
