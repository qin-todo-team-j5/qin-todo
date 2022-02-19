import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="max-w-5xl mx-auto flex justify-between items-center p-5">
      <Link href="/">
        <a>
          <Image src="/logo.png" alt="Qin Todo" width={112} height={24} />
        </a>
      </Link>
      <Link href="/mypage">
        <a>
          <Image src="/mypage.png" alt="mypage" width={36} height={36} />
        </a>
      </Link>
    </nav>
  );
};