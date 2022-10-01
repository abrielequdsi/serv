/* eslint-disable react-hooks/rules-of-hooks */
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from "react";
import { useRouter } from "next/router";
import { Header } from "@/components/Header";

const products = [
    {
        id: 1,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
            "Person using a pen to cross a task off a productivity paper card.",
    },
    {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
            "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
        id: 5,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
        id: 6,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
        id: 7,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
            "Person using a pen to cross a task off a productivity paper card.",
    },
    {
        id: 8,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
            "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    // More products...
];
const footerNavigation = {
    products: [
        { name: "Bags", href: "#" },
        { name: "Tees", href: "#" },
        { name: "Objects", href: "#" },
        { name: "Home Goods", href: "#" },
        { name: "Accessories", href: "#" },
    ],
    company: [
        { name: "Who we are", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Press", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy", href: "#" },
    ],
    customerService: [
        { name: "Contact", href: "#" },
        { name: "Shipping", href: "#" },
        { name: "Returns", href: "#" },
        { name: "Warranty", href: "#" },
        { name: "Secure Payments", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Find a store", href: "#" },
    ],
};

export default function index() {
    const router = useRouter();
    return (
        <div className="bg-gray-50">
            <Header />
            <div>
                <main>
                    <div className="bg-white">
                        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                Clothing sub-services
                            </h1>
                            <p className="mt-4 max-w-xl text-sm text-gray-700">
                                Our thoughtfully designed workspace objects are
                                crafted in limited runs. Improve your
                                productivity and organization with these sale
                                items before we run out.
                            </p>
                        </div>
                    </div>

                    {/* Filters */}

                    {/* Product grid */}
                    <section
                        aria-labelledby="products-heading"
                        className="mx-auto max-w-2xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:max-w-7xl lg:px-8"
                    >
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <a
                                    key={product.id}
                                    href={product.href}
                                    className="group"
                                >
                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                            onClick={() =>
                                                router.push(
                                                    "/clothing/embosing"
                                                )
                                            }
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">
                                        {product.name}
                                    </h3>
                                </a>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
