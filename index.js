// Código JavaScript para verificar se o usuário e senha estão armazenados no localStorage
      // e fazer o login
      // Obtém os valores dos inputs de usuário e senha
      const username = document.querySelector("#username").value;
      const password = document.querySelector("#password").value;

      // Obtém os valores armazenados no localStorage
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");

      // Verifica se o usuário e senha digitados correspondem aos armazenados no localStorage
      if (username === storedUsername && password === storedPassword) {
        // Login válido, redireciona para a página principal
        window.location.href = "";
      } else {
        // Login inválido, exibe mensagem de erro
       
      }
      // Nota: é importante lembrar que o localStorage só armazena dados em formato string, então é importante
      //  converter os valores para string antes de armazená-los e convertê-los de volta para o formato desejado quando for usá-los.