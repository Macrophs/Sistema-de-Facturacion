
/**
 * Este es un componente para reutilizar los inputs de las tablas
 * @params name: name e id del form   value= value del form   InputChange= funcion para cuando cambie el input
 *          type: tipo del form
 *          label: Texto del label del form
 *          
 *          
 */

export default function Input({ label, type, name, value, InputChange}) {
    return (
        <>
            <input type={type} name={name} value={value} onChange={InputChange} id={name}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " required />
            <label htmlFor={name}
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {label}
            </label>
        </>
    )
}