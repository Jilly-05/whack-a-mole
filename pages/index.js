import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Game Station</h1>
      <Link href="/whack-a-mole">
        <a>두더지 잡기</a>
      </Link>
    </div>
  );
}
