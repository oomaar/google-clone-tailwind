import Head from 'next/head';
import { useRouter } from "next/router";
import { useRef } from 'react';
import { MicrophoneIcon, ViewGridIcon, SearchIcon } from "@heroicons/react/solid";
import { Avatar, Footer } from '../components';
import Image from 'next/image';


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
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="/logo.png"
          alt="Google"
          height={100}
          width={300}
        />
        <div className="home__inputContainer">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} className="flex-grow focus:outline-none" type="text" />
          <MicrophoneIcon className="h-5 cursor-pointer" />
        </div>
        <div className="home__buttonsContainer">
          <button className="btn">Google Search</button>
          <button className="btn">Im Feeling Lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  )
}
