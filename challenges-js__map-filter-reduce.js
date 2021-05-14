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

// Ao executar o programa devo exibir: na raiz do objeto e empresas
// para o items que tem capital aberto devo:
// Adicionar na raiz do objeto valor Total de Mercado (somar o valorDeMercado das filiais)  
// e Remover o array de filiais de cada empresa
// Exibir apenas os items com valor total de mercado maior que 1000
 
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

const AdicionaNasEmpresasOValorTotalDeMercadoERemoveAsFilias = (item) => {
  {
    const { filiais, ...rest } = item
    return  {
      ...rest,
      valorTotalDeMercado: filiais.reduce(retornaValorTotalDeMercado, 0) 
    }
  }
}
const retornaEmpresasComCapitalAberto = ({ temCapitalAberto }) =>  temCapitalAberto
const retornaValorTotalDeMercado = (acumulador, { valorDeMercado }) => acumulador + valorDeMercado
const retornaEmpresasComValorTotalMaior1000 = ({ valorTotalDeMercado }) => valorTotalDeMercado > 1000

const results = companies
                  .filter(retornaEmpresasComCapitalAberto)
                  .map(AdicionaNasEmpresasOValorTotalDeMercadoERemoveAsFilias)
                  .filter(retornaEmpresasComValorTotalMaior1000)

console.log(results)