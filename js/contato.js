document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  const statusDiv = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const submitBtn = form.querySelector('.submit-btn');
      const originalBtnText = submitBtn.innerText;

      submitBtn.innerText = 'ENVIANDO...';
      submitBtn.disabled = true;
      statusDiv.innerHTML = ''; // Limpa mensagens anteriores
      statusDiv.className = 'form-status'; // Reseta classes

      const data = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          // Sucesso
          statusDiv.innerHTML = 'Mensagem enviada com sucesso! Redirecionando...';
          statusDiv.classList.add('success');

          // Redireciona após 2 segundos
          setTimeout(() => {
             window.location.href = './index.html';
          }, 2000);

        } else {
          // Erro
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              statusDiv.innerHTML = data["errors"].map(error => error["message"]).join(", ");
            } else {
              statusDiv.innerHTML = 'Ocorreu um erro ao enviar. Tente novamente.';
            }
            statusDiv.classList.add('error');
          });
          submitBtn.innerText = originalBtnText;
          submitBtn.disabled = false;
        }
      }).catch(error => {
        statusDiv.innerHTML = 'Ocorreu um erro de conexão. Tente novamente.';
        statusDiv.classList.add('error');
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
      });
    });
  }
});
