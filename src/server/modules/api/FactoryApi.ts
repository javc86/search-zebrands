import * as dotenv from 'dotenv';
import { Octokit } from 'octokit';
dotenv.config();

export default class FactoryApi {
  createApi(): Octokit {
    return new Octokit({ 
      auth: process.env.PERSONAL_ACCESS_TOKEN
    });
  }
}
