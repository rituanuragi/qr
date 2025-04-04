"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const loanDetails: Record<string, { pdf: string; video: string }> = {
  "Professional Loan": {
    pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  "Personal Loan": {
    pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    video: "https://www.youtube.com/embed/BxRf5Myv3to",
  },
  "Business Loan": {
    pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
  "Home Loan": {
    pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    video: "https://www.youtube.com/embed/hY7m5jjJ9mM",
  },
  "Doctor Loan": {
    pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    video: "https://www.youtube.com/embed/V-_O7nl0Ii0",
  },
  "Finance Literacy Programme": {
    pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    video: "https://www.youtube.com/embed/Ee02bjAkwGg",
  },
};

export default function LoanPage() {
  const params = useParams();
  const [product, setProduct] = useState("Professional Loan");

  useEffect(() => {
    if (params.product) {
      const decodedProduct = decodeURIComponent(Array.isArray(params.product) ? params.product[0] : params.product);
      if (Object.keys(loanDetails).includes(decodedProduct)) {
        setProduct(decodedProduct);
      }
    }
  }, [params.product]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-8 flex flex-col items-center">
      
      {/* Page Title */}
      <h2 className="text-4xl font-extrabold text-gray-900 drop-shadow-md mb-8">
        {product}
      </h2>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        
        {/* PDF Section */}
        <div className="bg-white bg-opacity-90 backdrop-blur-lg shadow-lg rounded-2xl p-6 border border-gray-300 hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            📄 Product Document
          </h3>
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-md bg-gray-100 flex items-center justify-center h-72">
            <iframe 
              src={loanDetails[product]?.pdf} 
              className="w-full h-full rounded-lg" 
              title={`${product} PDF`}
            />
          </div>
          <button
            className="mt-4 w-full py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium rounded-lg shadow-md hover:scale-105 hover:from-blue-700 transition duration-300"
            onClick={() => window.open(loanDetails[product]?.pdf, '_blank')}
          >
            📥 Download PDF
          </button>
        </div>

        {/* Video Section */}
        <div className="bg-white bg-opacity-90 backdrop-blur-lg shadow-lg rounded-2xl p-6 border border-gray-300 hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            🎥 Product Video
          </h3>
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-md bg-gray-100 flex items-center justify-center h-72">
            <iframe 
              src={loanDetails[product]?.video} 
              className="w-full h-full rounded-lg" 
              title={`${product} Video`}
              allowFullScreen
            />
          </div>
        </div>

      </div>

      {/* Back Button */}
      <button
        className="mt-8 px-6 py-3 text-lg font-semibold bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 hover:scale-105 transition duration-300"
        onClick={() => window.history.back()}
      >
        ⬅️ Go Back
      </button>
    </div>
  );
}
