import {routes} from './app.routes';
import {UsersComponent} from './users/users.component';

describe('routes test suite', () => {
  it('routes should have route for /user', () => {
    expect(routes).toContain({path: 'users', component: UsersComponent});
  });
});
