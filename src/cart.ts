import { z } from 'zod';

const ProductSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number().positive(),
    quantity: z.number().min(1),
});

export type Product = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

class Cart {
  private products: Product[] = [];
  private discountCodes: { [key: string]: number } = {
      SAVE10: 10,
  };

  private discountedTotal: number | null = null; 

  addProduct(product: Product): void {
      ProductSchema.parse(product); 
      const existingProduct = this.products.find(p => p.id === product.id);
      if (existingProduct) {
          existingProduct.quantity += product.quantity;
      } else {
          this.products.push(product); 
      }
      this.discountedTotal = null; 
  }

  removeProduct(productId: string): void {
      this.products = this.products.filter(product => product.id !== productId);
      this.discountedTotal = null; 
  }

  getProductCount(): number {
      return this.products.reduce((count, product) => count + product.quantity, 0);
  }

  getTotal(): number {
      return this.discountedTotal !== null
          ? this.discountedTotal
          : this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  applyDiscount(code: string): number | void {
      const discount = this.discountCodes[code];
      if (discount) {
          const total = this.getTotal();
          this.discountedTotal = total - (total * (discount / 100));
          console.log(`Total after discount: ${this.discountedTotal}`);
          return this.discountedTotal;
      } else {
          console.log('Invalid discount code');
      }
  }
}
export default Cart;