export function price(price: any) {
  if (!price) return price;
  return "$" + price.toLocaleString();
}
