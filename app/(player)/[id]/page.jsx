import { getSongsById } from "@/lib/fetch";
import Player from "../_components/Player";
import Recomandation from "../_components/Recomandation";

export const generateMetadata = async ({ params }) => {
    const title = await getSongsById(params.id);
    const data = await title.json();
    return {
        title: `${data.song}`
    }
}

export default function Page({ params }) {
    return (
        <div>
            <Player params={params} />
            <Recomandation id={params.id} />
        </div>
    )
}