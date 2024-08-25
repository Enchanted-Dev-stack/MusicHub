import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

export default function SongCard({ title, image, artist, id, desc }) {
    return (
        <div className="p-2 h-fit border border-border rounded-md bg-secondary/30 w-[200px]">
            <div className="overflow-hidden rounded-md">
                {image ? (
                    <Link href={`/${id}`}>
                        <img src={image} alt={title} className="h-[182px] w-full bg-secondary/60 rounded-md transition hover:scale-105 cursor-pointer" />
                    </Link>
                ) : (
                    <Skeleton className="w-full h-[182px]" />
                )}
            </div>
            <div className="cursor-pointer">
                {title ? (
                    <Link href={`/${id}`} className="mt-2 flex items-center justify-between">
                        <h1 className="text-sm font-medium hover:opacity-70">{title.slice(0, 20)}{title.length > 20 && '...'}</h1>
                    </Link>
                ) : (
                    <Skeleton className="w-[70%] h-4 mt-2" />
                )}
                {desc && (
                    <p className="text-xs text-muted-foreground">{desc.slice(0, 30)}</p>
                )}
                {artist ? (
                    <p className="text-xs text-muted-foreground">by <span className="text-primary">{artist.slice(0, 20)}{artist.length > 20 && '...'}</span></p>
                ) : (
                    <Skeleton className="w-10 h-2 mt-2" />
                )}
            </div>
        </div>
    )
}
