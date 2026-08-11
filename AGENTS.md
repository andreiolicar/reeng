# AGENTS.md — REENG Engenharia Consultiva

## Projeto

Site institucional da REENG Engenharia Consultiva.

A REENG atua como parceira técnica de incorporadores, investidores, construtoras, loteadoras e proprietários de empreendimentos, oferecendo soluções de engenharia consultiva para apoiar decisões, integrar projetos e reduzir riscos.

Mensagem institucional principal:

> Inteligência técnica para decisões seguras.

## Escopo

O projeto é um site institucional estático, de página única (one-page).

Não transformar o projeto em uma aplicação web complexa.

Não há necessidade de:

- backend;
- banco de dados;
- autenticação;
- painel administrativo;
- CMS;
- API própria;
- roteamento complexo;
- SSR;
- framework full-stack.

## Stack

Utilizar:

- React
- Vite
- JavaScript
- Tailwind CSS

Não migrar para TypeScript.
Não migrar para Next.js ou outro framework sem solicitação explícita.

## Princípios técnicos

Priorizar:

- simplicidade;
- legibilidade;
- baixo acoplamento;
- componentes pequenos e reutilizáveis quando fizer sentido;
- HTML semântico;
- responsividade;
- acessibilidade básica;
- performance;
- manutenção simples.

Evitar:

- abstrações prematuras;
- arquitetura excessiva;
- dependências desnecessárias;
- componentes genéricos sem necessidade real;
- lógica complexa para problemas simples;
- JavaScript quando CSS ou HTML forem suficientes.

Antes de instalar qualquer dependência adicional, avaliar se ela é realmente necessária.

## Estrutura esperada

Manter uma estrutura simples, aproximadamente:

src/
├── assets/
├── components/
├── App.jsx
├── main.jsx
└── index.css

A estrutura pode evoluir conforme o projeto exigir, mas sem criar camadas artificiais.

## Arquitetura da página

O site será uma única página.

A navegação principal deve funcionar por seções/âncoras.

Estrutura prevista:

1. Header
2. Hero
3. Principais especialidades
4. A REENG
5. Serviços
6. Metodologia
7. Diferenciais
8. Projetos / trabalhos
9. Contato / CTA final
10. Footer

Essa ordem pode ser refinada durante o desenvolvimento.

## Hierarquia dos serviços

A REENG possui cinco frentes principais:

- Gerenciamento e Coordenação de Projetos
- ATP — Análise Técnica de Projetos
- Consultoria em Engenharia
- Assessoria à Incorporação Imobiliária
- Desenvolvimento de Loteamentos

Gerenciamento e Coordenação de Projetos e ATP são os serviços de maior destaque no site.

Consultoria em Engenharia, Assessoria à Incorporação e Desenvolvimento de Loteamentos devem aparecer com menor protagonismo visual.

Não apresentar necessariamente todos os serviços com exatamente o mesmo peso.

## Metodologia CAIOA

A metodologia institucional possui cinco etapas:

1. Compreender
2. Avaliar
3. Integrar
4. Orientar
5. Acompanhar

Ela deve ser apresentada como um processo estruturado de trabalho da REENG.

## Direção visual

O site deve transmitir:

- confiança;
- competência técnica;
- clareza;
- experiência;
- sofisticação discreta;
- profissionalismo.

Direção visual:

- design limpo e contemporâneo;
- bastante espaço em branco;
- azul petróleo como cor institucional principal;
- branco como base;
- cinza grafite para textos;
- tipografia moderna, sóbria e elegante;
- fotografias reais de empreendimentos, projetos, obras e reuniões técnicas;
- ícones discretos;
- efeitos visuais sutis.

Evitar:

- aparência genérica de template;
- estética evidente de site gerado por IA;
- excesso de gradientes;
- neon;
- glassmorphism exagerado;
- sombras fortes;
- excesso de bordas arredondadas;
- animações chamativas;
- elementos futuristas;
- excesso de elementos decorativos.

A estética deve se aproximar mais de uma empresa de engenharia consultiva consolidada do que de uma startup de tecnologia.

## Conteúdo

Não inventar informações institucionais, números, clientes, anos de experiência, certificações, projetos, depoimentos ou resultados.

