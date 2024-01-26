'use server'

import Link from "next/link";

export const HomeScreen = () => {
  return (
    <div className="w-full h-96 grid place-content-center gap-5">
    <Link 
      href="/bai1" 
      className="px-8 py-2 bg-purple-950 hover:bg-purple-500 text-white rounded-xl"
      >
    <button className="w-full h-full p-2">
        Bài 1
    </button>
      </Link>

    <Link 
      href="/bai2" 
      className="px-8 py-2 bg-purple-950 hover:bg-purple-500 text-white rounded-xl"
      >
    <button className="w-full h-full p-2">
        Bài 2
    </button>
      </Link>
    </div>
  );
};
