"use client";
import PreguntaLayout from "@/components/PreguntaLayout";
import Image from "next/image";
import { quizData } from "../libs/modulo1";
import ModuloSelector from "@/components/ModuloSelector";
export default function Home() {
  return (
    <div>
      <div className="m-5 p-2 text-center text-3xl">Haz tu Test</div>
      <div className="flex justify-center">
        <PreguntaLayout />
      </div>
    </div>
  );
}
