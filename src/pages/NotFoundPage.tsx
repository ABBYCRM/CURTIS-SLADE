import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="py-32 text-center">
      <div className="container-x">
        <div className="font-display text-8xl text-gold-gradient mb-6 font-black">404</div>
        <h1 className="font-display text-4xl mb-6">This page is off the grid.</h1>
        <p className="text-bone/70 mb-10 max-w-md mx-auto">
          Even Mr. Big Guy couldn't find it. Let's get you back to the book.
        </p>
        <Link to="/" className="btn-gold">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
