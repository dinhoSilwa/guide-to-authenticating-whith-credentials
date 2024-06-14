import { Icredentials } from "@/types/credentials";

export const doCredentialLogin = async (formData : FormData) =>{
  const newCredentialsRegister = [
    {email : formData.get("email"), password : formData.get("password")}
  ]
  console.log(newCredentialsRegister)
}