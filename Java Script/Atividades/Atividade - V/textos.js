//Poderia ter jeito mais pratico? Talvez, mas é o q temos pra hj
export function delDiv(div){
    div.innerHTML = '';
}

export function filosofia(div){
    delDiv(div);

    div.innerHTML = 
    "<h3 class='titulo'>Filosofia</h3>" +
    "<p class='corpo'>" +
        "<b>Código Sith</b>" +
    "</p>"+
    
    "<p class='corpo'>" +
        "<i>'Paz é uma mentira, só existe paixão.<br>"+
        "&emsp;&emsp;Através da paixão, ganho força.<br>"+
        "&emsp;&emsp;Através da força, ganho poder.<br>"+
        "&emsp;&emsp;Através do poder, ganho a vitória.<br>"+
        "&emsp;&emsp;Através da vitória, minhas correntes se rompem.<br>"+
        "&emsp;&emsp;A Força me libertará.'</i>" +
    "</p>"+

    "<p class='corpo'>" +
        "<b>Regra dos dois:</b>" +
    "</p>"+

    "<p class='corpo'>" +
        "A doutrina Regra de Dois foi um princípio guia da Ordem dos Lordes Sith após as Novas Guerras Sith. Substituiu as práticas da Irmandade das Trevas de Lord Kaan, que reivindicou igualdade entre os Lordes Sith e proibiu o uso do título de 'Darth'. A Regra de Dois foi instituída por Darth Bane, um ex-aluno da academia do Sith Kaan, em resposta ao que ele via como inevitável, brigas internas auto-destrutivas dentro da Ordem Sith. A Regra de Dois dizia que haveria apenas dois Sith de uma vez, um Mestre e um Aprendiz, garantindo que quando o aprendiz se tornasse capaz de usurpar o Mestre, este seria merecedor do título. O primeiro tiraria a vida e função deste último, e encontraria um novo aprendiz para repetir o ciclo. Ambos mestre e aprendiz seriam considerados Lordes Sith." +
    "</p>"+

    "<p class='corpo'>" +
        "" +
    "</p>"+

    "<p class='corpo'>" +
        "" +
    "</p>"+

    "<p class='corpo'>" +
        "" +
    "</p>"
    ;
}

