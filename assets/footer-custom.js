  function initFooterAccordions() {
    const accordionCols = document.querySelectorAll('[data-accordion]');

    accordionCols.forEach((col) => {
      const button = col.querySelector('.footer__accordionTrigger');

      button.removeEventListener('click', col._accordionHandler);

      const handler = () => {
        const isOpen = col.classList.contains('open');
        accordionCols.forEach((c) => c.classList.remove('open'));
        if (!isOpen) col.classList.add('open');
      };

      col._accordionHandler = handler;
      button.addEventListener('click', handler);
    });
  }

  function handleAccordionBehavior(e) {
    if (e.matches) {
      initFooterAccordions();
    } else {
      document.querySelectorAll('[data-accordion]').forEach(col => {
        col.classList.remove('open');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const mq = window.matchMedia('(max-width: 991px)');
    handleAccordionBehavior(mq);
    mq.addEventListener('change', handleAccordionBehavior);
  });
