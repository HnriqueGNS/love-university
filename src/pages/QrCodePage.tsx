import { QRCodeCanvas } from 'qrcode.react';

export function QrCodePage() {
  const siteUrl =
    import.meta.env.VITE_PUBLIC_SITE_URL || 'https://love-university.vercel.app';

  return (
    <main className="qr-page">
      <section className="qr-card">
        <h1>QR Code da Página</h1>

        <p>Escaneie para abrir a mensagem no celular.</p>

        <div className="qr-box">
          <QRCodeCanvas
            value={siteUrl}
            size={320}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            includeMargin
          />
        </div>

        <small>{siteUrl}</small>
      </section>
    </main>
  );
}