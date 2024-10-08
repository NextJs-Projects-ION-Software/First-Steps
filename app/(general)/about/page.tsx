import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About: Tiux",
    description: "Acerca de Tiux",
    keywords: ["Tiux", "Acerca de Tiux"],
}

export default function AboutPage(){
    return (
        <>
            <span className="text-7xl">Acerca de Tiux</span>
        </>
    );
}