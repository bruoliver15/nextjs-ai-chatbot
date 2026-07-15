-- Seed data for IA Lucrativa: modules and lessons
-- All text literals use dollar-quoting (tag m) to avoid issues with apostrophes in Portuguese.

insert into public.modules (id, title, description, "position") values
($m$00000000-0000-4000-8000-000000000001$m$::uuid, $m$Entendendo a Inteligência Artificial$m$, $m$Você vai entender o que é Inteligência Artificial, como ela pode ajudar no seu dia a dia e quais são seus limites e riscos.$m$, 1),
($m$00000000-0000-4000-8000-000000000002$m$::uuid, $m$Ferramentas para começar$m$, $m$Conheça as principais ferramentas de Inteligência Artificial disponíveis hoje e aprenda a escolher a mais adequada para cada tarefa.$m$, 2),
($m$00000000-0000-4000-8000-000000000003$m$::uuid, $m$Aprendendo a criar prompts$m$, $m$Aprenda a estrutura e as técnicas para escrever pedidos claros que geram respostas de IA realmente úteis.$m$, 3),
($m$00000000-0000-4000-8000-000000000004$m$::uuid, $m$Produtos e serviços com IA$m$, $m$Aprenda a usar IA na prática para criar produtos e materiais que podem gerar renda ou economizar tempo no seu trabalho.$m$, 4),
($m$00000000-0000-4000-8000-000000000005$m$::uuid, $m$Primeiro projeto$m$, $m$Coloque em prática tudo o que aprendeu, desenvolvendo do início ao fim o seu primeiro projeto real com apoio de Inteligência Artificial.$m$, 5);

insert into public.lessons (module_id, title, description, content, example, exercise, prompt_text, estimated_minutes, "position") values
-- Módulo 1: Entendendo a Inteligência Artificial
($m$00000000-0000-4000-8000-000000000001$m$::uuid, $m$O que é Inteligência Artificial$m$, $m$Uma introdução simples ao que é IA e como ela aprende a partir de exemplos.$m$,
$m$Inteligência Artificial, ou IA, é a capacidade que um computador tem de realizar tarefas que normalmente exigiriam inteligência humana, como entender textos, reconhecer imagens ou gerar respostas para perguntas.

Você não precisa entender de programação para usar IA. Pense nela como um assistente muito bem treinado, que leu uma quantidade enorme de textos, imagens e informações, e aprendeu padrões a partir disso. Quando você faz uma pergunta, a IA não está "pensando" como um ser humano pensa, mas ela é capaz de reconhecer padrões parecidos com o que já viu antes e montar uma resposta útil.

Existem vários tipos de IA no seu dia a dia, mesmo que você não perceba: quando o Netflix sugere um filme, quando o corretor do celular completa uma frase, ou quando você fala com um assistente de voz. As ferramentas que vamos estudar neste curso, como ChatGPT, Gemini e Claude, são chamadas de "modelos de linguagem": IAs treinadas especificamente para conversar, escrever e responder perguntas em texto.

O mais importante para você, que está começando agora, é perder o medo. IA não é mágica nem bicho de sete cabeças. É uma ferramenta, como uma calculadora ou um processador de texto, só que muito mais flexível. Ao longo deste curso você vai aprender, na prática, como conversar com essas ferramentas para economizar tempo, ter ideias e até criar produtos e serviços.$m$,
$m$Imagine que você pergunta a uma IA quais são 5 ideias de posts para uma padaria no Instagram. Em segundos, ela devolve cinco sugestões completas, prontas para você adaptar. Isso seria algo que levaria 20 a 30 minutos para pensar sozinho.$m$,
$m$Abra o ChatGPT (ou outra IA que você já tenha acesso) e faça uma pergunta simples do seu dia a dia, como uma dúvida de culinária ou uma sugestão de presente, só para sentir como é a conversa.$m$,
$m$Explique para mim, como se eu nunca tivesse usado tecnologia, o que é Inteligência Artificial e me dê 3 exemplos de como uma pessoa como eu, que trabalha com [sua área ou profissão], poderia usar isso no dia a dia.$m$,
8, 1),

($m$00000000-0000-4000-8000-000000000001$m$::uuid, $m$Como a IA pode ajudar pessoas comuns$m$, $m$Exemplos concretos de como a IA facilita tarefas do dia a dia de qualquer pessoa.$m$,
$m$A Inteligência Artificial deixou de ser algo só para programadores ou grandes empresas. Hoje, qualquer pessoa pode usá-la para facilitar tarefas simples do dia a dia.

Se você é dona de casa, pode pedir para a IA montar um cardápio semanal com base no que tem na geladeira. Se você é autônomo, pode usá-la para escrever uma mensagem profissional para um cliente. Se você é estudante, pode pedir para ela explicar um assunto difícil de um jeito mais simples. Se você tem um pequeno negócio, pode usá-la para criar textos de divulgação, responder dúvidas de clientes ou organizar sua rotina.

A grande vantagem da IA é a velocidade e a disponibilidade: ela está pronta para ajudar 24 horas por dia, não se cansa e não julga suas perguntas, por mais simples que pareçam. Isso significa que tarefas que antes tomavam horas, como escrever um texto do zero ou organizar uma planilha de gastos, podem ser feitas em minutos com a ajuda certa.

Outro ponto importante: a IA não substitui você, ela potencializa o que você já sabe fazer. Um cabeleireiro que usa IA para criar posts bonitos continua sendo o especialista em cabelo, apenas ganha tempo e qualidade na divulgação. Ao longo deste curso, você vai descobrir várias dessas aplicações práticas, sempre com o objetivo de te ajudar a economizar tempo, ganhar dinheiro ou aprender algo novo com menos esforço.$m$,
$m$Uma cabeleireira autônoma usa a IA para escrever a legenda de um post sobre uma promoção de coloração, incluindo emojis e uma chamada para ação, em menos de 1 minuto, ao invés de gastar 15 minutos tentando escrever sozinha.$m$,
$m$Pense em uma tarefa chata ou demorada que você faz toda semana (por exemplo, escrever mensagens, organizar uma lista) e peça para uma IA te ajudar com ela agora mesmo.$m$,
$m$Eu trabalho com [sua profissão ou atividade] e gasto muito tempo com [tarefa repetitiva ou chata]. Me dê 3 formas práticas de usar Inteligência Artificial para facilitar essa tarefa no meu dia a dia.$m$,
8, 2),

($m$00000000-0000-4000-8000-000000000001$m$::uuid, $m$O que a IA faz e o que ela não faz$m$, $m$Entenda os limites da IA para usá-la com mais segurança e realismo.$m$,
$m$Para usar bem a Inteligência Artificial, é essencial entender o que ela faz muito bem e o que ela não consegue fazer, mesmo que pareça inteligente.

A IA é ótima para: gerar textos rapidamente, resumir informações longas, dar sugestões e ideias, explicar assuntos de forma simples, traduzir idiomas e ajudar a organizar pensamentos. Ela funciona como um parceiro de trabalho incansável, sempre disponível para dar um empurrão inicial em qualquer tarefa.

Por outro lado, a IA não sabe tudo, não é sempre atualizada e, o mais importante, pode errar. Ela pode "inventar" informações que parecem verdadeiras mas não são, um fenômeno chamado de "alucinação". Por isso, nunca copie e cole uma resposta de IA em algo importante, como um documento oficial ou um post com dados, sem antes conferir se as informações estão corretas.

A IA também não tem sentimentos reais, não conhece você pessoalmente e não substitui o julgamento humano em decisões importantes, como questões médicas, jurídicas ou financeiras sérias. Ela é uma ferramenta de apoio, não um substituto para profissionais especializados.

Entender esses limites não deve te assustar, pelo contrário: deve te dar mais confiança para usar a IA no que ela realmente é boa, sabendo quando pedir ajuda humana também. Ao longo deste curso, vamos sempre reforçar a importância de revisar e validar o que a IA produz antes de usar.$m$,
$m$Se você pedir para uma IA citar uma lei específica ou uma estatística exata, ela pode responder com muita confiança um número que não existe. Por isso, sempre que o dado for importante, é preciso verificar em uma fonte confiável.$m$,
$m$Peça para uma IA te contar um fato histórico ou uma estatística sobre um tema que você conhece bem, e verifique se a informação está correta pesquisando em outra fonte.$m$,
$m$Me explique, com exemplos simples, quais são as principais limitações da Inteligência Artificial que eu, como usuário iniciante, preciso saber para não confiar cegamente nas respostas.$m$,
10, 3),

