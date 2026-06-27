import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import EmptyState from "../components/ui/EmptyState";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <EmptyState
        icon={<AlertTriangle size={32} />}
        title="Page not found"
        description="Sorry, the page you’re looking for doesn’t exist or may have moved."
      >
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </EmptyState>
    </div>
  );
}
