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
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
    ArrowLongLeftIcon,
    CheckIcon,
    HandThumbUpIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    PaperClipIcon,
    QuestionMarkCircleIcon,
    UserIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import companyLogo from "@/images/companyLogo.jpeg";
const user = {
    name: "Whitney Francis",
    email: "whitney@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
};
const navigation = [
    { name: "Dashboard", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Applicants", href: "#" },
    { name: "Company", href: "#" },
];
const breadcrumbs = [
    { name: "Jobs", href: "#", current: false },
    { name: "Front End Developer", href: "#", current: false },
    { name: "Applicants", href: "#", current: true },
];
const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
];
const attachments = [
    { name: "resume_front_end_developer.pdf", href: "#" },
    { name: "coverletter_front_end_developer.pdf", href: "#" },
];
const eventTypes = {
    applied: { icon: UserIcon, bgColorClass: "bg-gray-400" },
    advanced: { icon: HandThumbUpIcon, bgColorClass: "bg-blue-500" },
    completed: { icon: CheckIcon, bgColorClass: "bg-green-500" },
};
const timeline = [
    {
        id: 1,
        type: eventTypes.applied,
        content: "Applied to",
        target: "Front End Developer",
        date: "Sep 20",
        datetime: "2020-09-20",
    },
    {
        id: 2,
        type: eventTypes.advanced,
        content: "Advanced to phone screening by",
        target: "Bethany Blake",
        date: "Sep 22",
        datetime: "2020-09-22",
    },
    {
        id: 3,
        type: eventTypes.completed,
        content: "Completed phone screening with",
        target: "Martha Gardner",
        date: "Sep 28",
        datetime: "2020-09-28",
    },
    {
        id: 4,
        type: eventTypes.advanced,
        content: "Advanced to interview by",
        target: "Bethany Blake",
        date: "Sep 30",
        datetime: "2020-09-30",
    },
    {
        id: 5,
        type: eventTypes.completed,
        content: "Completed interview with",
        target: "Katherine Snyder",
        date: "Oct 4",
        datetime: "2020-10-04",
    },
];
const comments = [
    {
        id: 1,
        name: "Leslie Alexander",
        date: "4d ago",
        imageId: "1494790108377-be9c29b29330",
        body: "Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.",
    },
    {
        id: 2,
        name: "Michael Foster",
        date: "4d ago",
        imageId: "1519244703995-f4e0f30006d5",
        body: "Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.",
    },
    {
        id: 3,
        name: "Dries Vincent",
        date: "4d ago",
        imageId: "1506794778202-cad84cf45f1d",
        body: "Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function company() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html className="h-full bg-gray-100">
        <body className="h-full">
        ```
      */}
            <div className="min-h-full bg-gray-100">
                <main className="py-10">
                    <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                        {/* Card */}
                        <div className="lg:col-span-1 bg-white shadow sm:rounded-lg px-4 py-5 sm:px-6">
                            <div className="flex flex-col items-center pb-10 pt-6">
                                <img
                                    className="mb-3 w-24 h-24 rounded-full shadow-lg"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    // src={companyLogo}
                                    alt="Bonnie image"
                                />
                                <h5 className="mb-1 text-xl font-medium text-gray-900">
                                    Fhunk
                                </h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Joined in 2002
                                </span>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                    <a
                                        href="#"
                                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Add friend
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                    >
                                        Message
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* About Card */}
                        <section
                            aria-labelledby="timeline-title"
                            className="lg:col-span-2"
                        >
                            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                                <h2
                                    id="timeline-title"
                                    className="text-lg font-medium text-gray-900"
                                >
                                    About
                                </h2>
                                <div className="mt-10 border-t border-gray-200 pt-10">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        Highlights
                                    </h3>
                                    <div className="prose prose-sm mt-4 text-gray-500">
                                        <ul role="list">
                                            {["test", "test2"].map(
                                                (highlight) => (
                                                    <li key={highlight}>
                                                        {highlight}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                {/* About */}
                                <div className="mt-6 flow-root"></div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}
