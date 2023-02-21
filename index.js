// seleciona o botão de Continuar
const continueButton = document.querySelector('.continue-button button');

// adiciona o evento de clique ao botão
continueButton.addEventListener('click', function(e) {
  e.preventDefault();
  
  // seleciona os campos do formulário
  const firstName = document.querySelector('#Firstname');
  const lastName = document.querySelector('#Lastname');
  const email = document.querySelector('#Email');
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirmpassword');
  const gender = document.querySelector('input[name="gender"]:checked');
  const phone = document.querySelector('#number');
  
  // valida se todos os campos foram preenchidos
  if (firstName.value && lastName.value && email.value && password.value && confirmPassword.value && gender && phone.value) {
    
    // valida se as senhas são iguais
    if (password.value !== confirmPassword.value) {
      alert('As senhas devem ser iguais!');
      return;
    }
    
    // armazena as informações do usuário no localStorage
    const user = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      gender: gender.value,
      phone: phone.value
    };
    localStorage.setItem('user', JSON.stringify(user));
    
    // redireciona o usuário para a página de login
    window.location.href = 'index.html';
    
  } else {
    alert('Por favor, preencha todos os campos!');
  }
});

