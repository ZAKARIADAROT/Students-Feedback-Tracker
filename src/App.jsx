import { useState } from 'react';
import FeedbackForm from '@/components/FeedbackForm';
import FeedbackList from '@/components/FeedbackList';

export default function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (feedback) => {
    setFeedbacks(prev => [feedback, ...prev]);
  };

  const deleteFeedback = (index) => {
    setFeedbacks(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Students Feedback Tracker</h1>

        <FeedbackForm onAddFeedback={addFeedback} />
        <FeedbackList feedbacks={feedbacks} onDelete={deleteFeedback} />
      </div>
    </div>
  );
}
