import { useState } from 'react';
import { Calculator, BookOpen } from 'lucide-react';

interface FormData {
  education: string;
  job: string;
  family: string;
  looks: string;
  hobbies: string;
  location: string;
}

interface CalculatorFormProps {
  onSubmit: (data: FormData) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    education: '',
    job: '',
    family: '',
    looks: '',
    hobbies: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = Object.values(formData).every(value => value !== '');

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-full mb-4">
          <Calculator className="w-8 h-8 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">The "Ultimate" Dowry Calculator</h2>
        <p className="text-gray-600 italic">Enter details below to discover the "value" of a person... 🤔</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Education Level</label>
            <select 
              value={formData.education} 
              onChange={(e) => handleChange('education', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              required
            >
              <option value="">Select education</option>
              <option value="phd">PhD (Obviously worth more! 🎓)</option>
              <option value="masters">Master's Degree</option>
              <option value="bachelors">Bachelor's Degree</option>
              <option value="diploma">Diploma</option>
              <option value="school">High School</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Profession</label>
            <select 
              value={formData.job} 
              onChange={(e) => handleChange('job', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              required
            >
              <option value="">Select profession</option>
              <option value="doctor">Doctor (Ka-ching! 💰)</option>
              <option value="engineer">Engineer</option>
              <option value="teacher">Teacher</option>
              <option value="artist">Artist</option>
              <option value="business">Business Owner</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Family Status</label>
            <select 
              value={formData.family} 
              onChange={(e) => handleChange('family', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              required
            >
              <option value="">Select family status</option>
              <option value="wealthy">Very Wealthy (Jackpot! 🏆)</option>
              <option value="comfortable">Well-off</option>
              <option value="middle">Middle Class</option>
              <option value="modest">Modest Background</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Physical Appearance</label>
            <select 
              value={formData.looks} 
              onChange={(e) => handleChange('looks', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              required
            >
              <option value="">Rate appearance</option>
              <option value="stunning">Stunning (Premium pricing! ✨)</option>
              <option value="attractive">Very Attractive</option>
              <option value="average">Average</option>
              <option value="unique">Unique Beauty</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Hobbies & Skills</label>
            <select 
              value={formData.hobbies} 
              onChange={(e) => handleChange('hobbies', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              required
            >
              <option value="">Select skills</option>
              <option value="cooking">Excellent Cook (Traditional bonus! 👩‍🍳)</option>
              <option value="music">Musical Talents</option>
              <option value="sports">Sports Enthusiast</option>
              <option value="arts">Arts & Crafts</option>
              <option value="languages">Multiple Languages</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
            <select 
              value={formData.location} 
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              required
            >
              <option value="">Select location</option>
              <option value="metro">Metro City (Higher rates! 🏙️)</option>
              <option value="tier2">Tier-2 City</option>
              <option value="town">Small Town</option>
              <option value="village">Village</option>
              <option value="abroad">Living Abroad (Premium! ✈️)</option>
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={!isFormValid}
          className={`w-full py-4 px-6 rounded-lg text-white font-semibold text-lg transition-all transform ${
            isFormValid 
              ? 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 hover:scale-105 shadow-lg hover:shadow-xl' 
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Calculate My "Worth" 🎯
        </button>
      </form>

      
    </div>
  );
};

export default CalculatorForm;