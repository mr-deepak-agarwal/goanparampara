import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProducts, formatPrice } from "@/lib/medusa-data";

export const revalidate = 60;

export default async function ProductsPage() {
  let products: Awaited<ReturnType<typeof getProducts>> = [];
  try {
    products = await getProducts(48);
  } catch {
    // Medusa unreachable (e.g. backend cold-starting, or env vars not set yet)
  }

  return (
    <main>
      <Header />
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <h1 className="font-display text-4xl mb-12 text-oxblood text-center">All Products</h1>

        {products.length === 0 ? (
          <p className="font-body text-center text-ink">
            No products found yet — add some in your Medusa admin, or check your
            NEXT_PUBLIC_MEDUSA_BACKEND_URL / publishable key in .env.local.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => {
              const price = product.variants?.[0]?.prices?.[0];
              return (
                <Link key={product.id} href={`/product/${product.handle}`} className="gp-card block bg-white">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    {product.thumbnail && (
                      <Image src={product.thumbnail} alt={product.title} fill className="object-cover" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base mb-1 text-ink">{product.title}</h3>
                    {price && (
                      <p className="font-body text-sm text-rust">
                        {formatPrice(price.amount, price.currency_code.toUpperCase())}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
