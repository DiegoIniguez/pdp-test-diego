  document.addEventListener('DOMContentLoaded', function () {
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    const qtyInput = document.querySelector('.qty-input');

    minusBtn.addEventListener('click', () => {
      let value = parseInt(qtyInput.value);
      if (value > 1) qtyInput.value = value - 1;
    });

    plusBtn.addEventListener('click', () => {
      let value = parseInt(qtyInput.value);
      qtyInput.value = value + 1;
    });
  });