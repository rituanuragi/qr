'use client';


import { QRCodeCanvas } from 'qrcode.react'; 

export default function GenerateQRCode() {
  const url = 'https://iridescent-twilight-64c032.netlify.app/product-page'; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Scan this QR Code to visit the Loan Page:</h1>
      
      {/* Generate QR code dynamically */}
      <div>
        <QRCodeCanvas value={url} size={256} />
      </div>
      
      {/* Optionally, you can also display or change the URL dynamically
      <div className="mt-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 w-72"
          placeholder="Enter URL to generate QR"
        />
      </div> */}
    </div>
  );
}
