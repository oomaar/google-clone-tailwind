import Head from "next/head";
import { useRouter } from "next/router";
import { SearchHeader, SearchResults } from "../../components";
import Response from "../../Response";

const Search = ({ results }) => {
    console.log("🚀 ~ file: index.js ~ line 6 ~ Search ~ results", results)
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{router.query.term} ~ Google Search</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <SearchHeader />
            {/* Results */}
            <SearchResults results={results} />
        </div>
    );
};

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData
        ? Response
        : await fetch(`
        https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}
        &cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}
        `)
            .then(response => response.json());

    return {
        props: {
            results: data,
        },
    };
};
