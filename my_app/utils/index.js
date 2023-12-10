import axios from "axios";

export async function subgraphQuery(query) {
    try{
        //Replacing MY-SUBGRAPH-URL with the url of my subgraph
        const SUBGRAPH_URL = " https://api.thegraph.com/subgraphs/name/frankozoalor/learnweb3";
        const response = await axios.post(SUBGRAPH_URL, {
            query
        });
        if(response.data.erros){
            console.error(response.data.erros);
            throw new Error(`Error making subgraph query ${response.data.erros}`);
        }
        return response.data.data
        }catch(err){
        console.error(err);
        throw new Error(`Could not query the subgraph ${error.message}`);
     }
}