import { useState } from 'react';
import CalculatorForm from './components/CalculatorForm.tsx';
import ResultDisplay from './components/ResultDisplay.tsx';
import { Scale, Heart, Users } from 'lucide-react';

function App() {
  const [showResult, setShowResult] = useState(false);

  const handleFormSubmit = () => {
    setShowResult(true);
  };

  const handleReset = () => {
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 p-3 rounded-full">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Dowry Calculator</h1>
                <p className="text-gray-600 text-sm">Dowry Estimation Tool</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {!showResult ? (
          <div>
            {/* Introduction */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Negotiate Your Dowry Like a Pro 💰
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Ever Wondered How much you're “worth” for the Dowry and How much you can expect
                (and negotiate 😉) with your Father-in-law beforehand? Then this is for you — A must Need Tool.
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Get an estimate of marriage costs based on various factors.
                <br />
                <span className="text-lg italic">Fill out the form below for your personalized calculation.</span>
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">For Everyone</h3>
                  <p className="text-gray-600 text-sm">Comprehensive calculation based on multiple factors!</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Educational</h3>
                  <p className="text-gray-600 text-sm">Learn about traditional marriage customs and costs!</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scale className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Eye-Opening</h3>
                  <p className="text-gray-600 text-sm">Get detailed breakdown of expected expenses!</p>
                </div>
              </div>
            </div>

            <CalculatorForm onSubmit={handleFormSubmit} />
          </div>
        ) : (
          <ResultDisplay onReset={handleReset} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg mb-4">
            💡 Plan your marriage expenses wisely and make informed decisions!
          </p>
          <p className="text-gray-400 text-sm">
            Marriage cost calculator for planning purposes. 
            Make your special day memorable! 🌟
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
