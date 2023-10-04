var tipuesearch = {"pages": [
     {"title": "Configurando o Ambiente", "text": "O Geosampa é compatível com os seguintes navegadores: Edge: versão 25 ou superiorFirefox: 28 ou superiorGoogle Chrome: 34 ou superior Internet Explorer: 9 ou superior Safari: 5 ou superior Você poderá consultar essa orientação sempre que quiser clicando no botão", "tags": "JavaScript", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#configurando-ambiente"},
     {"title": "Sistemas de Referência Cartográfica", "text": "No GeoSampa as informações são disponibilizadas em diversos sistemas de referência cartográfica, como SIRGAS2000, SAD69(96) e WGS84. A projeção em SAD69(96) é fornecida apenas em caráter de compatibilidade com bases antigas, visto que, em 2014, foi definida a projeção UTM/SIRGAS2000 (EPGS: 31983) como a nova referência para o Sistema Geodésico Brasileiro (SGB) e para o Sistema Cartográfico Nacional (SCN). Desde então são consideradas oficiais apenas as informações produzidas tendo o SIRGAS2000 como sistema geodésico. Abaixo, estão os sistemas de referência cartográfica que podem ser encontrados no GeoSampa: Datum Projeção EPSG SAD69(96) UTM 23 S 5533 SIRGAS 2000 UTM 23 S 31983 SAD69(96) GEOGRÁFICA	5527 SIRGAS 2000 GEOGRÁFICA 4674 WGS84 UTM 23 S	32723 UTM: Universal Transversa de Mercator - Sistema de coordenadas cartesianas A EPSG vem do nome do Grupo Europeu de Pesquisa Petrolífera (European Petroleum Survey Group), entidade que organizou por meio de códigos numéricos os Sistemas de Referência de Coordenadas (SRC) do mundo..", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#sist-ref-cart"},
     {"title": "Dicas e instruções importantes", "text": "Verifique se seu bloqueador de “pop-up” está desativado. Caso contrário, alguns downloads podem ser bloqueados. Para evitar possíveis erros, sugerimos realizar periodicamente a limpeza do cache do seu navegador. Para isso, basta acionar o atalho: Ctrl + Shift + Del.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#dicas"},
     {"title": "Serviços Web", "text": "Webservice é método utilizado para transferir dados através de URL/links entre diferentes plataformas. Os serviços web do GeoSampa estão disponíveis em dois formatos: WMS (Web Map Service) e WFS (Web Feature Service). O primeiro (WMS) é um serviço de imagem e que serve, principalmente, como georreferência, não sendo possível nenhuma edição ou cruzamento espacial. Já o segundo (WFS) é um serviço que disponibiliza o acesso e manipulação dos dados geográficos, a partir do vetor, permitindo operações espaciais. O Geosampa, por meio de seus serviços online (WMS e WFS), possibilita que os usuários se conectem em softwares de geoprocessamento e sites, e acessem as informações em um ambiente fora do Mapa Digital da Cidade. Para acessar dados por meio de serviço on-line (Webservice), utilize os links abaixo: Tipo do serviço Link WMS - Camadas http://wms.geosampa.prefeitura.sp.gov.br/geoserver/geoportal/wms WMS - Mapas Base	http://raster.geosampa.prefeitura.sp.gov.br/geoserver/geoportal/wms WFS - Camadas http://wfs.geosampa.prefeitura.sp.gov.br/geoserver/geoportal/wfs", "tags": "documentation", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#servicos-web"},     
     {"title": "Dados abertos", "text": "O formato aberto dos arquivos permite sua reutilização em diversos aplicativos digitais. Ao clicar em “Dados Abertos”, a relação dos arquivos aparecerá de forma temática. Escolha um tema e faça o download do arquivo no formato desejado. Os dados em formato aberto permitem que qualquer cidadão utilize variados softwares para adaptá-los às sua necessidade. Além disso, essas informações contribuem para a transparência e o processo participativo, bem como para a criação de novas aplicações colaborativas.", "tags": "JavaScript", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#dados-abertos"},
     {"title": "Acessar Metadados", "text": "Os metadados são as informações sobre cada uma das camadas, com o objetivo de proporcionar a correta utilização e interpretação dos dados, contendo: denominação, descrição do conteúdo, escala, tipo de arquivo, órgão responsável, periodicidade de atualização, entre outras informações. Assim, ao clicar no botão Acessar Metadados, localizado no canto superior direito, abrirá um arquivo com diversas planilhas (abas): Consulta: planilha para consulta de metadados das camadas, sistemas e downloads Metadados: listagem de camadas, sistemas e downloads disponíveis, que esta vinculada a 1° planilha Categoria/Tipo Logradouro: relação dos tipos de logradouros (rua, avenida, estrada, etc.) e suas respectivas siglas Predominância de Uso: tipos de uso de solo conforme cadastro municipal fiscal Dicionário de logradouros: descrição das variáveis da base de dados geoespacial dos logradouros Datum/Projeção: modelo matemático teórico da representação da superfície da Terra IPTU: descrição das variáveis da base de dados disponível para download no GeoSampa SLC-e: tipos de alvarás disponíveis para consulta no GeoSampa Webservice: serviços de mapa via web Publicação 1988 - Vegetação: descrição e legendas do mapa", "tags": "JavaScript", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#metadados"},
     {"title": "Escala", "text": "Escala cartográfica é a proporção de redução da área da paisagem real para sua representação no mapa. Existem dois tipos de escalas cartográficas: numérica e gráfica. Escala numérica: expressa o valor em números. No GeoSampa a escala mostra a variante dessa proporção no canto inferior esquerdo do mapa. Por exemplo: 100000 (cem mil). Isso significa que um centímetro no mapa corresponde a 100 centímetros (equivalente a 1 quilômetro) na paisagem real. Escala gráfica: cada segmento da escala gráfica corresponde a certa distância, expressa em metros ou quilômetros. Para saber mais clique aqui.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#escala"},
     {"title": "Menu de Ferramentas e tipos de cursor", "text": "Esta é a primeira tela do mapa, ao acessar o GeoSampa. A seguir, serão descritas as alternativas de navegação e ferramentas disponíveis. zoom, controle de camadas, informação, desfazer seleção, pesquisa e donload de imagens MDC, download de arquivos, salvar imagem, calcular distância, área e ângulo, desenho, lidar 3d, impressão, configurações, ajuda, contato. Cursor, seta, mira, dedo, quadrado, cruz, cursor de de texto.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#ferramentas-cursor"},
     {"title": "Mapas Base e Camadas", "text": "Você pode escolher um dos mapas base disponíveis como plano de fundo, sendo possível alterá-lo a qualquer momento durante sua navegação. Entretanto, é permitido visualizar apenas um por vez. Também pode-se deixar sem plano de fundo. Em Camadas, está o conteúdo do mapa com as informações georreferenciadas de várias secretarias e órgãos públicos. As camadas estão organizadas em grupos temáticos. Você poderá abrir o grupo clicando no botão + e habilitar a camada de interesse. As informações sobre como cada camada foi produzida estão disponíveis no botão Acessar Metadados, que se encontra na parte superior direita, conforme indicado na sessão deste tutorial dedicada aos metadados, que você pode visualizar clicando aqui.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#mapas-base-camadas"},
     {"title": "Informações sobre as feições ou elementos do mapa", "text": "Habilite, no menu à direita, as camadas das quais buscará mais informações. Lembre-se que as informações somente aparecerão para as camadas habilitadas no menu. A seguir, clique no botão  e após, no elemento de interesse no mapa. O código SQL (setor-quadra-lote) representa a identificação dos lotes no Cadastro Imobiliário Fiscal da PMSP. Este código corresponde ao número do contribuinte e pode ser localizado no boleto de pagamento do IPTU. Também é possível identificar o código SQL utilizando o GeoSampa, veja como a seguir. O GeoSampa disponibiliza informações fiscais do lote, numa camada que é atualizada pela Secretaria da Fazenda. Essa camada substitui os croquis fiscais, que não são atualizados desde junho de 2019. Todas as informações do croqui fiscal estão no painel de informações (acessado pelo botão “i”) conectado diretamente ao banco de dados da Secretaria da Fazenda. Em lotes ocupados por condomínio aparecerão as informações de cada unidade. Atente que também aparece o número do setor, quadra e lote (SQL).", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#infos-feicoes-elementos"},
     {"title": "LiDAR 3D - Modelo Digital de Terreno (MDT)", "text": "Você pode escolher um dos mapas base disponíveis como plano de fundo, sendo possível alterá-lo a qualquer momento durante sua navegação. Entretanto, é permitido visualizar apenas um por vez. Também pode-se deixar sem plano de fundo. Em Camadas, está o conteúdo do mapa com as informações georreferenciadas de várias secretarias e órgãos públicos. As camadas estão organizadas em grupos temáticos. Você poderá abrir o grupo clicando no botão + e habilitar a camada de interesse. As informações sobre como cada camada foi produzida estão disponíveis no botão Acessar Metadados, que se encontra na parte superior direita, conforme indicado na sessão deste tutorial dedicada aos metadados, que você pode visualizar clicando aqui.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#mapas-base-camadas"},
     {"title": "Desenho e medições", "text": "Calcular distâncias, área e ângulos. Ao clicar no botão Imagem que mostra o botão de medições expandido, com ícone de distância, área e ângulo, também a localização no MENU de ferramentas. o cursor estará habilitado para medir a distância entre pontos, a área de um polígono ou o ângulo entre dois segmentos.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#dicas"},
     {"title": "Download de arquivos", "text": "Todo o conteúdo do GeoSampa está disponível para download. Para isso, clique no ícone ícone de download de camadas escolha o tema de interesse e, em seguida, os arquivos desejados. PDF, DXF, MDT, SHP, KMZ, XLS, CSV, GPKG", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#download-arquivos"},
     {"title": "Download de croquis e plantas", "text": "Para realizar o download você precisará clicar na aba Área Pública/Planta no menu Pesquisar. Em seguida escolher entre as quatro opções para localizar e fazer o download dos documentos após habilitar a camada correspondente. As camadas Cadastro de Área Pública - CAP, Croqui Patrimonial e Área Cedida estão no grupo Cadastro dentro do subgrupo Área Pública. A camada Utilidade Pública e Interesse Social (DIS/DUP) está no grupo Legislação Urbana e no subgrupo Requalifica Centro. As camadas Área Urbanizada Regularizada - AU e Arruamento - ARR estão no grupo Cadastro dentro do subgrupo Parcelamento.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#download-croquis-plantas"},
     {"title": "Marco Geodésico e Pontos de Apoio Terrestre", "text": "Para realizar o download você precisará, no MENU pesquisa, ativar a aba: Marco Geodésico/Apoio. O Marco Geodésico/Apoio é a terceira aba da janela de pesquisa e apresenta pontos fixos no terreno usados como referencial cartográfico.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#marco-geodesico"},
     {"title": "Download de imagens/MDC", "text": "Para realizar o download você precisará, no MENU pesquisa imagem lupa, ativar a aba: Download de Imagens/MDC.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#img-mdc"},
     {"title": "Pesquisa a partir do endereço", "text": "Clique em  e escolha a aba Endereço. Preencha os campos sem acentuação. O “tipo” de logradouro (rua, avenida, viela, estrada etc.) e o “título” do logradouro (Santo, Padre, Engenheiro etc.) não são obrigatórios, mas podem ajudar a refinar sua busca. Caso utilizados, insira-os nos campos específicos e não com o nome do logradouro.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#pesq-endereco"},
     {"title": "Pesquisa por lote fiscal - SQL", "text": "A aba Setor-Quadra aproxima a visualização do lote, após o preenchimento das lacunas ", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#lotefiscal-sql"},
     {"title": "Consulta ao IPTU", "text": "À esquerda, localize a ferramenta “Pesquisar”, selecione a aba IPTU e preencha as informações de setor, quadra e lote, depois clique em “Listar”.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#IPTU"},
     {"title": "Pesquisa sobre o zoneamento - SISZON", "text": "Essa pesquisa traz a consulta ao Sistema de Zoneamento (SISZON). No botão Pesquisar imagem lupa , localize a aba Zoneamento e preencha Setor, Quadra e Lote. O resultado apresenta: zoneamento, parâmetros de ocupação, quota ambiental e notas - quadro 3 da lei n° 16.402/2016.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#zoneamento"},
     {"title": "Pesquisa sobre Licenciamento - sistema SLCe", "text": "O Sistema de Licenciamento Eletrônico de Construção é gerenciado pela Secretaria Municipal de Licenciamento e compila os seguintes processos: Residências unifamiliares; Casas geminadas; Casas sobrepostas; Usos não residenciais até 1.500 m² de área construída;  Estande de vendas; Certificado de conclusão; Grua; Troca de responsabilidade técnica; Tapume; Comunicação de obras de emergência; Desdobro e remembramento de lote; Outras comunicações; Alvarás de demolição;", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#licenciamento"},
     {"title": "Consulta ao CIT – Cadastro de Imóveis Tombados", "text": "Consulta e emissão de certidão digital que esclarece sobre a situação do imóvel quanto à incidência ou não de legislação de tombamento. Localize a ferramenta “Pesquisar” e vá até a aba CIT, digite as informações de setor, quadra e lotes e clique em “Listar”.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#tombamento"},
     {"title": "Outras consultas disponíveis", "text": "Além das consultas já mencionadas, existem duas consultas estruturadas disponíveis para uso no botão Pesquisar imagem lupa. A primeira é a consulta por Subprefeitura. Para acessá-la, entre no menu Pesquisar, abra a aba Subprefeitura e lá está disponível a lista com os nomes das 32 subprefeituras. Ao clicar em uma delas, ficará selecionado o território da subprefeitura em questão, possibilitando rapidamente sua localização no mapa. A segunda consulta estruturada é dos Distritos e funciona tal qual a das Subprefeituras. No menu Pesquisar, selecione a aba Distrito e escolhe o distrito de interesse e esse será selecionando, permanecendo destacado em azul.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#outras-consultas"},
     {"title": "Saiba mais sobre o Geosampa", "text": "O MDC é o suporte cartográfico do Sistema de Informações Geográficas do Município de São Paulo (SIG-SP), regulamentado pelo Decreto 57.770, de 3 de julho de 2017. O Mapa Digital da Cidade (MDC), é uma base cartográfica digital cadastral nas escalas 1:1.000, na área urbana, e 1:5.000, na área rural do Município de São Paulo, resultado de levantamento aerofotogramétrico realizado no ano de 2004, com recursos do Programa de Modernização da Administração Tributária (PMAT), do Banco Nacional do Desenvolvimento (BNDES). A construção do MDC incluiu a implantação da Rede Básica de Referência Geodésica do Município de São Paulo, com 302 marcos, cobertura aerofotogramétrica colorida com cerca de 12 mil fotos, apoio de campo planialtimétrico, aerotriangulação, restituição digital, modelo digital do terreno, reambulação, edição, preparação de arquivos para uso em sistema de informações geográficas, elaboração de mais de quatro mil ortofotos digitais, construção de base de dados cadastrais de imóveis e logradouros, entre outros produtos e serviços. Esses trabalhos permitiram a modernização do sistema cartográfico municipal, que já em 1978 foi digitalizado em um sistema pioneiro denominado Geocodificação de Logradouros – GEOLOG. Os desafios da atualização e disseminação desses dados demandam permanente evolução tecnológica e organizacional. Em 2017, foi realizado um aerolevantamento que produziu além de ortofotos e mapeamento detalhado da vegetação, a cobertura de toda a cidade por dados laser/ lidar.", "tags": "", "loc": "https://geoinfo-smdu.github.io/tutorial-GeoSampa/#sobre-geosampa"},
]};