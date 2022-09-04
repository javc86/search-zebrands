import { IRouteProps } from '../../models';
import UsersScreen from './screens';

const routes: IRouteProps[] = [
  {
    path: 'users',
    Component: UsersScreen,
  }
];

export default routes;
