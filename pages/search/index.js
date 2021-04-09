import Head from "next/head";
import { useRouter } from "next/router";
import { SearchHeader } from "../../components";

const Search = () => {
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} ~ Google Search</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            
            <SearchHeader />
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
