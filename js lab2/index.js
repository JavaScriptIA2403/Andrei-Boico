
const transactions = [
    {
      transaction_id: 1,
      transaction_date: '2025-3-4',
      transaction_amount: 200,
      transaction_type: 'debit',
      transaction_description: 'Purchase at Store A',
      merchant_name: 'Store A',
      card_type: 'debit'
    },
    {
      transaction_id: 2,
      transaction_date: '2025-3-2',
      transaction_amount: 500,
      transaction_type: 'credit',
      transaction_description: 'Payment for service X',
      merchant_name: 'Service X',
      card_type: 'credit'
    },
    {
      transaction_id: 3,
      transaction_date: '2025-3-3',
      transaction_amount: 150,
      transaction_type: 'debit',
      transaction_description: 'Purchase at Store B',
      merchant_name: 'Store B',
      card_type: 'debit'
    },
    {
      transaction_id: 4,
      transaction_date: '2025-3-1',
      transaction_amount: 300,
      transaction_type: 'credit',
      transaction_description: 'Refund from Store C',
      merchant_name: 'Store C',
      card_type: 'credit'
    }
  ];
  
function getUniqueTransactionTypes(transactions){
let uniq = Array.from(new Set(transactions.map(element =>  element.transaction_type
)))
console.log(`2.1 Возвращает массив уникальных типов транзакций.`)
console.log(`  ${uniq}`)
}
getUniqueTransactionTypes(transactions)


 function calculateTotalAmount(transactions){
let numbers = transactions.map(element =>{
    return element.transaction_amount
})
let sum = 0
numbers.reduce((las , element) =>{
   return sum =  las + element
})
console.log(`2.2 Вычисляет сумму всех транзакций.`)
console.log(`  ${sum}`)
 }
 calculateTotalAmount(transactions)

 
  function calculateTotalAmountByDate(transactions ,year,month,day ){
    let sum = 0
    let data = transactions.map(element =>{
     let rent =   element.transaction_date.split("-") 
    
       if (Number(rent[0]) == year && Number(rent[1]) == month && Number(rent[2]) == day ) {
     sum =+ element.transaction_amount 
}

    })
    return sum
  }
  let rezu = calculateTotalAmountByDate(transactions , 2025,3 ,3)
  console.log(`2.3 Вычисляет общую сумму транзакций за указанный год, месяц и день.`)
  console.log( ` ${rezu}`)


  function getTransactionByType(transactions , type) {
   let array = []  
transactions.forEach(element => {
  if(element.transaction_type === type){

 array.push(element)
  }

});
console.log(`2.4 Возвращает транзакции указанного типа`)
console.log(  array)
  }
getTransactionByType(transactions, "debit")


function getTransactionsByMerchant(transactions , name){
  let array = []  
  transactions.forEach(element => {
    if(element.merchant_name === name){
  
   array.push(element)
    }
  
  });
  console.log(`2.5 – Возвращает массив транзакций, совершенных с указанным merchantName`)
  console.log( array)
}
getTransactionsByMerchant(transactions , 'Store C')



function calculateAverageTransactionAmount(transactions ){
  let sum =0
  transactions.forEach(element =>{
sum += Number(element.transaction_amount)
  })
  console.log(`2.7  Возвращает среднее значение транзакций.`)
  console.log(sum / transactions.length)
}
calculateAverageTransactionAmount(transactions )



 function getTransactionsByAmountRange(transactions, minAmount, maxAmount){
  let array =[]
transactions.forEach(element =>{
  if(element.transaction_amount >= minAmount && element.transaction_amount <= maxAmount){
array.push(element)
  }
})
console.log(`2.8 Возвращает массив транзакций с суммой в заданном диапазоне от minAmount до maxAmount.`)
console.log(array)
}
getTransactionsByAmountRange(transactions, 150, 300)




function calculateTotalDebitAmount(transactions){
  
  let array =[]
transactions.forEach(element =>{
  if(element.transaction_type === "debit"){
array.push(element)
  }
})
console.log(`2.9 Вычисляет общую сумму дебетовых транзакций.`)
console.log(array)
}
calculateTotalDebitAmount(transactions)

let max = transactions.reduce((first,second)=>{
 return  first.transaction_amount > second.transaction_amount ? first : second 
})
console.log(`2.10  Возвращает месяц, в котором было больше всего транзакций.`)
console.log(max)


let maxi = transactions.filter(element =>{
 return element.transaction_type === "debit"
})
 let most = maxi.reduce((first,second)=>{

      return  first.transaction_amount > second.transaction_amount ? first : second
 })

 console.log(`2.11  Возвращает месяц, в котором было больше дебетовых транзакций.`)
 console.log(most)

 function mostTransactionTypes(transactions){
  let rezu 
  let credit = 0
  let debit = 0
  transactions.forEach(element =>{
    if(element.transaction_type === "debit"){
debit++
    }
    else{
      credit++
    }
  })
  if(credit < debit){
    rezu = "debit"
  }
  else if(credit > debit){
    rezu = "credit"
  }
  else{
rezu = "equal"
  }
  console.log(rezu)
 }
 

 console.log(`2.12  Возвращает месяц, в котором было больше дебетовых транзакций`)
 mostTransactionTypes(transactions)



  function getTransactionsBeforeDate(transactions, date){
   mass =  transactions.map(element =>{
     let net =  element.transaction_date.split('-')
      if(Number(net[2]) < date){
        return element
      }
    })
   let ner = mass.filter(element => element !== undefined)
   
 console.log(`2.13  – Возвращает массив транзакций, совершенных до указанной даты.`)
    console.log(ner)
  }
  getTransactionsBeforeDate(transactions, 3)


  function findTransactionById(transactions, id){
    let ide =  transactions.filter(element =>{
      if(element.transaction_id == id){
        return element
      }
    })
    console.log(`2.14  – Возвращает массив транзакций, совершенных по указанному id.`)
    console.log(ide)
  }
  findTransactionById(transactions, 4)

  function mapTransactionDescriptions(transactions){
   let decr =  transactions.map(element =>{
return element.transaction_description
    })
    console.log(`2.15  Возвращает новый массив, содержащий только описания транзакций.`)
    console.log(decr)
  } 
  mapTransactionDescriptions(transactions)
