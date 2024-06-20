"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerUserSchema } from "@/lib/model/userregister";
import toast, { Toaster } from "react-hot-toast";
import { CircleArrowRight, FormInput, Loader, Spline } from "lucide-react";
import { useRouter } from "next/navigation";
import { url } from "inspector";
import axios, { AxiosResponse } from "axios";
import { IRegisterUser } from "@/types/registeruser";
import { IapiResponse } from "../api/users/register/route";

export default function Signinpage() {
  const [isloading, setisloading] = useState(false);
  const router = useRouter();

  const notify = (msg: string) => toast(msg);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerUserSchema),
  });

  const [responseData, setResponseData] = useState<any>();

  const OnsubmitRegister = async (formData: FormEvent): Promise<void> => {
    try {
      const response: AxiosResponse<IapiResponse> = await axios.post(
        "/api/users/register",
        formData
      );
      if (response.data.status === 201) {
        notify("✅ Usuário Criado com Sucesso");
        router.push('/')
   
      } else {
        notify(response.data.msg);
      }
    } catch (error: any) {
      notify(error);
    }
  };

  return (
    <>
      <Toaster />
      <main className="py-20 flex flex-col items-center justify-center gap-4">
        {responseData}
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
            Cadastrar
          </button>
        </form>
        <div className="text-[12px]">
          você já tem uma conta ?{" "}
          <Link href={"/"} className="underline">
            Faça login
          </Link>
        </div>
      </main>
    </>
  );
}
