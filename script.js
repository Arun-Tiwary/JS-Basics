

console.log("update object and return new object");

// const movie = {
// 	name: "Man of Steel",
// 	rating: 7,
// 	release: 2013,
// }

// const movieRating=(movie,incordec)=>{
//   if(incordec===true){
//     return{...movie,rating:movie.rating+1}
//   }
//   return{...movie,rating:movie.rating-1}
// }
// const value= movieRating(movie,true)
// console.log(value);
// console.log(movie);



// const addSequel=(movie)=>{return {...movie,sequel:true}}

// const sequelValue=addSequel(movie);
// console.log(sequelValue);



// const movie2 = {
// 	name: "Man of Steel",
// 	rating: 7,
// 	release: 2013,
// 	lead: {
// 		name: "Henry Cavill",
// 		age: 36,
// 	},
// 	director: {
// 		name: "Zack Snyder",
// 		otherMovies: ["300", "Batman v Superman"]
// }}

// const updateAge=(mov)=>({...movie2,lead:{...movie2.lead,age:movie2.lead.age+2}})

// const updateAge2=updateAge(movie2)
// console.log(updateAge2)










// array
const fruits = ['banana', 'orange', 'mango']

// const addFruit=(fruits,newFruit)=>[newFruit,...fruits];

// console.log(addFruit(fruits,"apple"))

// console.log(fruits)


// let areas = fruits.map(rplaceFruit(fruits));
// console.log(areas);



// function rplaceFruit(fruits,currentfruit){
//   if(fruits===currentfruit)
//   {
//     return newfruit
//   }
//   else{
//    return currentfruit
//   }
// }

// console.log(replaceFruit("orange","appl"))










// const replacing=(fruits,old,brandnew)=>fruits.map(item=>item === old?brandnew:item);

// const afkafl=replacing(fruits,"orange","adhaf")
// console.log(afkafl)






// .map example
// const arr=[1,2,3,4,5,6];
// const val=arr.map(sum);
// console.log(val)
// function sum(i){
//   return i*10
// }

// change fruit by index;



// const changeFruitByIndex = (fruits,fruitatIndex,brandnewfruit) => fruits.map((fruit, indx) => indx ===fruitatIndex  ? brandnewfruit : fruit)

// console.log(changeFruitByIndex(fruits,1,"afadsf"))

// console.log(fruits)

const fruitBasket = [
	{ id: 1, name: "mango", quantity: 5 },
  { id: 2, name: "apple", quantity: 4 },
  { id: 3, name: "banana", quantity: 12 },
	{ id: 4, name: "strawberry", quantity: 4 }, // aah! ameeri!
]

// const updatebasketQuantity=(fruitBasket,id)=>fruitBasket.map((fruit,idx)=>idx===id?{...fruitBasket,quantity:fruitBasket.quantity+1}:Null);
// console.log(updatebasketQuantity(fruitBasket,1))


// const updatebasketQuantity=(fruitBasket,fruitid,icordec)=>fruitBasket.map((fruit)=>{if(fruit.id===fruitid){
//   return{...fruit,quantity:fruit.quantity+1};
 
  
// }
//  else{
//     return {...fruit}
//   }
// });
// console.log(updatebasketQuantity(fruitBasket,1));

// const updatebasketQuantity=(fruit,fruitid,incordec)=>fruit.map((fruit)=>fruit.id===fruitid?{...fruit,quantity:incordec?fruit.quantity+1:fruit.quantity-1}:fruit)
// console.log(updatebasketQuantity(fruitBasket,1,true));


// const removeFromBAsket=(fruit,id)=> fruit.id!=id;
// const filterFruit=fruitBasket.filter(removeFromBAsket)
// console.log(filterFruit)
// removeFromBAsket(fruitBasket,4)


// const removeFromBasket=(fruit,id)=>fruit.filter(fruit=>fruit.id!=id)
// console.log(removeFromBasket(fruitBasket,4))

