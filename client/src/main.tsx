import ReactDOM from 'react-dom/client';
import { Router } from './Router';
import { AuthProvider, GraphQLProvider, NavProvider, WindowProvider } from './providers';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GraphQLProvider>
    <AuthProvider>
      <WindowProvider>
        <NavProvider>
          <Router />
        </NavProvider>
      </WindowProvider>
    </AuthProvider>
  </GraphQLProvider>,
);
