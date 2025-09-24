// INTENCIONAL: ejemplo simple de XSS en el DOM (no seguro)
function renderComment(userInput) {
  document.getElementById('comments').innerHTML = "<p>" + userInput + "</p>";
}
// Ejemplo: renderComment('<img src=x onerror=alert(1)>');
