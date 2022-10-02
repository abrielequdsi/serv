/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
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
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Header } from "@/components/Header";
import { Comboboxes } from "@/components/Comboboxes";
import { useRouter } from "next/router";
import background_main from "src/images/background_main.png";

const categories = [
    {
        name: "Clothing",
        href: "#",
        imageSrc:
            "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1602067306/gqftzzm0jrdi0qm1bpts.jpg",
    },
    {
        name: "Construction",
        href: "#",
        imageSrc:
            "https://images.bisnis-cdn.com/posts/2019/08/22/1139799/cbd-surabaya-150817-1.jpg",
    },
    {
        name: "Event Vendor",
        href: "#",
        imageSrc:
            "https://www.nme.com/wp-content/uploads/2022/06/dwp-2019@2000x1270.jpg",
    },
    {
        name: "Technology",
        href: "#",
        imageSrc:
            "https://www.goodnewsfromindonesia.id/uploads/post/large-ilustrasi-programmer-10831695f73ed7ae1077db9dd1ff1c1f.jpg",
    },
    {
        name: "Transportation",
        href: "#",
        imageSrc:
            "https://asset.kompas.com/crops/2QT06PnKYP2gcK54xuba8gN9um0=/0x0:1000x667/750x500/data/photo/2019/02/25/1668998051.jpg",
    },
];
const collections = [
    {
        name: "Handcrafted Collection",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
        imageAlt:
            "Brown leather key ring with brass metal loops and rivets on wood table.",
        description:
            "Keep your phone, keys, and wallet together, so you can lose everything at once.",
    },
    {
        name: "Organized Desk Collection",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
        imageAlt:
            "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
        description:
            "The rest of the house will still be a mess, but your desk will look great.",
    },
    {
        name: "Focus Collection",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
        imageAlt:
            "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
        description:
            "Be more productive than enterprise project managers with a single piece of paper.",
    },
];

export default function main() {
    const router = useRouter();

    return (
        <div className="bg-white">
            {/* Mobile menu */}

            {/* Hero section */}
            <div className="relative bg-gray-900">
                {/* Decorative image and overlay */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 overflow-hidden"
                >
                    <img
                        src={background_main.src}
                        alt=""
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gray-900 opacity-70"
                />

                {/* Navigation */}
                <Header />

                <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
                    <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                        What services do you need?
                    </h1>
                    {/* <p className="mt-1 text-xl text-white">
                        
                    </p> */}
                    {/* <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Shop New Arrivals
          </a> */}
                    <div className="py-3 px-8 mt-1 flex">
                        <Comboboxes />
                        <button
                            type="button"
                            className="inline-flex items-center rounded-lg border border-transparent bg-indigo-600 px-2 ml-2 mt-1 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => router.push("/clothing")}
                        >
                            <MagnifyingGlassIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
            </div>

            <main>
                {/* Category section */}
                <section
                    aria-labelledby="category-heading"
                    className="mb-10 pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
                >
                    <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                        <h2
                            id="category-heading"
                            className="text-2xl font-bold tracking-tight text-gray-900"
                        >
                            Service by needs
                        </h2>
                        <a
                            href="#"
                            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
                        >
                            Browse all services
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="mt-4 flow-root">
                        <div className="-my-2">
                            <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                                <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                                    {categories.map((category) => (
                                        <a
                                            key={category.name}
                                            href={category.href}
                                            className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            >
                                                <img
                                                    src={category.imageSrc}
                                                    alt=""
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </span>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                            />
                                            <span className="relative mt-auto text-center text-xl font-bold text-white">
                                                {category.name}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 px-4 sm:hidden">
                        <a
                            href="#"
                            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            Browse all categories
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </section>

                {/* Featured section */}
                {/* <section
                    aria-labelledby="social-impact-heading"
                    className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
                >
                    <div className="relative overflow-hidden rounded-lg">
                        <div className="absolute inset-0">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
                            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                                <h2
                                    id="social-impact-heading"
                                    className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                                >
                                    <span className="block sm:inline">
                                        Level up
                                    </span>
                                    <span className="block sm:inline">
                                        your desk
                                    </span>
                                </h2>
                                <p className="mt-3 text-xl text-white">
                                    Make your desk beautiful and organized. Post
                                    a picture to social media and watch it get
                                    more likes than life-changing announcements.
                                    Reflect on the shallow nature of existence.
                                    At least you have a really nice desk setup.
                                </p>
                                <a
                                    href="#"
                                    className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                                >
                                    Shop Workspace
                                </a>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Collection section */}
                {/* <section
                    aria-labelledby="collection-heading"
                    className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
                >
                    <h2
                        id="collection-heading"
                        className="text-2xl font-bold tracking-tight text-gray-900"
                    >
                        Shop by Collection
                    </h2>
                    <p className="mt-4 text-base text-gray-500">
                        Each season, we collaborate with world-class designers
                        to create a collection inspired by the natural world.
                    </p>

                    <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                        {collections.map((collection) => (
                            <a
                                key={collection.name}
                                href={collection.href}
                                className="group block"
                            >
                                <div
                                    aria-hidden="true"
                                    className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                                >
                                    <img
                                        src={collection.imageSrc}
                                        alt={collection.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-gray-900">
                                    {collection.name}
                                </h3>
                                <p className="mt-2 text-sm text-gray-500">
                                    {collection.description}
                                </p>
                            </a>
                        ))}
                    </div>
                </section> */}

                {/* Featured section */}
                {/* <section
                    aria-labelledby="comfort-heading"
                    className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
                >
                    <div className="relative overflow-hidden rounded-lg">
                        <div className="absolute inset-0">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
                            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                                <h2
                                    id="comfort-heading"
                                    className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                                >
                                    Simple productivity
                                </h2>
                                <p className="mt-3 text-xl text-white">
                                    Endless tasks, limited hours, a single piece
                                    of paper. Not really a haiku, but we're
                                    doing our best here. No kanban boards,
                                    burndown charts, or tangled flowcharts with
                                    our Focus system. Just the undeniable urge
                                    to fill empty circles.
                                </p>
                                <a
                                    href="#"
                                    className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                                >
                                    Shop Focus
                                </a>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
        </div>
    );
}
