export function form() {
  document.querySelector('.contacts-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Блокируем стандартную отправку формы

    // Проверяем наличие ошибок
    const invalidFields = [...this.querySelectorAll(':invalid')];

    if (invalidFields.length === 0) {
        alert('Форма отправлена успешно!');
      // Если нужно, тут можно отправить форму через стандартный submit
      // this.submit();
    } else {
        alert('Пожалуйста, исправьте ошибки в форме.');
    }
  });
}
