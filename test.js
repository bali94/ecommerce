cartItems = [
    {name:'1',desc:'kdlkkkkkkkkkk'},
    {name:'dsvvdsv',desc:'234f'},
    {name:'gggfd',desc:'235234fwf'}
]
var alla = {name:'dbdfb',desc:'vsvsdv'};
const updatedCartItems = cartItems.map((cartProduct) => {
    if(cartProduct.name === '1') return {
      ...cartProduct,
      tt: 'jojo'
    }
  })
console.log(updatedCartItems[0].desc)
