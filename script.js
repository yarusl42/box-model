document.addEventListener('input', function(event) {
  const targetId = event.target.id;
  const targetValue = event.target.value;
  const rectangle = document.querySelector('.rectangle');

  if (targetId.startsWith('margin')) {
    rectangle.style.margin = `${document.getElementById('margin-top').value}px ${document.getElementById('margin-right').value}px ${document.getElementById('margin-bottom').value}px ${document.getElementById('margin-left').value}px`;
  } else if (targetId.startsWith('padding')) {
    rectangle.style.padding = `${document.getElementById('padding-top').value}px ${document.getElementById('padding-right').value}px ${document.getElementById('padding-bottom').value}px ${document.getElementById('padding-left').value}px`;
  } else if (targetId.startsWith('border')) {
    rectangle.style.border = `${targetValue}px solid red`;
  }
});
