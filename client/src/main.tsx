import ReactDOM from 'react-dom/client';
import { Router } from './Router';
import {
  AuthProvider,
  CookieProvider,
  GraphQLProvider,
  NavProvider,
  WindowProvider,
} from './providers';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GraphQLProvider>
    <AuthProvider>
      <WindowProvider>
        <NavProvider>
          <CookieProvider>
            <Router />
          </CookieProvider>
        </NavProvider>
      </WindowProvider>
    </AuthProvider>
  </GraphQLProvider>,
);
