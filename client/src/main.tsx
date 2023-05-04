import ReactDOM from 'react-dom/client';
import { Router } from './Router';
import { AuthProvider, GraphQLProvider, NavProvider, WindowProvider } from './providers';
import './index.css';
import { SearchFiltersProvider } from './providers/SearchFiltersProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GraphQLProvider>
    <AuthProvider>
      <WindowProvider>
        <NavProvider>
          <SearchFiltersProvider>
            <Router />
          </SearchFiltersProvider>
        </NavProvider>
      </WindowProvider>
    </AuthProvider>
  </GraphQLProvider>,
);
