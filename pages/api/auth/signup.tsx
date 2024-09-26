"use client";
import { signIn } from 'next-auth/react';

export default function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform sign-in
    await signIn('credentials', {
      redirect: true,
      email: e.target.email.value,
      password: e.target.password.value,
      callbackUrl: '/',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}