export default function FormControl({ placeHolder }){
    return <input type="text" placeholder={placeHolder} className="px-5 py-2 my-2 bg-gray-200 focus:outline-none focus:border-blue-100 w-full focus:shadow-lg transition-shadow" autoComplete="off"/>
}