($m$00000000-0000-4000-8000-000000000001$m$::uuid, $m$Como utilizar IA com responsabilidade$m$, $m$Boas práticas éticas para usar IA sem prejudicar terceiros ou a si mesmo.$m$,
$m$Usar Inteligência Artificial com responsabilidade é essencial, tanto para proteger você quanto para respeitar outras pessoas.

O primeiro cuidado é com dados pessoais e sensíveis. Evite colocar informações como CPF, senhas, dados bancários ou de terceiros em conversas com IA, pois essas ferramentas podem armazenar o histórico das conversas.

O segundo cuidado é com a originalidade e a honestidade. Se você usar IA para criar um texto, é importante revisar e personalizar o conteúdo, adicionando sua própria voz e experiência, ao invés de simplesmente copiar e colar. Em contextos acadêmicos ou profissionais, muitas vezes é necessário informar que parte do conteúdo foi produzida com apoio de IA, seguindo as regras do seu contexto.

O terceiro cuidado é com a veracidade. Como vimos na aula anterior, a IA pode errar. Compartilhar informações erradas geradas por IA sem checar pode prejudicar sua credibilidade e até enganar outras pessoas, especialmente se você usa IA para criar conteúdo público, como posts em redes sociais.

Por fim, use a IA para ampliar suas capacidades, não para enganar ou prejudicar alguém, como criar textos falsos se passando por outra pessoa ou gerar conteúdo que engane consumidores. Usar IA com responsabilidade significa ser transparente, cuidadoso com dados e sempre revisar o que é produzido antes de compartilhar. Esse cuidado vai te ajudar a construir confiança com quem consome seu conteúdo ou compra seus produtos e serviços.$m$,
$m$Uma pessoa que vende cursos online usa IA para escrever a descrição do produto, mas revisa o texto, corrige informações e adiciona depoimentos reais de alunos antes de publicar, garantindo que tudo seja verdadeiro.$m$,
$m$Revise uma conversa que você teve com uma IA nesta aula e verifique se compartilhou, sem perceber, alguma informação pessoal sensível.$m$,
$m$Crie uma lista de 5 boas práticas de uso responsável de Inteligência Artificial para quem está usando essas ferramentas para criar conteúdo para redes sociais ou pequenos negócios.$m$,
9, 4),

-- Módulo 2: Ferramentas para começar
($m$00000000-0000-4000-8000-000000000002$m$::uuid, $m$ChatGPT$m$, $m$Conheça o ChatGPT, a ferramenta de IA mais popular, e para que ela serve.$m$,
$m$O ChatGPT é uma das ferramentas de Inteligência Artificial mais conhecidas do mundo, criada pela empresa OpenAI. Ele funciona como um chat: você escreve uma pergunta ou pedido, e ele responde em texto, de forma parecida com uma conversa por mensagem.

Para começar a usar, basta acessar o site chat.openai.com (ou o aplicativo no celular) e criar uma conta gratuita com e-mail. A versão gratuita já é bastante poderosa para o dia a dia: você pode pedir textos, resumos, ideias, explicações sobre qualquer assunto, ajuda para organizar tarefas e muito mais.

O ChatGPT é especialmente bom para escrever e reescrever textos, gerar ideias criativas, responder dúvidas gerais e ajudar em tarefas de planejamento. Existe também uma versão paga (chamada Plus), que oferece respostas mais rápidas e acesso a recursos extras, como geração de imagens, mas para quem está começando, a versão gratuita já é suficiente para aprender.

Uma característica importante do ChatGPT é que ele mantém o contexto da conversa: se você pedir uma coisa e depois pedir um ajuste, ele entende que está se referindo ao que foi dito antes, sem precisar repetir tudo. Isso o torna muito prático para refinar um texto aos poucos, até chegar no resultado que você quer.

Nas próximas aulas você vai conhecer outras ferramentas parecidas, mas o ChatGPT é um ótimo ponto de partida por ser simples, popular e gratuito.$m$,
$m$Uma pessoa cria uma conta gratuita no ChatGPT e pede: escreva uma mensagem educada para cobrar um cliente que está com pagamento atrasado. Em segundos, recebe um texto pronto, que pode ajustar antes de enviar.$m$,
$m$Crie uma conta gratuita no ChatGPT (chat.openai.com) e peça para ele se apresentar e explicar 3 formas de te ajudar no seu trabalho ou estudo.$m$,
$m$Se apresente como se fosse meu assistente pessoal e me diga 3 formas específicas de como você, ChatGPT, pode me ajudar considerando que eu trabalho com [sua área de atuação].$m$,
8, 1),

($m$00000000-0000-4000-8000-000000000002$m$::uuid, $m$Gemini$m$, $m$Conheça o Gemini, a IA do Google, e suas integrações com outros serviços do Google.$m$,
$m$O Gemini é a Inteligência Artificial desenvolvida pelo Google, e uma de suas maiores vantagens é a integração com outros produtos do Google, como Gmail, Google Docs, Google Drive e a própria busca do Google.

Assim como o ChatGPT, o Gemini funciona em formato de chat: você faz perguntas ou pedidos em texto e recebe respostas. Para acessar, basta ter uma conta Google (a mesma do Gmail) e entrar em gemini.google.com. A versão gratuita já oferece muitos recursos úteis para o dia a dia.

Um diferencial do Gemini é a capacidade de buscar informações mais atualizadas na internet, já que ele está conectado à busca do Google, o que pode ser útil para perguntas sobre eventos recentes. Ele também consegue interagir diretamente com documentos do Google Docs e planilhas, ajudando a resumir, criar ou revisar conteúdo direto onde você já trabalha.

Para quem já usa bastante o Gmail e o Google Drive no dia a dia, o Gemini pode ser especialmente conveniente, pois se integra ao fluxo de trabalho sem precisar trocar de ferramenta. Assim como o ChatGPT, ele é ótimo para escrever textos, tirar dúvidas, gerar ideias e organizar informações.

Não existe uma ferramenta melhor entre ChatGPT e Gemini de forma absoluta: elas têm pontos fortes diferentes, e vale a pena experimentar as duas para descobrir qual se encaixa melhor na sua rotina.$m$,
$m$Uma pessoa que já usa Gmail e Google Drive para o trabalho abre o Gemini direto na barra lateral do Google Docs e pede para resumir um documento longo em 5 tópicos, sem precisar sair da tela em que está trabalhando.$m$,
$m$Acesse gemini.google.com com sua conta Google e peça para ele resumir uma notícia atual sobre um tema do seu interesse.$m$,
$m$Busque informações atualizadas sobre [tema de seu interesse] e me traga um resumo em 5 tópicos, com linguagem simples, como se eu não soubesse nada sobre o assunto.$m$,
8, 2),

($m$00000000-0000-4000-8000-000000000002$m$::uuid, $m$Claude$m$, $m$Conheça o Claude, uma IA conhecida por textos longos, cuidadosos e bem estruturados.$m$,
$m$O Claude é uma Inteligência Artificial desenvolvida pela empresa Anthropic, conhecida por produzir textos longos, bem estruturados e com um cuidado especial na qualidade da escrita.

Assim como as outras ferramentas que já vimos, o Claude funciona em formato de chat: você acessa claude.ai, cria uma conta gratuita e começa a conversar. Ele é especialmente elogiado por escrever textos mais naturais, organizados e com boa argumentação, o que o torna uma ótima escolha para quem precisa produzir conteúdos mais longos, como e-books, relatórios, roteiros ou materiais educativos.

Outro ponto forte do Claude é a capacidade de lidar bem com documentos extensos: você pode colar ou enviar um texto grande, como um contrato ou um relatório, e pedir para ele resumir, revisar ou reorganizar as informações de forma clara.

O Claude também costuma ser mais cauteloso ao lidar com temas sensíveis, buscando dar respostas equilibradas e evitando conteúdo prejudicial, o que pode ser interessante para quem valoriza esse cuidado extra.

Assim como o ChatGPT e o Gemini, o Claude tem uma versão gratuita que já é suficiente para a maioria das tarefas do dia a dia. A ideia deste curso não é te fazer escolher uma única ferramenta para sempre, mas te dar confiança para experimentar diferentes opções e usar a que funcionar melhor para cada tarefa específica.$m$,
$m$Uma pessoa está escrevendo um e-book de 20 páginas sobre organização financeira e usa o Claude para revisar cada capítulo, pedindo para deixar o texto mais fluido e conectado entre um capítulo e outro.$m$,
$m$Crie uma conta gratuita em claude.ai e peça para ele escrever um parágrafo introdutório sobre um tema que você domina, avaliando se o texto parece natural.$m$,
$m$Escreva uma introdução de 3 parágrafos para um material sobre [tema do seu interesse], com um tom [formal ou descontraído], como se fosse o início de um e-book.$m$,
8, 3),

($m$00000000-0000-4000-8000-000000000002$m$::uuid, $m$Canva com IA$m$, $m$Descubra como usar os recursos de IA dentro do Canva para criar artes visuais rapidamente.$m$,
$m$O Canva é uma ferramenta muito conhecida para criar artes visuais, como posts para redes sociais, apresentações e cartazes, mesmo sem saber nada de design. Nos últimos anos, o Canva incorporou vários recursos de Inteligência Artificial que tornam essa criação ainda mais rápida.

Um dos recursos mais úteis é o Magic Design, que gera automaticamente sugestões de layout com base em uma imagem ou texto que você fornece. Também existe a geração de imagens por IA dentro do próprio Canva, onde você descreve o que quer ver (por exemplo, uma ilustração de uma xícara de café em estilo aquarela) e a ferramenta cria a imagem para você usar no seu design.

Outro recurso interessante é o Magic Write, uma IA de texto integrada que ajuda a escrever legendas, títulos e textos diretamente dentro dos designs, sem precisar sair do Canva para outra ferramenta.

Para acessar, basta criar uma conta gratuita em canva.com. Muitos recursos de IA já estão disponíveis na versão gratuita, com um limite de usos mensais, e a versão paga (Canva Pro) libera usos ilimitados e recursos extras.

O Canva com IA é perfeito para quem precisa criar conteúdo visual com frequência, como posts para Instagram, capas de e-book ou apresentações, unindo a facilidade do editor visual com o poder de geração de conteúdo da Inteligência Artificial.$m$,
$m$Uma pessoa que vende doces cria um post para o Instagram no Canva, usa o Magic Write para gerar a legenda sobre uma promoção e usa a geração de imagens por IA para criar uma ilustração de bolo personalizada, tudo sem sair da mesma tela.$m$,
$m$Crie uma conta gratuita no Canva e experimente o recurso de geração de imagens por IA, descrevendo uma imagem relacionada ao seu negócio ou interesse.$m$,
$m$Crie uma imagem no estilo [ilustração, foto realista, aquarela] mostrando [descreva a cena ou objeto], em cores [tons de cor desejados], para usar em um post de rede social sobre [seu tema].$m$,
10, 4),

