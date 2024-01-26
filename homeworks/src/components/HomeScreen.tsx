'use server'

import Link from "next/link";

export const HomeScreen = () => {
  return (
    <>
      <Link 
      href="/bai1" 
      className="p-5 bg-blue"
      >
        Bài 1
      </Link>
      <Link 
      href="/bai2" 
      className="p-5 bg-blue"
      >
        Bài 2
      </Link>
    </>
  );
};
