const myp = [
  {
    price: 20,
    name: "t-shirt"
  },
  {
    price: 40,
    name: "full-shirt"
  }
]

const cart = [
  {
    qty: 2,
    name: "t-shirt"
  },
  {
    qty: 4,
    name: "full-shirt"
  }
]


const debounce = (fnc, delay) => {
  let timer;
  return function(...args){
    clearTimeout(timer)
    timer = setTimeout(()=>{
      // fnc(...args)
    }, delay)
  }
}

document.querySelector("input")
.addEventListener("input", debounce(function(e){
  console.log(e);
  
}, 1000))
