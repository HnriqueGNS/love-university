import { LovePage } from './pages/LovePage';
import { QrCodePage } from './pages/QrCodePage';

function App() {
  const path = window.location.pathname;

  if (path === '/qr') {
    return <QrCodePage />;
  }

  return <LovePage />;
}

export default App;