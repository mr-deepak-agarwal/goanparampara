import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToCartForm from "@/components/AddToCartForm";
import { getProductByHandle, formatPrice } from "@/lib/medusa-data";

export const revalidate = 60;

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProductByHandle(params.handle);
  if (!product) return notFound();

  const price = product.variants?.[0]?.prices?.[0];

  return (
    <main>
      <Header />
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-14">
        <div className="relative w-full aspect-[3/4] bg-white">
          {product.thumbnail && (
            <Image src={product.thumbnail} alt={product.title} fill className="object-cover" />
          )}
        </div>

        <div>
          <h1 className="font-display text-3xl md:text-4xl mb-4 text-oxblood">{product.title}</h1>
          {price && (
            <p className="font-body text-xl mb-6 text-rust">
              {formatPrice(price.amount, price.currency_code.toUpperCase())}
            </p>
          )}
          {product.description && (
            <p className="font-body text-base leading-relaxed mb-8 text-ink">{product.description}</p>
          )}
          <AddToCartForm product={product} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
