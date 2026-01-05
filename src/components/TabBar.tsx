"use client";
import { setCookie } from "cookies-next";
import React, { useState } from "react";
import {useRouter} from "next/navigation";

// const taboptions = [1, 2, 3, 4];
interface Props{
 currentTap? : number;
 tabOptions? : number[];

}
export const TabBar = ({tabOptions=[1,2,3,4], currentTap=1}: Props) => {
    const [selected, setSelected]= useState(currentTap);
    const router = useRouter();

    const onTabSelected =(tabNmber: number)=>{
        setSelected(tabNmber);
        setCookie('selectedTab', tabNmber.toString());
        router.refresh();
    }
  return (
    <div className="grid w-full grid-cols-4 space-x-2 rounded-xl bg-gray-200 p-2">
      {
        tabOptions.map( option => (
          <div key={ option }>
            <input type="radio"
            id={ option.toString() }
            className="peer hidden"
            checked={ option === selected }
            onChange={()=>{}}
            />
            <label onClick={()=>onTabSelected(option)} className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
              { option }
            </label>
          </div>
        ))
      }
    </div>
  );
};
