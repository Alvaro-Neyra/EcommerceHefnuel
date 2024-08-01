const loadFavoriteProducts = () => {
    const $favoriteProducts = document.getElementById('checkoutProducts');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        $favoriteProducts.innerHTML = '<p style="font-size: 40px; width: 200px; ">No has agregado ningún producto a tus favoritos aún. 😢</p>';
        return;
    }

    $favoriteProducts.innerHTML = '';
  
    for (const [index, item] of favorites.entries()) {
        $favoriteProducts.innerHTML += favoriteProductTemplate(item, index);
    }
};
const favoriteProductTemplate = (product, index) => {
    const { title, image, color, quantityProduct, price } = product;
    return `
        <article>
            <div>
                <img src="${image}" alt="${title.toUpperCase()}">
                <div>
                    <p><b>${title}</b></p>
                    <p>Precio unit: <b>S/ ${price}</b></p>
                    
                </div>
                <button class="remove-from-favorites" data-index="${index}">Eliminar de la lista</button>
            </div>
        </article>
    `;
};
document.addEventListener('DOMContentLoaded', () => {
    loadFavoriteProducts(); // Carga los productos favoritos al cargar la página

    // Agregar evento de click al contenedor de los botones "Eliminar de la lista" usando event delegation
    const checkoutProductsContainer = document.getElementById('checkoutProducts');
    checkoutProductsContainer.addEventListener('click', event => {
        if (event.target.classList.contains('remove-from-favorites')) {
            const indexToRemove = event.target.dataset.index;
            removeFromFavorites(indexToRemove);
        }
    });

    // Agregar evento de click al botón "eliminarFavoritos"
    const eliminarFavoritosButton = document.querySelector('.eliminarFavoritos');
    eliminarFavoritosButton.addEventListener('click', () => {
        deleteFavorites();
    });
});

const removeFromFavorites = (index) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.splice(index, 1); // Eliminar el elemento en la posición index
    localStorage.setItem('favorites', JSON.stringify(favorites));
    loadFavoriteProducts(); // Actualizar la lista de favoritos en la interfaz
};

const deleteFavorites = () => {
    localStorage.removeItem('favorites'); // Eliminar toda la entrada relacionada a favoritos
    loadFavoriteProducts(); // Actualizar la lista de favoritos en la interfaz
};
