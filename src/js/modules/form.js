export function form() {
  document.querySelector('.contacts-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Блокируем стандартную отправку формы

    // Проверяем наличие ошибок
    const invalidFields = [...this.querySelectorAll(':invalid')];

    if (invalidFields.length === 0) {
        alert('Форма отправлена успешно!');
        window.location.href = '/';
    } else {
        alert('Пожалуйста, исправьте ошибки в форме.');
    }
  });
}
