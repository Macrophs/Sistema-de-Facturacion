
    //archivo que contendrá las funciones con las que se puede verificar los input

import { Connect } from "@/services/Connect";


      //almacena los errores al escribir información en los input
      export  const validateForm = async (data,type) => {
        
          const errors = {};

          //validaciones input name
          if (data.name.length === 0)
              errors.name = 'El nombre es requerido';
          else if(data.name.length > 25) 
              errors.name = 'El nombre no puede tener más de 25 caracteres';

          //Validaciones para Empleados y Clientes
          if(type === "employee" || type === "client")
          {
              let id = 0;
              if(type === "client" && data.id_client) id = data.id_client ;
              else if(data.id_user ) id = data.id_user;
              
              //validaciones input lastname
              if (data.lastname.length === 0) 
                  errors.lastname = 'El apellido es requerido';
              else if (data.lastname.length > 25) 
                  errors.lastname = 'El apellido no puede tener más de 25 caracteres';
              
              //validaciones input email
              if (data.email.length === 0) 
                  errors.email = 'El correo electrónico es requerido';
              else if(!isValidEmail(data.email)) 
                  errors.email = 'El correo electrónico no es válido';
          
              //validaciones input phone
              if (data.phone.length === 0) 
                  errors.phone = 'El número de teléfono es requerido';
              else if (!isValidPhoneNumber(data.phone)) 
                  errors.phone = 'El número de teléfono no es válido';
        
              //validaciones input cedula
              if (data.cedula.length === 0) 
                  errors.cedula = 'La cédula es requerida';
              else if (!isValidCedula(data.cedula)) 
                  errors.cedula = 'La cédula no es válida';
              else if(await isNotRepeatCedula(data.cedula,id,type))
                  errors.cedula = 'La cédula ya se encuentra en el sistema';
          }
          //Validaciones para Productos
          else if(type === "product")
          {
            //validaciones Precio de los productos
            if (data.price_unit <= 0)
                errors.price_unit = 'El Precio es requerido';
            else if(data.price_unit >= 10000) 
                errors.price_unit = 'El Precio no puede ser mayor a 10000';
            
            //validaciones stock de los productos
            if (data.quantity_stock <= 0)
                errors.quantity_stock = 'El Stock es requerido';
            else if(data.quantity_stock >= 1000) 
            errors.quantity_stock = 'El Stock no puede ser mayor a 1000';
          }

          return errors;
      };

      const isValidEmail = (email) =>{
        // Expresión para verificar el formato del correo 
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailPattern.test(email);
      }
    
      const isValidPhoneNumber = (phone) => {
        // Expresión regular para validar el formato del número de teléfono  xxx-xxxxxxx
        const phonePattern = /^\d{3}-\d{7}$/;
        return phonePattern.test(phone);
      };

      export const isValidCedula = (cedula) => {
        // Expresión regular para validar el formato de la cédula   VXXXXXXXX ó EXXXXXXXX ó JXXXXXXXX 
        const cedulaPattern = /^[VEJ]\d{8}$/;
        return cedulaPattern.test(cedula);
      };

      const isNotRepeatCedula  = async (cedula,id,type) =>{
        const table = `${type}?conditions= and cedula = '${cedula}' and ${type = "client" ? "id_client" : "id_user"} != '${id}' `; //consulta con los condicionales agregados
        
        const res = await Connect(table,"GET" );
       
        if (res) return true

        return false;

       
    
      }
      

    