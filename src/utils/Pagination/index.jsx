import { act } from "react-test-renderer";

const centerRule = ({ total, activePage }) => {
  if (activePage - 1 <= 0) {
    return 1;
  }
  if (activePage === total){
    return activePage - 2;
  }
  return activePage - 1;
};

//recebendo valores default se não for passado nada:
const Pagination = ({ total=1, activePage=1 } = {}) => {
  if(typeof total !== 'number'){
    throw new TypeError('total deve ser um número')
  }
  
  if(typeof activePage !== 'number'){
    throw new TypeError('activePage deve ser um número')
  }
  

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const visiblePages = 3;
  let pages = [
    1,
    ...Array.from(
      { length: visiblePages },
      (_, i) => i + centerRule({ total, activePage })
    ),
    total,
  ];

  pages = pages.filter((page, index, array) => array.indexOf(page) === index);

  // regra dos 3 pontinhos no começo:
  let firstPage = pages[0]
  let secondPage = pages[1]

  // se [1,3], adiciona um 2 no meio:
  if (secondPage === (firstPage + 2)){
    pages = [
      firstPage,
      firstPage + 1,
      ...pages.slice(1)  // [1,|3,4,5|]
    ]
  }
  let penultimatePage = pages[pages.length - 2];
  let lastPage = pages[pages.length - 1];

  // se penultima pagina for igual ao penultimo numero:
  if (penultimatePage === (lastPage - 2)) {
    pages = [...pages.slice(0, -1), lastPage - 1, lastPage];
  }


//tem q repetir aqui: senao nao funciona.. pq sera ? cai no primeiro if e para?...  

// se a segunda pagina for maior ou igual a primeira + 2 (coloca '...')
 firstPage = pages[0]
 secondPage = pages[1]

 if (secondPage > (firstPage + 2)){
   pages = [
     firstPage,
     '...',
     ...pages.slice(1)
   ]

 }

// se penultima pagina for menor  ao penultimo numero (coloca '...')
 penultimatePage = pages[pages.length - 2];
 lastPage = pages[pages.length - 1];

  if (penultimatePage < (lastPage - 2)) {
     pages = [...pages.slice(0, -1), '...', lastPage];
   }
  return pages;
};
export default Pagination;