export function historia(div){
    delDiv(div);

    div.innerHTML = 
    "<h3 class='titulo'>História</h3>" +
    "<p class='corpo'>" +
        "<b>Origem</b>" +
    "</p>"+

    "<p class='corpo'>" +
        "Há muitas eras, uma raça de nome Sith começou a realizar experiências com o Lado Sombrio da Força. Essa raça foi descoberta por um Jedi Negro (um Jedi renegado, que se aliou ao Lado Sombrio da Força), que se uniu a ela e, rapidamente, graças ao seu treinamento mais aprimorado obtido na Ordem Jedi, tornou-se seu líder. Os Sith se espalharam pela Galáxia, a raça agora unida à Ordem Sith, que passou a aceitar membros de outras espécies. Dentro da tradição de seus ancestrais, eles buscavam grande poder." +
    "</p>"+

    "<p class='corpo'>" +
        "<b>Reinado de Darth Sidious</b>" +
    "</p>"+
    
    "<p class='corpo'>" +
        "Passaram-se muitos anos até o surgimento de um novo Mestre Sith, Palpatine, que adotou para si o nome de Darth Sidious e, fiel ao ideal dos Sith, buscou poder pessoal. Ele foi treinado como um Sith por Darth Plagueis. Durante o treinamento de Plagueis, em algum ponto, Palpatine o assassinou enquanto dormia. Palpatine arquitetou sua ascensão ao cargo de Supremo Chanceler da República Galáctica, e arquitetou um plano-mestre. Ele treinou o jovem Zabrak Maul, e o tornou um Lorde Sith, assim como fez com o ex-Jedi Dookan. Maul foi eventualmente morto pelo então Padawan Obi-Wan Kenobi, após ter assassinado o Mestre Jedi Qui-Gon Jinn." +
    "</p>"+

    "<p class='corpo'>" +
        "<i>"+
            "'A opressão do lado sombrio caiu sobre nós. Iniciada a Guerra Clônica está ' ― Yoda" +
        "</i>" +
    "</p>"+

    "<p class='corpo'>" +
        "Palpatine arquitetou um conflito, em que liderou, secretamente, ambos os lados. Ele usou a Confederação dos Sistemas Independentes para dar início às Guerras Clônicas. Tendo usado as habilidades de clonagem dos Kaminoanos, foi criado o Grande Exército da República, uma força militar gigantesca formada por clones do caçador de recompensas Jango Fett. Fett também realizou, à mando dos subordinados de Palpatine, inúmeras tentativas de assassinar a senadora Padmé Amidala, que não tiveram sucessos. As Guerras Clônicas tiveram início após a Batalha de Geonosis, que foi travada entre as forças da Confederação, os Jedi e os clones. Dookan, nomeado Lorde Sith, duelou com os Jedi Anakin Skywalker, Obi-Wan Kenobi e Yoda, respectivamente." +
    "</p>"+

    "<p class='corpo'>" +
        "Após terem adquirido sucesso sobre a Confederação, o imenso conflito tornou-se inevitável ao longo da galáxia, e alastrou-se por toda a sua imensidão, atingindo desde desolados planetas à Cidade Galáctica de Coruscant. A Ordem Jedi aliou-se ao Grande Exército para combater as forças separatista. Jedi foram selecionados para se tornarem Generais Jedi, que lideravam batalhões de soldados clones em ferozes batalhas ao longo da galáxia. Conde Dookan liderava a Confederação dos Sistemas Independentes, moderando ações e aliando a Confederação aos outros planetas ao longo da galáxia. Ele treinou o General Grievous nas artes Jedi. Grievous passou à tomar os sabres de luz de Jedi que havia derrotado, e sua coleção possuía quatro sabres de luz." +
    "</p>" +

    "<p class='corpo'>" +
        "Asajj Ventress, uma Rattatak, fez uma demonstração de seu poder à Dookan. Ela mostrou possuir um ódio pela famigerada Ordem Jedi, o que impressionou Dookan. Contudo, ele ainda não estava convicto de que Ventress era, de fato, uma Sith. Quatro meses depois da Batalha de Geonosis, Asajj uniu-se à luta em Muunilinst onde as tropas clônicas da República atacaram as fábricas de droide na sede do Clã Bancário InterGaláctico. O caçador de recompensas Durge controlou a batalha na terra, e Asajj batalhou no espaço. Suas incríveis habilidades de pilotagem chamaram a atenção de Anakin Skywalker, o Padawan que estava conduzindo as naves de guerra. Apesar dos avisos de seu mestre, Obi-Wan Kenobi, Anakin seguiu Asajj até a quarta lua do planeta Yavin, sem saber que estava sendo atraído para uma armadilha. Anakin continuou sua perseguição, ajudado por soldados clones. Usando a Força, Asajj derrotou os clones, e então, começou um duelo de sabres de luz com Anakin. Asajj provou ser um desafio para o lendário Escolhido. Para derrotá-la, Anakin precisou deixar que a raiva o dominasse. Em um contra-ataque furioso, o jovem Skywalker atacou Ventress, que caiu de uma altura imensa."+
    "</p>"+

    "<p class='corpo'>" +
        "Com Windu eliminado, Sidious voltou sua atenção para Skywalker. Agora, o jovem Jedi estava aonde o Lorde Sith queria; isolado e incapaz de retornar aos caminhos Jedi. Anakin percebeu que havia sido um cúmplice no assassinato de Mestre Windu, sacrificando um aliado e compatriota para salvar a vida de sua esposa. Com nenhum outro lugar para se virar, ele finalmente cedeu às tentações de Sidious, pedindo apenas uma forma de impedir a morte de Padmé. Para facilitar a transição, Sidious acalmou seus temores, e sua consciência. Pela segunda vez, ele prometeu a Skywalker que Padmé poderia ser salva da morte. Não se sabe se isso era, de fato uma verdade, mas no final não fez diferença. Anakin Skywalker caiu de joelhos diante de seu novo mestre e se comprometeu a seguir os ensinamentos Sith"+
    "</p>"+

    "<p class='corpo'>" +
        "Devido a história ser muito longa fiquei com preguiça..."+
    "</p>"
    ;
}

