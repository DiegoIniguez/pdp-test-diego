if (!window.productRightJSLoaded) {
  window.productRightJSLoaded = true;

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('qty-btn')) {
      const wrapper = e.target.closest('.product-quantity');
      const input = wrapper?.querySelector('.qty-input');
      if (!input) return;

      let value = Number(input.value);
      if (e.target.classList.contains('plus')) {
        value = isNaN(value) ? 1 : value + 1;
      } else if (e.target.classList.contains('minus') && value > 1) {
        value = isNaN(value) ? 1 : value - 1;
      }

      input.value = value;
    }
  });
}
