"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { registerUserSchema } from "@/lib/model/userregister";
import toast, { Toaster } from "react-hot-toast";
import { CircleArrowRight, FormInput, Loader, Spline } from "lucide-react";

export default function LoginPage() {
  const [isloading, setisloading] = useState(false);

  const notify = (msg: string) => toast(msg);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerUserSchema),
  });

  const OnsubmitRegister = async (formData: FormEvent) => {
    setisloading(!isloading);
    try {
      const response = await fetch(`/users/api/register`, {
        method: "POST",
        headers: {
          "content-type": "aplication/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (response.status !== 200) {
        setisloading(false);
        notify("❌ Falha ao Enviar o Formulário");
        return;
      }
      notify("✅ Cadastrado com Sucesso");
      setTimeout(() => {
        setisloading(false);
      }, 4000);
    } catch (error) {
      notify("❌ Falha o Cadastrar");
    }
  };

  return (
    <>
      <Toaster />
      <main className="py-20 flex flex-col items-center justify-center gap-4">
        <form
          onSubmit={handleSubmit(OnsubmitRegister as any)}
          className="flex flex-col gap-4 border rounded-lg px-2 w-1/2 p-6"
        >
          <legend>Entre na sua Conta</legend>
      
          {errors.username && (
            <span className="text-red-600">{errors.username.message}</span>
          )}

          <input
            type="text"
            id="email"
            className="p-2 rounded-md text-black"
            placeholder="digite o seu email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}

          <input
            type="password"
            id="password"
            className="p-2 rounded-md text-black"
            placeholder="Escolha uma senha"
            {...register("password")}
          />

          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}

          <button
            type="submit"
            className="p-2 bg-green-500 text-zinc-100 rounded-md flex gap-1"
          >
            {isloading ? (
              <div className="animate-spin">
                <Loader />
              </div>
            ) : (
              <div className="animate-none">
                <CircleArrowRight />
              </div>
            )}
            Entrar
          </button>
        </form>
        <div className="text-[12px]">
          ainda não tem uma conta ? <Link href={"/signinpage"} className="underline">Cadastre-se</Link>
        </div>
      </main>
    </>
  );
}
