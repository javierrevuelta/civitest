"use client";
import PreguntaLayout from "@/components/PreguntaLayout";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TestModulo = (params) => {
  return (
    <div>
      <Link href="/">
        {" "}
        <div className="m-5 p-2 text-center text-3xl">Haz tu Test</div>
      </Link>
      <div className="flex justify-center">
        <PreguntaLayout modulo={params.params.num} />
      </div>
    </div>
  );
};

export default TestModulo;
