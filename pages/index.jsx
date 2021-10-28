import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Head from 'next/head'

const navigation = [
  { name: 'Mission', href: '#mission' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Tokenomics', href: '#tokenomics' },
]

const metrics = [
  { id: 1, stat: 'Phase 1', emphasis: 'Launch ZENO', rest: ' on uniswap. Marketing Blitz (Tiktok,Youtube,Telegram,Twitter). Get listed on CMC + Coingecko' },
  { id: 2, stat: 'Phase 2', emphasis: 'Integrate ZENO ', rest: 'with other partnerships. Whitepaper/ Release sneak peak of dapp. Smart contract audit' },
  { id: 3, stat: 'Phase 3', emphasis: 'Release of interactive DAPP', rest: ' News articles. Dextools/CMC advertising' },
  { id: 4, stat: 'Phase 4', emphasis: 'Get listed on exchanges', rest: '. Bridge to other chains. Expand marketing reach' },
]

export default function Example() {
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>Zeno Inu | Built different...</title>
        <meta name="description" content="The Omni-king, and supreme ruler of all meme tokens. Bringing utility and community together to rule the Multiverse." />
      </Head>
      <Popover as="header" className="relative">
        <div className="bg-[#090f23] pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-14"
                    src="/zeno_small.png"
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-[#090f23] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-gray-300">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a
                href="https://app.uniswap.org/#/swap?outputCurrency=0x7D2ee0a3856cfFD58fB0963C0E24BF1277a0be0e&use=V2" target="_blank" rel="noopener"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base rounded-md text-white font-bold bg-[#9d06d0] hover:bg-gray-700"
              >
                Click to trade
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/zeno_small.png"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <a
                    href="https://app.uniswap.org/#/swap?outputCurrency=0x7D2ee0a3856cfFD58fB0963C0E24BF1277a0be0e&use=V2" target="_blank" rel="noopener"
                    className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                  >
                    Get from uniswap
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div id="mission" className="pt-10 bg-[#090f23] sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"  style={{ backgroundImage: "url('/temple.png')", backgroundRepeat: 'no-repeat', backgroundPosition: '30% 30%' }}>
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Zeno Inu</span>
                    <span className="block text-[#c8229a]">Our mission</span>
                  </h1>
                  <p className="mt-3 font-medium text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    The Omni-king, and supreme ruler of all meme tokens. 
                    Bringing utility and community together to rule the Multiverse.
                  </p>
                  <p className="mt-3 font-medium text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Saitama? Prepare yourself. ZENO is coming.
                    Built different..
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <div className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <div className="mt-3 sm:mt-0">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-[#c8229a] text-white font-bold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          >
                            Buy now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/zeno_big.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

    <div className="relative bg-[#090f23]" id="tokenomics">
      <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2" style={{ backgroundImage: "url('/roadmap.png')", backgroundRepeat: 'no-repeat', backgroundPosition: '-30% 30%' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
              <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24 text-center flex flex-col justify-center">
                <h2 className="text-5xl font-semibold tracking-wide text-[#c8229a]">Tokenomics</h2>
                <div  className="pt-28 text-center">
                <img src="/tokentax.png" alt="" className="w-[300px] mx-auto" />
                </div>
                <div className="mt-16 text-center mx-auto">
                  <img src="/tokenomics.png" alt=""  />
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
      <div id="roadmap" className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8 pb-10">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-5xl font-semibold tracking-wide text-[#c8229a]">Roadmap</h2>
          <p className="mt-5 text-lg text-gray-300">
          ZENO intends to be the #1 PVP/PVM 
          tournament style dapp/game with built in 
          Pay to Earn mechanics.
          <br /><br />
          We will utilize all avenues available
          (marketing/partnerships/experienced developers) 
          to reach our goals.
          <br /><br />
          The question is do you have diamond hands 
          or paper hands to stick along for the journey?
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-[#00c6fb]">{item.stat}</span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#090f23] pt-60 lg:pt-[350px] xl:pt-0">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <a href="https://app.uniswap.org/#/swap?outputCurrency=0x7D2ee0a3856cfFD58fB0963C0E24BF1277a0be0e&use=V2" target="_blank" rel="noopener" className="col-span-1 flex justify-center py-8 px-8 bg-[#32304c]">
            <img
              className="h-[80px]"
              src="/uniswap.svg"
              alt="Uniswap"
            />
          </a>
          <a href="https://twitter.com/zenoinu" target="_blank" rel="noopener" className="col-span-1 flex justify-center py-8 px-8 bg-[#32304c]">
            <img className="h-[50px] mt-5" src="/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://t.me/zenoinu" target="_blank" rel="noopener" className="col-span-1 flex justify-center py-8 px-8 bg-[#32304c]">
            <img className="h-[60px] mt-3" src="/telegram.svg" alt="Telegram" />
          </a>
          <a href="https://www.dextools.io/app/ether/pair-explorer/0x216a09bdf716b20b7c16bb164d9e3cc69b3c79fb" target="_blank" rel="noopener" className="col-span-1 flex justify-center py-8 px-8 bg-[#32304c]">
            <img className="h-[60px] mt-2" src="/dextools.png" alt="DexTools" />
          </a>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-[#32304c]">
            <img
              className="h-[60px] mt-2 rounded-full"
              src="/coinmarketcap.jpg"
              alt="CoinMarketcap"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-[#32304c]">
            <img
              className="h-[60px] mt-2"
              src="/coingecko.webp"
              alt="CoinGecko"
            />
          </div>
        </div>
      </div>
    </div> 
    
      </main>
      <footer className="bg-[#090f23]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
        <p className="py-8 text-base text-gray-400 md:mt-0 md:order-1 text-center">
          &copy; {new Date().getFullYear()} Zeno Ino. All rights reserved.
        </p>
    </footer>
    </div>
  )
}
import { ChevronDownIcon } from '@heroicons/react/solid'

const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}