import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function FeedbackForm({ onAddFeedback: onAdd }) {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !feedback.trim() || !rating) return;

        onAdd({ name, feedback, rating });
        setName('');
        setFeedback('');
        setRating(5);
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder='Student Name...' value={name} onChange={(e) => setName(e.target.value)} />
            <Textarea placeholder='Feedback...' value={feedback} onChange={(e) => setFeedback(e.target.value)} />
            <Input placeholder='Rating (1-5)' type='number' min='1' max='5' value={rating} onChange={(e) => setRating(e.target.value)} />
            <Button type='submit'>Submit Feedback</Button>
        </form>
    );
}
