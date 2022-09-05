import { SingletonApi } from "../modules/api";

export interface IParameter {
  q: string;
  page?: number;
}

export const searchModel = async (param: IParameter) => {
  const api = SingletonApi.getInstance();
  const response = await api.request('GET /search/users', {
    ...param,
    sort: 'repositories',
    orders: 'desc',
  });
  return response;
};
