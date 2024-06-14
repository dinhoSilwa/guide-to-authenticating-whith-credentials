import { getUserByEmail } from "@/db/users";

export const doCredentialLogin = async (formData: FormData) => {
  const useremail = getUserByEmail(formData.get("email") as string);
  if (!useremail) {
    return console.log("Não encontrei o email , liberado");
  }

  console.log("Email já existe, não autorizado");
};
