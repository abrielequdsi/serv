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
import { Fragment, useState } from "react";
import {
    Dialog,
    Popover,
    RadioGroup,
    Tab,
    Transition,
} from "@headlessui/react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    CheckCircleIcon,
    ChevronDownIcon,
    TrashIcon,
} from "@heroicons/react/20/solid";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];

const products = [
    {
        id: 1,
        title: "Basic Tee",
        href: "#",
        price: "$32.00",
        color: "Black",
        size: "Large",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
    },
    // More products...
];
const deliveryMethods = [
    {
        id: 1,
        title: "Standard",
        turnaround: "4–10 business days",
        price: "$5.00",
    },
    {
        id: 2,
        title: "Express",
        turnaround: "2–5 business days",
        price: "$16.00",
    },
];
const paymentMethods = [
    { id: "credit-card", title: "Credit card" },
    { id: "paypal", title: "PayPal" },
    { id: "etransfer", title: "eTransfer" },
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

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function confirmation() {
    const [open, setOpen] = useState(false);
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
        deliveryMethods[0]
    );
    const [quatity, setQuatity] = useState(0);
    const router = useRouter();

    return (
        <div className="bg-gray-50">
            {/* Mobile menu */}
            <Header />
            {/* <div className="lg:col-span-1 bg-white shadow sm:rounded-lg px-5 py-8 sm:px-8 "></div> */}
            <main className="mx-auto max-w-7xl px-4 pt-16 pb-44 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none  lg:px-64 ">
                    <div className="bg-white shadow sm:rounded-lg p-8">
                        <form className="lg:gap-x-12 xl:gap-x-16">
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Service Details
                                </h2>

                                {/* Payment */}
                                <div className="mt-4 border-t border-gray-200 pt-4">
                                    <div className="grid grid-cols-4 gap-y-6 gap-x-4">
                                        <div className="col-span-4">
                                            <label
                                                htmlFor="card-number"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Service Type
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    defaultValue="Embosing"
                                                    disabled
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
                                                    type="text"
                                                    id="card-number"
                                                    name="card-number"
                                                    autoComplete="cc-number"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid col-span-4 grid-cols-4 gap-y-6 gap-x-4">
                                            <div className="col-span-2">
                                                <label
                                                    htmlFor="card-number"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Price
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        id="card-number"
                                                        name="card-number"
                                                        autoComplete="cc-number"
                                                        value={
                                                            "Rp. " +
                                                            quatity * 10000
                                                        }
                                                        disabled
                                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <label
                                                    htmlFor="card-number"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Quantity
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        id="card-number"
                                                        name="card-number"
                                                        autoComplete="cc-number"
                                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        onChange={(e) =>
                                                            setQuatity(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <label
                                                htmlFor="card-number"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Notes to the vendor
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="card-number"
                                                    name="card-number"
                                                    autoComplete="cc-number"
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-4">
                                            <label
                                                htmlFor="card-number"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Vendor Policy
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="card-number"
                                                    name="card-number"
                                                    autoComplete="cc-number"
                                                    defaultValue="Will send the clothes within 3 x 24 Hours"
                                                    disabled
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-4">
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
                                            Agree with the policy that the
                                            vendor provides
                                        </label>
                                    </div>
                                    <div className="border-gray-200 py-6 ">
                                        <div
                                            className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 text-center"
                                            onClick={() =>
                                                router.push(
                                                    "/clothing/embosing/order-complete"
                                                )
                                            }
                                        >
                                            Confirm
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order summary */}
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
