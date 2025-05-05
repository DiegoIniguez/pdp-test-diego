document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector(".faq-toggle-icon");

    const isOpen = answer.classList.contains("open");
    document
      .querySelectorAll(".faq-answer")
      .forEach((el) => el.classList.remove("open"));
    document
      .querySelectorAll(".faq-question")
      .forEach((el) => el.classList.remove("active"));
    document
      .querySelectorAll(".faq-toggle-icon")
      .forEach((el) => (el.textContent = "+"));

    if (!isOpen) {
      answer.classList.add("open");
      btn.classList.add("active");
      icon.textContent = "−";
    }
  });
});
