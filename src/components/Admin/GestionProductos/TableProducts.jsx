import StandarButton from "@/components/Buttons/StandarButton";
import Loader from "@/components/Tables/Loader";
import { Connect } from "@/services/Connect";
import { useEffect, useState } from "react";

export default function TableProducts({
  setComponentVisible,
  setShowModal,
  newProduct,
  PaginatorController,
  Search,
}) {

  const [products, setProducts] = useState([{}]); //se encarga de almacenar los datos de los Productos a mostrar
  const [loading, setLoading] = useState([{}]);
  useEffect(() => {
    (async () => {
      setLoading(true);
      setProducts(await Connect("product?" + Search, "GET"));
      setLoading(false);
    })();
  }, [newProduct, Search]);

  const [paginator, setPaginator] = useState({ LimitUp: 1, LimitDown: 5 });

  useEffect(() => {
    setPaginator(PaginatorController);
  }, [PaginatorController]);

  if (loading) {
    return <Loader />;
  }

  if (products === false) {
    return <h1>Sin Resultados</h1>;
  }

  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          {/* <th scope="col" className="px-6 py-3">
            CÓDIGO
          </th> */}
          <th scope="col" className="px-10 py-3">
            NOMBRE
          </th>
          <th scope="col" className="px-10 py-3">
            PRECIO
          </th>
          <th scope="col" className="px-10 py-3 text-center">
            CANTIDAD EN STOCK
          </th>
          <th scope="col" colspan="2" className=" pl-32 py-3 ">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ id_product, name, price, quantity }, index) => {
          index++;
          if (index >= paginator.LimitDown && index <= paginator.LimitUp) {
            //Mostrar solos los registros que se encuentran en el rango segun la pagina actual
            return (
              <tr key={index} className="bg-white border-b  hover:bg-gray-50 ">
                {/* <td className="px-6 py-4">{code}</td> */}

                <td
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                >
                  <div className="pl-3">
                    <div className="text-base font-semibold">{name}</div>
                  </div>
                </td>

                <td className="px-6 py-4 text-center">{price}$</td>

                <td className="px-6 py-4 text-center">{quantity}</td>

                <td className="px-6 py-4">
                  <StandarButton
                    url={"#"}
                    label={"Editar"}
                    className={
                      "  bg-transparent hover:bg-transparent focus:ring-transparent !text-marianBlue  "
                    }
                    id={1}
                    onClick={() => {
                      setShowModal(true);
                      setComponentVisible(`Edit/${id_product}`);
                    }}
                  />
                </td>
                <td className="px-6 py-4">
                  <StandarButton
                    url={"#"}
                    label={"Eliminar"}
                    className={
                      "  bg-transparent hover:bg-transparent focus:ring-transparent !text-red-500 "
                    }
                    id={1}
                    onClick={() => {
                      setShowModal(true);
                      setComponentVisible(`Delete/${id_product}/${name}`); // Pasamos el código y el nombre del producto como parte del string
                    }}
                  />
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}
