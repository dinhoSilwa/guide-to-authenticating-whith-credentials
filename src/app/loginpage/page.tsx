import Link from "next/link";

export default function LoginPage(){
  <main>
  <form>
    <input type="text" id="email" name="inputemail" />
    <input type="password" id="password" name="password" />
    <button type="submit">Cadastrar</button>
  </form>
  <div>
    você já tem uma conta ? <Link href={"/login"}>Faça login</Link>
  </div>
</main>
}