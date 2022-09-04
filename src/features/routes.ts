import { IRouteProps } from '../models';
import usersRoutes from './users/routes';
import repositoriesRoutes from './repositories/routes';

const routes: IRouteProps[] = [
  ...repositoriesRoutes,
  ...usersRoutes,
];

export default routes;