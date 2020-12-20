export interface Idata {
  office: string;
  company: string;
  dateInit: string;
  dateEnd: string;
  activities: string;
  technologies: string;
  outherTechnologies?: string;
}
export const data: Array<Idata> = [
  {
    office: 'Desenvolvedor web',
    company: 'Plugar Data & Intelligence',
    dateInit: 'Fev/2019', 
    dateEnd: 'Emprego atual',
    activities: 'Desenvolvimento de novas funcionalidade para sistemas de captura de noticias e monitoramento de portais eletrônicos de editais governamentais.',
    technologies: 'Frameworks:  Laravel, Quasar, ElectronJS, NestJS, VueJS. Bancos de dados: Postgres, MongoDB, ElasticSearch.',
    outherTechnologies: 'HTML, CSS, JavaScript, TypeScript, Jquery, Vue.js, PHP, versionamento com Git e configuração de ambiente com docker.'   
  },
  {
    office: 'Estágio em Desenvolvimento Web',
    company: 'PROCERGS',
    dateInit: 'Jul/2018', 
    dateEnd: 'Fev/2019',
    activities: 'Desenvolvimento de novos componentes para CMS / Framework proprietário.',
    technologies: 'PHP, MySQL, HTML, CSS, JavaScript, Jquery, Vue.js, versionamento com Git.'  
  },
  {
    office: 'Estágio em Desenvolvimento Web (Back-End)',
    company: 'Dableo Comunicações',
    dateInit: 'Set/2017', 
    dateEnd: 'Jul/2018',
    activities: 'Desenvolvimento de componentes para CMS Joomla.',
    technologies: 'PHP, MySQL, HTML, CSS e Bootstrap.'   
  },
  {
    office: 'Administrador Rede de Computadores',
    company: 'Portal Publico',
    dateInit: 'Mai/2014', 
    dateEnd: 'Ago/2015',
    activities: 'Gerenciamento de servidores de rede local e servidores web.',
    technologies: 'Servidores Linux, Proxy, DHCP, Firewall, Samba, FTP, SVN, DNS, Apache, PHP, Shell, HTML, CSS, JavaScript.'   
  },
  {
    office: 'Técnico Em Informática',
    company: 'Hospital Espírita de Porto Alegre',
    dateInit: 'Maio/2010', 
    dateEnd: 'Mar/2014',
    activities: 'Instalação de equipamentos para eventos, manutenção hardware e configuração software, suporte ao usuário, configuração de rede local.',
    technologies: 'ERP, LibreOfice, Linux, Windows'  
  },
  {
    office: 'Cabo EP',
    company: 'Exército Brasileiro',
    dateInit: 'Fev/2007', 
    dateEnd: 'Fev/2010',
    activities: 'Instalação de equipamentos para eventos, manutenção hardware e configuração software, suporte ao usuário, configuração de rede local.',
    technologies: 'LibreOfice, Linux, Windows'  
  }
]
