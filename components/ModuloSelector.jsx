import Link from "next/link";
import React from "react";

const ModuloSelector = () => {
  return (
    <div>
      <p className="text-center">Elige tu Módulo</p>
      <div className="flex justify-around mt-10">
        <Link href="/tests/1">
          <button className="border px-5 py-2">Módulo 1</button>
        </Link>
        <Link href="/tests/2">
          <button className="border px-5 py-2">Módulo 2</button>
        </Link>

        <Link href="/tests/3">
          <button className="border px-5 py-2">Módulo 3</button>
        </Link>

        <button className="border px-5 py-2" disabled>
          Módulo 4
        </button>
        <button className="border px-5 py-2" disabled>
          Módulo 5
        </button>
        <button className="border px-5 py-2" disabled>
          Módulo 6
        </button>
        <Link href="/tests/todos">
          <button className="border px-5 py-2">Todos los Módulos</button>
        </Link>
      </div>
    </div>
  );
};

export default ModuloSelector;
