import React, { useState, useEffect } from 'react';
import EmployeeOnboardingForm from './Components/Form';
import AnimationComponent from './Components/Animation'; // Import your animation component

const App = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup the timeout on component unmount

  }, []);

  return (
    <div>
      {showAnimation ? (
        <AnimationComponent />
      ) : (
        <EmployeeOnboardingForm />
      )}
    </div>
  );
};

export default App;
