/**
 * Servicio que Generará y descargará el PDF de una factura
 * @param {*} id = id de la factura 
 */
export const GeneratePDF = async (id) => {
  //request api
  const response = await fetch("/api/pdf/invoice/"+id);

  //obtener nombre pdf
  const contentDisposition = response.headers.get("Content-Disposition");
  const matches = /filename="(.*)"/.exec(contentDisposition);
  const filename = matches && matches[1] ? matches[1] : "invoice.pdf";

  //guardar y descargar pdf
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
};
