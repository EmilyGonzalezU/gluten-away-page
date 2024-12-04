import React from 'react';
import './App.css';
import mockupImage from './img/708shots_so.png'; //MockUp image 
import qrImage from './img/Untitled 1.png';//Qr image 

export function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); //identifies the type of device

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/*GlutenAway header*/}
      <header className="bg-[#ffc300] py-2 shadow-md">
        <h1 className="text-center text-4xl font-bold text-white">
          Gluten Away
        </h1>
      </header>

      {/*Main content( PC )*/}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 -mt-4">
         {/**same img  pc & android */}
        <div className="flex-1 max-w-3xl">
          <img
            src={mockupImage}
            className="w-full h-auto shadow-lg rounded-lg"
          />
        </div>

        {/* app description*/}
        <div className="flex-1 lg:ml-12 text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-3xl font-semibold mb-4">
            Bienestar sin gluten.
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Explora recetas, escanea alimentos y encuentra restaurantes libres de gluten.
          </p>
          <ul className="list-none space-y-2 mb-6">
            <li>🍽️ Recetas sin gluten</li>
            <li>📱 Escáner de alimentos</li>
            <li>📍 Restaurantes cercanos</li>
          </ul>
          {/**mobile button */} 
          {isMobile ? (
           
            <a
              href="https://drive.google.com/uc?id=14ZLevSICMuNWCpQupdWIGPSZMlk4KX3e"
              download
              className="bg-[#ffc300] text-white px-8 py-3 rounded-md shadow-md hover:bg-yellow-500 transition"
            >
              Descargar APK
            </a>
          ) : (
            <>
              <p className="text-lg text-gray-700 mb-4">
                Escanea el código QR para descargar la app:
              </p>
              <img
                src={qrImage}
                alt="Código QR"
                className="w-40 h-40 mx-auto lg:mx-0"
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