($m$00000000-0000-4000-8000-000000000002$m$::uuid, $m$Perplexity$m$, $m$Conheça o Perplexity, uma IA de busca que traz respostas com fontes confiáveis.$m$,
$m$O Perplexity é uma Inteligência Artificial diferente das que já vimos, porque seu foco principal é a busca de informações. Ao invés de apenas gerar uma resposta com base no que aprendeu durante o treinamento, o Perplexity busca informações atualizadas na internet e mostra, junto com a resposta, as fontes de onde tirou aquela informação.

Isso resolve um dos problemas que vimos anteriormente: a IA inventar informações. Como o Perplexity mostra links para as fontes originais, fica muito mais fácil conferir se o que foi dito é verdadeiro, aumentando a confiança na resposta.

Para usar, basta acessar perplexity.ai e criar uma conta gratuita. Você pode digitar uma pergunta como faria em um site de busca comum, mas ao invés de receber uma lista de links para você mesmo ler, o Perplexity já lê as páginas para você e entrega um resumo organizado, com as fontes citadas ao lado.

Essa ferramenta é especialmente útil para pesquisas, como buscar dados para um trabalho, entender um assunto atual, comparar produtos antes de comprar ou embasar um conteúdo com informações verificáveis.

Se o ChatGPT, Gemini e Claude são ótimos para criar e reescrever textos, o Perplexity brilha quando o objetivo é pesquisar e verificar fatos, tornando-se um excelente complemento às outras ferramentas que você já conhece.$m$,
$m$Uma pessoa quer saber as últimas mudanças em uma lei de trânsito e usa o Perplexity, que traz um resumo das mudanças com links para os sites oficiais onde a informação foi publicada, permitindo conferir a fonte.$m$,
$m$Acesse perplexity.ai e pesquise sobre um tema atual do seu interesse, conferindo pelo menos uma das fontes citadas na resposta.$m$,
$m$Pesquise informações atualizadas e confiáveis sobre [tema de interesse] e me traga um resumo com as principais fontes citadas, para eu poder conferir depois.$m$,
7, 5),

($m$00000000-0000-4000-8000-000000000002$m$::uuid, $m$Como escolher a ferramenta certa$m$, $m$Um guia prático para decidir qual IA usar em cada tipo de tarefa.$m$,
$m$Depois de conhecer ChatGPT, Gemini, Claude, Canva com IA e Perplexity, é natural se perguntar: qual delas eu devo usar? A boa notícia é que você não precisa escolher só uma.

Uma forma simples de decidir é pensar no objetivo da tarefa. Se você precisa pesquisar informações atualizadas e confiáveis, com fontes, o Perplexity é uma ótima escolha. Se você precisa escrever ou revisar um texto longo e bem estruturado, como um e-book ou relatório, o Claude costuma se destacar. Se você já usa bastante Gmail, Google Docs ou Drive, o Gemini se encaixa naturalmente na sua rotina. Se você quer uma ferramenta versátil, popular e fácil de usar para o dia a dia, o ChatGPT é uma excelente base. E se a tarefa envolve criar artes visuais, como posts e apresentações, o Canva com IA é o caminho mais direto.

Na prática, muitas pessoas usam mais de uma ferramenta dependendo da tarefa do dia. Por exemplo: pesquisar no Perplexity, escrever o texto no ChatGPT ou Claude, e depois criar a arte no Canva.

O mais importante não é decorar qual ferramenta é a melhor, mas sim praticar com elas até se sentir confortável, para escolher naturalmente a mais adequada em cada situação. Ao longo deste curso, você vai usar várias dessas ferramentas nos exercícios práticos, o que vai te ajudar a desenvolver esse instinto.$m$,
$m$Para criar um post de aniversário da empresa, uma pessoa pesquisa dados da empresa no Perplexity, escreve o texto da legenda no ChatGPT e cria a imagem final no Canva, combinando as três ferramentas em um único projeto.$m$,
$m$Escolha uma tarefa que você precisa fazer essa semana e decida, com base no que aprendeu, qual ferramenta de IA (ou combinação delas) faz mais sentido usar.$m$,
$m$Descreva a seguinte tarefa que eu preciso fazer: [descreva sua tarefa]. Com base nisso, me diga qual tipo de ferramenta de IA seria mais indicada e por quê.$m$,
9, 6),

-- Módulo 3: Aprendendo a criar prompts
($m$00000000-0000-4000-8000-000000000003$m$::uuid, $m$O que é um prompt$m$, $m$Entenda o que é um prompt e por que ele é a chave para bons resultados com IA.$m$,
$m$Prompt é o nome que se dá ao pedido, pergunta ou instrução que você escreve para a Inteligência Artificial. É basicamente tudo o que você digita na caixa de texto antes de apertar enviar.

A qualidade da resposta que a IA te dá depende diretamente da qualidade do prompt que você escreve. Isso porque a IA não lê pensamentos: ela só tem acesso ao que você escreveu, então quanto mais clara e completa for sua instrução, melhor será o resultado.

Muitas pessoas desistem de usar IA achando que ela não é tão boa assim, quando na verdade o problema estava no pedido feito, e não na ferramenta. Um prompt vago, como me ajude com marketing, tende a gerar uma resposta genérica e pouco útil. Já um prompt bem construído, com contexto e detalhes específicos, gera uma resposta muito mais próxima do que você realmente precisa.

A boa notícia é que escrever bons prompts é uma habilidade que qualquer pessoa pode aprender, sem precisar de conhecimento técnico. É parecido com aprender a fazer um pedido claro para outra pessoa: quanto mais informações relevantes você der, melhor a outra pessoa (ou a IA) vai entender o que você precisa.

Nas próximas aulas deste módulo, você vai aprender uma fórmula prática para estruturar seus prompts e evitar os erros mais comuns de quem está começando.$m$,
$m$Um prompt vago como me dê ideias de post pode gerar sugestões genéricas demais. Já me dê 3 ideias de post para Instagram sobre promoção de verão para uma loja de roupas femininas gera sugestões muito mais úteis e prontas para usar.$m$,
$m$Escreva um prompt bem vago para uma IA (como me ajude com meu negócio) e observe como a resposta é genérica. Guarde essa resposta para comparar mais tarde.$m$,
$m$Me explique, com suas próprias palavras, o que é um prompt e por que ele é importante para conseguir boas respostas de uma Inteligência Artificial.$m$,
6, 1),

($m$00000000-0000-4000-8000-000000000003$m$::uuid, $m$Por que pedidos genéricos geram respostas ruins$m$, $m$Veja na prática como a falta de detalhes no prompt prejudica a qualidade da resposta.$m$,
$m$Quando você faz um pedido genérico para uma IA, ela precisa adivinhar o que você realmente quer, e geralmente essa adivinhação resulta em uma resposta que serve para qualquer pessoa, mas não é perfeita para ninguém.

Isso acontece porque a IA foi treinada com uma quantidade gigantesca de textos diferentes, sobre praticamente todos os assuntos. Quando o pedido é vago, ela busca a resposta mais comum ou mais segura entre todas as possibilidades que conhece, o que costuma resultar em um texto sem personalidade, cheio de clichês e pouco útil para sua situação específica.

Por exemplo, se você pede escreva um post sobre alimentação saudável, a IA pode devolver um texto correto, mas extremamente parecido com milhares de outros posts sobre o mesmo tema que já existem por aí. Faltam elementos que tornariam aquele texto único: para quem é, qual é o tom de voz, qual é o objetivo, o que torna aquele produto ou serviço diferente.

A solução não é complicada: basta adicionar mais contexto e detalhes ao pedido. Quanto mais específico você for sobre o público, o objetivo, o tom e o formato desejado, mais a resposta vai se aproximar do que você realmente precisa, e menos genérica ela vai parecer.

Na próxima aula, você vai aprender uma fórmula simples para estruturar prompts completos, que vai te ajudar a nunca mais cair na armadilha do pedido genérico.$m$,
$m$Pedir escreva sobre marketing gera um texto raso e genérico. Já pedir escreva 5 dicas de marketing digital para uma cabeleireira autônoma que está começando a divulgar o próprio trabalho no Instagram gera um conteúdo específico e aplicável.$m$,
$m$Pegue o prompt genérico que você escreveu na aula anterior e reescreva adicionando pelo menos 3 detalhes específicos sobre seu contexto. Compare as duas respostas.$m$,
$m$Compare estes dois pedidos que vou te fazer e explique por que um gera uma resposta melhor que o outro: primeiro, me dê dicas de vendas; segundo, me dê 3 dicas de vendas para quem vende [seu produto] para [seu público], usando um tom de voz [amigável/formal].$m$,
7, 2),

