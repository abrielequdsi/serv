import React from 'react'
import { useRouter } from 'next/router'
import ourLogo from "src/images/ourLogo.png"


export const Header = () => {
    const router = useRouter()

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
          <button className="hidden lg:flex lg:items-center">
            <div onClick={() => router.push('/')}>
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={ourLogo.src}
                width = "300px"
                height = "100px"
                alt="SERV Logo"
              />
            </div>
          </button>

        

          {/* Mobile menu and search (lg-) */}
        
          {/* Logo (lg-) */}
          <button onClick={() => router.push('/')} className="lg:hidden">
            <span className="sr-only">Your Company</span>
            <img
              src= {ourLogo.src}
              alt="SERV Logo"
              className="h-8 w-auto"
            />
          </button>

          {/* <div className="flex flex-1 items-center justify-end">
            <div className="flex items-center lg:ml-8">

            <div className="flex">
                  <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => router.push('/register')}
                    >
                        Register
                    </button>
              </div>

              <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

              <div className="flex">
                 <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => router.push('/signin')}
                >
                    Sign In
                </button>
              </div>

            </div>
          </div> */}

          <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                <a href="#" className="group block flex-shrink-0">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                        Whitney Francis
                      </p>
                      <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">Buyer</p>
                    </div>
                  </div>
                </a>
          </div>    
        </div>
      </div>
    </div>
  </div>
</nav>
</header>
  )
}