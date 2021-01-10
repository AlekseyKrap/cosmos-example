export type TButton = {
    text:string
    disabled?:boolean
}

export default function Button ({text,disabled=false}:TButton):JSX.Element{
    return <button disabled={disabled}>{text}</button>
}
