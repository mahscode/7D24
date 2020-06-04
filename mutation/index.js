import gql from 'graphql-tag';

export const NUEVO_CLIENTE = gql`

mutation crearCliente($input: ClienteInput){
    crearCliente(input: $input ){
      id
      nombre
      apellido
      direccion
      ciudad
      celular
      telefonoCasa
      telefonoTrabajo
      email 
      vendedor
  }
}
`;

export const ACTUALIZAR_CLIENTE = gql`
  mutation actualizarCliente($input : ClienteInput){
    actualizarCliente(input: $input){
      id
      nombre
      apellido
      direccion
      ciudad
      celular
      telefonoCasa
      telefonoTrabajo
      email
      vendedor
    }
}
`;

export const ELIMINAR_CLIENTE =  gql`
mutation eliminarCliente($id: ID!) {
    eliminarCliente(id: $id)
  }
`; 

export const NUEVO_PRODUCTO = gql `
  mutation nuevoProducto($input: ProductoInput){
    nuevoProducto(input: $input){
      nombre
      precio
      stock  
    } 
  }

`;

export const ELIMINAR_PRODUCTO = gql `
    mutation eliminarProducto($id: ID!) {
    eliminarProducto(id: $id)
  }
`;

export const ACTUALIZAR_PRODUCTO = gql `
    mutation actualizarProducto($input : ProductoInput){
      actualizarProducto(input: $input){
        nombre
        precio
        stock
      }
} `;

export const NUEVO_REFERIDO = gql `
  mutation nuevoReferido($input: ReferidoInput){
    nuevoReferido(input: $input){
      id
      nombre
      apellido
      telefono
      afinidad
      tipo
      observacion
      # idReferido  
    } 
}`;

export const ELIMINAR_REFERIDO = gql `
  mutation eliminarReferido($id : ID!){
    eliminarReferido(id: $id)
    }
`;

export const ACTUALIZAR_REFERIDO = gql `
  mutation actualizarReferido($input :ReferidoInput){
    actualizarReferido(input: $input){
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

export const  NUEVO_PEDIDO  = gql `
  mutation nuevoPedido($input :PedidoInput ){
    nuevoPedido(input: $input){
      id
     }
  }
`;
  
export const ACTUALIZAR_ESTADO = gql `
  mutation actualizarEstado($input : PedidoInput){
    actualizarEstado(input: $input)
  }
` ;

//Usuarios
export const NUEVO_USUARIO = gql `
  mutation crearUsuario($usuario: String!, $nombre:String!, $password :String!, $rol: String!){
  crearUsuario(usuario: $usuario, nombre: $nombre, password: $password, rol: $rol)
}
`;

export const AUTENTICAR_USUARIO = gql `
  mutation autenticarUsuario($usuario: String!, $password :String!){
    autenticarUsuario(usuario: $usuario, password: $password){
      token
    }
  }
`;
