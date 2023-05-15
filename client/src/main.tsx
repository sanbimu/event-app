import ReactDOM from 'react-dom/client';
import { Router } from './Router';
import {
  AuthProvider,
  CookieProvider,
  GraphQLProvider,
  NavProvider,
  WindowProvider,
  SearchFiltersProvider,
} from './providers';
import './index.css';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GraphQLProvider>
    <AuthProvider>
      <SearchFiltersProvider>
        <WindowProvider>
          <NavProvider>
            <CookieProvider>
              <Router />
            </CookieProvider>
          </NavProvider>
        </WindowProvider>
      </SearchFiltersProvider>
    </AuthProvider>
  </GraphQLProvider>,
);
