export interface ProjectData {
  meta: Meta;
  headerData: HeaderData;
}

export interface Meta {
  title: string;
  description: string;
  lang: string;
  charset: string;
  ldJson: LdJson;
}

export interface LdJson {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo: string;
  // contactPoint: {
  //   "@type": string;
  //   email: string;
  //   contactType: string;
  // };
  // sameAs: string[];
}

export interface HeaderData {
  logo: string;
  links: Link[];
}


export interface Link {
  label: string;
  href: string;
}

