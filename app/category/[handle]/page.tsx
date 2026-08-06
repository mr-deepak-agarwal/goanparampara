import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProductsByCategory, formatPrice } from "@/lib/medusa-data";

export const revalidate = 60;

export default async function CategoryPage({ params }: { params: { handle: string } }) {
  let category = null;
  let products: Awaited<ReturnType<typeof getProductsByCategory>>["products"] = [];

  try {
    const result = await getProductsByCategory(params.handle);
    category = result.category;
    products = result.products;
  } catch {
    // Medusa unreachable — fall through to the empty state below rather
    // than crashing the page.
  }

  return (
    <main>
      <Header />
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <h1 className="font-display text-4xl mb-4 text-oxblood text-center capitalize">
          {category?.name || params.handle.replace(/-/g, " ")}
        </h1>
        {category?.description && (
          <p className="font-body text-center text-ink max-w-xl mx-auto mb-12">
            {category.description}
          </p>
        )}
        {!category?.description && <div className="mb-12" />}

        {!category ? (
          <p className="font-body text-center text-ink">
            This category isn&apos;t set up in Medusa yet — go to Products →
            Categories in your admin, create a category with the handle{" "}
            <code>{params.handle}</code>, and assign some products to it.
          </p>
        ) : products.length === 0 ? (
          <div className="text-center font-body text-ink">
            <p className="mb-6">No products in this category yet.</p>
            <Link href="/products" className="gp-underline text-oxblood">
              Browse all products →
            </Link>
          </div>
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
