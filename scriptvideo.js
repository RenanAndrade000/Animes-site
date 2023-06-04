/*window.onload = function(){
  const urlParams = new URLSearchParams(window.location.search);
  const episode = urlParams.get('episode');
  console.log(episode)//o valor está vindo certo no console do navegador
  const video = document.getElementById("episode");
  video.src = episode;
}
*/

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const episode = urlParams.get('episode');
    console.log(episode);
    
    //ideia que tive: fazer o webscraping do video diretamente na url pra tentar driblar a autenticação
    
}



