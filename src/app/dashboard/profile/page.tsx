"use client";
import {useSession} from "next-auth/react";

import { useEffect } from "react";

export default function ProfilePage() {
    const {data: session}= useSession();
    useEffect(() => {
        console.log("Profile Page Loaded");
    })
  return (
    <div className="flex flex-col">
      <h1>Datos del usuario</h1>
      <hr/>
        <span>{session?.user?.name?? "No hay nombre"}</span>
        <span>{session?.user?.email?? "No hay Email"}</span>
        <span>{session?.user?.image?? "No hay Imagen"}</span>
        <span>{session?.user?.roles?.join(", ") ?? "No hay Rol"}</span>
        <span>{session?.user?.id?? "No hay UUID"}</span>
    </div>
  );
}