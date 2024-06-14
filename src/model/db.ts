export const registerDb = (db: string, data: any) => {
  try{
    localStorage.setItem(db, data);
    console.log("Email não existia , então Registrei como novo Vlw!")
  }catch(error){
     throw new Error("Falha ao Registrar a droga do seu email")
     return
  }
};
export const getEmail = (db: string, data: any) => {
  const register = localStorage.getItem(db);
  if(register === null) return registerDb(db as string, data as any);
  const converteData = JSON.parse(register as any);
  return converteData;
};
