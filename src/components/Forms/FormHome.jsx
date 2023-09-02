"use client";
import { verificationLoginHelper } from "@/Helpers/VerificacionLoginHelper";
import Image from "next/image";
import { useState } from "react";

/**
 * Este es un componente para el formulario de inicio de sesion en la pagina Home
 */

export default function FormHome() {
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const role = verificationLoginHelper(username);

    if (role === "admin") {
      window.location.href = "/admin";
    } else if (role === "empleado") {
      window.location.href = "/employee/cedula_cliente";
    } else {
      alert("Usuario no encontrado");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 py-6 mx-auto h-screen max-h-[90vh] lg:py-0">
      <section className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-white ">
        <section className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-marianBlue text-4xl text-center font-bold leading-tight tracking-tight md:text-4xl ">
            SDBS
          </h1>

          <section className="flex justify-center items-center">
            <Image
              className="rounded-full"
              width={240}
              height={240}
              wid
              src="/images/home/user-icon.png"
              alt="image description"
            />
          </section>

          <form className="block" method="POST" onSubmit={handleLogin}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium  sr-only text-white"
            >
              Entrar
            </label>
            <section className="relative">
              <section className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Image
                  width={16}
                  height={16}
                  src="/images/search2.svg"
                  alt="lupa"
                />
              </section>
              <input
                type="search"
                id="default-search"
                className="bg-marianBlue block w-full p-4 pl-10 text-sm text-white border border-gray-300 rounded-lg  placeholder-gray-200  focus:ring-blue-500 focus:border-slate-100"
                placeholder="Ingrese su Usuario"
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <button
                type="submit"
                className="text-black absolute right-2.5 bottom-2.5  hover:bg-gray-300 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 bg-gray-100 focus:ring-blue-800"
              >
                Entrar
              </button>
            </section>
          </form>
        </section>
      </section>
    </section>
  );
}
