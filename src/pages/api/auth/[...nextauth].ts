import NextAuth from "next-auth";
import { authOptions } from "digital-closet/server/auth";

export default NextAuth(authOptions);
