## Descrição

Back-End feito em Mongo, Node e Express. Apenas pega, adiciona, exclui e edita dados de usuário.

## CORS Error

Tive um erro de Access-Control-Allow-Origin (no CHROME) ao tentar acessar o servidor hospedado no localhost:8081,
através de uma aplicação React hospedada no localhost:3000.

###### Solução 1 - Ativar o CORS no Express

1. npm install cors
2. const cors = require('cors')
3. app.use(cors()) //antes de definir as rotas
4. Mais detalhes: [https://daveceddia.com/access-control-allow-origin-cors-errors-in-react-express/]

###### Solução 2 - Rodar o Chrome desativando o CORS - Windows

1. Clicar com o botão direito no ícone do Chrome
2. Propriedades
3. Shortcup
4. Adicionar no final do target -> --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
5. OK
6. Mais detalhes: [https://alfilatov.com/posts/run-chrome-without-cors/]
