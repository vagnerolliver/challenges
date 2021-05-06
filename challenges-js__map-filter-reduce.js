const companies = [
  { 
    nome:'Samsung', 
    CEO: 'Kim Hyun Suk', 
    anoDeCriacao: 1938,
    temCapitalAberto: false,
    filiais: [
      {  nome: 'Samsumg 1', valorDeMercado: 100 },
      {  nome: 'Samsumg 2', valorDeMercado: 500 },
      {  nome: 'Samsumg 3', valorDeMercado: 500 },
    ]
  },
  { 
      nome: 'Microsoft',
      CEO: 'Satya Nadella', 
      anoDeCriacao: 1975,
      temCapitalAberto: true,
      filiais: [
        {  nome: 'Microsoft 1', valorDeMercado: 100 },
        {  nome: 'Microsoft 2', valorDeMercado: 200 },
        {  nome: 'Microsoft 3', valorDeMercado: 500 },
      ]
  },
  { 
    nome: 'Intel',
    CEO:'Brian Krzanich', 
    anoDeCriacao: 1968,
    temCapitalAberto: true,
    filiais: [
      {  nome: 'Intel 1', valorDeMercado: 500 },
      {  nome: 'Intel 2', valorDeMercado: 500 },
      {  nome: 'Intel 3', valorDeMercado: 500 },
    ]
  },
  { 
    nome: 'Facebook',
    CEO:'Mark Zuckerberg', 
    anoDeCriacao: 2004,
    temCapitalAberto: true,
    filiais: [
      {  nome: 'Facebook 1', valorDeMercado: 100 },
      {  nome: 'Facebook 2', valorDeMercado: 500 },
      {  nome: 'Facebook 3', valorDeMercado: 100 },
    ]
  },
  { 
    nome: 'Spotify',
    CEO:'Daniel Ek', 
    anoDeCriacao: 2006,
    temCapitalAberto: true,
    filiais: [
      {  nome: 'Spotify 1', valorDeMercado: 700 },
      {  nome: 'Spotify 2', valorDeMercado: 500 },
      {  nome: 'Spotify 3', valorDeMercado: 200 },
    ] 
  },
  { 
    nome: 'Apple',
    CEO: 'Tim Cook', 
    anoDeCriacao: 1976,
    filiais: [
      {  nome: 'Apple 1', valorDeMercado: 500 },
      {  nome: 'Apple 2', valorDeMercado: 500 },
      {  nome: 'Apple 3', valorDeMercado: 500 },
    ]
  }
];

// Tenho que exibir as seguintes informações:
// Adicionar o valor Total(somar o valorDeMercado das filiais) da empresa SE tiver capital aberto
// Exibir apenas empresa com valor total maior que 1000
// Não exibir as filiais
 
// Retorno deve ser
// [
//   {
//     nome:'Nome da Empresa', 
//     CEO: 'Nome do CEO', 
//     anoDeCriacao: '1938',
//     temCapitalAberto: true,
//     total: 1200
//   }
//   ...
// ]

const mapEmpresas = (item) => {
  {
    const { filiais, ...rest } = item
    return  {
      ...rest,
      total: item.filiais.reduce(retornaTotalValorDeMercado, 0) 
    }
  }
}
const retornaEmpresasComCapitalAberto = ({ temCapitalAberto }) =>  temCapitalAberto
const retornaTotalValorDeMercado = (total, { valorDeMercado }) => total + valorDeMercado
const retornaEmpresasComTotalMaior1000 = ({ total }) => total > 100

const results = companies
                  .filter(retornaEmpresasComCapitalAberto)
                  .map(mapEmpresas)
                  .filter(retornaEmpresasComTotalMaior1000)

console.log(results)