($m$00000000-0000-4000-8000-000000000003$m$::uuid, $m$Fórmula do prompt eficiente$m$, $m$Aprenda a fórmula Função + Objetivo + Contexto + Público + Formato + Tom de voz para criar prompts completos.$m$,
$m$Agora que você já entende por que prompts vagos geram respostas ruins, vamos aprender uma fórmula simples e poderosa para montar prompts completos: Função + Objetivo + Contexto + Público + Formato + Tom de voz.

Função é o papel que você quer que a IA assuma, por exemplo aja como um redator publicitário ou aja como um professor de matemática. Isso ajuda a IA a vestir o personagem certo para a tarefa.

Objetivo é o que você quer alcançar com aquele texto ou tarefa, por exemplo meu objetivo é vender mais bolos personalizados ou meu objetivo é explicar um conceito difícil de forma simples.

Contexto é a informação de fundo que ajuda a IA a entender sua situação, por exemplo eu tenho uma confeitaria pequena que começou há 6 meses ou sou professora do 5º ano do ensino fundamental.

Público é quem vai ler ou receber aquele conteúdo, por exemplo mães de 25 a 40 anos que buscam bolos para festas infantis ou alunos de 10 anos que estão aprendendo frações.

Formato é como você quer receber a resposta, por exemplo em uma lista com 5 itens, em um texto de 3 parágrafos ou em uma tabela.

Tom de voz é o estilo da linguagem, por exemplo descontraído e divertido, formal e profissional ou simples, como se estivesse explicando para uma criança.

Usando essas 6 peças juntas, seu prompt fica completo e a resposta da IA fica muito mais precisa e pronta para usar.$m$,
$m$Prompt completo usando a fórmula: aja como um redator publicitário (Função). Meu objetivo é divulgar uma promoção de bolos de chocolate (Objetivo). Tenho uma confeitaria pequena que atende por encomenda (Contexto), voltada para mães de 25 a 40 anos que compram bolos para festas infantis (Público). Escreva em formato de legenda para Instagram, com até 5 linhas (Formato), em um tom de voz alegre e acolhedor (Tom de voz). O resultado é muito mais específico do que apenas pedir escreva um post sobre bolo.$m$,
$m$Escreva um prompt completo usando as 6 peças da fórmula (Função, Objetivo, Contexto, Público, Formato, Tom de voz) sobre um tema real do seu trabalho ou vida pessoal.$m$,
$m$Aja como [função desejada]. Meu objetivo é [objetivo desejado]. O contexto é: [conte sua situação]. O público é [descreva o público]. Quero a resposta em formato de [formato desejado], com um tom de voz [tom desejado].$m$,
12, 3),

($m$00000000-0000-4000-8000-000000000003$m$::uuid, $m$Como dar contexto$m$, $m$Aprenda a fornecer informações de fundo que tornam as respostas da IA muito mais precisas.$m$,
$m$O contexto é uma das partes mais importantes de um bom prompt, e por isso merece uma aula só para ela. Dar contexto significa contar para a IA a história de fundo da sua situação, para que ela entenda melhor o que você precisa.

Sem contexto, a IA responde com base em suposições genéricas. Com contexto, ela consegue personalizar a resposta para a sua realidade específica. Pense assim: se você pedir ajuda para um amigo sem explicar a situação direito, ele vai te dar um conselho genérico. Mas se você contar os detalhes, o conselho dele vai ser muito mais útil.

Algumas informações de contexto que costumam fazer diferença são: quem é você ou seu negócio, há quanto tempo existe, o que já foi tentado antes, quais recursos você tem disponíveis (tempo, dinheiro, equipe), e qual é o problema específico que você está tentando resolver.

Uma dica prática é imaginar que você está explicando sua situação para alguém que nunca ouviu falar de você. O que essa pessoa precisaria saber para te dar um bom conselho? Essas mesmas informações são o contexto que você deve incluir no prompt.

Você também pode dar contexto colando informações existentes, como um texto que você já escreveu, uma descrição do seu produto ou até uma lista de características do seu público. Quanto mais rico for o contexto, mais a resposta da IA vai parecer feita sob medida para você.$m$,
$m$Ao invés de perguntar como aumentar minhas vendas, dar o contexto tenho uma loja online de roupas femininas, vendo há 8 meses, meu maior desafio é o abandono de carrinho, e meu público são mulheres de 20 a 35 anos gera sugestões muito mais direcionadas.$m$,
$m$Escreva um parágrafo de contexto sobre seu negócio, trabalho ou projeto pessoal (quem você é, há quanto tempo, qual o maior desafio) e use esse texto como base em um prompt para uma IA.$m$,
$m$Considere o seguinte contexto sobre mim: [conte quem você é, o que faz, há quanto tempo e qual seu maior desafio atual]. Com base nisso, me dê 3 sugestões práticas para resolver esse desafio.$m$,
9, 4),

($m$00000000-0000-4000-8000-000000000003$m$::uuid, $m$Como melhorar uma resposta$m$, $m$Aprenda técnicas de ajuste e refinamento para transformar uma resposta boa em uma resposta ótima.$m$,
$m$Muitas pessoas acham que precisam acertar o prompt perfeito na primeira tentativa, mas na verdade, conversar com uma IA é um processo de ida e volta, parecido com dar feedback para um colega de trabalho.

Depois de receber uma primeira resposta, você pode (e deve) pedir ajustes. Algumas formas úteis de refinar uma resposta são: pedir para deixar mais curto ou mais longo, pedir para mudar o tom de voz (mais formal, mais descontraído), pedir para simplificar a linguagem, pedir exemplos concretos, pedir para focar em um ponto específico que ficou fraco, ou pedir para reescrever de um jeito totalmente diferente.

Como a IA mantém o contexto da conversa (lembra do que vimos na aula sobre o ChatGPT), você não precisa reescrever tudo do zero: basta dizer o que quer ajustar, como deixe esse texto mais curto e mais direto ou troque o exemplo por um mais relacionado a vendas online.

Uma técnica muito eficiente é pedir para a própria IA avaliar sua resposta: você pode perguntar o que poderia melhorar nesse texto e usar as sugestões dela para refinar ainda mais. É como ter um revisor disponível a qualquer momento.

Essa mentalidade de refinamento é o segredo de quem usa IA com maestria: ao invés de aceitar a primeira resposta ou desistir se ela não veio perfeita, a pessoa vai ajustando aos poucos até chegar em um resultado realmente satisfatório.$m$,
$m$Depois de receber um texto sobre uma promoção que ficou bom mas muito longo, a pessoa pede deixe esse texto com metade do tamanho, mantendo só as informações mais importantes, e recebe uma versão muito mais direta e pronta para publicar.$m$,
$m$Pegue uma resposta que uma IA te deu em uma aula anterior e peça pelo menos 2 ajustes (por exemplo, tom mais informal e um exemplo mais concreto).$m$,
$m$Essa resposta que você me deu ficou boa, mas quero que você ajuste o seguinte: [descreva o ajuste, por exemplo deixe mais curto ou use um tom mais descontraído]. Reescreva mantendo as ideias principais.$m$,
8, 5),

($m$00000000-0000-4000-8000-000000000003$m$::uuid, $m$Erros que iniciantes devem evitar$m$, $m$Conheça os erros mais comuns de quem está começando a usar IA e como evitá-los.$m$,
$m$Depois de aprender a estrutura de um bom prompt, vale a pena conhecer os erros mais comuns que iniciantes cometem, para evitá-los desde já.

O primeiro erro é ser vago demais, como já vimos, pedindo coisas como me ajude com meu negócio sem nenhum detalhe. O segundo erro é aceitar a primeira resposta sem revisar, copiando e colando direto sem checar se as informações fazem sentido ou se há erros.

O terceiro erro é não dar exemplos quando eles ajudariam. Se você tem um estilo específico em mente, mostrar um exemplo (um post que você gostou, um texto de referência) ajuda muito mais do que apenas descrever com palavras.

O quarto erro é desistir muito rápido, achando que a IA não serve depois de uma ou duas tentativas, quando na verdade bastaria ajustar o prompt ou pedir um refinamento, como vimos na aula anterior.

O quinto erro é confiar cegamente em informações factuais sem verificar, especialmente números, datas, leis ou dados estatísticos, que a IA pode errar com muita confiança.

Por fim, o sexto erro é não personalizar o resultado final. Um texto gerado por IA deve ser o ponto de partida, não o produto final: sempre vale a pena revisar, ajustar palavras e adicionar sua própria voz antes de usar algo publicamente.

Conhecendo esses erros, você já está à frente da maioria das pessoas que estão começando a usar Inteligência Artificial agora.$m$,
$m$Uma pessoa recebe uma resposta genérica, mas ao invés de desistir, ela pede seja mais específico e dê um exemplo prático, e a segunda resposta já fica muito mais útil e aplicável.$m$,
$m$Releia os prompts que você escreveu nas aulas anteriores deste módulo e identifique se cometeu algum desses 6 erros. Reescreva um deles corrigindo o erro encontrado.$m$,
$m$Analise este prompt que eu escrevi: [cole um prompt seu] e me diga se ele comete algum erro comum de iniciante, como falta de contexto, de exemplo ou de especificidade. Sugira uma versão melhorada.$m$,
8, 6),

