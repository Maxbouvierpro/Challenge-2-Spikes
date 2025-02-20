import { useState } from 'react';
import { FiHeart, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiArrowLeft } from 'react-icons/fi';

interface ProductInfoProps {
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ setQuantity }) => {
  const [selectedColor, setSelectedColor] = useState('#C2BCB3');
  const [quantity, setQuantityState] = useState(1);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };

  return (
    <>
      <div className="space-y-6 flex flex-col gap-y-4">
          <a href="#" aria-label="Back" className="text-gray-500">
            <FiArrowLeft size={24} />
          </a>
        <div className="flex items-center gap-[8px]">
          <a href="#" aria-label="Chair" className='text-gray-300 m-0'> 
            Chair
          </a>
          /
          <a href="#" aria-label="Meryl Lounge Chair" className='m-0'> 
            Meryl Lounge Chair
          </a>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-space-cadet">Meryl Lounge Chair</h1>
          <div className="mt-10 flex justify-between content-center gap-x-6">
            <p className="text-2xl font-semibold text-black">$149.99</p>
            <div className="flex items-center gap-x-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="86" height="14" viewBox="0 0 86 14" fill="none">
                <path d="M6.73467 0.502901C6.84723 0.289557 7.15277 0.289558 7.26533 0.502902L9.0707 3.92471C9.11411 4.00699 9.19323 4.06447 9.28489 4.08033L13.0971 4.73994C13.3348 4.78106 13.4292 5.07165 13.2611 5.24463L10.5647 8.01904C10.4998 8.08575 10.4696 8.17876 10.4828 8.27083L11.0336 12.1003C11.0679 12.3391 10.8207 12.5187 10.6042 12.4122L7.13237 10.7051C7.0489 10.664 6.9511 10.664 6.86763 10.7051L3.39576 12.4122C3.1793 12.5187 2.93211 12.3391 2.96644 12.1003L3.51716 8.27083C3.5304 8.17876 3.50018 8.08575 3.43534 8.01904L0.738899 5.24463C0.57078 5.07165 0.665199 4.78106 0.902885 4.73994L4.71511 4.08033C4.80677 4.06447 4.88589 4.00699 4.9293 3.92471L6.73467 0.502901Z" fill="#FFC41F"/>
                <path d="M24.7347 0.502901C24.8472 0.289557 25.1528 0.289558 25.2653 0.502902L27.0707 3.92471C27.1141 4.00699 27.1932 4.06447 27.2849 4.08033L31.0971 4.73994C31.3348 4.78106 31.4292 5.07165 31.2611 5.24463L28.5647 8.01904C28.4998 8.08575 28.4696 8.17876 28.4828 8.27083L29.0336 12.1003C29.0679 12.3391 28.8207 12.5187 28.6042 12.4122L25.1324 10.7051C25.0489 10.664 24.9511 10.664 24.8676 10.7051L21.3958 12.4122C21.1793 12.5187 20.9321 12.3391 20.9664 12.1003L21.5172 8.27083C21.5304 8.17876 21.5002 8.08575 21.4353 8.01904L18.7389 5.24463C18.5708 5.07165 18.6652 4.78106 18.9029 4.73994L22.7151 4.08033C22.8068 4.06447 22.8859 4.00699 22.9293 3.92471L24.7347 0.502901Z" fill="#FFC41F"/>
                <path d="M42.7347 0.502901C42.8472 0.289557 43.1528 0.289558 43.2653 0.502902L45.0707 3.92471C45.1141 4.00699 45.1932 4.06447 45.2849 4.08033L49.0971 4.73994C49.3348 4.78106 49.4292 5.07165 49.2611 5.24463L46.5647 8.01904C46.4998 8.08575 46.4696 8.17876 46.4828 8.27083L47.0336 12.1003C47.0679 12.3391 46.8207 12.5187 46.6042 12.4122L43.1324 10.7051C43.0489 10.664 42.9511 10.664 42.8676 10.7051L39.3958 12.4122C39.1793 12.5187 38.9321 12.3391 38.9664 12.1003L39.5172 8.27083C39.5304 8.17876 39.5002 8.08575 39.4353 8.01904L36.7389 5.24463C36.5708 5.07165 36.6652 4.78106 36.9029 4.73994L40.7151 4.08033C40.8068 4.06447 40.8859 4.00699 40.9293 3.92471L42.7347 0.502901Z" fill="#FFC41F"/>
                <path d="M60.7347 0.502901C60.8472 0.289557 61.1528 0.289558 61.2653 0.502902L63.0707 3.92471C63.1141 4.00699 63.1932 4.06447 63.2849 4.08033L67.0971 4.73994C67.3348 4.78106 67.4292 5.07165 67.2611 5.24463L64.5647 8.01904C64.4998 8.08575 64.4696 8.17876 64.4828 8.27083L65.0336 12.1003C65.0679 12.3391 64.8207 12.5187 64.6042 12.4122L61.1324 10.7051C61.0489 10.664 60.9511 10.664 60.8676 10.7051L57.3958 12.4122C57.1793 12.5187 56.9321 12.3391 56.9664 12.1003L57.5172 8.27083C57.5304 8.17876 57.5002 8.08575 57.4353 8.01904L54.7389 5.24463C54.5708 5.07165 54.6652 4.78106 54.9029 4.73994L58.7151 4.08033C58.8068 4.06447 58.8859 4.00699 58.9293 3.92471L60.7347 0.502901Z" fill="#FFC41F"/>
                <path d="M78.7347 0.502901C78.8472 0.289557 79.1528 0.289558 79.2653 0.502902L81.0707 3.92471C81.1141 4.00699 81.1932 4.06447 81.2849 4.08033L85.0971 4.73994C85.3348 4.78106 85.4292 5.07165 85.2611 5.24463L82.5647 8.01904C82.4998 8.08575 82.4696 8.17876 82.4828 8.27083L83.0336 12.1003C83.0679 12.3391 82.8207 12.5187 82.6042 12.4122L79.1324 10.7051C79.0489 10.664 78.9511 10.664 78.8676 10.7051L75.3958 12.4122C75.1793 12.5187 74.9321 12.3391 74.9664 12.1003L75.5172 8.27083C75.5304 8.17876 75.5002 8.08575 75.4353 8.01904L72.7389 5.24463C72.5708 5.07165 72.6652 4.78106 72.9029 4.73994L76.7151 4.08033C76.8068 4.06447 76.8859 4.00699 76.9293 3.92471L78.7347 0.502901Z" fill="#FFC41F"/>
                <path d="M79.3463 0.656162L79.2653 0.502782C79.1528 0.289438 78.8472 0.289437 78.7347 0.502781L76.9293 3.92459C76.8859 4.00687 76.8068 4.06435 76.7151 4.08021L72.9029 4.73982C72.6652 4.78094 72.5708 5.07153 72.7389 5.24451L75.4354 8.01892C75.5002 8.08563 75.5304 8.17864 75.5172 8.27071L74.9664 12.1002C74.9321 12.3389 75.1793 12.5185 75.3958 12.4121L78.8676 10.705C78.9511 10.6639 79.0489 10.6639 79.1324 10.705L79.3463 10.8101V0.656162Z" fill="#FFC41F"/>
                </svg>
                <p>4.6 / 5.0 (556)</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-black">
              The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. 
              Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.
            </p>
          </div>

          <div className="flex gap-10">
            <div className="inline-flex items-center">
              <label className="relative flex items-center cursor-pointer" htmlFor="c2bc3">
                <input
                  name="color"
                  type="radio"
                  className="peer h-[24px] w-[24px] cursor-pointer appearance-none rounded-full transition-all bg-[#C2BCB3] checked:border-[4px]"
                  id="c2bc3"
                  value="#C2BCB3"
                  checked={selectedColor === '#C2BCB3'}
                  onChange={handleColorChange}
                />
                <span className="absolute bg-[#C2BCB3] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
            </div>

            <div className="inline-flex items-center">
              <label className="relative flex items-center cursor-pointer" htmlFor="58737c">
                <input
                  name="color"
                  type="radio"
                  className="peer h-[24px] w-[24px] cursor-pointer appearance-none rounded-full transition-all bg-[#58737C] checked:border-[4px]"
                  id="58737c"
                  value="#58737C"
                  checked={selectedColor === '#58737C'}
                  onChange={handleColorChange}
                />
                <span className="absolute bg-[#58737C] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
            </div>

            <div className="inline-flex items-center">
              <label className="relative flex items-center cursor-pointer" htmlFor="545454">
                <input
                  name="color"
                  type="radio"
                  className="peer h-[24px] w-[24px] cursor-pointer appearance-none rounded-full transition-all bg-[#545454] checked:border-[4px]"
                  id="545454"
                  value="#545454"
                  checked={selectedColor === '#545454'}
                  onChange={handleColorChange}
                />
                <span className="absolute bg-[#545454] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
            </div>

            <div className="inline-flex items-center">
              <label className="relative flex items-center cursor-pointer" htmlFor="cba6a4">
                <input
                  name="color"
                  type="radio"
                  className="peer h-[24px] w-[24px] cursor-pointer appearance-none rounded-full transition-all bg-[#CBA6A4] checked:border-[4px]"
                  id="cba6a4"
                  value="#CBA6A4"
                  checked={selectedColor === '#CBA6A4'}
                  onChange={handleColorChange}
                />
                <span className="absolute bg-[#CBA6A4] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
            </div>
          </div>

          <div className="flex space-x-4 pt-6 max-w-96">
            <div className="flex items-center w-1/2 rounded-[4px] border border-gray-400 p-[16px] gap-[40px]">
              <button
                onClick={() => setQuantityState(Math.max(1, quantity - 1))}
                className="text-black rounded-md px-2 w-full"
              >
                -
              </button>
              <span className="text-lg w-full text-center">{quantity}</span>
              <button
                onClick={() => setQuantityState(Math.min(5, quantity + 1))}
                className="text-black rounded-md px-2 w-full"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                setQuantity(quantity); // Update the quantity in Header
              }}
              className="flex-1 bg-primary text-white py-4 rounded-md hover:bg-opacity-90 transition-colors w-1/2"
            >
              Add to Cart
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-black">
            Free 3-5 day shipping  •  Tool-free assembly  •  30-day trial
            </p>
          </div>

          <div className="space-y-4 flex justify-between">
            <button className="w-48 flex gap-[16px] h-14 border border-french-grey rounded-md flex items-center justify-center hover:border-primary text-space-cadet hover:text-primary transition-colors">
              <div><FiHeart size={24} />
              </div>
              <span>Add to Wishlist</span>

            </button>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <FiFacebook size={24}/>
              </a>
              <a href="#" aria-label="Twitter">
                <FiTwitter size={24}/>
              </a>
              <a href="#" aria-label="LinkedIn">
                <FiLinkedin size={24}/>
              </a>
              <a href="#" aria-label="Instagram">
                <FiInstagram size={24}/>
              </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProductInfo;