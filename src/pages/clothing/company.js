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
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { StarIcon } from "@heroicons/react/20/solid";
import { Header } from "@/components/Header";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import companyLogo from "src/images/companyLogo.png"
import work1 from "src/images/work1.jpg"
import work2 from "src/images/work2.jpg"
import work3 from "src/images/work3.jpg"

const reviews = [
    {
        id: 1,
        rating: 5,
        content: `
      <p>Best quality! The embossing is nicely done. Can't wait to order into the next one.</p>
    `,
        date: "30 September 2022",
        datetime: "2022-09-30",
        author: "Marques",
        avatarSrc: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: 2,
        rating: 5,
        content: `
      <p>They did my order very well, quick response and best price on the market.</p>
    `,
        date: "15 September 2022",
        datetime: "2022-09-15",
        author: "Alex",
        avatarSrc:
            "https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: 3,
        rating: 4,
        content: `
      <p>There was a problem at first however we solved it and everything was good.</p>
    `,
        date: "7 September 2022",
        datetime: "2022-09-7",
        author: "Ana",
        avatarSrc:
            "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxyYW5kb20lMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: 4,
        rating: 5,
        content: `
      <p>Trust me on this, best place to get embroidery done 10/10.</p>
    `,
        date: "3 September 2022",
        datetime: "2022-09-3",
        author: "Bagus",
        avatarSrc:
            "https://images.unsplash.com/photo-1517598024396-46c53fb391a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE1fHxyYW5kb20lMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    // More reviews...
];
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
const someOfOurWork = [
    {
        id: 1,
        name: "White T-shirt",
        color: "White",
        href: "#",
        imageSrc: work1.src,
        imageAlt: "White T-shirt",
        price: "Rp.20000",
    },
    {
        id: 2,
        name: "Blue Hat and Blue T-shirt",
        color: "Dark Blue",
        href: "#",
        imageSrc: work2.src,
        imageAlt: "Dark Blue T-shirt and Hat",
        price: "Rp.50000",
    },
    {
        id: 3,
        name: "Police T-shirt",
        color: "Dark Blue",
        href: "#",
        imageSrc: work3.src,
        imageAlt: "Police T-shirt",
        price: "Rp.70000",
    },
    // More Products...
];

const companyDetail = [
    {
        question: "About",
        answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "We can send to",
        answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "We provide",
        answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function detail() {
    const [open, setOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const router = useRouter();

    return (
        <div className="bg-gray-100">
            <Header />
            <div className="mt-4 bg-gray-100">
                {/* Mobile menu */}
                <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-24">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        {/* Product */}
                        <div className="lg:grid lg:grid-cols-6 lg:items-start lg:gap-x-8">
                            {/* Image gallery */}
                            <div className="flex flex-col col-span-2">
                                <div className="lg:col-span-1 bg-white shadow sm:rounded-lg px-4 py-5 sm:px-6">
                                    <div className="flex flex-col items-center pb-10 pt-6">
                                        <img
                                            className="mb-3 w-24 h-24 rounded-full shadow-lg"
                                            src={companyLogo.src}
                                            // src={companyLogo}
                                            alt="Company Logo"
                                        />
                                        <h5 className="text-xl font-medium text-gray-900">
                                            Pusat Bordir Custom
                                        </h5>
                                        <span className="text-sm font-medium text-gray-500 mt-3">
                                            Joined in 2014
                                        </span>

                                        <span className="mt-4">
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <CheckCircleIcon
                                                        className="h-5 w-5 text-green-400"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div className="ml-2">
                                                    <h3 className="text-sm font-medium text-gray-500">
                                                        Verified Vendor
                                                    </h3>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    // className="text-center mt-6 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full"
                                    className="text-center mt-6 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                    onClick={() =>
                                        router.push(
                                            "/clothing/embosing/confirmation"
                                        )
                                    }
                                >
                                    REQUEST SERVICE
                                </button>
                            </div>

                            {/* Product info */}
                            {/* <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 col-span-4  "> */}
                            <section className="mt-6 lg:mt-0 col-span-4">
                                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                            About Us
                                        </h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                            Custom embroidery for small and
                                            large orders, contact us and send us
                                            your designs.
                                        </p>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                            Based in Bekasi, West Java.
                                        </p>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                            <div className="sm:col-span-2">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    We Can Send To
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    Jakarta, Bekasi, Depok
                                                </dd>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    We Provide
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    Embroidery, Tailor,
                                                    Embossing
                                                </dd>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Attachments
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    <ul
                                                        role="list"
                                                        className="divide-y divide-gray-200 rounded-md border border-gray-200"
                                                    >
                                                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                            <div className="flex w-0 flex-1 items-center">
                                                                <PaperClipIcon
                                                                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                                    aria-hidden="true"
                                                                />
                                                                <span className="ml-2 w-0 flex-1 truncate">
                                                                    vendor_contract_agreement.pdf
                                                                </span>
                                                            </div>
                                                            <div className="ml-4 flex-shrink-0">
                                                                <a
                                                                    href="#"
                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                >
                                                                    Download
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                                {/* 
                                    <div className="divide-y divide-gray-200">
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
                                    </div> */}

                                {/* <div className="flex items-center border-t pt-6">
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
                                    </div> */}
                            </section>
                        </div>
                        {/* Some of our work */}
                        <section
                            aria-labelledby="related-heading"
                            className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
                        >
                            <div className="lg:col-span-1 bg-white shadow sm:rounded-lg px-4 py-5 sm:px-8">
                                <h2
                                    id="related-heading"
                                    className="text-2xl font-bold text-gray-900"
                                >
                                    Some of our works
                                </h2>

                                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                                    {someOfOurWork.map((product) => (
                                        <div key={product.id}>
                                            <div className="relative">
                                                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                                    <img
                                                        src={product.imageSrc}
                                                        alt={product.imageAlt}
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>

                                                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                                    <div
                                                        aria-hidden="true"
                                                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        {/* Reviews */}
                        <section
                            aria-labelledby="related-heading"
                            className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
                        >
                            <div className="lg:col-span-1 bg-white shadow sm:rounded-lg px-5 py-8 sm:px-8 ">
                                <div className="sm:flex sm:items-center sm:justify-between ">
                                    <h2
                                        id="category-heading"
                                        className="text-2xl font-bold tracking-tight text-gray-900"
                                    >
                                        Reviews
                                    </h2>
                                    <a
                                        href="#"
                                        className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
                                    >
                                        See all reviews
                                        <span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>

                                <div className="mt-10">
                                    <h2 className="sr-only">
                                        Customer Reviews
                                    </h2>

                                    <div className="-my-10">
                                        {reviews.map((review, reviewIdx) => (
                                            <div
                                                key={review.id}
                                                className="flex space-x-4 text-sm text-gray-500"
                                            >
                                                <div className="flex-none py-10">
                                                    <img
                                                        src={review.avatarSrc}
                                                        alt=""
                                                        className="h-10 w-10 rounded-full bg-gray-100"
                                                    />
                                                </div>
                                                <div
                                                    className={classNames(
                                                        reviewIdx === 0
                                                            ? ""
                                                            : "border-t border-gray-200",
                                                        "flex-1 py-10"
                                                    )}
                                                >
                                                    <h3 className="font-medium text-gray-900">
                                                        {review.author}
                                                    </h3>
                                                    <p>
                                                        <time
                                                            dateTime={
                                                                review.datetime
                                                            }
                                                        >
                                                            {review.date}
                                                        </time>
                                                    </p>

                                                    <div className="mt-4 flex items-center">
                                                        {[0, 1, 2, 3, 4].map(
                                                            (rating) => (
                                                                <StarIcon
                                                                    key={rating}
                                                                    className={classNames(
                                                                        review.rating >
                                                                            rating
                                                                            ? "text-yellow-400"
                                                                            : "text-gray-300",
                                                                        "h-5 w-5 flex-shrink-0"
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                    <p className="sr-only">
                                                        {review.rating} out of 5
                                                        stars
                                                    </p>

                                                    <div
                                                        className="prose prose-sm mt-4 max-w-none text-gray-500"
                                                        dangerouslySetInnerHTML={{
                                                            __html: review.content,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}
