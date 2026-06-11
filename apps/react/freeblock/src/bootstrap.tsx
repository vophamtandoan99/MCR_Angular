import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import App from './app/app';

// Load core styles trước
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';

// Load layout/demo styles sau để có thể override nếu cần
import './styles/demo/Demos.scss';
import './styles/layout/layout.scss';

export const mount = (container?: HTMLElement) => {
  const mountPoint =
    container ?? (document.getElementById('root') as HTMLElement);
  if (!mountPoint) {
    throw new Error('Mount point not found');
  }
  const root = ReactDOM.createRoot(mountPoint);
  root.render(
    <StrictMode>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </StrictMode>
  );
  return root;
};

export const unmount = (root: any) => {
  if (root && typeof root.unmount === 'function') {
    root.unmount();
  }
};

export default App;
