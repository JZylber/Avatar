let avatar = {
  ropa: 1,
  pelo: 1,
  ojos: 1,
  boca: 1,
};

function actualizarAvatar() {
  document.getElementById("imgRopa").src = `./img/ropa_${avatar.ropa}.png`;
  document.getElementById("imgPelo").src = `./img/pelo_${avatar.pelo}.png`;
  document.getElementById("imgOjos").src = `./img/ojos_${avatar.ojos}.png`;
  document.getElementById("imgBoca").src = `./img/boca_${avatar.boca}.png`;
}
