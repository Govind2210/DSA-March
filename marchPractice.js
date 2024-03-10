// Lucky Number --> array

// let m = [2,2,3,4]

// const luckyNumber = (m)=>{
//     let count = 0;
//     let luckyNum = m[0];

//     for(let i = 0 ; i < m.length ; i++){
//         if(luckyNum == m[i]){
//             count++;
//         }else if(count == luckyNum){
//             console.log(luckyNum);
//             break;
//         }else{
//             if(count == luckyNum) return luckyNum
//             return -1
//         }

//     }
// }
// luckyNumber(m)

//------------------------------------
// count occurance

// let n = -3;
// let array = [-3, 5, 6,-3, 9]

// function countOccurance(array){
//     // console.log(array)
//     count = 0;
//     array.forEach(element => {
//         if(n == element){
//             count++
//         }
//     });
//     if(count == 0 ){
//         console.log('no count occurance in this aaray')
//     }else{
//         console.log('count', count)
//     }
// }

// countOccurance(array)

//------------------------------------------------------------
// Alternate sort
//  even - decreasing order and  odd - increasing order

// let array = [8, -4 ,23, 31, -19]

// function alertnativeSort(array){
//     const result = []
//     let temp
//     const evenIndexes = array.filter((element, index) => index % 2 === 0);
//     const oddIndex = array.filter((element , index)=> index % 2 !== 0);

//     // decreasing order
//     for(let i = 0 ; i< evenIndexes.length ;i++){
//        for(let j = i + 1 ; j < evenIndexes.length ; j++){
//             if(evenIndexes[i] < evenIndexes[j]){ // 8 > 23 t
//                 temp= evenIndexes[i]; 
//                 evenIndexes[i] = evenIndexes[j]
//                 evenIndexes[j]= temp
//             }
//        }
//     }
//     // incresing order
//     for(let i = 0 ; i < oddIndex.length ; i++){
//         for(let j = 1 ; j < oddIndex.length ; j++){
//             if(oddIndex[i] > oddIndex[j]){
//                 temp = oddIndex[i];
//                 oddIndex[i] = oddIndex[j];
//                 oddIndex[j] = temp;
//             }
//         }
//     }
//     const maxLength = Math.max(evenIndexes.length , oddIndex.length)

//     for (let i = 0; i < maxLength; i++) {
//         if (i < evenIndexes.length) {
//           result.push(evenIndexes[i]);
//         }
//         if (i < oddIndex.length) {
//           result.push(oddIndex[i]);
//         }
//       }
//       console.log('resultArray', result);
// }
// alertnativeSort(array)

// write a function where the string is pallindrome

// let string = 'goaaogq'
// function palindromChecker(string){
//     let reversedString = '';
//     for(let i = string.length - 1  ; i > -1 ; i-- ){
//         reversedString += string[i]
//     }
//     if(string == reversedString ){
//         console.log('this is pallindrome')
//     }else{
//         console.log('this not pallindrome')
//     }
// }
// palindromChecker(string)

// write a prime numbers 1 - 100
let n = 100
function primeNumbers(n){
    for(let i = 2 ; i < n ; i++){
       let isPrime = true;
       for(let j = 2 ; j < Math.sqrt(i) ; j++){
            if(i % j == 0){
                isPrime = false;
                break;
            }
       }
       if(isPrime){
        console.log(i + " is a Prime number");
       }
    }
   
}
primeNumbers(n)



