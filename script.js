document.getElementById("leva__projetos").addEventListener("click", function() {
    // Substitua "URL_DO_SITE_DESTINO" pelo URL do site para o qual deseja redirecionar
    var url = "https://github.com/LuigiCapoia?tab=repositories";
    
    // Use window.location.href para redirecionar para o site de destino
    window.location.href = url;
  });

  document.getElementById("contatoInstagran").addEventListener("click", function() {
    // Substitua "URL_DO_SITE_DESTINO" pelo URL do site para o qual deseja redirecionar
    var url = "https://www.instagram.com/luigicapoia/";
    
    // Use window.location.href para redirecionar para o site de destino
    window.location.href = url;
  });

  document.getElementById("email").addEventListener("click", function() {
    // Endereço de e-mail
    var emailAddress = "testecapoia@gmail.com";
  
    // Use o atributo 'mailto:' para abrir o cliente de e-mail padrão
    window.location.href = "mailto:" + emailAddress;
  });

  document.getElementById("mario").addEventListener("click", function() {
    // Endereço de e-mail
    var url = "https://luigicapoia.github.io/Mario_jump/";
  
    // Use o atributo 'mailto:' para abrir o cliente de e-mail padrão
    window.location.href = url ;
  });

  document.getElementById("rick-and-morty").addEventListener("click", function() {
    // Endereço de e-mail
    var url = "https://luigicapoia.github.io/Api_Rick_and_Morty/";
  
    // Use o atributo 'mailto:' para abrir o cliente de e-mail padrão
    window.location.href =  url ;
  });