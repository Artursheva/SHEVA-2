const innerText = document.querySelector('#latin-text');
const outerText = document.querySelector('.latin-result');

document.querySelector('button').onclick = function() {
      let text = innerText.value.trim();
      if (text ==='') return;

      const template = '0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@#$%^&*()_+-={}[]?.,;:';

      let out = '';
      for (let i = 0; i <text.length; i++) {
          if (text[i] === '>') {
              out += '&#x3E';
          }
          else if (text[i] === '<') {
              out += '<';
          }
          else if (text[i] === 'n') {
              out += '<br>';
          }
          else if(template.indexOf(text[i]) === -1) {
              out += '<mark>'+text[i]+'</mark>';
          }
          else {
              out+=text[i];
          }
      }
      console.log(out);
      outerText.innerHTML = out;
}
