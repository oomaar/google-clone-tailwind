import Head from 'next/head';
import { useRouter } from "next/router";
import { useRef } from 'react';
import { MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/solid";
import { ViewGridIcon } from "@heroicons/react/solid";
import { Avatar } from '../components';


export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    router.push(`/search?term=${searchInputRef.current.value}`);
  };

  return (
    // <div className="flex flex-col items-center justify-center h-screen">
    <div>
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="flex w-full sm:p-5 p-2 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 sm:p-2 cursor-pointer rounded-full hover:bg-gray-100" />
          <Avatar url="/pharaoh.png" />
        </div>
      </header>
      {/* Body */}
      {/* <form className="flex flex-1 items-center mt-48 flex-col w-full">
        <img className="object-contain h-20 mb-8" src="/logo.png" alt="Google" />
        <div className="input__container">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} className="flex-grow focus:outline-none" type="text" />
          <MicrophoneIcon className="h-5 cursor-pointer" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button
            type="submit"
            onClick={search}
            className="btn"
          >
            Google Search
          </button>
          <button onClick={search} className="btn">Im Feeling Lucky</button>
        </div>
      </form> */}
      {/* Footer */}
    </div>
  )
}