-- Módulo 4: Produtos e serviços com IA
($m$00000000-0000-4000-8000-000000000004$m$::uuid, $m$Conteúdo para redes sociais$m$, $m$Aprenda a criar legendas, ideias de post e calendários de conteúdo com ajuda da IA.$m$,
$m$Criar conteúdo para redes sociais de forma consistente é um dos maiores desafios de quem tem um negócio ou trabalha com divulgação pessoal. A IA pode ser uma grande aliada nessa tarefa, economizando tempo e ajudando a manter a criatividade em dia.

Você pode usar a IA para gerar ideias de posts, escrever legendas completas, criar roteiros para vídeos curtos (como Reels e TikTok), sugerir hashtags relevantes e até montar um calendário de publicações para o mês inteiro.

O segredo para bons resultados aqui é usar a fórmula que aprendemos no módulo anterior: dar a função (por exemplo, aja como um social media), o objetivo (vender mais, engajar mais, educar o público), o contexto sobre seu negócio, o público que você quer atingir, o formato (legenda, roteiro, lista de ideias) e o tom de voz da sua marca.

Uma prática muito eficiente é pedir várias ideias de uma vez, e depois escolher e refinar as melhores, ao invés de pedir apenas uma ideia por vez. Isso te dá mais opções para escolher o que mais combina com sua marca.

Lembre-se sempre de revisar e personalizar o conteúdo antes de publicar, ajustando a linguagem para soar como você mesmo, e conferindo se todas as informações (preços, datas, promoções) estão corretas antes de divulgar para o público.$m$,
$m$Uma nutricionista pede 5 ideias de post educativo sobre alimentação saudável para o público de mães com filhos pequenos, recebe as sugestões, escolhe 2 delas e pede para transformar em legendas completas com call to action no final.$m$,
$m$Peça para uma IA gerar 5 ideias de post para as suas redes sociais (pessoais ou do seu negócio) e escolha a melhor para transformar em uma legenda completa.$m$,
$m$Aja como um social media especialista em [seu nicho]. Meu objetivo é [engajar, vender, educar]. Meu público é [descreva seu público]. Crie 5 ideias de post para Instagram com um tom de voz [descreva o tom], incluindo uma sugestão de legenda curta para cada ideia.$m$,
10, 1),

($m$00000000-0000-4000-8000-000000000004$m$::uuid, $m$E-books$m$, $m$Aprenda o passo a passo para planejar e escrever um e-book com apoio da IA.$m$,
$m$Um e-book é um material digital, geralmente em PDF, que pode ser usado para educar, gerar autoridade ou até ser vendido como produto digital. Criar um e-book do zero pode parecer trabalhoso, mas a IA pode acelerar muito esse processo.

O primeiro passo é definir o tema e o público do e-book: sobre o que ele vai falar e para quem ele é útil. Depois, você pode pedir para a IA criar um sumário, ou seja, a lista de capítulos e o que cada um vai abordar, com base no tema e no público que você definiu.

Com o sumário pronto, o próximo passo é escrever capítulo por capítulo, pedindo para a IA desenvolver cada seção com base no que foi planejado. É importante fazer isso aos poucos, revisando cada parte, ao invés de pedir o e-book inteiro de uma vez, porque isso garante mais qualidade e coerência no resultado final.

Após ter todo o conteúdo escrito, vale revisar o texto completo, ajustando a linguagem para soar como sua voz e adicionando exemplos ou experiências pessoais que só você pode contar, o que torna o material único e não apenas um texto genérico gerado por IA.

Por fim, para a parte visual, você pode usar o Canva (que vimos no módulo 2) para diagramar o e-book de forma bonita, transformando o texto em um material profissional e pronto para compartilhar ou vender.$m$,
$m$Uma personal trainer quer criar um e-book sobre alongamento para iniciantes. Ela pede um sumário com 6 capítulos para uma IA, revisa e ajusta a ordem, e depois pede para desenvolver cada capítulo separadamente, revisando o conteúdo antes de passar para o próximo.$m$,
$m$Escolha um tema que você domina e peça para uma IA sugerir um sumário de e-book com 5 a 7 capítulos sobre esse tema, pensando em um público específico.$m$,
$m$Aja como um especialista em [seu tema de domínio]. Crie um sumário de e-book com 6 capítulos sobre [tema], voltado para [descreva o público], que ainda não sabe nada sobre o assunto. Para cada capítulo, escreva uma frase explicando o que será abordado.$m$,
12, 2),

($m$00000000-0000-4000-8000-000000000004$m$::uuid, $m$Apresentações$m$, $m$Use IA para estruturar e escrever o conteúdo de apresentações de forma rápida e organizada.$m$,
$m$Criar uma apresentação de slides, seja para uma reunião de trabalho, uma aula ou uma proposta comercial, pode tomar bastante tempo, principalmente na hora de organizar as ideias. A IA pode ajudar bastante nessa etapa de estruturação.

O primeiro passo é pedir para a IA criar um roteiro da apresentação: quantos slides, o que cada slide deve conter e em que ordem as informações devem aparecer para fazer sentido para quem está assistindo. Um bom roteiro segue uma lógica, como introdução do problema, apresentação da solução, benefícios e conclusão com próximos passos.

Com o roteiro pronto, você pode pedir para a IA desenvolver o texto de cada slide, sempre lembrando que slides devem ter pouco texto e frases curtas, já que quem apresenta fala os detalhes e o slide serve como apoio visual, não como um texto para ser lido na íntegra.

Depois de ter o conteúdo pronto, ferramentas como o Canva (que também tem recursos de IA) podem transformar esse roteiro em uma apresentação visualmente bonita, com poucos cliques, usando modelos prontos.

Uma dica extra é pedir para a IA sugerir também possíveis perguntas que a plateia pode fazer, e como respondê-las, o que ajuda muito na hora de se sentir mais preparado e seguro durante a apresentação.$m$,
$m$Um vendedor precisa apresentar um novo produto para um cliente. Ele pede para uma IA criar um roteiro de 8 slides, incluindo problema, solução, diferenciais e um slide de proposta comercial, e depois usa o Canva para deixar visualmente atrativo.$m$,
$m$Pense em uma apresentação que você precisa fazer (real ou hipotética) e peça para uma IA criar um roteiro com a quantidade de slides e o conteúdo de cada um.$m$,
$m$Aja como um consultor de apresentações. Crie um roteiro de apresentação com 8 slides sobre [tema da apresentação], para o público [descreva quem vai assistir], com o objetivo de [convencer, ensinar, vender, informar]. Para cada slide, escreva um título e até 3 bullet points.$m$,
10, 3),

($m$00000000-0000-4000-8000-000000000004$m$::uuid, $m$Descrições de produtos$m$, $m$Aprenda a criar descrições de produtos persuasivas e completas usando IA.$m$,
$m$Uma boa descrição de produto pode ser a diferença entre uma venda concretizada e um cliente que desiste da compra. A IA é uma ferramenta poderosa para criar descrições completas, persuasivas e adaptadas para diferentes canais de venda, como marketplaces, lojas virtuais ou redes sociais.

Para gerar uma boa descrição, é importante fornecer à IA as características técnicas do produto (tamanho, material, cor, funcionalidades), os benefícios que ele proporciona (o que o cliente ganha ao usar), e informações sobre o público-alvo (quem compra esse tipo de produto e por quê).

Uma boa descrição geralmente segue uma estrutura: começa despertando o interesse ou apresentando o problema que o produto resolve, depois lista os principais benefícios e características, e termina com uma chamada para ação, incentivando a compra.

Você também pode pedir versões diferentes da mesma descrição para canais diferentes: uma versão mais curta e direta para um anúncio, e uma versão mais detalhada para a página do produto em uma loja virtual, já que cada canal tem um espaço e um estilo de leitura diferente.

Outra dica valiosa é pedir para a IA gerar diferentes variações da mesma descrição, testando abordagens diferentes (uma mais emocional, outra mais técnica), para você escolher a que mais combina com sua marca e seu público.$m$,
$m$Uma loja de artesanato vende um cesto de vime feito à mão. Ao invés de escrever apenas cesto de vime, 30cm, a pessoa usa IA para criar uma descrição completa destacando a produção artesanal, a durabilidade e sugerindo usos práticos, o que torna o produto mais desejável.$m$,
$m$Escolha um produto (real ou que você gostaria de vender) e peça para uma IA criar uma descrição completa, incluindo características, benefícios e uma chamada para ação.$m$,
$m$Aja como um redator especialista em vendas. Crie uma descrição persuasiva para o seguinte produto: [descreva o produto, suas características e materiais]. O público-alvo é [descreva o público]. Inclua os principais benefícios e termine com uma chamada para ação.$m$,
9, 4),

