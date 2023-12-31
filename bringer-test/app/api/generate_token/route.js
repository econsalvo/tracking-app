import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const EXPIRE = 60 * 60; // 1 hour

export async function POST(request) {
  const body = await request.json();
  const { username, password } = body;

  const secret = process.env.JWT_SECRET || "";

  const token = sign({ username, password }, secret, { expiresIn: EXPIRE });

  // Set the JWT token as an HTTP cookie
  // const serializedCookie = serialize("cookie", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  //   sameSite: "strict",
  //   maxAge: EXPIRE,
  //   path: "/",
  // });

  const response = {
    message: "success",
    token: token,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    // headers: { "Set-Cookie": serializedCookie },
  });
}
