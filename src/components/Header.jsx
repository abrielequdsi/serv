import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navigation = {
    categories: [
      {
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
          {
            name: 'Accessories',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
            imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
          },
          {
            name: 'Carry',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
            imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
          },
        ],
      },
      {
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
            imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
          },
          {
            name: 'Basic Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
            imageAlt: 'Model wearing light heather gray t-shirt.',
          },
          {
            name: 'Accessories',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
            imageAlt:
              'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
          },
          {
            name: 'Carry',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
            imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
          },
        ],
      },
    ],
    pages: [
      { name: 'Company', href: '#' },
      { name: 'Stores', href: '#' },
    ],
}

const categories = [
    {
      name: 'New Arrivals',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
    },
    {
      name: 'Productivity',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
    },
    {
      name: 'Workspace',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
    },
    {
      name: 'Accessories',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
    },
    { name: 'Sale', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg' },
  ]

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

export const Header = () => {
  return (
    <header className="relative z-10">
<nav aria-label="Top">
  {/* Top navigation */}

  {/* Secondary navigation */}
  <div className="bg-white">
    <div className="border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo (lg+) */}
          <div className="hidden lg:flex lg:items-center">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>

        

          {/* Mobile menu and search (lg-) */}
        
          {/* Logo (lg-) */}
          <a href="#" className="lg:hidden">
            <span className="sr-only">Your Company</span>
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
              className="h-8 w-auto"
            />
          </a>

          <div className="flex flex-1 items-center justify-end">
            <div className="flex items-center lg:ml-8">

            <div className="flex">
                {/* <a href="#" className="group -m-2 flex items-center p-2">
                  <ShoppingCartIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </a> */}
                  <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Register
                    </button>
              </div>

              <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

              <div className="flex">
                {/* <a href="#" className="group -m-2 flex items-center p-2">
                  <ShoppingCartIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </a> */}
                 <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Sign In
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</header>
  )
}