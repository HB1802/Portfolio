
"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_name: 'Harshit',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id === 'first-name' ? 'firstName' : 
       id === 'last-name' ? 'lastName' : id]: value
    }));
  };

  return (
    <div className="bg-neutral-900/50 rounded-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-700 outline-none"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-700 outline-none"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-700 outline-none"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-700 outline-none"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 bg-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-700 outline-none resize-none"
          />
        </div>

        {submitStatus === 'success' && (
          <div className="text-green-400 text-sm">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="text-red-400 text-sm">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}