/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import {
    CheckIcon,
    HandThumbUpIcon,
    UserIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

const reviews = {
    average: 5,
    totalCount: 10,
    counts: [
        { rating: 5, count: 10 },
        { rating: 4, count: 0 },
        { rating: 3, count: 0 },
        { rating: 2, count: 0 },
        { rating: 1, count: 0 },
    ],
    featured: [
        {
            id: 1,
            rating: 5,
            content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
            author: "Emily Selman",
            avatarSrc:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
        },
        // More reviews...
        {
            id: 2,
            rating: 5,
            content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
            author: "Emily Selman",
            avatarSrc:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
        },
    ],
};

const eventTypes = {
    applied: { icon: UserIcon, bgColorClass: "bg-gray-400" },
    advanced: { icon: HandThumbUpIcon, bgColorClass: "bg-blue-500" },
    completed: { icon: CheckIcon, bgColorClass: "bg-green-500" },
};
const timeline = [
    {
        id: 4,
        type: eventTypes.advanced,
        content: "",
        target: "Serv Guaranteed",
        date: "",
        datetime: "2020-09-30",
    },
    {
        id: 5,
        type: eventTypes.completed,
        content: "",
        target: "Trusted Vendor",
        date: "",
        datetime: "2020-10-04",
    },
];

import { Header } from "@/components/Header";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full bg-gray-100">
                <Header />
                <main className="py-10">
                    {/* Page header */}

                    <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                        <div className="space-y-6 lg:col-span-2 lg:col-start-1">
                            {/* Description list*/}
                            <section aria-labelledby="applicant-information-title">
                                <div className="bg-white shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:px-6">
                                        <div className="flex items-center space-x-5">
                                            <div className="flex-shrink-0">
                                                <div className="relative">
                                                    <img
                                                        className="h-16 w-16 rounded-full"
                                                        src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                                        alt=""
                                                    />
                                                    <span
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className="text-2xl font-bold text-gray-900">
                                                    Fhunk
                                                </h1>
                                                <p className="text-sm font-medium text-gray-500">
                                                    Joined 2012
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Application for
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    Backend Developer
                                                </dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Email address
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    ricardocooper@example.com
                                                </dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Salary expectation
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    $120,000
                                                </dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Phone
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    +1 555-555-5555
                                                </dd>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    About
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    Fugiat ipsum ipsum deserunt
                                                    culpa aute sint do nostrud
                                                    anim incididunt cillum culpa
                                                    consequat. Excepteur qui
                                                    ipsum aliquip consequat
                                                    sint. Sit id mollit nulla
                                                    mollit nostrud in ea officia
                                                    proident. Irure nostrud
                                                    pariatur mollit ad
                                                    adipisicing reprehenderit
                                                    deserunt qui eu.
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            // className="block bg-gray-50 px-4 py-4 text-center text-sm font-medium text-gray-500 hover:text-gray-700 sm:rounded-b-lg"
                                            className="block text-center  px-4 py-4 text-sm font-medium items-center justify-center  border border-transparent bg-blue-600  text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        >
                                            Request Service
                                        </a>
                                    </div>
                                </div>
                            </section>

                            {/* Bottom Review*/}
                        </div>

                        <section
                            aria-labelledby="timeline-title"
                            className="lg:col-span-1 lg:col-start-3"
                        >
                            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                                <h2
                                    id="timeline-title"
                                    className="text-lg font-medium text-gray-900"
                                >
                                    Badges
                                </h2>

                                {/* Activity Feed */}
                                <div className="mt-6 flow-root">
                                    <ul role="list" className="-mb-8">
                                        {timeline.map((item, itemIdx) => (
                                            <li key={item.id}>
                                                <div className="relative pb-8">
                                                    {itemIdx !==
                                                    timeline.length - 1 ? (
                                                        <span
                                                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                                            aria-hidden="true"
                                                        />
                                                    ) : null}
                                                    <div className="relative flex space-x-3">
                                                        <div>
                                                            <span
                                                                className={classNames(
                                                                    item.type
                                                                        .bgColorClass,
                                                                    "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                                                                )}
                                                            >
                                                                <item.type.icon
                                                                    className="h-5 w-5 text-white"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                            <div>
                                                                <p className="text-sm text-gray-500">
                                                                    {
                                                                        item.content
                                                                    }{" "}
                                                                    <a
                                                                        href="#"
                                                                        className="font-medium text-gray-900"
                                                                    >
                                                                        {
                                                                            item.target
                                                                        }
                                                                    </a>
                                                                </p>
                                                            </div>
                                                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                                                <time
                                                                    dateTime={
                                                                        item.datetime
                                                                    }
                                                                >
                                                                    {item.date}
                                                                </time>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Bottom Review*/}
                    <div className="bg-gray-100 border-t mt-16">
                        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-20 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-24 lg:px-8">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                    Customer Reviews
                                </h2>

                                <div className="mt-3 flex items-center">
                                    <div>
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={classNames(
                                                        reviews.average > rating
                                                            ? "text-yellow-400"
                                                            : "text-gray-300",
                                                        "flex-shrink-0 h-5 w-5"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="sr-only">
                                            {reviews.average} out of 5 stars
                                        </p>
                                    </div>
                                    <p className="ml-2 text-sm text-gray-900">
                                        Based on {reviews.totalCount} reviews
                                    </p>
                                </div>

                                <div className="mt-6">
                                    <h3 className="sr-only">Review data</h3>

                                    <dl className="space-y-3">
                                        {reviews.counts.map((count) => (
                                            <div
                                                key={count.rating}
                                                className="flex items-center text-sm"
                                            >
                                                <dt className="flex flex-1 items-center">
                                                    <p className="w-3 font-medium text-gray-900">
                                                        {count.rating}
                                                        <span className="sr-only">
                                                            {" "}
                                                            star reviews
                                                        </span>
                                                    </p>
                                                    <div
                                                        aria-hidden="true"
                                                        className="ml-1 flex flex-1 items-center"
                                                    >
                                                        <StarIcon
                                                            className={classNames(
                                                                count.count > 0
                                                                    ? "text-yellow-400"
                                                                    : "text-gray-300",
                                                                "flex-shrink-0 h-5 w-5"
                                                            )}
                                                            aria-hidden="true"
                                                        />

                                                        <div className="relative ml-3 flex-1">
                                                            <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                                                            {count.count > 0 ? (
                                                                <div
                                                                    className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                                                    style={{
                                                                        width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                                                                    }}
                                                                />
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </dt>
                                                <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                                                    {Math.round(
                                                        (count.count /
                                                            reviews.totalCount) *
                                                            100
                                                    )}
                                                    %
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>

                                <div className="mt-10">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Share your thoughts
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        If you’ve used this product, share your
                                        thoughts with other customers
                                    </p>

                                    <a
                                        href="#"
                                        className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                                    >
                                        Write a review
                                    </a>
                                </div>
                            </div>

                            <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
                                <h3 className="sr-only">Recent reviews</h3>

                                <div className="flow-root">
                                    <div className="-my-12 divide-y divide-gray-200">
                                        {reviews.featured.map((review) => (
                                            <div
                                                key={review.id}
                                                className="py-12"
                                            >
                                                <div className="flex items-center">
                                                    <img
                                                        src={review.avatarSrc}
                                                        alt={`${review.author}.`}
                                                        className="h-12 w-12 rounded-full"
                                                    />
                                                    <div className="ml-4">
                                                        <h4 className="text-sm font-bold text-gray-900">
                                                            {review.author}
                                                        </h4>
                                                        <div className="mt-1 flex items-center">
                                                            {[
                                                                0, 1, 2, 3, 4,
                                                            ].map((rating) => (
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
                                                            ))}
                                                        </div>
                                                        <p className="sr-only">
                                                            {review.rating} out
                                                            of 5 stars
                                                        </p>
                                                    </div>
                                                </div>

                                                <div
                                                    className="mt-4 space-y-6 text-base italic text-gray-600"
                                                    dangerouslySetInnerHTML={{
                                                        __html: review.content,
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
