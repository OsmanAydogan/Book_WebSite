import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData=[
    {
        title : "Anasayfa",
        path : '/',
        icon: <AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title : "Okuduklarım",
        path : '/okuduklarım',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title : "Okuyacalarım",
        path : '/okuyacaklarım',
        icon: <IoIcons.IoIosDocument />,
        cName:'nav-text'
    },
    {
        title : "Favorilerim",
        path : '/Favorilerimnavbar',
        icon: <IoIcons.IoIosBook />,
        cName:'nav-text'
    },
    {
        title : "Çıkış yap",
        path : '/logOut',
        icon: <IoIcons.IoIosLogOut />,
        cName:'nav-text'
    },
    {
        title : "Support",
        path : '/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
    
]
