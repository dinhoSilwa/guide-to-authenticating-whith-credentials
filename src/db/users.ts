import { Icredentials } from "@/types/credentials";
import email from "next-auth/providers/email";

export const users : Icredentials[] = [
  {email : "dinho@gmail.com", password : "123456"},
  {email : "claudio@gmail.com", password : "123456"}
]

export const getUserByEmail = (email : string) =>{
  return users.find((userEmail) => { return userEmail.email === email })
}
