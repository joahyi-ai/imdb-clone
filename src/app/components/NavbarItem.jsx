"use client";

import Link from "next/link";

import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          // 给出多个参加与运算的值：
          // result = value1 && value2 && value3;
          // 与运算 && 做了如下的事：
          // 从左到右依次计算操作数。
          // 在处理每一个操作数时，都将其转化为布尔值。如果结果是 false，就停止计算，并返回这个操作数的初始值。
          // 如果所有的操作数都被计算过（例如都是真值），则返回最后一个操作数。
          // 换句话说，与运算返回第一个假值，如果没有假值就返回最后一个值。
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
