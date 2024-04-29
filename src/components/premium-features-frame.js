import React, { useState } from 'react';

const PremiumFeaturesFrame = () => {
  // State to keep track of the currently selected feature
  const [selectedFeature, setSelectedFeature] = useState('option1');

  // Handler to update the selected feature
  const handleChange = (event) => {
    setSelectedFeature(event.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center justify-start pt-0 px-0 pb-20 box-border gap-[1px] z-[1] text-left text-lg text-small-text font-poppins">
      {/* Dropdown to select a feature */}
      <div className="w-full py-4 px-5">
        <select onChange={handleChange} value={selectedFeature} className="w-full p-2 border border-gray-300 rounded-md">
          <option value="option1">PINEAL GLAND ACTIVATION PROGRAM</option>
          <option value="option2">Neuro Linguistic Programming</option>
          <option value="option3">Extrasensory Perception</option>
          <option value="option4">Photographic Memory</option>
          <option value="option5">Quantum Speed</option>
          <option value="option6">MIDBRAIN ACTIVATION PROGRAM</option>
        </select>
      </div>

      {/* Display content based on selected feature */}
      <div className="w-full flex flex-row items-center justify-start py-0 px-5 box-border gap-[12px]">
        <div>
          <img className="h-[22px] w-[22px] relative" alt="" src="/vector1.svg" />
        </div>
        <div>
          {selectedFeature === 'option1' && <p>Unlock your third eye for enhanced perception and spiritual awakening.</p>}
          {selectedFeature === 'option2' && <p>Learn powerful mental techniques to improve communication and personal influence.</p>}
          {selectedFeature === 'option3' && <p>Develop your intuitive abilities and connect deeper with your surroundings.</p>}
          {selectedFeature === 'option4' && <p>Enhance your memory to capture and recall information just like a camera.</p>}
          {selectedFeature === 'option5' && <p>Master techniques to process information at extraordinary speeds.</p>}
          {selectedFeature === 'option6' && <p>Activate your child's midbrain to unlock impressive learning capabilities.</p>}
        </div>
      </div>
    </div>
  );
};

export default PremiumFeaturesFrame;
