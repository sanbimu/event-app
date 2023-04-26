import ReactDOM from 'react-dom/client';
import { Router } from './Router';
import { AuthProvider, GraphQLProvider } from './providers';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GraphQLProvider>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </GraphQLProvider>,
);
