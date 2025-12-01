import { ShoppingCart } from '../src/ShoppingCart.js'

describe('ShoppingCart class', () => {

  // addItem

  test('addItem should return true for valid item', () => {
    const cart = new ShoppingCart()
    expect(cart.addItem('Apple', 10, 2)).toBeTruthy()
  })

  test('addItem should return false for empty name', () => {
    const cart = new ShoppingCart()
    expect(cart.addItem('', 10, 2)).toBeFalsy()
  })

  test('addItem should return false for non-positive price', () => {
    const cart = new ShoppingCart()
    expect(cart.addItem('Apple', 0, 2)).toBeFalsy()
  })

  test('addItem should return false for non-positive quantity', () => {
    const cart = new ShoppingCart()
    expect(cart.addItem('Apple', 10, 0)).toBeFalsy()
  })

  test('addItem should increase quantity if item already exists', () => {
    const cart = new ShoppingCart()
    cart.addItem('Apple', 10, 2)
    cart.addItem('Apple', 10, 3)
    expect(cart.items[0].quantity).toBe(5)
  })

  // removeItem

  test('removeItem should return true when item exists', () => {
    const cart = new ShoppingCart()
    cart.addItem('Kiwi', 12, 3)
    expect(cart.removeItem('Kiwi')).toBeTruthy()
  })

  test('removeItem should return false when item does not exist', () => {
    const cart = new ShoppingCart()
    cart.addItem('Kiwi', 12, 3)
    expect(cart.removeItem('Banana')).toBeFalsy()
  })

  // getTotal

  test('getTotal should return sum of price times quantity', () => {
    const cart = new ShoppingCart()
    cart.addItem('Banana', 10, 2) // 20
    cart.addItem('Apple', 5, 3)   // 15
    expect(cart.getTotal()).toBe(35)
  })

  // applyDiscount

  test('applyDiscount BLACKFRIDAY should give 30% discount', () => {
    const cart = new ShoppingCart()
    cart.addItem('Item', 100, 1)
    expect(cart.applyDiscount('BLACKFRIDAY')).toBe(70)
  })

  test('applyDiscount FREESHIP should subtract 50 when total > 100', () => {
    const cart = new ShoppingCart()
    cart.addItem('Item', 60, 2) // total 120
    expect(cart.applyDiscount('FREESHIP')).toBe(70) // 120 - 50
  })

  test('applyDiscount FREESHIP should not change total when total <= 100', () => {
    const cart = new ShoppingCart()
    cart.addItem('Item', 50, 2) // total 100
    expect(cart.applyDiscount('FREESHIP')).toBe(100)
  })

  test('applyDiscount invalid code should return full total', () => {
    const cart = new ShoppingCart()
    cart.addItem('Item', 40, 2) // total 80
    expect(cart.applyDiscount('INVALID')).toBe(80)
  })

  // clear

  test('clear should empty the cart', () => {
    const cart = new ShoppingCart()
    cart.addItem('Banana', 10, 1)
    cart.clear()
    expect(cart.items.length).toBe(0)
  })

})