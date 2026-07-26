import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartLineItem from "@/components/CartLineItem";
import { getCart } from "@/lib/cart-actions";
import { formatPrice } from "@/lib/medusa-data";

export default async function CartPage() {
  const cart = await getCart();
  const items = cart?.items || [];

  return (
    <main>
      <Header />
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="font-display text-4xl mb-10 text-oxblood text-center">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center font-body text-ink">
            <p className="mb-6">Your cart is empty.</p>
            <Link href="/products" className="gp-underline text-oxblood">
              Browse the collection →
            </Link>
          </div>
        ) : (
          <>
            <div>
              {items.map((item: any) => (
                <CartLineItem key={item.id} item={item} />
              ))}
            </div>
            <div className="flex items-center justify-between pt-8 font-body">
              <span className="text-lg text-ink">Subtotal</span>
              <span className="text-lg text-rust">{formatPrice(cart?.subtotal || 0)}</span>
            </div>
            <Link
              href="/checkout"
              className="mt-8 block text-center px-8 py-3 text-sm tracking-wide bg-oxblood text-ivory font-body"
            >
              Proceed to Checkout
            </Link>
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}
