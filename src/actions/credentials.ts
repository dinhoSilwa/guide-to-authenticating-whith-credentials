import { getEmail } from "@/model/db";

export const doCredentialLogin = async (formData: FormData) => {
  const dbname = "accounts"

const user = getEmail(dbname, formData.get("email"))
  if (!user) {
    return null;
  }
  const isMatch = formData.get("password") === user.password;

  if (!isMatch) {
    const createNewAccount = [
      { email: formData.get("email"), password: formData.get("password") },
    ];
    const registerAccount = localStorage.setItem(
      "accountdb",
      JSON.stringify(createNewAccount)
    );
  }
};
