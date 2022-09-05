import FactoryApi from './FactoryApi';

export const SingletonApi = (() => {
  let instance: FactoryApi;

  const createInstance = () => {
    return new FactoryApi();
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  }
})();
