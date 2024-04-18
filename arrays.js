//question1
function peopleAboveAge(people){
    return people.filter(c=>c.age >= 18).map(c=>c.name);
  };
const people =[{ name: 'Alice', age: 17 },
{ name: 'Eunice', age: 22 },
{ name: 'Charlie', age: 14 },
{ name: 'Max', age: 19 },];
console.log(peopleAboveAge(people))


//question 2
function sortProducts(products){
  return products.reduce((acc, product) => {
      if (!acc[product.category]) acc[product.category] = [];
      acc[product.category].push(product);
      return acc;
  }, {});
};

const products=[
{ name: 'Laptop', price: 1200, category: 'Electronics' },
{ name: 'Shirt', price: 25, category: 'Clothing' },
{ name: 'Headphones', price: 80, category: 'Electronics' },
{ name: 'Shoes', price: 60, category: 'Clothing' },
];

console.log(sortProducts(products))

//question3

const students = [
{ name: 'John', scores: [90, 80, 85] },
{ name: 'Jane', scores: [95, 92, 88] },
{ name: 'Jim', scores: [70, 80, 75] },
{ name: 'Jill', scores: [85, 90, 84] },
];
function getStudentByAverage(students) {
  return students.filter(student=>{
    const averageScore = student.scores.reduce ((sum,score)=> sum+ score,)/student.scores.length;
    return averageScore >= 85;
   }).map(student=>student.name)

  }
  console.log(getStudentByAverage(students))


//question4

const car ={
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};

function AgeMethod(car){
  car.age = function(){
    const currentYear = new Date().getFullYear();
    return currentYear-this.year;
  }
  return car;
}
const updatedCar = AgeMethod(car);
console.log(updatedCar.age());






