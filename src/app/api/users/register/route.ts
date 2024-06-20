import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { db } from "@/utils/data/mongoconect";
import { IRegisterUser } from "@/types/registeruser";
import UserModel from "@/lib/model/user-mongoose";

export interface IapiResponse {
  msg : string;
  status : number;
  user : IRegisterUser;
}

export const POST = async (request: NextRequest, response: NextResponse) => {
  await db();
  if (!db) {
    console.log("Banco de dados não encontrado")
    throw new Error("Banco de dados não encontrado");
  }
  try {
    const { username, email, password } = await request.json();
    const hashPassword = await bcryptjs.hash(password, 10); // Aumentei o fator de segurança
    const newUser: IRegisterUser = {
      username,
      email,
      password: hashPassword,
    };
    const createdUser = await UserModel.create(newUser);

    console.log("Usuário Cadastrado na Api")

    return NextResponse.json({
      msg: "Usuário adicionado ao banco de dados",
      status: 201,
      user: createdUser // Opcional: retorna o usuário criado
    });
  } catch(error : any) {

    console.log("Cliente não cadastrado")

    return NextResponse.json({
      msg: "Falha ao registrar usuário",
      status: 500 // Usei 500 para indicar erro no servidor
    });
  }
};
