import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const getValues = () => {
  // 1.зчитати локальне сховище за ключем feedback
  // 2.перевірка чи не порожне значення в localStorage
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export default function App() {
  const [values, setValues] = useState(getValues);
  const updateFeedback = (feedbackType) => {
    console.log(feedbackType);
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };

  const totalFeedback = values.good + values.bad + values.neutral;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100) || 0;

  const handleReset = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          bad={values.bad}
          good={values.good}
          neutral={values.neutral}
          positiveFeedback={positiveFeedback}
          total={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
