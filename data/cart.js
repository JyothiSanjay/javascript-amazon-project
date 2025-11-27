export const cart = [
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        qty: 2
    }
];

export function addToCart(productId) {
  let itemFound = cart.find(item => item.productId === productId);
  if (itemFound) {
    itemFound.qty += 1;
  } else
    cart.push({ productId: productId, qty: 1 });
}