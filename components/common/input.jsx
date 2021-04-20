export default function FormControl({ placeHolder, className }){
    className += " px-5 py-2 my-2 focus:outline-none focus:border-blue-100 w-full focus:shadow-lg transition-shadow"
    return <input type="text" placeholder={placeHolder} className={className} autoComplete="off"/>
}