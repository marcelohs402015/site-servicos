# Mestre da Obra & Serviços

Bem-vindo ao repositório do site **Mestre da Obra & Serviços**. Este projeto é uma landing page moderna e responsiva desenvolvida para profissionais da construção civil e manutenção predial.

🔗 **Visualização**: [Adicione o link do deploy aqui se houver]

## 🛠 Tecnologias Utilizadas

Este projeto foi construído utilizando as melhores práticas e ferramentas do ecossistema moderno de desenvolvimento web:

- **[Next.js 14](https://nextjs.org/)**: Framework React para produção, utilizando App Router.
- **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset tipado de JavaScript para maior segurança e escalabilidade.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilitários CSS para estilização rápida e responsiva.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações fluidas e interações.
- **[Lucide React](https://lucide.dev/)**: Coleção de ícones SVG limpos e modernos.
- **[Radix UI](https://www.radix-ui.com/)**: Primitivos de UI acessíveis (utilizado para composição de Slots).

## 🚀 Como Executar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/SEU_USUARIO/site-servicos.git
```

2. Entre na pasta do projeto:
```bash
cd site-servicos
```

3. Instale as dependências:
```bash
npm install
# ou
yarn install
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build de Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm start
```

## 📁 Estrutura do Projeto

A estrutura segue o padrão do Next.js App Router:

```
src/
├── app/                 # Rotas e layouts da aplicação (Next.js App Router)
├── components/          # Componentes React reutilizáveis
│   ├── layout/          # Componentes estruturais (Header, Footer)
│   ├── sections/        # Seções da Landing Page (Hero, Services, About, Contact)
│   └── ui/              # Componentes de UI genéricos (Button, etc.)
├── data/                # Dados estáticos (conteúdo do site, contatos, serviços)
└── lib/                 # Funções utilitárias (cn, utils)
```

## 📝 Personalização

Todo o conteúdo de texto e informações de contato está centralizado no arquivo:
`src/data/content.ts`

Para alterar telefones, nomes, ou descrições de serviços, edite este arquivo diretamente.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está sob a licença [MIT](https://choosealicense.com/licenses/mit/).
