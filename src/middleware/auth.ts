// import User from "@/lib/model/user-mongoose";
// import NextAuth from "next-auth";
// import CredentialsProvider from 'next-auth/providers/credentials'
// import bcryptjs from 'bcryptjs'

// export const {
//   handlers : {GET , POST}, auth , signIn , signOut
// } = NextAuth({
//   session : {strategy : 'jwt',},
//   providers : [
//     CredentialsProvider({
//       credentials : {
//         email : {},
//         password : {}
//       },

//     })
//   ]
// })


// Here's a summary of the code:

// This script use the NexthAuth pack for configure the authentification.
// It uses the CredentialsProvider authentication provider for email and password-based authentication.
// When a user tries to log in, the system checks if the credentials match a user in the database.
// If the credentials are correct, the user is returned; otherwise, appropriate errors are thrown.
// The system supports HTTP GET and POST handlers, along with authentication, login, and logout functions.
// Authentication is based on JWT (JSON Web Token).

