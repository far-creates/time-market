import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Image
        src={"/Freedom-starts-with-time.svg"}
        width={800}
        height={450}
        alt="Freedom starts with time"
        className="m-auto"
      />
    </div>
  );
}
