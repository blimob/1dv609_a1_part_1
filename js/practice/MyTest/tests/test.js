import { ShoppingCart } from '../src/ShoppingCart.js'

describe('ShoppingCart class', () => {
  
  test('addItem', () => {
    const cart = new ShoppingCart()
    const result = cart.addItem('banan', 10, 2)
    expect(result).toBeTruty
  })

  test("should increase quantity if item already exists", () => {
    const cart = new ShoppingCart()
    cart.addItem("Apple", 10, 2)
    const result = cart.addItem("Apple", 10, 3)
    expect(result).toBeTruthy() // Denna kollar att vi får true
    expect(cart.items).toHaveLength(1) // Denna visar att du fortfarande bara har 1 produkt i vagnen
    expect(cart.items[0].quantity).toBe(5) // Här har mängden uppdateras. 2 + 3 vilket blir 5
  })

  test('removeItem', () => {
    const cart = new ShoppingCart()
    const result = cart.addItem('kiwi', 12, 3)
    expect(cart.items).toHaveLength(1)
    const remove = cart.removeItem('kiwi')
    expect(cart.items).toHaveLength(0)
  })

})