'use client';

import { useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { useRouter } from 'next/navigation';

export default function QRScanner() {
  const router = useRouter();

  useEffect(() => {
    // Initialize the scanner
    const scanner = new Html5Qrcode('reader');
    
    // Start scanning
    scanner.start(
      { facingMode: 'environment' }, // Use the rear camera
      { fps: 10, qrbox: 250 }, // Scanner settings (fps & size)
      (decodedText) => {
        console.log('Scanned Data:', decodedText);

        // If the decoded text matches the loan page route
        if (decodedText.includes('/loan-page')) {
          router.push('/loan-page'); // Redirect to loan page
        }
      },
      (errorMessage) => {
        console.error('Error in scanning:', errorMessage);
      }
    )
    .catch((err) => {
      console.error('Error initializing scanner:', err);
    });

    // Cleanup when the component unmounts
    return () => {
      scanner.stop().catch(() => {});
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Scan QR Code</h1>
      <div id="reader" style={{ width: '300px' }}></div>
    </div>
  );
}
