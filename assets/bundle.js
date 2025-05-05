document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.product-checkbox-input');
  const totalPriceElement = document.getElementById('total-price');

  function getPriceValue(priceStr) {
    return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
  }

  function updateTotal() {
    let total = 0;
    checkboxes.forEach(cb => {
      const productItem = document.getElementById('product-' + cb.dataset.productId);
      const price = getPriceValue(cb.dataset.price);
      const priceElement = document.getElementById('price-' + cb.dataset.productId);

      if (cb.checked) {
        total += price;
        productItem?.classList.remove('disabled');
        priceElement.style.opacity = '1';
      } else {
        productItem?.classList.add('disabled');
        priceElement.style.opacity = '0.5';
      }
    });
    totalPriceElement.innerText = `$${total.toFixed(2)}`;
  }

  checkboxes.forEach(cb => cb.addEventListener('change', updateTotal));
});
