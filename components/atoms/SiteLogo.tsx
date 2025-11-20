import Image from "next/image";
export default function SiteLogo() {
  return (
    <Image src="/tmLogo.svg" width={100} height={35} alt={"Time Market"} />
  );
}
