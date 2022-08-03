import React from "react";
import {useGlobalContext} from "./context";
import {FaTimes} from "react-icons/fa";
import sublinks from "./data";

const SideBar = () => {

    const { closeSidebar, isSidebarOpen } = useGlobalContext();

    return (
        <aside className={ `${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}` }>
            <div className={'sidebar'}>
                <button className={'close-btn'} onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div className={'sidebar-links'}>
                    {sublinks.map( (items, index) => {
                        const { links, page } = items;
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                                <div className={'sidebar-sublinks'}>
                                    {links.map((link, index) => {
                                        const { label, icon, url } = link;
                                        return (
                                            <a key={index} href={url}>
                                                {icon}
                                                {label}
                                            </a>
                                        )
                                    })}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </aside>
    )
}

export default SideBar;