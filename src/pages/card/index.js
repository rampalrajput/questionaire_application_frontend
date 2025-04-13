import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestionnaire } from '../../context/quizContext';
import questionBank from '../../constant/questions';
import ProgressBar from '../../components/progressBar/Progressbar';
import QuestionCard from '../../components/card/QuestionCard';
import NavigationButtons from '../../components/navigation/navigationButtons';
import AnimatedWrapper from '../../components/animatedWrappers';
import { validateQuestion } from '../../utils/validation';

const QuestionsPage = () => {
  const { answers, updateAnswer } = useQuestionnaire();
  const navigate = useNavigate();

  const [queue, setQueue] = useState(['q1']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState({});

  const currentId = queue[currentIndex];
  const currentQuestion = questionBank[currentId];

  const handleChange = (questionId, value) => {
    updateAnswer(questionId, value);
    if (errors[questionId]) {
      setErrors(prev => {
        const { [questionId]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const getNextIds = (question, value) => {
    if (question.type === 'checkbox') {
      const selectedOptions = value || [];
      const nextSteps = selectedOptions.map(val => {
        const opt = question.options.find(o => o.value === val);
        return opt?.next;
      }).filter(Boolean);
      return Array.from(new Set(nextSteps)); // remove duplicates
    }
  
    if (question.type === 'radio') {
      const selected = question.options.find(opt => opt.value === value);
      return selected?.next ? [selected.next] : [];
    }
  
    // ✅ Add support for 'text', 'date', etc.
    if (question.next) {
      return [question.next];
    }
  
    return [];
  };
  

  const handleNext = () => {
    const value = answers[currentId];
    const errMsg = validateQuestion(currentQuestion, value);

    if (errMsg) {
      setErrors({ [currentId]: errMsg });
      return;
    }

    setErrors({});

    const nextIds = getNextIds(currentQuestion, value);

    if (nextIds.length === 0) {
      navigate('/summary');
      return;
    }

    const newQueue = [...queue];
    const nextToInsert = nextIds.filter(id => !queue.includes(id)); // avoid duplicates
    newQueue.splice(currentIndex + 1, 0, ...nextToInsert);

    setQueue(newQueue);
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <AnimatedWrapper>
      <div className="form-container">
        <div className="questions-section">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            value={answers[currentQuestion.id] || (currentQuestion.type === 'checkbox' ? [] : '')}
            onChange={(val) => handleChange(currentQuestion.id, val)}
            error={errors[currentQuestion.id]}
          />
        </div>

        <NavigationButtons
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirst={currentIndex === 0}
          isLast={currentIndex === queue.length - 1}
        />
      </div>

      <ProgressBar
        currentStep={Math.min(currentIndex, queue.length - 1)}
        totalSteps={queue.length}
      />
    </AnimatedWrapper>
  );
};

export default QuestionsPage;
