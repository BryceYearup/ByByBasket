document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const product = event.target.getAttribute('data-product');
        alert(`${product} added to cart! Proceeding to checkout...`);
        window.location.href = 'checkout.html';
    });
});
