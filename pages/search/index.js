import Head from "next/head";
import { useRouter } from "next/router";
import { SearchHeader } from "../../components";
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
        </div>
    );
};

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = true;
    const data = useDummyData
        ? Response
        : await fetch(`
        https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}
        `)
            .then(response => response.json());

    return {
        props: {
            results: data,
        },
    };
};