($m$00000000-0000-4000-8000-000000000004$m$::uuid, $m$Currículos e cartas de apresentação$m$, $m$Use IA para criar ou melhorar currículos e cartas de apresentação personalizadas para cada vaga.$m$,
$m$Um currículo bem escrito e uma boa carta de apresentação podem fazer toda a diferença na busca por um emprego. A IA pode ajudar tanto a organizar as informações quanto a escrever de forma mais profissional e atrativa para os recrutadores.

Para montar um bom currículo com ajuda de IA, o primeiro passo é reunir suas informações: experiências profissionais, formação, habilidades e conquistas. Depois, você pode pedir para a IA organizar esse conteúdo de forma clara, destacando os pontos mais relevantes para a vaga que você deseja, e usando verbos de ação (como liderei, desenvolvi, aumentei) que tornam o texto mais impactante.

Uma técnica muito eficiente é colar a descrição da vaga que você quer e pedir para a IA adaptar seu currículo ou destacar quais das suas experiências são mais relevantes para aquela oportunidade específica, já que currículos personalizados para cada vaga costumam ter mais sucesso do que um currículo genérico enviado para todas as vagas.

Para a carta de apresentação, você pode pedir para a IA escrever um texto curto (geralmente até um parágrafo) que conecte sua experiência com o que a empresa está buscando, sempre revisando depois para garantir que o texto soa como você mesmo e não como um texto robótico e genérico.

Lembre-se: a IA ajuda a organizar e melhorar a redação, mas as informações e conquistas precisam ser verdadeiras e suas.$m$,
$m$Uma pessoa que está migrando de carreira cola a descrição de uma vaga de atendimento ao cliente e pede para a IA destacar, no currículo, quais experiências anteriores (mesmo de áreas diferentes) são mais relevantes para aquela vaga específica.$m$,
$m$Cole a descrição de uma vaga de emprego (real ou que você tenha interesse) em uma IA e peça sugestões de como adaptar seu currículo ou escrever uma carta de apresentação para essa vaga.$m$,
$m$Aja como um especialista em recrutamento e seleção. Aqui está a descrição da vaga: [cole a descrição da vaga]. Aqui estão minhas experiências: [liste suas experiências e habilidades]. Escreva uma carta de apresentação curta conectando meu perfil com o que a vaga pede.$m$,
10, 5),

($m$00000000-0000-4000-8000-000000000004$m$::uuid, $m$Documentos e relatórios$m$, $m$Aprenda a usar IA para redigir, organizar e resumir documentos e relatórios de trabalho.$m$,
$m$No ambiente de trabalho, é comum precisar escrever relatórios, atas de reunião, e-mails formais ou outros documentos que exigem clareza e organização. A IA pode agilizar bastante essas tarefas, principalmente para quem não se sente confortável escrevendo de forma mais formal.

Para relatórios, você pode fornecer as informações principais (dados, resultados, observações) em tópicos soltos e pedir para a IA organizar tudo em um texto corrido, bem estruturado, com introdução, desenvolvimento e conclusão. Isso é muito mais rápido do que escrever o relatório inteiro do zero.

Para atas de reunião, você pode colar suas anotações (mesmo que desorganizadas) e pedir para a IA transformar em uma ata formal, com os principais pontos discutidos, decisões tomadas e próximos passos claramente listados.

A IA também é excelente para resumir documentos longos: se você recebeu um relatório extenso de outra pessoa e precisa entender rapidamente os pontos principais, pode colar o texto e pedir um resumo em tópicos, economizando um tempo enorme de leitura.

Um cuidado importante aqui: documentos de trabalho muitas vezes contêm informações confidenciais da empresa. Antes de colar qualquer conteúdo sensível em uma IA, verifique as políticas da sua empresa sobre o uso dessas ferramentas, para não expor informações que não deveriam ser compartilhadas externamente.$m$,
$m$Depois de uma reunião de equipe, uma pessoa organiza suas anotações soltas em tópicos e pede para a IA transformar em uma ata formal, com seção de decisões tomadas e responsáveis por cada próximo passo, pronta para enviar ao time.$m$,
$m$Pegue anotações soltas de uma reunião ou conversa recente (ou crie um exemplo fictício) e peça para uma IA organizar em um documento formal e estruturado.$m$,
$m$Organize as seguintes anotações em um relatório formal, com introdução, desenvolvimento e conclusão: [cole suas anotações ou informações soltas]. Use uma linguagem profissional e clara.$m$,
10, 6),

($m$00000000-0000-4000-8000-000000000004$m$::uuid, $m$Materiais educativos$m$, $m$Use IA para criar aulas, exercícios e materiais didáticos adaptados a diferentes níveis de aprendizado.$m$,
$m$Se você ensina algo, seja como professor, instrutor de curso ou até para treinar novos funcionários, a IA pode ser uma grande parceira na criação de materiais educativos claros e bem estruturados.

Você pode pedir para a IA criar planos de aula, explicando um tema passo a passo, adaptando a linguagem para o nível de conhecimento do público (por exemplo, explique como se fosse para uma criança de 8 anos ou explique em nível avançado para universitários).

Outra aplicação muito útil é a criação de exercícios e questões de fixação: você pode fornecer o conteúdo estudado e pedir para a IA elaborar perguntas de múltipla escolha, exercícios práticos ou estudos de caso que ajudem o aluno a fixar o aprendizado.

A IA também é ótima para criar analogias e exemplos que tornam conceitos difíceis mais fáceis de entender. Se um assunto está complicado de explicar, você pode pedir me dê 3 analogias simples para explicar esse conceito, o que ajuda bastante na hora de ensinar.

Para quem cria cursos online, a IA pode ajudar a estruturar o conteúdo em módulos e aulas, sugerir a ordem mais lógica de ensino, e até criar resumos e materiais de apoio complementares, tornando todo o processo de criação de um curso muito mais rápido e organizado.$m$,
$m$Um instrutor de curso de informática básica pede para a IA criar 5 questões de múltipla escolha sobre o uso do e-mail, adequadas para alunos idosos que estão aprendendo a usar computador pela primeira vez.$m$,
$m$Escolha um assunto que você domina e peça para uma IA criar um mini plano de aula de 15 minutos sobre esse tema, adaptado para um público específico (crianças, iniciantes, idosos, etc).$m$,
$m$Aja como um professor especialista em [tema]. Crie um plano de aula de 15 minutos sobre [assunto específico], adaptado para [descreva o público, por exemplo iniciantes completos ou crianças de 10 anos]. Inclua uma explicação simples, um exemplo prático e 2 perguntas de fixação.$m$,
11, 7),

($m$00000000-0000-4000-8000-000000000004$m$::uuid, $m$Planejamento de conteúdo$m$, $m$Aprenda a usar IA para organizar um calendário de conteúdo estratégico ao longo do tempo.$m$,
$m$Criar conteúdo esporadicamente, sem planejamento, costuma gerar resultados inconsistentes. Um calendário de conteúdo ajuda a manter regularidade e estratégia, e a IA pode facilitar muito essa etapa de organização.

O primeiro passo é definir os objetivos gerais do conteúdo: você quer educar, vender, entreter ou construir autoridade? Com esse objetivo em mente, você pode pedir para a IA sugerir temas relevantes para seu público ao longo de um período, como um mês inteiro.

Uma boa prática é pedir para a IA distribuir diferentes tipos de conteúdo ao longo da semana, misturando, por exemplo, conteúdo educativo, conteúdo de bastidores, depoimentos e conteúdo comercial, para que a comunicação não fique repetitiva ou cansativa para quem acompanha.

Você também pode aproveitar datas comemorativas e sazonalidades relevantes para o seu nicho, pedindo para a IA sugerir pautas relacionadas a essas datas com antecedência, o que ajuda a se planejar melhor do que criar conteúdo de última hora.

Depois de ter o calendário com os temas definidos, você pode ir, aula após aula deste módulo, aplicando o que já aprendeu (legendas, roteiros, descrições) para transformar cada tema do calendário em conteúdo pronto, criando um fluxo de trabalho organizado que economiza tempo e mantém a consistência da sua presença online.$m$,
$m$Uma nutricionista pede para a IA criar um calendário de 4 semanas com temas variados: uma semana de dicas rápidas, uma de mitos e verdades, uma de receitas saudáveis e uma de depoimentos de pacientes, equilibrando conteúdo educativo e comercial.$m$,
$m$Peça para uma IA criar um calendário de conteúdo de 2 semanas para suas redes sociais, com temas variados e distribuídos entre os dias.$m$,
$m$Aja como um estrategista de conteúdo. Crie um calendário de conteúdo de 2 semanas para [seu nicho ou negócio], com o objetivo de [educar, vender, engajar]. Alterne entre diferentes tipos de conteúdo (educativo, comercial, bastidores) e sugira um tema por dia útil.$m$,
10, 8),

($m$00000000-0000-4000-8000-000000000004$m$::uuid, $m$Templates$m$, $m$Aprenda a criar modelos reutilizáveis de prompts e textos para agilizar seu trabalho no dia a dia.$m$,
$m$Depois de criar vários conteúdos com IA, você vai perceber que muitas tarefas se repetem, seguindo uma estrutura parecida. É aí que entram os templates, ou seja, modelos prontos que você pode reutilizar sempre que precisar, economizando tempo na hora de escrever o prompt.

Um template de prompt é basicamente uma versão com espaços em branco de um pedido que funcionou bem para você. Por exemplo, se você descobriu um prompt de legenda de Instagram que gerou ótimos resultados, pode transformar as partes específicas (o tema, o produto, a promoção) em espaços que você preenche a cada nova utilização, mantendo a estrutura que já deu certo.

Você pode criar templates para as tarefas mais recorrentes do seu trabalho: respostas para dúvidas frequentes de clientes, legendas de posts, descrições de produtos novos, ou até respostas de atendimento. Ter esses modelos prontos e organizados (por exemplo, em um documento ou bloco de notas) faz você ganhar muito tempo no dia a dia, porque não precisa reinventar o prompt toda vez.

Uma dica extra é pedir para a própria IA te ajudar a transformar um prompt que funcionou bem em um template reutilizável, identificando quais partes deveriam virar espaços em branco para você preencher depois. Isso torna todo o seu processo de criação de conteúdo muito mais rápido e consistente ao longo do tempo.$m$,
$m$Depois de escrever várias descrições de produtos parecidas, uma lojista cria um template fixo: crie uma descrição para [nome do produto], feito de [material], que serve para [uso], com um tom [tom de voz], que ela reutiliza toda vez que cadastra um produto novo.$m$,
$m$Escolha um dos prompts que você criou nas aulas anteriores deste curso e transforme-o em um template, substituindo as partes específicas por colchetes, como [assim].$m$,
$m$Aqui está um prompt que funcionou bem para mim: [cole um prompt que você já usou]. Me ajude a transformar esse prompt em um template reutilizável, identificando quais partes devem virar espaços em branco marcados com colchetes.$m$,
8, 9),

