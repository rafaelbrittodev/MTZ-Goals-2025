document.addEventListener('DOMContentLoaded', function () {
  window.dataLayer = window.dataLayer || [];
  let userId;

  try {
    const storedEmail = localStorage.getItem('userEmail');
    userId = storedEmail || 'undefined';
  } catch (error) {
    console.error('Erro ao acessar o localStorage:', error);
    userId = 'undefined';
  }

  window.dataLayer.push({
    'event': 'global',
    'user_id': userId,
  });

  function sanitize(string) {
    try {
      if (typeof string !== 'string') {
        return '';
      }

      let sanitized = string.trim().toLowerCase();

      sanitized = sanitized
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

      return sanitized;
    } catch (e) {
      return '';
    }
  }

  const inputFields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea');

  inputFields.forEach(inputField => {
    inputField.addEventListener('blur', function () {
      const pageTitle = document.title;
      const fieldId = this.id;

      if (this.value.trim() !== '') {
        window.dataLayer.push({
          'event': 'interacao',
          'custom_section': sanitize(pageTitle),
          'custom_type': 'campo',
          'custom_title': fieldId,
        });
      }
    });
  });

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const pageTitle = document.title;
      const buttonText = this.textContent;

      window.dataLayer.push({
        'event': 'clique',
        'custom_section': sanitize(pageTitle),
        'custom_type': 'botao',
        'custom_title': sanitize(buttonText),
      });
    });
  });

  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function () {
      const pageTitle = document.title;
      const linkText = this.textContent;

      window.dataLayer.push({
        'event': 'clique',
        'custom_section': sanitize(pageTitle),
        'custom_type': 'link',
        'custom_title': sanitize(linkText),
      });
    });
  });
});

function armazenarEmail(email) {
  try {
    localStorage.setItem('userEmail', email);
  } catch (error) {
    console.error('Erro ao armazenar o email no localStorage:', error);
  }
}