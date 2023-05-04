import ReactDOM from 'react-dom/client';
import { Router } from './Router';
import { AuthProvider, GraphQLProvider, WindowProvider } from './providers';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GraphQLProvider>
    <AuthProvider>
      <WindowProvider>
        <Router />
      </WindowProvider>
    </AuthProvider>
  </GraphQLProvider>,
);
