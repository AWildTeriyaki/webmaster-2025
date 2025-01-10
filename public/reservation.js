document
  .getElementById('reservation-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    document.getElementById('name').addEventListener('input', function (event) {
      const nameInput = event.target.value;
      const regex = /^[A-Za-z\s]*$/;

      if (!regex.test(nameInput)) {
        event.target.setCustomValidity(
          'Name must contain only letters and spaces.'
        );
      } else {
        event.target.setCustomValidity('');
      }
    });

    

    const currentDate = document.getElementById('date').value;
    const currentTime = document.getElementById('time').value;

    const responseMessage = `Thank you, ${name}. Your table is reserved for ${currentDate} at ${currentTime}.`;
    document.getElementById('response-message').textContent = responseMessage;
    this.reset();
  });

// Setup Calendar to start from today
document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('date');
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  dateInput.setAttribute('min', today);
});
