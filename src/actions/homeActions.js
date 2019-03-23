import newsArray from '../components/inicio/noticias/newsArray';

// TIPOS
export const GET_NOTICIAS = 'GET_NOTICIAS';

// FUNCIONES
export function getNoticiasTagsArray() {
	const tagsSinFiltrar = [];
	newsArray.map((noticia) => {
		noticia.otherInfo.tags.map((Tag) => {
			if (tagsSinFiltrar.indexOf(Tag) == -1) tagsSinFiltrar.push(Tag);
		});
	});
	return { tagsSinFiltrar: tagsSinFiltrar, newsArray: newsArray };
}

// DISPATCH
export const getNoticiasTags = () => ({
	type: GET_NOTICIAS,
	payload: getNoticiasTagsArray()
});
