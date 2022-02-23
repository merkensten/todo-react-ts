import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RoutingPath } from './RoutingPath';
import { useState } from 'react';

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
  // skapa ett globalt context för detta istället
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path={'/'}>
            {/* Routes for App view*/}
            {isLoggedIn && (
              <>
                <Route index element={<AppView />} />
                <Route path={RoutingPath.account} element={<AccountView />} />
              </>
            )}

            {/* Routes för utloggat läge */}
            {!isLoggedIn && (
              <>
                <Route index element={<SignInView />} />
                <Route
                  path={RoutingPath.createAccount}
                  element={<CreateAccountView />}
                />
              </>
            )}

            {/* Not found route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Switch login</button>
    </Layout>
  );
};
