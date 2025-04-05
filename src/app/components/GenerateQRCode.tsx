'use client';


import { QRCodeCanvas } from 'qrcode.react'; 

export default function GenerateQRCode() {
  const url = 'https://f2fintechqr-mvp.netlify.app/product-page'; 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 p-6">
      <h1 className="text-3xl font-extrabold text-white mb-8 drop-shadow-md">
        Scan this QR Code
      </h1>

      {/* QR Code Canvas with styling */}
      <div className="p-8 bg-white rounded-xl shadow-xl flex items-center justify-center">
        <QRCodeCanvas 
          value={url} 
          size={256} 
          bgColor="#ffffff" 
          fgColor="#4CAF50" 
          level="H" 
          includeMargin={true} 
        />
      </div>
    </div>
  );
}
