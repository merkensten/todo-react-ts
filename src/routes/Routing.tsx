import { Routes, Route } from 'react-router-dom';
import { RoutingPath } from './RoutingPath';

// --------- views
import { Layout } from '../views/Layout';
// app views
import { AppView } from '../views/app/app-view/AppView';
import { AccountView } from '../views/app/account-view/AccountView';

//guest views
import { CreateAccountView } from '../views/guest-views/create-account-view/CreateAccountView';
import { SignInView } from '../views/guest-views/sign-in-view/SignInView';

// not found view
import { NotFound } from '../views/not-found-view/NotFoundView';

export const Routing: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={'/'}>
          <Route index element={<SignInView />} />
          <Route
            path={RoutingPath.createAccount}
            element={<CreateAccountView />}
          />

          <Route path={'/app'}>
            <Route index element={<AppView />} />
            <Route path={RoutingPath.account} element={<AccountView />} />
          </Route>

          {/* Not found route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Layout>
  );
};