Quando algum dado real ainda não estiver disponível, usar uma solução neutra ou deixar o espaço preparado para preenchimento posterior.

Não utilizar lorem ipsum em partes apresentáveis do site.

Preservar o posicionamento e os textos fornecidos pelo cliente sempre que possível, fazendo apenas adaptações necessárias para UX e comunicação digital.

## Responsividade

Todo desenvolvimento visual deve considerar desde o início:

- desktop;
- tablet;
- mobile.

Evitar corrigir mobile apenas no final.

Não permitir:

- overflow horizontal;
- textos cortados;
- botões inacessíveis;
- imagens deformadas;
- seções com alturas rígidas desnecessárias.

## Acessibilidade

Utilizar boas práticas básicas:

- estrutura semântica;
- headings em ordem lógica;
- textos alternativos em imagens relevantes;
- foco visível;
- contraste adequado;
- botões e links semanticamente corretos;
- navegação por teclado quando aplicável.

## CSS e Tailwind

Usar Tailwind CSS como principal ferramenta de estilização.

Manter CSS global apenas para:

- imports;
- tokens globais;
- resets necessários;
- estilos realmente globais;
- casos em que Tailwind não seja adequado.

Evitar duplicação excessiva de classes quando um componente simples resolver o problema.

Não criar um design system complexo para um site deste porte.

## Interações e animações

Usar movimentos apenas quando melhorarem a experiência.

Preferir:

- transições sutis;
- hover discreto;
- pequenas entradas ou mudanças de estado quando apropriadas.

Evitar bibliotecas de animação sem necessidade.

## SEO e produção

Antes da entrega final, o projeto deverá contemplar:

- title;
- meta description;
- favicon;
- Open Graph básico;
- HTML semântico;
- imagens otimizadas;
- boa performance;
- build de produção válido.

Esses itens podem ser implementados em ciclos posteriores.

## Forma de trabalho

O desenvolvimento será dividido em ciclos.

Em cada ciclo:

1. ler este arquivo antes de modificar o projeto;
2. inspecionar o estado atual do repositório;
3. alterar apenas o necessário para o escopo solicitado;
4. preservar decisões já consolidadas;
5. evitar refatorações não solicitadas;
6. executar lint e build quando aplicável;
7. corrigir erros provocados pelas alterações;
8. apresentar ao final um resumo objetivo do que foi feito.

Não avançar automaticamente para etapas futuras.

Não implementar funcionalidades ou seções fora do escopo do ciclo atual apenas por parecerem úteis.

## Git

Não realizar commit, push, rebase, reset ou outras operações que alterem o histórico do Git sem solicitação explícita.

Quando solicitado a implementar um ciclo, deixar as alterações prontas para revisão antes de qualquer commit.

## Prioridade

Quando houver dúvida entre uma solução mais sofisticada e uma solução mais simples que cumpra igualmente bem o objetivo, preferir a solução mais simples.

## Hierarquia das fontes do projeto

Existem diferentes documentos fornecidos pelo cliente.

Quando houver diferenças entre eles, utilizar esta ordem de prioridade:

1. `Conceito Site_REENG Engenharia Consultiva.docx`
   - principal referência de estrutura do site;
   - direção visual;
   - serviços;
   - metodologia;
   - posicionamento geral.

2. `Parâmetros Site.docx`
   - referência complementar para posicionamento, conteúdo e informações institucionais.

3. `Site Reeng (1).docx`
   - fonte complementar de informações reais;
   - dados de contato;
   - histórico;
   - textos adicionais;
   - fotografias e materiais de empreendimentos.

A estrutura de site proposta em `Site Reeng (1).docx` NÃO deve substituir a estrutura definida nos dois documentos principais.

O documento novo funciona principalmente como banco de conteúdo e ativos.

Todas estão localizadas em /docs/.

## Cor institucional

A cor principal oficial do projeto é:

#18263f

Usá-la como principal tom institucional do site.

Cores secundárias devem ser derivadas ou escolhidas para complementar essa cor de forma sóbria.

Não substituir a cor principal por azul petróleo, teal ou outra interpretação aproximada.