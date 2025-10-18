import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Dumbbell } from 'lucide-react';

const AppCard = ({ title, subtitle, description, features, ctaText, ctaLink, gradient }) => {
  const Icon = title === 'SoulWhispers' ? Play : Dumbbell;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className={`bg-gradient-to-r ${gradient} p-8 text-white text-center`}>
        <Icon className="w-16 h-16 mx-auto mb-4 opacity-75" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-blue-100">{subtitle}</p>
      </div>
      <div className="p-8">
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-2 mb-8 text-sm text-gray-600">
          {features.map((feat, i) => <li key={i}>• {feat}</li>)}
        </ul>
        <Link to={ctaLink} className="block w-full bg-teal text-white py-3 rounded-lg text-center font-semibold hover:bg-sage transition">
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default AppCard;