'use client'
/**
 * Este es un componente para mostrar la ventana modal de confirmacion y seleccion de metodo de pago
 */
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ShowMethod from "./ShowMethod";
import StandarButton from "@/components/Buttons/StandarButton";
import { CreateInvoice } from "@/services/CreateInvoice";
export default function ModalProducts({onClose, Price_Buy, ClientData, ProductsData}) {

    const [page, setPage] = useState(1); //almacena si se mostrará la vista de selección de método de pago o la de confirmación de compra
    const [method, setMethod] = useState(null); // almacena el método de pago a usar
    const [checked, setChecked] = useState(false); // almacena si se confirmó el pago de la compra

    const method_payment = [
      "Punto de Venta",
      "Efectivo",
      "Pago Móvil",
    ];

    

    const CreateFactura = async () =>
    {
        const code = await CreateInvoice(ClientData,method,ProductsData);
        if(code) 
            window.location.href = "factura?Code="+code;
    }

    if(page === 1)
    {   //retornar vista donde se selecciona el método de pago
        return (
            <>
        
                <section className="flex items-center justify-center flex-col text-center">
                    <h1 className=" text-2xl pt-4">Seleccione el Método de <span className=" text-marianBlue font-medium"> Pago </span> a Usar</h1>
                </section>
                <section className="flex items-center justify-center flex-wrap m-auto w-full md:w-2/5 cursor-pointer ">

                    <ShowMethod id={1} method={method} setMethod={setMethod} label={"Punto de Venta"}>
                        <svg  width="40" height="40" viewBox="0 0 24 24">
                            <path d="M19.5 11c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm-.469 6.484l-1.688-1.637.696-.697.991.94 2.116-2.169.696.696-2.811 2.867zm-15.031-2.484h5v1h-5v-1zm8-1h-8v-1h8v1zm1.502 4h-11.002c-.276 0-.5-.224-.5-.5v-6.5h12.82c1.184-1.23 2.842-2 4.68-2 .886 0 1.729.179 2.5.501v-3.501c0-1.104-.896-2-2-2h-18c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h12.82c-.553-.576-1.006-1.251-1.318-2zm-11.502-11.5c0-.276.224-.5.5-.5h17c.276 0 .5.224.5.5v1.5h-18v-1.5z" id="id_101" 
                             className={` group-hover:fill-white ${method === 1 ? "fill-white " : "fill-marianBlue " } `}>
                            </path>
                        </svg>
                    </ShowMethod>

                    <ShowMethod id={2} method={method} setMethod={setMethod} label={"Efectivo"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 -3 24 24">
                            <path d="M12.324 7.021l.154.345c.237-.041.52-.055.847-.025l.133.577c-.257-.032-.53-.062-.771-.012l-.092.023c-.464.123-.316.565.098.672.682.158 1.494.208 1.815.922.258.578-.041.973-.541 1.163l.154.346-.325.068-.147-.329c-.338.061-.725.053-1.08-.041l-.1-.584c.294.046.658.087.938.03l.186-.06c.333-.165.231-.582-.264-.681-.367-.083-1.342-.021-1.705-.831-.205-.458-.053-.936.535-1.154l-.161-.361.326-.068m3.82 1.614c-.706-1.648-2.681-2.751-4.409-2.463-1.728.288-2.557 1.857-1.85 3.506.746 1.739 2.888 2.853 4.651 2.414 1.562-.388 2.28-1.887 1.608-3.457zm4.05-5.635l3.766 8.233c-5.433 4.223-12.654-.038-17.951 4.461l-3.766-8.233c4.944-4.779 11.773-.45 17.951-4.461zm3.806 12.014c-6.857 3.939-12.399-1.424-19.5 5.986l-4.5-9.964 1.402-1.462 3.807 8.401-.002.008c7.445-5.592 11.195-1.175 18.109-4.561.294.647.565 1.33.684 1.592z" id="id_101" 
                            className={` group-hover:fill-white ${method === 2 ? "fill-white " : "fill-marianBlue " } `}></path>
                        </svg>
                    </ShowMethod>

                    <ShowMethod id={3} method={method} setMethod={setMethod} label={"Pago Móvil"}>
                        <svg width={40} height={40} viewBox="0 0 365.449 365.449" >
                            <path d="M281.507 10.85C274.279 3.614 265.71 0 255.813 0H109.637c-9.9 0-18.464 3.617-25.697 10.85-7.233 7.229-10.85 15.796-10.85 25.693v292.361c0 9.896 3.617 18.462 10.85 25.693 7.233 7.234 15.797 10.852 25.697 10.852h146.176c9.896 0 18.466-3.621 25.693-10.852 7.234-7.231 10.852-15.797 10.852-25.693V36.543c0-9.897-3.613-18.46-10.851-25.693zM159.885 36.543h45.685c3.046 0 4.565 1.523 4.565 4.569 0 3.045-1.52 4.57-4.565 4.57h-45.685c-3.045 0-4.568-1.525-4.568-4.57-.001-3.046 1.522-4.569 4.568-4.569zm38.976 308.493c-4.476 4.469-9.852 6.707-16.135 6.707-6.28 0-11.656-2.238-16.13-6.707-4.474-4.477-6.711-9.856-6.711-16.132 0-6.283 2.24-11.66 6.711-16.133 4.471-4.469 9.851-6.714 16.13-6.714 6.284 0 11.66 2.245 16.135 6.714 4.473 4.473 6.708 9.85 6.708 16.133s-2.238 11.656-6.708 16.132zm66.093-61.811c0 2.471-.903 4.62-2.714 6.424-1.813 1.807-3.949 2.707-6.42 2.707H109.637c-2.474 0-4.615-.903-6.423-2.707s-2.712-3.953-2.712-6.424V82.229c0-2.474.903-4.617 2.712-6.423 1.809-1.805 3.949-2.714 6.423-2.714h146.176c2.478 0 4.616.905 6.427 2.714 1.811 1.807 2.71 3.949 2.71 6.423v200.995h.004z"
                                className={` group-hover:fill-white ${method === 3 ? "fill-white " : "fill-marianBlue " } `}/>
                        </svg>
                    </ShowMethod>

                
                </section>
            
                <section className="flex items-center justify-center pt-10">

                    <StandarButton label={"Cancelar"} url={"#"} 
                    className=" bg-red-500 text-1xl hover:bg-red-700 xl:w-36 " 
                    onClick={() => onClose()} 

                    /> 


                    <StandarButton label={"Continuar"} url={"#"}  
                    className={` ${method === null ? "bg-gray-400 opacity-20 pointer-events-none" : " bg-marianBlue" } xl:w-36 `}
                    disabled={method === null ? true : false}
                    onClick={()=> setPage(2)}

                     /> 
                
                </section>

            </>);
    }
    else if (page === 2)
    {
        
       
        // retornar vista donde se confirma el pago
        return (
            <>
        
                <Image alt="arrow_exit" width={25} height={25} src={"/images/icons/arrow.svg"} className="cursor-pointer" onClick={()=>{setPage(1); setChecked(false)} } />
            

                <section className="flex items-center justify-center flex-col text-center">
                    <h1 className=" text-2xl pt-4 font-medium">Confirmación de Compra </h1>
                </section>
               
               <section className="flex justify-center items-center  flex-col mt-5 text-xl">

                    <section className="p-2">
                        <p><span className="text-marianBlue font-bold">Cliente: </span>{ClientData.name} {ClientData.lastname} </p>
                        <p className="pt-2"><span className="text-marianBlue font-bold">Método de Pago: </span> {method_payment[method-1]}</p>
                        <p className="pt-2"><span className="text-marianBlue font-bold">Total a Pagar: </span> <span className="text-green-500"> {(Price_Buy + Math.round(parseFloat([(16 * Price_Buy ) / 100]) * 100) / 100).toFixed(2)}$ </span></p>

                        <input checked={checked} onChange={()=> setChecked(!checked)} id="check" type="checkbox" className="mt-5 w-4 h-4 bg-marianBlue border-marianBlue rounded focus:ring-marianBlue "/>
                        <label htmlFor="check" className="p-2 font-medium" >La compra ha sido Pagada</label>
                    </section>
               </section>
            
                <section className="flex items-center justify-center pt-10">
                   <StandarButton label={"Cancelar"} url={"#"} 
                    className=" bg-red-500 text-1xl hover:bg-red-700 xl:w-36 " 
                    onClick={() => onClose()} 

                    /> 
                  <StandarButton label={"Terminar Compra"} url={"#"}  
                    className={` ${!checked ? "bg-gray-400 opacity-20 pointer-events-none" : " bg-marianBlue" } xl:min-w-36 `}
                    onClick={()=> CreateFactura()}

                     /> 
                
                </section>

            </>);
    }

        
};