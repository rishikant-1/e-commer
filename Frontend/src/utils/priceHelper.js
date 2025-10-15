//price formate
export const priceFormate = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  }).format(price)
}


//calculate discount
export const priceDiscount = (price, discount) => {
  return price - (price * discount) / 100;
}


//calculate tax
export const taxPrice = (price, taxDiscount) => {
  return (price * taxDiscount) /100;
}