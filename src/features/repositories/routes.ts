import { IRouteProps } from '../../models';
import RepositoriesScreen from './screens';

const routes: IRouteProps[] = [
  {
    path: '/',
    exact: true,
    Component: RepositoriesScreen,
  }
];

export default routes;
