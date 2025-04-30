import { beforeEach, describe, expect, it } from "vitest";
import Cart from "../src/cart";

describe("cart module", () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    it("should add a product to the cart", () => {
        const product = { id: "1", name: "Product 1", price: 10, quantity: 1 };
        cart.addProduct(product);
        expect(cart.getProductCount()).toBe(1);
    });

    it("should add an existing product by increasing quantity", () => {
        const product = { id: "1", name: "Product 1", price: 10, quantity: 1 };
        cart.addProduct(product);
        cart.addProduct({ id: "1", name: "Product 1", price: 10, quantity: 2 });
        expect(cart.getProductCount()).toBe(3);
    });

    it("should remove an existing product", () => {
        const product = { id: "1", name: "Product 1", price: 10, quantity: 1 };
        cart.addProduct(product);
        cart.removeProduct("1");
        expect(cart.getProductCount()).toBe(0);
    });

    it("should not throw an error when removing a nonexistent product", () => {
        expect(() => cart.removeProduct("nonexistent")).not.toThrow();
    });

    it("should calculate the total number of products in the cart", () => {
        cart.addProduct({ id: "1", name: "Product 1", price: 10, quantity: 2 });
        cart.addProduct({ id: "2", name: "Product 2", price: 20, quantity: 1 });
        expect(cart.getProductCount()).toBe(3);
    });

    it("should calculate the total price of products in the cart", () => {
        cart.addProduct({ id: "1", name: "Product 1", price: 10, quantity: 2 });
        cart.addProduct({ id: "2", name: "Product 2", price: 20, quantity: 1 });
        expect(cart.getTotal()).toBe(40); 
    });

    it("should apply a valid discount code", () => {
        cart.addProduct({ id: "1", name: "Product 1", price: 100, quantity: 1 });
        cart.applyDiscount("SAVE10"); 
        expect(cart.getTotal()).toBe(90); 
    });

    it("should not apply an invalid discount code", () => {
        cart.addProduct({ id: "1", name: "Product 1", price: 100, quantity: 1 });
        cart.applyDiscount("INVALIDCODE");
        expect(cart.getTotal()).toBe(100);
    });

    it("should throw an error for negative price", () => {
        const product = { id: "1", name: "Product 1", price: -10, quantity: 1 };
        expect(() => cart.addProduct(product)).toThrow();
    });

    it("should throw an error for zero quantity", () => {
        const product = { id: "1", name: "Product 1", price: 10, quantity: 0 };
        expect(() => cart.addProduct(product)).toThrow();
    });
});