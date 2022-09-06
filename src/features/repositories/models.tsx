export interface RepositoriesState {
  list: IRepostory[] | [],
}

export interface IRepostory {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
}