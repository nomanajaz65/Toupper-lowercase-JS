            // flag variable

// var citytocheck = prompt('enter city name')
// var arr = ['karachi','islamabad','lahore','quetta']

// var flagvar = false 
// for (var i=0; i<arr.length; i++){
//     if (citytocheck === arr[i]){
//        flagvar= true
       
//         alert('city  found')
//         break;
//      }
//     // else{
//     //     alert('city not found')
        
//      }
 

//  if (flagvar === false){
//     alert('CIty not found')
//  }


// var citytocheck = prompt('enter city name')
// var arr = ['karachi','islamabad','lahore','quetta']

// var flagvar = 'no'
// for (var i=0; i<arr.length; i++){
//     if (citytocheck === arr[i]){
//        flagvar= 'yes'
       
//         alert('city  found')
//         break;
//      }
//     // else{
//     //     alert('city not found')
        
//      }
 

//  if (flagvar === 'no'){
//     alert('CIty not found')
//  }

 
                // 2 method 0f flagvar

// var citytocheck = prompt('enter city name')
// var arr = ['karachi','islamabad','lahore','quetta']

// var flagvar = 'no'
// for (var i=0; i<arr.length; i++){
//     if (citytocheck === arr[i]){
//        flagvar= 'yes'
//     }
// }
       
//         // alert('city  found')
//         // break;
     
//     // else{
//     //     alert('city not found')
        
     
 

//  if (flagvar === 'yes'){
//     alert('CIty found')
//  }

//  else{
//     document.write('not found')
//  }

//   for ( var i = 0; i<=10; i++){
//     if (i === 5){
//         break
//     }
//         document.write(i)

//     }
  

//   for ( var i = 0; i<=10; i++){
//     if (i === 5){
//         continue
//     }
//         document.write(i)

//     }

            //  upper /lower case
 

// var city = 'karachi' 
// var city2 = city.toUpperCase()
// console.log(city2) 


// var city = 'KARACHI' 
// var city2 = city.toLowerCase()
// console.log(city2)

// var city = 'KARACHI' 
// var check= city[0]
// console.log(check)

//  var city = 'KARACHI' 
// var check = city[0].toLowerCase()
//     console.log(check)

//  var city = 'KARACHI' 
// var check = city[0].toLowerCase()
//     console.log(check)

//  var city = 'KARACHI' 
// var check = city[0].toLowerCase()
// var copy= city.slice(1)
// console.log(copy)


var userInp = prompt ('enter your city name')
var toUpper =userInp.slice(0,1)   
var changetoupper = toUpper.toUpperCase()
var toLower = userInp.slice(1)
var changetolower = toLower.toLowerCase()
var conc = changetoupper + changetolower
console.log (conc)




