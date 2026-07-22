function calcularTotal() {
  let total = parseInt(document.getElementById("servicio").value);

  document.querySelectorAll(".extra").forEach(extra => {
    if (extra.checked) total += parseInt(extra.value);
  });

  total += parseInt(document.getElementById("nailart").value);

  total += parseInt(document.getElementById("rotas").value);

  document.getElementById("total").innerText = total + " €";
}

document.getElementById("servicio").addEventListener("change", calcularTotal);

document.getElementById("nailart").addEventListener("change", calcularTotal);

document.getElementById("rotas").addEventListener("input", calcularTotal);

document.querySelectorAll(".extra").forEach(extra => {
  extra.addEventListener("change", calcularTotal);
});

calcularTotal();

function enviarWhatsapp() {
  let total = document.getElementById("total").innerText;

  let servicio =
    document.getElementById("servicio").options[
      document.getElementById("servicio").selectedIndex
    ].text;

  let mensaje =
`Hola Lorena 😊

Quiero solicitar este servicio:

${servicio}

Precio estimado: ${total}`;

  window.open(
    "https://wa.me/34644461109?text=" +
      encodeURIComponent(mensaje),
    "_blank"
  );
}
