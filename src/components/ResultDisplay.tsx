import { Heart, RefreshCw, AlertCircle } from 'lucide-react';

interface ResultDisplayProps {
  onReset: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ onReset }) => {
  const moralMessages = [
    {
      title: "PRICELESS! ✨",
      message: "Congratulations! According to our super scientific calculator, this person is worth exactly... NOTHING in dowry because human beings aren't commodities to be bought and sold! Every person has inherent dignity and worth that cannot be measured in money. Love, respect, and compatibility are what make marriages successful - not cash transactions!",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "ERROR 404: Price Not Found! 🚫💰",
      message: "Our advanced algorithm has crashed! It seems impossible to put a price tag on human qualities like kindness, intelligence, humor, and love. Shocking revelation: People aren't products! Dowry is an outdated, harmful practice that reduces individuals to their material worth. True partnerships are built on mutual respect and equality!",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "SYSTEM MALFUNCTION! 🤖❌",
      message: "Warning! Our calculator keeps displaying 'INVALUABLE' for every input! This person possesses qualities like compassion, integrity, dreams, and potential that our primitive money-based system cannot compute. Fun fact: The best marriages happen when both families focus on the happiness of the couple rather than financial transactions!",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "CALCULATION COMPLETE: ∞ (Infinite Worth!) ♾️",
      message: "After processing millions of data points, our supercomputer has determined that every human being has infinite value that transcends material wealth! Plot twist: The most successful marriages are those based on love, understanding, and shared values - not on how much gold was exchanged. Dowry-free marriages are actually the premium version!",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "BREAKTHROUGH DISCOVERY! 🔬✨",
      message: "Scientists are baffled! Our research shows that the healthiest, happiest marriages consistently occur when families invest in the couple's education, happiness, and future together instead of expensive dowry demands. Revolutionary concept: Treat your daughter/son-in-law as a cherished family member, not a business transaction!",
      color: "from-teal-500 to-cyan-600"
    },
    {
      title: "ULTIMATE LIFE HACK REVEALED! 💡",
      message: "Here's the secret formula for a perfect marriage: Respect + Love + Communication + Equality = Lifelong Happiness! Dowry = Stress + Debt + Family Problems + Legal Issues. Choose wisely! The most valuable thing you can give a couple is your blessings and support for their dreams together!",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const randomMessage = moralMessages[Math.floor(Math.random() * moralMessages.length)];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center">
        <div className="mb-6">
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${randomMessage.color} rounded-full mb-4`}>
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {randomMessage.title}
          </h2>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            {randomMessage.message}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onReset}
            className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Another "Calculation"
          </button>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-6">
        <div className="flex items-start">
          <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-2">Important Message</h3>
            <p className="text-red-700 mb-3">
              This website is a satirical take on the harmful practice of dowry. Dowry is illegal in many countries and contributes to:
            </p>
            <ul className="text-red-700 space-y-1 ml-4">
              <li>• Gender inequality and discrimination</li>
              <li>• Financial burden on families</li>
              <li>• Violence against women</li>
              <li>• Reduction of marriage to a business transaction</li>
            </ul>
            <p className="text-red-700 mt-3 font-medium">
              Every person deserves to be valued for who they are, not what they can bring materially. 
              Let's build a society where marriages are based on love, respect, and equality! 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;