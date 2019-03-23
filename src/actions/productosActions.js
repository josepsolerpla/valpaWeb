import ProductosJSON from '../components/productos/productos/productosArray';

// TIPOS
export const GET_PRODUCTOS = 'GET_PRODUCTOS';

// FUNCIONES
export function getProductosJSON() {
	return { ProductosJSON: ProductosJSON };
}

// DISPATCH
export const getProductos = () => ({
	type: GET_PRODUCTOS,
	payload: getProductosJSON()
});
