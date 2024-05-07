import { useState } from 'react'
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {
  const [values, setValues] = useState(getValues);
const updateFeedback = feedbackType => {
 // Тут використовуй сеттер, щоб оновити стан
}
  
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const totalFeedback = 

  const handleReset = () => {
    setValues(0);
  };

  return (
    <div>
      <Descriptions />
      <Options />
      <Feedback />
      <Notification />
    </div>
  );
}

 