($m$00000000-0000-4000-8000-000000000004$m$::uuid, $m$Produtos digitais$m$, $m$Descubra ideias e o processo de criação de produtos digitais completos usando IA como apoio.$m$,
$m$Produtos digitais são materiais que podem ser vendidos online sem precisar de estoque físico, como e-books, planilhas, templates, minicursos, checklists e guias em PDF. A IA pode participar de praticamente todas as etapas da criação desses produtos, tornando esse processo acessível mesmo para quem nunca criou um produto digital antes.

O primeiro passo é identificar um problema real que seu público enfrenta e que você tem conhecimento para ajudar a resolver. A IA pode te ajudar a validar e refinar essa ideia, sugerindo formatos possíveis (um e-book é melhor, ou uma planilha resolveria mais rápido o problema?) e ajudando a estruturar o conteúdo do zero.

Com a ideia definida, você usa as habilidades que já praticou neste módulo: pedir um sumário ou estrutura do produto (como fizemos com o e-book), desenvolver o conteúdo capítulo por capítulo ou seção por seção, e usar ferramentas como o Canva para a parte visual e de diagramação.

Depois do produto pronto, a IA também pode ajudar na etapa de divulgação, criando a descrição de venda, posts para redes sociais anunciando o lançamento e até respostas para perguntas frequentes que os clientes podem ter antes de comprar.

Criar um produto digital não precisa ser um processo demorado ou caro: com apoio da IA em cada etapa, é possível ir da ideia ao produto pronto para vender em poucos dias, mesmo sem experiência prévia.$m$,
$m$Uma organizadora profissional cria uma planilha de planejamento de mudança de casa. Ela usa IA para estruturar as categorias da planilha, escrever um guia explicativo em PDF que acompanha o produto, e criar os posts de lançamento para vender no Instagram.$m$,
$m$Pense em um problema que você sabe resolver bem e peça para uma IA sugerir 3 formatos possíveis de produto digital (e-book, planilha, checklist, etc) para ajudar outras pessoas com esse mesmo problema.$m$,
$m$Eu tenho conhecimento sobre [seu tema de domínio] e quero criar um produto digital para vender. Meu público é [descreva o público]. Sugira 3 formatos de produto digital possíveis (e-book, planilha, checklist, minicurso) e explique qual problema cada um resolveria melhor.$m$,
12, 10),

-- Módulo 5: Primeiro projeto
($m$00000000-0000-4000-8000-000000000005$m$::uuid, $m$Como escolher uma ideia$m$, $m$Aprenda critérios simples para escolher uma boa ideia de projeto para começar a praticar.$m$,
$m$Chegou a hora de aplicar tudo o que você aprendeu no curso em um projeto real, do começo ao fim. E o primeiro passo de qualquer projeto é escolher uma boa ideia para trabalhar.

Uma boa ideia para o seu primeiro projeto não precisa ser grandiosa ou perfeita. Na verdade, o ideal é escolher algo simples, relacionado a algo que você já conhece bem, como seu trabalho atual, um hobby, ou um problema que você mesmo já enfrentou e sabe como resolver.

Alguns critérios úteis para escolher a ideia: primeiro, escolha algo que você tenha genuíno interesse, porque isso vai te manter motivado até o final. Segundo, escolha algo que seja possível de concluir em poucos dias, para não desanimar no meio do caminho. Terceiro, pense em quem seria beneficiado por esse projeto: pode ser você mesmo, seus clientes, seus alunos ou até sua família.

Se você não tem uma ideia clara ainda, use a própria IA para brainstorm: conte sobre suas habilidades, interesses e o tempo que tem disponível, e peça sugestões de pequenos projetos que você poderia realizar usando o que aprendeu neste curso, como um post estratégico, um pequeno e-book, uma apresentação ou um material educativo.

Lembre-se: o objetivo deste módulo não é criar o projeto perfeito, e sim praticar todo o processo, do início até o compartilhamento final, ganhando confiança para aplicar isso em projetos maiores no futuro.$m$,
$m$Uma pessoa que trabalha como assistente administrativo, mas gosta de organização financeira pessoal, decide criar como projeto um pequeno guia em PDF com dicas de como organizar as finanças usando apenas o celular, algo simples de concluir em poucos dias.$m$,
$m$Liste 3 possíveis ideias de projeto que você poderia criar usando IA e escolha uma delas, justificando por que essa é a melhor opção para começar.$m$,
$m$Eu tenho interesse e conhecimento em [seus interesses ou habilidades] e tenho aproximadamente [tempo disponível, ex: 3 horas por semana] para dedicar a um projeto. Sugira 3 ideias de pequenos projetos que eu poderia criar com apoio de Inteligência Artificial, que sejam simples de concluir.$m$,
8, 1),

($m$00000000-0000-4000-8000-000000000005$m$::uuid, $m$Como definir o público$m$, $m$Aprenda a identificar claramente para quem o seu projeto é destinado.$m$,
$m$Depois de escolher a ideia do seu projeto, o próximo passo essencial é definir com clareza para quem esse projeto é destinado. Um projeto feito para todo mundo geralmente acaba não sendo realmente útil para ninguém específico.

Definir o público significa responder perguntas como: quem é essa pessoa (idade, ocupação, momento de vida), qual problema ou desejo ela tem que seu projeto ajuda a resolver, e o que ela já sabe (ou não sabe) sobre o assunto do seu projeto. Quanto mais claro for esse retrato, mais fácil fica tomar decisões nas próximas etapas, como a linguagem usada e o nível de detalhe do conteúdo.

Uma técnica simples é imaginar uma pessoa real (mesmo que fictícia) que representa seu público. Por exemplo, ao invés de pensar em mulheres interessadas em finanças, pense em Marta, 35 anos, mãe de dois filhos, que trabalha fora e sente que o dinheiro nunca sobra no fim do mês, mas não tem tempo para estudar sobre investimentos complexos. Esse nível de detalhe ajuda a criar um projeto muito mais direcionado.

Você pode usar a IA como parceira nessa etapa, descrevendo sua ideia de projeto e pedindo ajuda para detalhar o perfil do público ideal, incluindo suas dores, desejos e o nível de conhecimento prévio sobre o tema.$m$,
$m$Ao invés de criar um material genérico sobre alimentação saudável, a pessoa define o público como pais de primeira viagem que não sabem como introduzir alimentos sólidos para bebês de 6 meses, o que torna o conteúdo muito mais específico e útil.$m$,
$m$Descreva, em um parágrafo, o público ideal para o projeto que você escolheu na aula anterior, incluindo idade, momento de vida, e o principal problema ou desejo dessa pessoa.$m$,
$m$Meu projeto é sobre [descreva sua ideia de projeto]. Me ajude a definir o público ideal para esse projeto, descrevendo uma pessoa fictícia representativa, com idade, contexto de vida, principal problema ou desejo relacionado ao tema, e o nível de conhecimento prévio que ela provavelmente tem.$m$,
8, 2),

($m$00000000-0000-4000-8000-000000000005$m$::uuid, $m$Como criar a estrutura$m$, $m$Aprenda a organizar as etapas e partes do seu projeto antes de começar a produzir o conteúdo.$m$,
$m$Com a ideia e o público definidos, é hora de criar a estrutura do seu projeto, ou seja, organizar quais partes ele vai ter e em que ordem elas vão aparecer, antes de começar a escrever o conteúdo de fato.

Assim como fizemos com o e-book e a apresentação no módulo anterior, ter uma estrutura clara antes de produzir o conteúdo evita retrabalho e deixa o resultado final muito mais organizado e fácil de seguir para quem for consumir.

A estrutura vai depender do tipo de projeto escolhido: se for um material escrito, pode ser uma lista de tópicos ou capítulos; se for um post ou uma série de posts, pode ser a sequência de mensagens que você quer passar; se for uma apresentação, pode ser a lista de slides.

Uma boa estrutura geralmente segue uma lógica de progressão: começa despertando interesse ou apresentando o problema, desenvolve o conteúdo principal de forma organizada (do mais simples para o mais complexo, ou na ordem que faz mais sentido para o público entender), e termina com uma conclusão clara, que pode incluir um próximo passo para quem consumiu o conteúdo.

Use a IA para te ajudar a montar essa estrutura, descrevendo sua ideia e o público definido, e pedindo sugestões de organização. Depois, revise a sugestão e ajuste com base no que você considera mais importante transmitir.$m$,
$m$Para o guia de finanças pessoais, a pessoa pede para a IA sugerir uma estrutura e recebe: 1) Por que organizar as finanças importa, 2) Como mapear seus gastos, 3) Como criar um orçamento simples, 4) Ferramentas gratuitas para ajudar, 5) Como manter o hábito. Essa estrutura organiza o raciocínio antes de escrever qualquer parágrafo.$m$,
$m$Peça para uma IA sugerir uma estrutura (tópicos, capítulos ou etapas) para o projeto que você já definiu, considerando o público que você descreveu na aula anterior.$m$,
$m$Meu projeto é sobre [descreva seu projeto] e o público é [descreva o público que você definiu]. Sugira uma estrutura organizada (lista de tópicos, capítulos ou etapas, na ordem ideal) para desenvolver esse projeto de forma clara e progressiva.$m$,
9, 3),

