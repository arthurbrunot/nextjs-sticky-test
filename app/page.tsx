'use client'
import React from "react";

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center flex-1 px-6 text-center max-w-screen-xl">
            <div className={"h-[500px]"}>Bruh</div>
            <section
                className={"bg-white text-black w-full min-h-[600px]"}
            >
                <div className={"sticky top-[70px] border-t border-x h-24 border-blue-500 p-8 bg-slate-400 z-10"}>am the haading !</div>
                <div className={"sticky top-[71px] border-b border-x h-24 border-blue-500 p-8 bg-slate-400"}>I will disappear when am sticky</div>
            </section>
            <div className={"h-[3000px]"}>Bruh</div>
        </main>
    )
}
