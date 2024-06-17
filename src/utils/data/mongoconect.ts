import mongoose from "mongoose";

const uridb : string | undefined = process.env.DB_CONNECT;

interface Cached {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: Cached | undefined;
}

const cached: Cached = { conn: null, promise: null };
 
// Função para conectar ao MongoDB
export const db = async () => {
  try {
    // Se já houver uma conexão existente, retorne-a
    if (cached.conn) return cached.conn;

    // Se não houver uma promessa existente, crie uma nova conexão
    if (!cached.promise) {
      cached.promise = mongoose.connect(uridb!).then((mongoose) => mongoose);
    }

    // Aguarde a promessa resolver e armazene a conexão
    cached.conn = await cached.promise;
    console.log("Conexão Feita com Sucesso");
    return cached.conn;
  } catch (error) {
    console.error("Falha ao Conectar ao mongoose");
  }
};
