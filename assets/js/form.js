const formRegister =  document.getElementById('form-register');

formRegister.addEventListener( "submit", function(event) {
   event.preventDefault();

     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const mensagem = document.getElementById('mensage').value;

     const text = ` 🚀 Novo contato pelo site

      👤 Nome: ${name}
      📧  Email: ${email}
      💬 Mensagem: ${mensagem} `;


      const telefone = "5524992630568";

      const url = `https://wa.me/${telefone}?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank");

     
});