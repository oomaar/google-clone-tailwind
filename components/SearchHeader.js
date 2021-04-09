import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Avatar, HeaderOptions } from ".";

const SearchHeader = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex items-center sm:p-6 px-2 py-1 w-full">
                <Image
                    src="/logo.png"
                    alt="Google"
                    height={40}
                    width={120}
                    onClick={() => router.push("/")}
                    className="cursor-pointer"
                />
                <form className="flex px-6 py-3 ml-2 sm:ml-10 mr-5 border items-center 
                border-gray-200 flex-grow max-w-3xl shadow-lg rounded-full">
                    <input
                        className="flex-grow w-full focus:outline-none"
                        type="text"
                        ref={searchInputRef}
                    // defaultValue={router.query.term}
                    />
                    <XIcon
                        className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition 
                    duration-100 transform hover:scale-125"
                        onClick={() => (searchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon className="mr-3 h-6 text-blue-500 
                    hidden sm:inline-flex cursor-pointer border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar
                    className="ml-auto"
                    url="/pharaoh.png"
                />
            </div>
            <HeaderOptions />
        </header>
    );
};

export default SearchHeader;