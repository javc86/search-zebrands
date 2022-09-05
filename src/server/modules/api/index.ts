import FactoryApi from './FactoryApi';
import { Octokit } from 'octokit';

export const SingletonApi = (() => {
  let instance: Octokit;

  const createInstance = () => {
    return new FactoryApi();
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance().createApi();
      }

      return instance;
    }
  }
})();
