function getTotalAmount(shoppingItems) {
  const total = shoppingItems.reduce((total, item) => {
    if (!item.isSettled) {
      return total + item.amount;
    }
    return total;
  }, 0);
  return total;
}

export { getTotalAmount };