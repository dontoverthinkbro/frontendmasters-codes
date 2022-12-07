const moreExpensiveFruit = fruit.map((f) => {
  return { ...f, price: f.price + 5 };
});
