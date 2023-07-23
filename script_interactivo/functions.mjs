//? Archivo que contiene todas las funciones que utilizará el Script


//*importamos los modulos
import inquirer from "inquirer";
import fs from "fs/promises";

//? Función que pregunta si desea salir de la opción actual
export async function exit() {
  try {
    const answers = await inquirer.prompt({
      type: "confirm",
      name: "resp",
      message: "Quiere Salir de este apartado?",
    });

    return answers.resp;
  } catch (error) {
    console.error("Error al obtener la respuesta:", error);
  }
}

//? función que muestra las categorias disponibles
export async function show_category() {
  try {
    const files = await fs.readdir("./Recetas");

    //* Comprobar si se encontraron resultados
    if (Object.entries(files).length === 0) {
      console.log("No se encontraron Categorías");
      return 0;
    }

    files.push("Volver");
    const answers = await inquirer.prompt({
      type: "list",
      name: "category",
      message: "Seleccione la Categoría\n---------Categorías---------",
      choices: files,
    });

    return answers.category;
  } catch (error) {
    console.error(error);
  }
}

//? función que muestra las recetas disponibles en cierta categoria
export async function show_recipe(category) {
  try {
    const files = await fs.readdir("./Recetas/" + category);

    //* Comprobar si se encontraron resultados
    if (Object.entries(files).length === 0) {
      console.log("No Existen Recetas en Esta Categoría (" + category + ")");
      return 0;
    }

    files.push("Volver");
    const answers = await inquirer.prompt({
      type: "list",
      name: "recipe",
      message:
        "Seleccione la Receta\n---------Recetas de la Categoría " +
        category +
        "---------",
      choices: files,
    });

    return answers.recipe;
  } catch (error) {
    console.error(error);
  }
}

//?función que obtiene los datos para crear una nueva receta
export async function data_recipe() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Escriba el Nombre que tendrá la Receta:",
        default: "Mi Receta",
      },
      {
        type: "input",
        name: "text",
        message: "Escriba lo que contendrá la Receta:",
      },
    ]);

    return answers;
  } catch (error) {
    console.error(error);
  }
}



//? Función para mostrar el texto que contenga una receta en especifico
export async function read_recipe() {
  //*obtener categoria y receta
  let category = await show_category();

  //* No se encontraron Categorías o se seleccionó Volver
  if (category === 0 || category === "Volver") return;

  let recipe = await show_recipe(category);

  //* No se encontraron recetas o se seleccionó Volver
  if (recipe === 0 || recipe === "Volver") return;

  //*obtener .txt
  const text = await fs.readFile(
    "./Recetas/" + category + "/" + recipe,
    "utf-8"
  );

  //*Mostrar .txt
  console.log("\n" + text + "\n");
}

//? Función para crear una receta .txt
export async function create_recipe() {
  //*obtener categoria
  let category = await show_category();

  //* No se encontraron Categorías
  if (category === 0 || category === "Volver") return;

  let data = await data_recipe();
  await fs.writeFile(
    "./Recetas/" + category + "/" + data.name + ".txt",
    data.text
  );
  console.log("Receta '" + data.name + "' creada en '" + category + "'");
}

//? Función para crear una Categoria 
export async function create_category() {

  // Se crea la pregunta para pedir el nombre de la categoria
  const question = {
    type: "input",
    name: "categoryName",
    message: "¿Cuál es el nombre de la categoría que deseas crear?",
  };

  // Se solicita el nombre de la categoria
  const answer = await inquirer.prompt(question);
  
  // Mediante el nombre se crea una carpeta con el nombre de la categoria 
  try {
    await fs.mkdir(`./Recetas/${answer.categoryName}`);
    console.log(`Categoría '${answer.categoryName}' fue creada exitosamente.`);
  }

  // Si ocurre un error, le mostrar un mensaje de error
  catch (error) {
    console.error(`Error al crear la categoría: ${error}`);
  }
}

//? Función para eliminar una receta en especifico
export async function delete_recipe() {
  // Obtener categoria y receta
  let category = await show_category();

  // No se encontraron Categorías o se seleccionó Volver
  if (category === 0 || category === "Volver") return;

  let recipe = await show_recipe(category);

  // No se encontraron recetas o se seleccionó Volver
  if (recipe === 0 || recipe === "Volver") return;

  await fs.unlink("./Recetas/" + category + "/" + recipe);

  console.log("Receta '" + recipe + "' Eliminada Correctamente");
}

//? Función para eliminar una Categoría en especifico
export async function delete_category() {
  // Obtener categoria y receta
  let category = await show_category();

  // No se encontraron Categorías o se seleccionó Volver
  if (category === 0 || category === "Volver") return;

  // Eliminar Carpeta de Categoría junto a sus recetas
  await fs.rm("./Recetas/" + category, {recursive:true});

  console.log("Categoría '" + category + "' Eliminada Correctamente");
}




