
export type TContent = {
    text:string,
    children: React.ReactNode;
}
export default function Content ({text,children}:TContent):JSX.Element{
    return (
        <>
    <div>
        {text}
    </div>
            {children}
    </>
)
}
