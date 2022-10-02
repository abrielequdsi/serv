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
        name: "Embroidery",
        href: "#",
        price: "$48",
        imageSrc:
            "https://i.etsystatic.com/12360908/r/il/fc03c4/2455221650/il_fullxfull.2455221650_ghp3.jpg",
        imageAlt: "Embroider",
    },
    {
        id: 2,
        name: "Screen Printing",
        href: "#",
        price: "$35",
        imageSrc:
            "https://i0.wp.com/3rdrailclothing.co.uk/wp-content/uploads/2016/07/30.jpg?fit=1000%2C1000&ssl=1",
        imageAlt: "Screen Printing",
    },
    {
        id: 3,
        name: "Transfer Printing",
        href: "#",
        price: "$89",
        imageSrc: "https://i.ytimg.com/vi/IMr8uFlsvtU/maxresdefault.jpg",
        imageAlt: "Transfer Printing",
    },
    {
        id: 4,
        name: "Direct to Garment",
        href: "#",
        price: "$35",
        imageSrc:
            "https://thefashionstarter.com/wp-content/uploads/2022/04/direct-to-garment-printing.jpeg",
        imageAlt: "Direct to Garment",
    },
    {
        id: 5,
        name: "Tailors",
        href: "#",
        price: "$48",
        imageSrc:
            "https://www.heddels.com/wp-content/uploads/2019/11/how-to-find-a-tailor.jpg",
        imageAlt: "Tailors",
    },
    {
        id: 6,
        name: "Rhinestone",
        href: "#",
        price: "$35",
        imageSrc:
            "https://i0.wp.com/www.sunmeibutton.com/wp-content/uploads/2019/01/what-is-a-rhinestone-types-of-rhinestones.jpg",
        imageAlt: "Rhinestone",
    },
    {
        id: 7,
        name: "Embossing",
        href: "#",
        price: "$89",
        imageSrc:
            "https://www.boxmark.com/0cache/bilder1651_1000x700_f_center_middle.jpg",
        imageAlt: "Embossing",
    },
    {
        id: 8,
        name: "Labeling",
        href: "#",
        price: "$35",
        imageSrc:
            "https://fashioninsiders.co/wp-content/uploads/2019/02/clothing_size_labels.jpg",
        imageAlt: "Labeling",
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
                    <div className="bg-white text-center">
                        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-semi tracking-tight text-gray-900">
                                What services do you need in{" "}
                                <span className="text-gray-900 font-bold">
                                    Clothing
                                </span>{" "}
                                ?
                            </h1>
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

                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
                            {products.map((product) => (
                                <a
                                    key={product.id}
                                    href={product.href}
                                    className="group"
                                >
                                    {/* aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 text-center */}
                                    {/* h-full w-full object-cover opacity-25 object-center group-hover:opacity-100 */}
                                    {/* mt-4 text-lg relative  */}
                                    <div className=" card-zoom ">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className=" card-zoom-image "
                                            onClick={() =>
                                                router.push(
                                                    "/clothing/embosing"
                                                )
                                            }
                                        />
                                        <h3 className="card-zoom-text">
                                            {product.name}
                                        </h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
