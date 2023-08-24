export const listaPacote = [{
    id:1,
name:'NOITE ROMANTICA EM PARIS',
description: 'Paris, a famosa "Cidade do Amor," é um destino que exala romance em cada esquina. Com sua arquitetura encantadora, ruelas pitorescas, luzes brilhantes e gastronomia exquisita, a capital francesa é o cenário perfeito para uma noite inesquecível com aquela pessoa especial. Imagine-se imerso na atmosfera mágica de Paris enquanto vive uma experiência romântica única.',
img:'https://i.pinimg.com/originals/fc/1a/a5/fc1aa5d2b2e39cf8c46fab0bee6fa3ba.jpg',
info:{
    diaUm:{
        manha:'Chegada ao Aeroporto Internacional de Chiang Mai, transfer para o hotel selecionado, localizado próximo ao local das celebrações',
        tarde:'Check-in no hotel e breve descanso.Participação em um workshop de confecção de lanternas flutuantes, onde você aprenderá a montar suas próprias lanternas tradicionais.',
        noite:'Jantar em um restaurante tailandês tradicional; Participe do emocionante Festival de Lanternas Flutuantes. Você terá a oportunidade de soltar sua lanterna no rio, juntamente com milhares de outras lanternas, criando uma cena de beleza e serenidade únicas.'
    },
    diaDois:{
        manha:'Café da manhã no hotel.Visita a um dos templos mais emblemáticos de Chiang Mai, como o Wat Chedi Luang, para conhecer mais sobre a cultura tailandesa.',
        tarde:'Almoço em um restaurante local.',
        partida:'Check-out do hotel.Transfer de retorno para o Aeroporto Internacional de Chiang Mai.',
        detalhes:'Acomodação em um hotel confortável próximo ao local das celebrações.Transfers do aeroporto para o hotel e retorno.Participação no workshop de confecção de lanternas flutuantes.Lanterna para soltar durante as celebrações.Refeições mencionadas no itinerário.',
    }

   
}
},
{
    id:2,
    name:'DIA DOS MORTOS MÉXICO',
    description:'O México é um país conhecido por suas ricas tradições culturais, e uma das celebrações mais emblemáticas é o Dia dos Mortos, uma festividade única que honra e celebra os entes queridos que partiram. Se você está em busca de uma experiência cultural autêntica e memorável, não há momento melhor para visitar o México do que durante essa celebração tão especial.',
    img:'https://culturaplural.sites.uepg.br/wp-content/uploads/2021/11/dia-de-los-muertos-3.jpeg'
},
{
    id:3,
    name:'LANTERNAS FLUTUANTES TAILÃNDIA',
    description:'Prepare-se para vivenciar uma experiência mágica e inesquecível na Tailândia - o lançamento das lanternas flutuantes! Conhecido como "Yi Peng" ou "Loy Krathong," esse evento é uma das celebrações mais encantadoras e espetaculares do país, onde milhares de lanternas são lançadas ao céu e rios, criando um espetáculo de luzes que cativa o coração de todos os presentes. Junte-se a esta jornada e embarque em uma noite repleta de beleza e significado na Tailândia.',
    img:'https://www.mundoasiatours.com/wp-content/uploads/2019/10/Chiang-Mai-Yi-Peng-Festival-1.jpg'
},
{
    id:4,
    name: 'NOITE MUITO DOIDA EM IBIZA',
    description:'Bem-vindo à Ilha de Ibiza, o destino que nunca dorme! Se você está em busca de uma noite repleta de energia, música eletrônica pulsante e uma atmosfera inigualável, Ibiza é o lugar perfeito para você. Conhecida como a capital mundial da música eletrônica e das festas, essa ilha espanhola no Mar Mediterrâneo oferece uma experiência noturna única que não pode ser encontrada em nenhum outro lugar. Prepare-se para uma noite alucinante em Ibiza!',
    img:'https://dicasbarcelona.com.br/wp-content/uploads/2015/06/ushuaia-ibiza.jpg'
}
]
export function getPacotePorId(id) {
    const pacotes = listaPacote.find(l => l.id == id)
    return pacotes
  }