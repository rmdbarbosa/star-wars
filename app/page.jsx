import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <Image src={"/logo.png"} width={200} height={100} alt="star wars logo" />
      <div className="flex justify-around w-screen text-center">
        <Link href={"/characters"}>
          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-bold">Characters</h2>
            <Image
              src={"/chars.jpg"}
              width={500}
              height={300}
              alt="Characters"
            />
          </div>
        </Link>
        <Link href={"/movies"}>
          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-bold">Movies</h2>
            <Image
              src={
                "https://s3.wasabisys.com/instax/74/instax/2023/04/star-wars-1680799242.jpg"
              }
              width={500}
              height={300}
              alt="Movies"
            />
          </div>
        </Link>
      </div>
    </main>
  );
}
