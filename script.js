
const url = "https://apirest-birds.herokuapp.com/api/";
var idBird = "";
var nameBird = "";
var imageBird = "";
var id = "";
var card = document.getElementById('card');
card.style.display = "none";
function search(){
    idBird = document.getElementById('search').value;
    getId(idBird)
}
function getId(id){
  axios.get(url + "birds/" + id)
  .then(res => {
    if (res.data.nome){
      document.getElementById('card_name').innerHTML = res.data.nome;
    document.getElementById('card_image').setAttribute('src', res.data.image);
    card.style.display = "block";

    }else alert("Bird not found, try again!")
  });
}
function register(){
  nameBird = document.getElementById('input_name').value;
  imageBird = document.getElementById('input_image').value;
  postId(nameBird, imageBird);
}
function postId(nomeBird, imageBird){
  axios.post(url + "bird", {
    nome: nomeBird,
    image: imageBird
  })
  .then(res => {
      document.getElementById('card_name').innerHTML = nomeBird;
      document.getElementById('card_image').setAttribute('src', imageBird);
      card.style.display = "block";
  });
}