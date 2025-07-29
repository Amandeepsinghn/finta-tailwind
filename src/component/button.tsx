
interface params {
    color:string
    text:string
    size:string
}   

export const Button = ({color,text,size}:params) => {
    const hoverColor = color === "bg-indigo-600" ? "hover:bg-indigo-700" : ""

    const padding = size === "l" ? "p-3" : size==="m" ? "p-2" : size==="s" ? "p-1" :""
     
    return (
        <button className={`bg-indigo-600 ${hoverColor} text-white rounded-md ${padding} cursor-pointer`}>
            {text}
        </button>
    )
}