'use server'

import { BASE_API_URL } from "@/utils/constant";
import Link from "next/link";

export const HomeScreen = () => {
  if(!BASE_API_URL){
    return null;
  }
  return (
    <div className="space-y-5 px-44 text-center mt-14">
      <h1 className="font-bold text-3xl">Chào mừng đến với bài tập về nhà của Đỗ Nhật Nam, vui lòng chọn 1 câu bất kỳ để bắt đầu!</h1>
        <div className="w-full h-96 grid grid-cols-3 grid-row-3 gap-x-2 gap-y-3">
          <Link 
      href={`${BASE_API_URL}/bai1`}
      className="px-8 py-2 bg-purple-950 hover:bg-purple-500 text-white rounded-xl"
      >
    <button className="w-full h-full p-2">
        Bài 1
    </button>
      </Link>

      <Link 
      href={`${BASE_API_URL}/bai2`}
      className="px-8 py-2 bg-purple-950 hover:bg-purple-500 text-white rounded-xl"
      >
    <button className="w-full h-full p-2">
        Bài 2
    </button>
      </Link>

      <Link 
      href={`${BASE_API_URL}/bai3`}
      className="px-8 py-2 bg-purple-950 hover:bg-purple-500 text-white rounded-xl"
      >
    <button className="w-full h-full p-2">
        Bài 3
    </button>
      </Link>

      <Link 
      href={`${BASE_API_URL}/bai4`}
      className="px-8 py-2 bg-purple-950 hover:bg-purple-500 text-white rounded-xl"
      >
    <button className="w-full h-full p-2">
        Bài 4
    </button>
      </Link>

      <Link 
      href={`${BASE_API_URL}/bai5`}
      className="px-8 py-2 bg-purple-950 hover:bg-purple-500 text-white rounded-xl"
      >
    <button className="w-full h-full p-2">
        Bài 5
    </button>
      </Link>

      <Link 
      href={`${BASE_API_URL}/bai6`}
      className="px-8 py-2 bg-purple-950 hover:bg-purple-500 text-white rounded-xl"
      >
    <button className="w-full h-full p-2">
        Bài 6
    </button>
      </Link>

      <Link 
      href={`${BASE_API_URL}/bai7`}
      className="px-8 py-2 bg-purple-950 hover:bg-purple-500 text-white rounded-xl"
      >
    <button className="w-full h-full p-2">
        Bài 7
    </button>
      </Link>

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
    </div>

  );
};
