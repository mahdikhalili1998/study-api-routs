import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <h1 className="mx-auto mb-[4rem] mt-5 w-max rounded-xl bg-red-500 px-2 py-1 text-2xl font-semibold text-white">
        API Route
      </h1>
      <Link
        className="mx-auto mb-[4rem] mt-5 w-max rounded-xl bg-orange-500 px-2 py-1 text-2xl font-semibold text-white"
        href="/todos"
      >
        Go To Todos
      </Link>
    </>
  );
}
