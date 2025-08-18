import React from "react";
import { Link } from "react-router-dom";

function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-600">Unauthorized</h1>
      <p className="text-gray-700 mb-6">
        Sorry, you don’t have permission to access this page.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500"
      >
        Go Home
      </Link>
    </div>
  );
}

export default UnauthorizedPage;
