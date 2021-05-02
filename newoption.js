
var options = $(".sort");

options.sort(function(a,b) {

price.sort((a, b) => {
    return a.price < b.price;
})

price.sort((a, b) => {
    return a.price > b.price;
})

//Easier way to do it
price.sort((a, b) => a.productName < b.productName);

price.sort((a, b) => a.productName > b.productName);
console.log(price);

productDate.sort(function(a, b) {
    return new Date(a.date) < new Date(b.date);
  });

productDate.sort(function(a, b) {
  return new Date(a.date) > new Date(b.date);
});

$('sort').sortSelect({
    reverse: true
});