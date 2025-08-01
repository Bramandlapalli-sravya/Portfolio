'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_t7py00d',
        'template_8tgtjq9',
        form,
        'xZZuv2mtQxpExWdrC'
      )
      .then(() => {
        alert('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to send message.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#0c0b22] text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-6">
        Contact me, let's make magic together
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          placeholder="Name:"
          value={form.name}
          onChange={handleChange}
          className="p-4 bg-[#2c2b3a] border-none text-white rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email:"
          value={form.email}
          onChange={handleChange}
          className="p-4 bg-[#2c2b3a] border-none text-white rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message:"
          value={form.message}
          onChange={handleChange}
          className="p-4 bg-[#2c2b3a] border-none text-white rounded"
          required
        />
        <button
          type="submit"
          className="p-4 cursor-pointer bg-[#6c63ff] text-white rounded hover:bg-[#6c63ff]"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
