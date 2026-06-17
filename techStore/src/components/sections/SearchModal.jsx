import { X } from "lucide-react";
import { useSearch } from "../../context/search/useSearch";
import { useNavigate } from "react-router-dom";

export default function SearchModal({ onClose }) {
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();

  function handleSearch() {
    navigate("/shop");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div className="mx-auto mt-24 max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold">Search Products</h2>

          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="w-full rounded-xl border px-4 py-3"
          autoFocus
        />
      </div>
    </div>
  );
}
