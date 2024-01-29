export interface ENV_CONFIG {
  api: {
    category: string;
    categories: string;
    domain: string;
    limit: string;
    login: string;
    products: string;
    sort: {
      asc: string;
      desc: string;
    };
    users: string;
  };
  api_key?: string;
  domain?: string;
  lib?: string;
}