export function forca(div){
    delDiv(div);

    div.innerHTML = 
    "<h3 class='titulo'>Força</h3>" +
    "<p class='corpo'>" +
        "A Força é um campo de energia gerado por todas as coisas vivas, ela cerca e penetra tudo, unindo a galáxia. Existem dois lados da Força: paz, serenidade e conhecimento formam o lado claro enquanto o lado sombrio é consistido pela agressão, raiva e medo. O universo é um lugar de equilíbrio: vida e morte, criação e destruição, amor e ódio. Assim sendo, ambos os lados da Força fazem parte da ordem natural." +
    "</p>"+

    "<p class='corpo'>" +
        "Existem alguns seres que são ligados à Força. Mesmo que eles não possam entendê-la, a Força flui dentro deles. Aqueles sensíveis à Força são capazes de aprender a manipular sua energia. Os Siths se aliam ao Lado Sombrio da Força para conseguir aumentar a capacidade ou impacto do seu poder." +
    "</p>"+
    
    "<p class='corpo'>" +
        "Poderes Sith" +
    "</p>"+
    
    "<p class='corpo'>" +
        "De acordo com seu treinamento e potencial inato, os Sith podiam desenvolver diferentes poderes, alguns iguais aos dos Jedi, outros próprios dos Sith. A relação treinamento e potencial inato era muito importante, pois haviam Sith de grande potencial inato, mas que desenvolveram poucos poderes, tal como Darth Vader, e outros muito bem treinados, mas com pouco potencial inato, desenvolvendo poucos poderes, como Darth Maul. Os poderes Sith geralmente eram violentos e maiores do que os dos Jedi:" +
    "</p>"+
    
    "<p class='corpo'>" +
        "<b>Comuns aos Jedi:</b> Telepatia, Telecinesia." +
    "</p>"+
    
    "<p class='corpo'>" +
        "<b>Próprios dos Sith:</b>" +
    "</p>"+
    
    "<p class='corpo'>" +
        "<b>Estrangulamento Da Força:</b> Uma pegada telecinética que, quando centrada no pescoço de um inimigo, pode interromper o fluxo do ar e quebrar vértebras. O pescoço é um alvo fácil por causa da vulnerabilidade suave, mas usuários fortes do Estrangulamento podem quebrar um corpo inteiro, incluindo armaduras." +
    "</p>"+
    
    "<p class='corpo'>" +
        "<b>Relâmpago da Força:</b> Um poder que invoca terminações elétricas das pontas de seus dedos. É uma incorporação da sua ira que pode atacar o coração do inimigo. O relâmpago penetra a pele e envia ondas de dor através dos órgãos internos. A exposição prolongada queimará a carne, calcificará o esqueleto e fara o coração parar." +
    "</p>"+
    
    "<p class='corpo'>" +
        "<b>Horror:</b> Uma simples manipulação mental capaz de despertar o medo da mente do outro. Ao amplificar essa emoção primária, poderia-se desencadear o horror e, de vez em quando a insanidade.Um alvo aflito estará muito assombrado para tentar qualquer defesa." +
    "</p>"+
    "<p class='corpo'>" +
        "<b>Drenagem de vida:</b> Um procedimento delicado que mina energia de vida do inimigo e a canaliza direto para sua própria essência" +
    "</p>"+
    "<p class='corpo'>" +
        "<b>Destruição da Força:</b> poder raro, somente os maiores Sith conseguiram dominá-lo, tratava-se de uma esfera de energia vermelha arremessada contra um adversário." +
    "</p>"+
    "<p class='corpo'>" +
        "<b>Poder de criar vida e deter a morte:</b> poder raríssimo que aparentemente só Darth Plagueis, mestre de Darth Sidious, conseguiu obter; permitia o controle dos seres essenciais a todo tipo de vida, os midiclorianos, e dos poderes Sith e Jedi. O domínio desse poder permitia criar seres vivos e deter a morte. Este poder incluía trocar o 'espírito' / 'alma' para um novo corpo recém-clonado ou de alguma pessoa mais próxima." +
    "</p>"
    ;
}