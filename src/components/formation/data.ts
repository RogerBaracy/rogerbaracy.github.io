export interface Idata {
  institution: string;
  course: string;
  dateInit: string;
  dateEnd: string;
}
export const data: Array<Idata> = [
  {
    institution: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
    course: 'Tecnologia em Sistemas para Internet',
    dateInit: 'Fev/2018', 
    dateEnd: 'Dez/2022'  
  },
  {
    institution: 'Faculdade de Tecnologia Brasil',
    course: 'Tecnologia em Redes de Computadores',
    dateInit: 'Fev/2011', 
    dateEnd: 'Dez/2014'  
  },
  {
    institution: 'Escola de Ensino Profissionalizante SENAI Visconde de Mauá',
    course: 'Técnico em Informática Industrial',
    dateInit: 'Fev/2008', 
    dateEnd: 'Dez/2009'  
  }  
]
