'use client';

import { useRouter } from 'next/navigation';

const products = [
  {
    title: "Professional Loan",
    description: "Unlock the potential of your business with our tailored professional loans designed to fuel growth and drive success.",
    icon: "💼",
  },
  {
    title: "Personal Loan",
    description: "Unlock your financial potential with our tailored personal loans, paving the way to your dreams with ease and confidence.",
    icon: "👤",
  },
  {
    title: "Business Loan",
    description: "Empower your business dreams with tailored financial solutions - seize growth opportunities with our flexible business loans.",
    icon: "🏢",
  },
  {
    title: "Home Loan",
    description: "Turn the key to your future with our personalized home loan options, designed to open the door to your ideal living space.",
    icon: "🏡",
  },
  {
    title: "Doctor Loan",
    description: "Unlock your medical aspirations with our specialized Doctor Loan, tailored to support your professional journey.",
    icon: "🩺",
  },
  {
    title: "Finance Literacy Programme",
    description: "Transform your financial know-how with our Finance Literacy Programme—empowering you to navigate personal finance confidently.",
    icon: "📖",
  },
];

export default function ProductPage() {
  const router = useRouter();

  const handleReadMore = (product: string) => {
    router.push(`/product-page/loan-details?product=${encodeURIComponent(product)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10 drop-shadow-lg">
        Choose Your Loan Type
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="relative bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-2xl p-6 transition duration-300 hover:shadow-2xl border border-gray-300 hover:scale-105"
          >
            {/* Icon with Background */}
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-3 rounded-lg text-3xl shadow-md">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-3">{product.description}</p>

            {/* Read More Button - Smaller Size */}
            <button 
              onClick={() => handleReadMore(product.title)}
              className="mt-3 px-3 py-1.5 text-sm font-medium bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
