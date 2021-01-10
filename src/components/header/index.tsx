import React from "react";
export type PHeader={
    title:string
}
export default function Header ({title}:PHeader):JSX.Element {
  return(  <header>
        <h2>{title}</h2>
    </header>)
}

