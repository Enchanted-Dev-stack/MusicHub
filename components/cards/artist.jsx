import Link from "next/link";

export default function ArtistCard({ image, name, id }) {
    return (
        <Link href={"/search/" + `${name.split(" ")[0]}`}>
            <div>
                <img src={image} alt={name} className="rounded-2xl h-[100px] w-[100px] object-cover"/>
            </div>
            <div className="mt-2">
                <h1 className="text-sm">{name.split(" ")[0] || null} {name.split(" ")[1] || null}</h1>
            </div>
        </Link>
    )
}