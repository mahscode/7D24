import gql from "graphql-tag";
             
export const CLIENTES_QUERY = gql `
query getClientes($limite: Int, $offset: Int, $vendedor : String){
    getClientes(limite: $limite, offset: $offset, vendedor: $vendedor){
      id
      nombre
      apellido
      direccion
      ciudad
      celular
      telefonoCasa
      telefonoTrabajo
      email
    }
    totalClientes(vendedor: $vendedor)
  }`;

  export const CLIENTE_QUERY = gql`

  query ConsultarCliente($id:ID){
    getCliente(id: $id){
    id
    nombre
    apellido
    direccion
    ciudad
    celular
    telefonoCasa
    telefonoTrabajo
    email
    }
    
}`;

//Productos
export const OBTENER_PRODUCTOS =  gql`
  query obtenerProductos($limite: Int, $offset: Int, $stock : Boolean){
    obtenerProductos(limite: $limite, offset: $offset, stock: $stock){
      id
      nombre
      precio
      stock
    }
    totalProductos
  }
`;

export const OBTENER_PRODUCTO = gql`
    query obtenerProducto($id : ID!){
      obtenerProducto(id: $id){
        nombre
        precio
        stock
      }     
}
 
`;

//Referidos
export const OBTENER_REFERIDOS = gql `
 query obtenerReferidos($limite: Int, $offset: Int){
  obtenerReferidos(limite: $limite, offset: $offset){
    id
    nombre
    apellido
    telefono
    afinidad
    tipo
    observacion
  }
  totalReferidos

}
`;

export const OBTENER_REFERIDO = gql `
  query obtenerReferido($id: ID!){
  obtenerReferido(id: $id){
    nombre
    apellido
    telefono
    afinidad
    tipo
    observacion 
  }
}
`;

//Pedidos

export const OBTENER_PEDIDOS = gql `
  query obtenerPedidos($cliente : String){
    obtenerPedidos(cliente: $cliente){
      id
      pedido{
        id
        cantidad
      }
      total
      fecha
      estado
    }
}
`;
//Graficas
export const TOP_CLIENTES = gql `
  query topClientes {
    topClientes{
      total
      cliente{
        nombre
      }
    }
  }
`;

//Usuarios
export const USUARIO_ACTUAL = gql `
  query obtenerUsuario {
    obtenerUsuario{
      id
      usuario
      nombre
      rol
    }
  }
`;

  