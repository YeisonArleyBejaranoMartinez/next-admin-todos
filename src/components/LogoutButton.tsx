"use client"
import React from 'react'
import { CiLogout } from 'react-icons/ci';
import { useSession, signIn, signOut } from 'next-auth/react';
import { IoShapesOutline } from 'react-icons/io5';

export const LogoutButton = () => {
    const {data:session, status} = useSession();
    console.log('Session in LogoutButton:', status);
    if(status === 'loading'){
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <IoShapesOutline />
            <span className="group-hover:text-gray-700">Espere....</span>
        </button>
    }
    if(status === 'unauthenticated'){
        <button
        onClick={()=>signIn()}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <IoShapesOutline />
            <span className="group-hover:text-gray-700">Ingresar</span>
        </button>
    }
  return (
    <button
    onClick={()=>signOut()}
    className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        <CiLogout />
        <span className="group-hover:text-gray-700">Salir</span>
    </button>
  )
}