($m$00000000-0000-4000-8000-000000000005$m$::uuid, $m$Como produzir a primeira versão$m$, $m$Coloque a mão na massa e crie a primeira versão completa do seu projeto com apoio da IA.$m$,
$m$Com a estrutura definida, chegou o momento de produzir a primeira versão completa do seu projeto. Essa etapa é sobre colocar a mão na massa, sem se preocupar em fazer tudo perfeito logo de cara.

Uma dica importante: desenvolva o conteúdo parte por parte, seguindo a estrutura que você já definiu, ao invés de tentar gerar tudo de uma vez com um único prompt gigante. Isso permite revisar e ajustar cada seção antes de avançar para a próxima, mantendo mais controle e qualidade sobre o resultado.

Use tudo o que aprendeu no módulo 3 sobre como criar bons prompts: dê a função para a IA, o objetivo de cada parte específica, o contexto necessário, o público já definido, o formato desejado e o tom de voz. Quanto mais você praticou isso nas aulas anteriores, mais natural esse processo vai ficar agora.

Lembre-se também da lição sobre refinamento: se uma parte não ficou boa na primeira tentativa, não desista, peça ajustes específicos até chegar em um resultado satisfatório antes de seguir para a próxima etapa.

O objetivo aqui não é a perfeição, e sim ter uma primeira versão completa do início ao fim. É muito mais fácil melhorar algo que já existe do que começar do zero, então essa primeira versão, mesmo que ainda precise de ajustes, já é uma grande conquista no seu processo de aprendizado.$m$,
$m$Seguindo a estrutura de 5 tópicos definida na aula anterior, a pessoa pede para a IA desenvolver cada tópico separadamente, um de cada vez, revisando e ajustando antes de passar para o próximo, até ter o guia completo com todas as 5 seções escritas.$m$,
$m$Usando a estrutura que você criou na aula anterior, produza agora a primeira versão completa do seu projeto, desenvolvendo cada parte com apoio de uma IA.$m$,
$m$Aja como [função relevante para seu projeto]. Vamos desenvolver a primeira parte do meu projeto sobre [tema do projeto], especificamente a seção sobre [primeiro tópico da sua estrutura]. O público é [descreva o público] e o tom deve ser [tom de voz desejado].$m$,
15, 4),

($m$00000000-0000-4000-8000-000000000005$m$::uuid, $m$Como revisar$m$, $m$Aprenda a revisar criticamente o conteúdo gerado, garantindo qualidade e personalidade própria.$m$,
$m$Ter a primeira versão do projeto pronta é uma grande vitória, mas o trabalho ainda não acabou: a etapa de revisão é o que separa um conteúdo mediano de um conteúdo realmente bom e pronto para ser compartilhado.

O primeiro passo da revisão é ler tudo com calma, do início ao fim, como se você fosse a pessoa do público que definiu lá na segunda aula deste módulo. Faz sentido? Está claro? Falta alguma informação importante?

O segundo passo é conferir todos os fatos, números, nomes e informações específicas que aparecem no conteúdo, já que, como vimos no módulo 1, a IA pode cometer erros ou inventar informações que parecem verdadeiras.

O terceiro passo é personalizar o texto, adicionando sua própria voz, experiências pessoais ou exemplos que só você poderia dar. Isso é o que transforma um conteúdo genérico gerado por IA em algo único e autêntico, com a sua marca.

Você também pode usar a IA como parceira de revisão: peça para ela apontar trechos confusos, repetitivos ou que poderiam ser melhorados, e use essas sugestões com senso crítico, decidindo o que faz sentido aplicar e o que você prefere manter do seu jeito.

Uma revisão cuidadosa é o que garante que seu projeto final tenha qualidade e pareça genuinamente seu, e não apenas um texto qualquer gerado por uma máquina.$m$,
$m$Depois de terminar a primeira versão do guia, a pessoa percebe que um dos exemplos usados não fazia muito sentido para o público dela, então substitui por uma experiência própria, tornando o conteúdo mais autêntico e conectado com sua realidade.$m$,
$m$Releia a primeira versão do seu projeto e identifique pelo menos 2 pontos para melhorar: um relacionado a clareza e outro relacionado a personalização com sua própria voz.$m$,
$m$Aqui está o conteúdo do meu projeto: [cole o conteúdo da primeira versão]. Revise como um editor exigente e aponte trechos que estão confusos, repetitivos ou genéricos demais, sugerindo como cada um poderia melhorar.$m$,
10, 5),

($m$00000000-0000-4000-8000-000000000005$m$::uuid, $m$Como apresentar$m$, $m$Aprenda a dar um acabamento visual e profissional ao seu projeto antes de compartilhar.$m$,
$m$Depois de revisado, seu projeto precisa de uma boa apresentação para causar uma boa impressão em quem for consumi-lo. Um conteúdo com qualidade, mas mal apresentado visualmente, pode passar uma imagem menos profissional do que realmente merece.

A forma de apresentar depende do tipo de projeto: um e-book ou guia pode ser diagramado no Canva, com capa, cores organizadas e boa formatação de texto; uma apresentação de slides também pode ganhar um visual mais profissional usando modelos prontos; já uma sequência de posts pode se beneficiar de um padrão visual consistente entre as imagens.

Um bom design não precisa ser complicado: escolha 2 ou 3 cores principais que combinem entre si, use uma ou duas fontes no máximo, e mantenha um padrão visual do início ao fim do material, o que passa uma sensação de organização e cuidado.

Além do visual, pense também no título e na capa (se aplicável), já que essa é a primeira coisa que a pessoa vai ver, e ela precisa despertar interesse imediato. Você pode pedir para a IA sugerir títulos chamativos e diretos, com base no conteúdo que você já criou.

Lembre-se que a apresentação é o que veste seu conteúdo. Um bom conteúdo bem apresentado tem muito mais chance de ser lido, compartilhado e valorizado do que o mesmo conteúdo em um formato desorganizado.$m$,
$m$Depois de escrever o guia de finanças, a pessoa usa o Canva para criar uma capa simples com o título, escolhe duas cores (verde e branco) e formata o texto em um modelo de e-book pronto, dando um visual muito mais profissional ao material final.$m$,
$m$Peça para uma IA sugerir 5 opções de título chamativo para o seu projeto, e depois use o Canva (ou outra ferramenta de design) para criar uma capa simples com o título escolhido.$m$,
$m$Aqui está um resumo do meu projeto: [descreva brevemente o conteúdo]. Sugira 5 títulos curtos e chamativos para esse material, que despertem curiosidade no público [descreva o público], sem serem exagerados ou enganosos.$m$,
10, 6),

($m$00000000-0000-4000-8000-000000000005$m$::uuid, $m$Como compartilhar$m$, $m$Aprenda a divulgar seu projeto finalizado e a comemorar essa primeira conquista prática.$m$,
$m$Chegamos à última etapa do seu primeiro projeto: compartilhar o resultado final com o mundo. Muitas pessoas criam bons conteúdos, mas travam justamente nessa parte, com medo de julgamento ou por acharem que ainda não está bom o suficiente. Lembre-se: feito é melhor que perfeito, especialmente em um primeiro projeto de prática.

Para compartilhar, pense em onde seu público está: pode ser nas suas redes sociais pessoais, em um grupo de WhatsApp ou comunidade que você participa, no seu ambiente de trabalho, ou até em plataformas específicas se o projeto for um produto digital para venda.

Use o que você aprendeu no módulo 4 para criar a divulgação: uma legenda ou mensagem convidando as pessoas a conferir seu material, explicando rapidamente do que se trata e por que vale a pena. Você pode pedir para a IA te ajudar a escrever essa mensagem de divulgação, destacando o principal benefício do seu projeto para quem for consumir.

Após compartilhar, preste atenção no retorno que você recebe: comentários, perguntas, feedbacks. Esse retorno é extremamente valioso para melhorar seus próximos projetos e entender ainda melhor o que seu público valoriza.

Parabéns por chegar até aqui. Completar um projeto do início ao fim, usando IA como parceira em cada etapa, é uma conquista real. A partir de agora, você tem o processo completo para repetir esse caminho em quantos projetos quiser, cada vez com mais confiança e velocidade.$m$,
$m$Depois de finalizar o guia de finanças, a pessoa publica um post no Instagram anunciando o material gratuito, disponibiliza o link na bio, e recebe os primeiros comentários de pessoas agradecendo e pedindo mais conteúdos parecidos.$m$,
$m$Escreva e publique (ou pelo menos prepare) uma mensagem de divulgação do seu projeto finalizado, convidando pessoas do seu círculo a conferir o resultado.$m$,
$m$Meu projeto finalizado é sobre [descreva o projeto]. Escreva uma mensagem de divulgação curta e convidativa para compartilhar nas minhas redes sociais, destacando o principal benefício para quem for conferir, com um tom [descreva o tom de voz].$m$,
8, 7);
