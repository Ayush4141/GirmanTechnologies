'use client';

import Image from "next/image";
import Link from "next/link";
import LinkButton from "../LinkButton";
import { useState } from "react";

interface NavbarProps {

}

const links = ["Blog" , "Services", "Contact"];


const Navbar:React.FC<NavbarProps> = () => {
    const [selected , setSelected] = useState(links[0]);
    const handleSelect = (selectedLink: string) => {
        setSelected(selectedLink)
    }
    return(
        <div className="h-1/5 !z-10 flex flex-row justify-between pt-12 mx-8 pl-12">
            <div className="w-12 h-12 flex flex-row">
            <Image src={"/Vector.svg"} width={24} height={24} alt={""}/>
            <Image src={"/Vector1.svg"} width={14} height={16} alt={""}/>
            <div className="flex flex-row mt-1">
                <p className="text-3xl pl-4 font-semibold">Girman</p>
                <p className="text-3xl">Technologies</p>
            </div>
            </div>
            <div className="h-12 w-64 flex flex-row mr-32">
                {links.map((item , idx) => (<LinkButton handleClick={handleSelect} label={item} isActive={ item === selected ? true : false}/>))}
            </div>
        </div>
    )
}

export default Navbar;