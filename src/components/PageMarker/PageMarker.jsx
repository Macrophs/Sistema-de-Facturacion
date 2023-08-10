import Image from "next/image"
/**
 * Este es un componente para reutilizar los marcadores de paginas en las distintas paginas de la app
 * @params props icon: corresponde al icono del marcador y marker: al titulo del marcador
 */

export default function PageMarker({ icon, marker }) {
    return (
        <section className="p-8 mt-10 text-black flex items-center justify-center sm:justify-start">
            <section className="bg-marianBlue rounded-full w-10 h-10 flex items-center justify-center mr-3">
                <Image width={28} height={28} src={`/images/icons/${icon}`} alt={`${marker} Icon image`} />
            </section>
            <h1 className="text-xl text-marianBlue">
                - {marker}
            </h1>

        </section>
    )
}
