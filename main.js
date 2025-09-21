/* let student = [
  {
    name: "mahmoud al qam",
    mark: [90, 70, 65],
  },
  {
    name: "ahmad al hindawi",
    mark: [90, 20, 30],
  },
  {
    name: "mahmoud al zenbarakji ",
    mark: [60, 59, 70],
  },
];

const isM = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum/3;
};

student.forEach(element => {
    element.M= isM(element.mark);
});

console.log("\n------------------------------------------------------------\n")

student.forEach(element => {
    if(element.M>70){
        console.log(element.name +": "+ element.M )
    }
});

console.log("\n------------------------------------------------------------\n")
console.log(student)

console.log("\n------------------------------------------------------------\n")
 */

let product = [
  {
    name: "suuger",
    count: 3,
    price: 30,
  },
  {
    name: "milk",
    count: 10,
    price: 100,
  },
  {
    name: "apple",
    count: 6,
    price: 70,
  },
  {
    name: "Andomi",
    count: 0,
    price: 60,
  },
];

let parentCountainer = document.getElementById("parent");
let button = document.getElementById("btn");
let button2 = document.getElementById("btn2");

function addElement(index) {
  const newElement = document.createElement("p");
  newElement.textContent =
    "Product Name : " +
    product[index].name +
    " | Count : " +
    product[index].count;
  newElement.style.fontSize = "30px";

  /**** */
  if (product[index].count > 0) {
    newElement.style.color = "green";
  } else {
    newElement.style.color = "red";
  }
  parentCountainer.appendChild(newElement);
}

for (let i = 0; i < product.length; i++) {
  addElement(i);
}

function addE() {
  parentCountainer.innerHTML = "";
  for (let i = 0; i < product.length; i++) {
    if (product[i].count > 0) {
      addElement(i);
    }
  }
}

function addE2() {
  parentCountainer.innerHTML = "";

  for (let i = 0; i < product.length; i++) {
    if (product[i].count == 0) {
      addElement(i);
    }
  }
}

button.addEventListener("click", () => addE());
button2.addEventListener("click", () => addE2());

/* 
const value=(obj)=>{
 return obj.count*obj.price;
}

product.forEach(element => {
  element.val=value(element);
});
console.log("\nthe total value for all product : \n")

console.log(product)
console.log("----------------------------------------------------\n")

let arr=[]

product.forEach(element => {
  if(element.count==0)
    arr.push(element)
});

console.log("the product has value = 0 : \n")

console.log(arr)

console.log("\n----------------------------------------------------\n")

product.sort((a, b) => b.price - a.price);

console.log("the sorted product : \n")

console.log(product);

console.log("\n----------------------------------------------------\n")
console.log("the product has price = 100 : \n")

console.log(product.find(product => product.price === 100));

console.log("\n----------------------------------------------------\n")

console.log("the first product has price < 70 : \n")

console.log(product.find(product => product.price < 70)) 

 */

