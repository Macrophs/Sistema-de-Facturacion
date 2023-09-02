
    //archivo que contendrá las funciones con las que se puede verificar los input


    export const isValidEmail = (email) =>{
        // Expresión para verificar el formato del correo 
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailPattern.test(email);
      }
    
      export const isValidPhoneNumber = (phone) => {
        // Expresión regular para validar el formato del número de teléfono  xxx-xxxxxxx
        const phonePattern = /^\d{3}-\d{7}$/;
        return phonePattern.test(phone);
      };

      export const isValidCedula = (cedula) => {
        // Expresión regular para validar el formato de la cédula   VXXXXXXXX ó EXXXXXXXX ó JXXXXXXXX 
        const cedulaPattern = /^[VEJ]\d{8}$/;
        return cedulaPattern.test(cedula);
      };

    