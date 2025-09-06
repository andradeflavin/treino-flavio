
Treino Hipertrofia - Site Responsivo
Arquivos:
- index.html
- styles.css
- app.js

Como usar:
1) Extraia os arquivos para um diretório e abra index.html no navegador (funciona offline).
2) Para publicar no GitHub Pages:
   - Crie um repositório no GitHub, faça upload dos arquivos e ative Pages nas configurações (branch main / root).
   - A página ficará disponível em https://<seu-usuario>.github.io/<repo-name>/
3) Para conectar a uma Google Sheet automaticamente (avançado), exporte a planilha como CSV público e atualize app.js para buscar via fetch (eu posso ajudar nisso).

Funcionalidades:
- Busca por exercício/observação/técnica
- Filtros por Treino e Grupo Muscular
- Marcar exercício como 'Concluído' (salvo no localStorage)
- Exportar a lista de exercícios concluídos (JSON)

Segurança & Privacidade:
- Os dados estão embutidos no app.js; para manter atualizações dinâmicas, prefira conectar via Google Sheets público.
