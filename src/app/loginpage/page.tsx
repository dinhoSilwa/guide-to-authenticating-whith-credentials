"use client";
import { doCredentialLogin } from "@/actions/credentials";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <main className="py-20 flex flex-col items-center justify-center gap-4">
        <form
          action={doCredentialLogin}
          className="flex flex-col gap-4 border rounded-lg px-2 w-1/2 p-6"
        >
          <legend>Cadastre-se</legend>
          <input
            type="text"
            id="email"
            name="email"
            className="p-2 rounded-md text-black"
            placeholder="digite o seu email"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            className="p-2 rounded-md text-black"
            placeholder="Escolha uma senha"
            required
          />
          <button
            type="submit"
            className="p-2 bg-green-500 text-zinc-100 rounded-md"
          >
            Cadastrar
          </button>
        </form>
        <div className="text-[12px]">
          você já tem uma conta ? <Link href={"/login"}>Faça login</Link>
        </div>
      </main>
    </>
  );
}
