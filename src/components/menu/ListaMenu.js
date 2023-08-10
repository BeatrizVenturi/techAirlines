export const listaMenu = [
  {
    id: 1,
    title: 'PARIS',
    origin: 'São Paulo',
    destiny: 'Paris',
    price: 1000.0,
    img: 'https://images.unsplash.com/photo-1564594736624-def7a10ab047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
    obs: 'É o melhor destino de todos',
    testemunhos: 'Foi a melhor viagem da minha vida',
    ida: {
      data: 'fdad',
      horario: 'fkadsjkf',
      aeroporto: 'VCP',
      tempo: 'dfdk',
      tipo: 'Voo direto'
    },
    volta: {
      
    }
  },
  {
    id: 2,
    title: 'BARCELONA',
    origin: 'Curitiba',
    destiny: 'Barcelona',
    price: 1000.0,
    img: 'https://cdn.shopify.com/s/files/1/0410/9293/9926/files/La_sagrada_familia_gaudi_480x480.jpg?v=1649591835'
  },
  {
    id: 3,
    title: 'LONDRES',
    origin: 'São Paulo',
    destiny: 'Londres',
    price: 1000.0,
    img: 'https://lavidaesmara.com/wp-content/uploads/2021/02/roteiro-dia-londres.jpg'
  },
  {
    id: 4,
    title: 'HAVANA-CUBA',
    origin: 'São Paulo',
    destiny: '',
    price: 1000.0,
    img: 'https://sun-surfer.com/photos/2016/03/Havana-Cuba.jpg'
  },
  {
    id: 5,
    title: 'JERICOACOARA',
    origin: 'São Paulo',
    destiny: '',
    price: 1000.0,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAClmcPdKO094wNa8VafcaDY1Qlono_F5j3KsnNx4GcZrfAmaefOEL0d0iWfDJo80UME&usqp=CAU'
  },
  {
    id: 6,
    title: 'BONITO',
    origin: '',
    destiny: '',
    price: 1000.0,
    img: 'https://www.umviajante.com.br/wp-content/uploads/2021/12/bonito-ms-top-passeios.jpg'
  },
  {
    id: 7,
    title: 'FLORIANÓPOLIS',
    origin: '',
    destiny: '',
    price: 1000.0,
    img: 'https://i0.wp.com/turismodeprimeira.com.br/wp-content/uploads/2022/02/cropped-bridge-6851672_1920.jpg?resize=360%2C600&ssl=1'
  },
  {
    id: 8,
    title: 'FOZ DO IGUAÇU',
    origin: '',
    destiny: '',
    price: 1000.0,
    img: 'https://w0.peakpx.com/wallpaper/427/588/HD-wallpaper-cataratas-agua-cachoeira-fall-falls-foz-iguacu-nature-water-waterfall-thumbnail.jpg'
  }
]


export function getPassagemPorId(id) {
  const passagem =  listaMenu.find(l => l.id == id)
  return passagem
}