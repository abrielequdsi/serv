import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";

export default function Example() {
    const [open, setOpen] = useState(true);
    const router = useRouter();

    return (
        <>
            <Header />

            <div className="pt-24 bg-gray-100">
                <div className="mx-auto max-w-xl pt-16 px-4 pb-74 sm:pb-64 sm:pt-24 sm:px-6 lg:px-8 ">
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
                        <svg
                            viewBox="0 0 24 24"
                            class="text-green-600 w-16 h-16 mx-auto my-6"
                        >
                            <path
                                fill="currentColor"
                                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                            ></path>
                        </svg>
                        <div class="text-center">
                            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
                                Thank you for ordering the service!
                            </h3>
                            <p class="text-gray-600 my-2">
                                Order Number #314159
                            </p>
                            <p className="text-sm text-gray-500">
                                {" "}
                                The vendor will be reply to you within 2 x 24
                                Hours. If they accept the order, you will need
                                to pay for the deposit within 2 x 24 Hours after
                                they replied. Once the deposit is paid, your
                                order/service will be processed.
                            </p>
                            {/* <button className="mt-4 underline text-blue-600 hover:text-blue-800 visited:text-purple-600" onClick={() => {
                        const data = localStorage.getItem('invoicePdf')
                        localStorage.removeItem('invoicePdf')
                        axios.post('http://127.0.0.1:8000/postData', data)
                            .then(res => console.log(res))
                            .catch(err => console.log(err))
                        
                    }}>Download Invoice</button> */}
                            <div class="py-8 text-center">
                                <button
                                    onClick={() => router.push("/main")}
                                    class="rounded-md border px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                                >
                                    GO HOME
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
