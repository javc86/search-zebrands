export interface UsersState {
  list: IUser[] | [],
}

export interface IUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  organizations_url: string;
}