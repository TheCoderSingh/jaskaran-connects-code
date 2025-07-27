import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="text-6xl font-extrabold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-3">
          You’ve reached a page that doesn’t exist. But hey, we’re all about unexpected journeys here! ✨
        </p>
        <p className="text-muted-foreground mb-6">
          Let’s get you back on track.
        </p>
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
