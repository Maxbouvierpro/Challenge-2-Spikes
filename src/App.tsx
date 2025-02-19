import { useState } from 'react';
import Header from './components/Header';
import ProductInfo from './components/ProductInfo';
import ProductCarousel from './components/ProductCarousel';

function App() {
  const [quantity, setQuantity] = useState(0); // Initialize quantity state

  return (
    <div className="min-h-screen bg-white">
      <Header quantity={quantity} /> {/* Pass quantity to Header */}
      <main className="container max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-5 gap-12">
          {/* Product Information */}
          <div className="space-y-8 col-span-6 lg:col-span-2">
            <ProductInfo setQuantity={setQuantity} /> {/* Pass setQuantity to ProductInfo */}
          </div>
          
          {/* Product Carousel */}
          <div className="col-span-6 lg:col-span-3">
            <ProductCarousel />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;