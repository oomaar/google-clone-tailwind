import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const Search = () => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} ~ Google Search</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <header className="flex items-center sm:p-6 px-2 py-1">
                <Image src="/logo.png" alt="Google" height={40} width={120} />
                <form className="flex px-5 py-3 ml-2 sm:ml-10 mr-5 border border-gray-200 flex-grow max-w-2xl shadow-lg rounded-full">
                    <input
                        className="flex-grow w-full focus:outline-none"
                        type="text"
                        defaultValue={router.query.term}
                    />
                    <MicrophoneIcon className=" mr-3 h-5 text-blue-500 cursor-pointer" />
                    <SearchIcon className="h-5 text-blue-500" />
                    <button hidden>Search</button>
                </form>
                <img className="ml-auto h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110" src="/pharaoh.png" alt="pharaoh" />
            </header>
            {/* Results */}
        </div>
    );
};

export default Search;

export async function getServerSideProps(context) {
    console.log(context.query.term);
    // Google Search API Magic

    // Pass back the results
    return {
        props: {
            test: "abc"
        }
    }
}
