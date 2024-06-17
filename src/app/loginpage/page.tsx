"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { registerUserSchema } from "@/lib/model/userregister";

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerUserSchema),
  });

  const OnsubmitRegister = async (formData: FormEvent) => {
    
try{
  const response = await fetch(`/api/register`,{
    method : "POST",
    
    headers : {
      "content-type" : "aplication/json",
    },
    body : JSON.stringify({formData})
  }) 
  console.log("Cadastrado com sucesso")
}catch(error){
  console.log(error)
}

   

  };

  return (
    <>
      <main className="py-20 flex flex-col items-center justify-center gap-4">
        <form
          onSubmit={handleSubmit(OnsubmitRegister as any)}
          className="flex flex-col gap-4 border rounded-lg px-2 w-1/2 p-6"
        >
          <legend>Cadastre-se</legend>
          <input
            type="text"
            id="username"
            className="p-2 rounded-md text-black"
            placeholder="digite o seu username"
            {...register("username")}
          />
          {errors.username && <span className="text-red-600">{errors.username.message}</span>}

          <input
            type="text"
            id="email"
            className="p-2 rounded-md text-black"
            placeholder="digite o seu email"
            {...register("email")}
          />
          {errors.email && <span className="text-red-600">{errors.email.message}</span>}

          <input
            type="password"
            id="password"
            className="p-2 rounded-md text-black"
            placeholder="Escolha uma senha"
            {...register("password")}
          />

          {errors.password && <span className="text-red-600">{errors.password.message}</span>}

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
