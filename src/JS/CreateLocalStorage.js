/**
 * se Encarga de crear todas los datos iniciales del LocalStorage
 */

export default function CreateLocalStorage() 
{
    if(localStorage.getItem("admin") === null)
    {
        const admin =  [
            {
                name: "admin1",
                lastname:"admin1"
            },
            {
                name: "admin2",
                lastname:"admin2"
            },
                
        ]
        
        localStorage.setItem("admin",JSON.stringify(admin));
    }

    if(localStorage.getItem("employee") === null)
    {
        const employee =  [
            {
                name: "employee1",
                lastname:"employee1"
            },
            {
                name: "employee2",
                lastname:"employee2"
            },
                
        ]
        
        localStorage.setItem("employee",JSON.stringify(employee));

    }

    if(localStorage.getItem("client") === null)
    {
        const client =  [
            {
                name: "client1",
                lastname:"client1",
                cedula:"V30530511",
                email:"client1@gmail.com",
                phone:"412-5951509"
            },
            {
                name: "client2",
                lastname:"client2",
                cedula:"V24530522",
                email:"client2@gmail.com",
                phone:"424-5952509"
            },
                
        ]
        
        localStorage.setItem("client",JSON.stringify(client));
    }

    if(localStorage.getItem("products") === null)
    {
        const products =  [
            {
                name: "Chocolate",
                code:"#12345",
                price_unit: 10,
                quantity_stock:100,
            },
            {
                name: "Chupeta",
                code:"#12346",
                price_unit: 15,
                quantity_stock:100,
            },
            {
                name: "Chaos",
                code:"#12347",
                price_unit: 2,
                quantity_stock:100,
            },
            {
                name: "Chess Tris",
                code:"#12346",
                price_unit: 30,
                quantity_stock:50,
            },
                
        ]
        
        localStorage.setItem("products",JSON.stringify(products));
    }

    if(localStorage.getItem("factura") === null)
    {
        const factura =  [
            {
                date: "19/08/2023",
                code:"#12345",
                name: "client1",
                lastname:"client1",
                cedula:"V30530511",
                email:"client1@gmail.com",
                phone:"412-5951509",
                products:[
                    {
                        name: "Chess Tris",
                        price_unit: 30,
                        quantity:4,
                    },
                    {
                        name: "Chaos",
                        price_unit: 2,
                        quantity:4,
                    },
                ]
            },
            {
                date: "19/08/2023",
                code:"#12345",
                name: "client1",
                lastname:"client1",
                cedula:"V30530511",
                email:"client1@gmail.com",
                phone:"412-5951509",
                products:[
                    {
                        name: "Chaos",
                        price_unit: 2,
                        quantity:4,
                    },
                ]
            },
                
        ]
        
        localStorage.setItem("factura",JSON.stringify(factura));
    }
}
    

