import FactoryApi from "../modules/api/FactoryApi";

export const searchModel = async (search: string) => {
  const factory = new FactoryApi();
  const api = factory.createApi();
  const response = await api.request(`GET /users/${search}/repos`, {
    username: 'USERNAME'
  });
  return response;
};
