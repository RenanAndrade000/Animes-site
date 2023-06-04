window.onload = function() {
  home();
};



function home() {
    fetch("http://localhost:8080/last-release")
      .then(response => response.json())
      .then(data => {
        //sobre este container cirado abaixo..
        //basicamente ele está selecionando somente o primeiro e unico card do html. 
        //ele poderia selecionar o [1] caso houvesse outro.
        // de qualquer modo, este indice não faz parte de um loop apesar de parecer
        const container = document.getElementsByClassName("card-group")[0];
        var count = 0;
        var row;

        data.forEach(item => {
          if (count % 4 === 0) { // Verificação de múltiplo de 4 para criar nova linha
            row = document.createElement("div"); // Criar nova linha
            row.classList.add("row");
            container.appendChild(row); // Adicionar a nova linha ao container
          }
  
          const col = document.createElement("div"); // Movido para dentro do loop forEach
          col.classList.add("col");
  
          const card = document.createElement("div");
          card.classList.add("card");
          card.classList.add("text-bg-dark");
          card.classList.add("mb-3");
          card.style.width = "300px"; 
          card.style.height = "250px";

          card.addEventListener("click", () => {
            window.location.href = "video.html?episode="+item.link;
            

          });
      

          const img = document.createElement("img");
          img.classList.add("imgUrl");
          img.classList.add("card-img-top");
          img.src = item.imgUrl;
          card.appendChild(img);
  
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
  
          const titulo = document.createElement("h5");
          titulo.classList.add("card-title");
          titulo.textContent = item.nome;
          titulo.style.width = "200";
          cardBody.appendChild(titulo); // Adicionado ao cardBody em vez de ao card
  
          card.appendChild(cardBody); // Adicionado o cardBody ao card
          col.appendChild(card); // Adicionado o card ao col
  
          row.appendChild(col); // Adicionado o col à linha (row)
  
          count++;
        });
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }