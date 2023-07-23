//*importamos los modulos
import inquirer from "inquirer";
import process from "node:process";

//? Se importan todas las funciones desde el archivo Functions.mjs
import * as Recipes from "./functions.mjs";

//*Nombre default
let title = "Recetas";

//? si se pasó algun argumento mediante "node script.mjs argumento", este se tomara como el nombre del sistema
if (process.argv[2] != undefined) 
  title = process.argv[2];



//? Opciones del menu
let options_menu = [
  {
    name: "Leer Receta",
    value: "1",
  },
  {
    name: "Crear Receta",
    value: "2",
  },
  {
    name: "Crear Categoría",
    value: "3",
  },
  {
    name: "Eliminar Receta",
    value: "4",
  },
  {
    name: "Eliminar Categoría",
    value: "5",
  },
  {
    name: "Salir",
    value: "6",
  },
];

//*Menu de opciones

async function main() {
  console.log(
    "\n¡Hola, Bienvenido a Mundo " +
      title +
      "! \n Antes de empezar asegurese que dentro de este directorio se encuentra la carpeta llamada 'Recetas'"
  );

  try {
    let resp = false;

    const answers = await inquirer.prompt({
      type: "rawlist",
      name: "option",
      message: "Por Favor eligue una opción",
      choices: options_menu,
    });
    let menu_option = parseInt(answers.option);
    switch (menu_option) {
      case 1:
        //? Leer Recetas .txt
        do {
          console.log("Seleccionaste: Leer Receta");
          await Recipes.read_recipe();
          resp = await Recipes.exit();
        } while (resp == false);

        break;
      case 2:
        //? Crear Receta .txt
        do {
          console.log("Seleccionaste: Crear Receta");
          await Recipes.create_recipe();
          resp = await Recipes.exit();
        } while (resp == false);

        break;
      case 3:
        //? Crear Categoría 
        do {
          console.log("Seleccionaste: Crear Categoría");
          //
          resp = await Recipes.exit();
        } while (resp == false);
        break;
      case 4:
        //? Eliminar Receta .txt
        do {
          console.log("Seleccionaste: Eliminar Receta");
          //
          resp = await Recipes.exit();
        } while (resp == false);
        break;
      case 5:
        //? Eliminar Categoría
        do {
          console.log("Seleccionaste: Eliminar Categoría");
          //
          resp = await Recipes.exit();
        } while (resp == false);
        break;
      case 6:
        //? Salir del Script
        console.log("Saliendo del Script...");
        break;
      default:
        console.log("Opción inválida. Inténtalo de nuevo.");
        break;
    }
    if (menu_option != 6) {
      //? seguir ejecutando el script
      main();
    }
  } catch (error) {
    console.error("Error al obtener la respuesta:", error);
  }
}

main();
