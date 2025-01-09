'use client';

import QuizApp from './components/QuizApp';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">3rd Class Test App</h1>
      <QuizApp />
    </main>
  )
}