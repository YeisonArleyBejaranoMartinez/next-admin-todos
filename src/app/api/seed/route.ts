import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { create } from "domain";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delete * from todo
  await prisma.user.deleteMany(); // delete * from user

  const user = await prisma.user.create({
    data: {
      email: "test1@google.com",
      password: bcrypt.hashSync("123456"),
      roles: ["admin", "client", "super-user"],
      todos: {
        create: [
          { description: "Mi primer todo", complete: false },
          { description: "Mi segundo todo", complete: true },
          { description: "Mi tercer todo", complete: false },
          { description: "Mi cuarto todo", complete: true },
          { description: "Mi quinto todo", complete: false },
          { description: "Mi sexto todo", complete: true },
          { description: "Mi septimo todo", complete: false },
        ],
      },
    },
  });

  return NextResponse.json({ message: "Seed Executed" });
}
