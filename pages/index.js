import Head from 'next/head';
import { useRouter } from "next/router";
import { useRef } from 'react';
import { MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/solid";


export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    router.push(`/search?term=${searchInputRef.current.value}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Header */}
      <div className="flex w-full justify-between text-md sm:px-3 py-1">
        <div className="flex gap-x-4 items-center">
          <p className="link__style">About</p>
          <p className="link__style">Store</p>
        </div>
        <div className="flex gap-x-4 items-center">
          <p className="link__style">Gmail</p>
          <p className="link__style">Images</p>
          <img className="h-10 rounded-full" src="/pharaoh.png" alt="pharaoh" />
        </div>
      </div>
      {/* Body */}
      <form className="flex flex-1 items-center mt-48 flex-col w-full">
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
      </form>
      {/* Footer */}
    </div>
  )
}
