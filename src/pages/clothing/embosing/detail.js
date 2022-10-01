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
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import {
    Dialog,
    Disclosure,
    Popover,
    RadioGroup,
    Tab,
    Transition,
} from "@headlessui/react";
import {
    Bars3Icon,
    HeartIcon,
    MagnifyingGlassIcon,
    MinusIcon,
    PlusIcon,
    ShoppingBagIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { Header } from "@/components/Header";

const product = {
    name: "Zip Tote Basket",
    price: "$140",
    rating: 4,
    images: [
        {
            id: 1,
            name: "Angled view",
            src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
            alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
    ],
    colors: [
        {
            name: "Washed Black",
            bgColor: "bg-gray-700",
            selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
            name: "Washed Gray",
            bgColor: "bg-gray-500",
            selectedColor: "ring-gray-500",
        },
    ],
    description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
    details: [
        {
            name: "Extra Desc 1",
            items: [
                "Multiple strap configurations",
                "Spacious interior with top zip",
                "Leather handle and tabs",
                "Interior dividers",
                "Stainless strap loops",
                "Double stitched construction",
                "Water-resistant",
            ],
        },
        {
            name: "Extra Desc 2",
            items: [
                "Multiple strap configurations",
                "Spacious interior with top zip",
                "Leather handle and tabs",
                "Interior dividers",
                "Stainless strap loops",
                "Double stitched construction",
                "Water-resistant",
            ],
        },
        // More sections...
    ],
};
const relatedProducts = [
    {
        id: 1,
        name: "Zip Tote Basket",
        color: "White and black",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
        price: "$140",
    },
    // More products...
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function detail() {
    const [open, setOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    return (
        <>
            <Header />
            <div className="bg-white mt-4">
                {/* Mobile menu */}
                <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-24">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        {/* Product */}
                        <div className="lg:grid lg:grid-cols-6 lg:items-start lg:gap-x-8">
                            {/* Image gallery */}
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg"
                                alt="product"
                                className="w-full object-cover object-center sm:rounded-lg col-span-2"
                            />

                            {/* Product info */}
                            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 col-span-4">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                    {product.name}
                                </h1>

                                <div className="mt-3">
                                    <h2 className="sr-only">
                                        Product information
                                    </h2>
                                    <p className="text-3xl tracking-tight text-gray-900">
                                        {product.price}
                                    </p>
                                </div>

                                {/* Reviews */}
                                <div className="mt-3">
                                    <h3 className="sr-only">Reviews</h3>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={classNames(
                                                        product.rating > rating
                                                            ? "text-indigo-500"
                                                            : "text-gray-300",
                                                        "h-5 w-5 flex-shrink-0"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="sr-only">
                                            {product.rating} out of 5 stars
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h3 className="sr-only">Description</h3>

                                    <div
                                        className="space-y-6 text-base text-gray-700"
                                        dangerouslySetInnerHTML={{
                                            __html: product.description,
                                        }}
                                    />
                                </div>

                                <form className="mt-6">
                                    {/* Colors */}
                                    <div>
                                        <h3 className="text-sm text-gray-600">
                                            Color
                                        </h3>

                                        <RadioGroup
                                            value={selectedColor}
                                            onChange={setSelectedColor}
                                            className="mt-2"
                                        >
                                            <RadioGroup.Label className="sr-only">
                                                {" "}
                                                Choose a color{" "}
                                            </RadioGroup.Label>
                                            <div className="flex items-center space-x-3">
                                                {product.colors.map((color) => (
                                                    <RadioGroup.Option
                                                        key={color.name}
                                                        value={color}
                                                        className={({
                                                            active,
                                                            checked,
                                                        }) =>
                                                            classNames(
                                                                color.selectedColor,
                                                                active &&
                                                                    checked
                                                                    ? "ring ring-offset-1"
                                                                    : "",
                                                                !active &&
                                                                    checked
                                                                    ? "ring-2"
                                                                    : "",
                                                                "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                                                            )
                                                        }
                                                    >
                                                        <RadioGroup.Label
                                                            as="span"
                                                            className="sr-only"
                                                        >
                                                            {" "}
                                                            {color.name}{" "}
                                                        </RadioGroup.Label>
                                                        <span
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                color.bgColor,
                                                                "h-8 w-8 border border-black border-opacity-10 rounded-full"
                                                            )}
                                                        />
                                                    </RadioGroup.Option>
                                                ))}
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </form>

                                <section
                                    aria-labelledby="details-heading"
                                    className="mt-12"
                                >
                                    <h2
                                        id="details-heading"
                                        className="sr-only"
                                    >
                                        Additional details
                                    </h2>

                                    <div className="divide-y divide-gray-200 border-t">
                                        {product.details.map((detail) => (
                                            <Disclosure
                                                as="div"
                                                key={detail.name}
                                            >
                                                {({ open }) => (
                                                    <>
                                                        <h3>
                                                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                                                <span
                                                                    className={classNames(
                                                                        open
                                                                            ? "text-indigo-600"
                                                                            : "text-gray-900",
                                                                        "text-sm font-medium"
                                                                    )}
                                                                >
                                                                    {
                                                                        detail.name
                                                                    }
                                                                </span>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <MinusIcon
                                                                            className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                                                            aria-hidden="true"
                                                                        />
                                                                    ) : (
                                                                        <PlusIcon
                                                                            className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                                            aria-hidden="true"
                                                                        />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel
                                                            as="div"
                                                            className="prose prose-sm pb-6"
                                                        >
                                                            <ul role="list">
                                                                {detail.items.map(
                                                                    (item) => (
                                                                        <li
                                                                            key={
                                                                                item
                                                                            }
                                                                        >
                                                                            {
                                                                                item
                                                                            }
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </div>

                                    <div className="flex items-center border-t pt-6">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label
                                            htmlFor="remember-me"
                                            className="ml-2 block text-sm text-gray-900"
                                        >
                                            Agree with the contract that the
                                            vendor provides
                                        </label>
                                    </div>
                                    <div className="mt-6 flex ">
                                        <button
                                            type="submit"
                                            className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                        >
                                            Confirm Order
                                        </button>

                                        {/* <button
                                            type="button"
                                            className="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                                        >
                                            <HeartIcon
                                                className="h-6 w-6 flex-shrink-0"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only">
                                                Add to favorites
                                            </span>
                                        </button> */}
                                    </div>
                                </section>
                            </div>
                        </div>

                        <section
                            aria-labelledby="related-heading"
                            className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
                        >
                            <h2
                                id="related-heading"
                                className="text-xl font-bold text-gray-900"
                            >
                                Customers also bought
                            </h2>

                            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                                {relatedProducts.map((product) => (
                                    <div key={product.id}>
                                        <div className="relative">
                                            <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="relative mt-4">
                                                <h3 className="text-sm font-medium text-gray-900">
                                                    {product.name}
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    {product.color}
                                                </p>
                                            </div>
                                            <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                                <div
                                                    aria-hidden="true"
                                                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                                />
                                                <p className="relative text-lg font-semibold text-white">
                                                    {product.price}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <a
                                                href={product.href}
                                                className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                                            >
                                                Add to bag
                                                <span className="sr-only">
                                                    , {product.name}
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}
