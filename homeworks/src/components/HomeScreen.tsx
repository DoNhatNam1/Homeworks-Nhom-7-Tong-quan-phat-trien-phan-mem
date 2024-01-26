'use server'

import { BASE_API_URL } from "@/utils/constant";
import Link from "next/link";

export const HomeScreen = () => {
  if(!BASE_API_URL){
    return null;
  }
  return (
    <div className="w-full h-96 grid place-content-center gap-5">
    <Link 
      href={`${BASE_API_URL}/bai8`}
      className="px-8 py-2 bg-purple-950 hover:bg-purple-500 text-white rounded-xl"
      >
    <button className="w-full h-full p-2">
        Bài 8
    </button>
      </Link>

    <Link 
      href={`${BASE_API_URL}/bai9`}
      className="px-8 py-2 bg-purple-950 hover:bg-purple-500 text-white rounded-xl"
      >
    <button className="w-full h-full p-2">
        Bài 9
    </button>
      </Link>
    </div>
  );
};
