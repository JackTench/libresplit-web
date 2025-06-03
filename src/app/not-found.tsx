import { PacmanLoader } from "react-spinners";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <PacmanLoader color="#3F83F8" />
      <p>Not found.</p>
    </div>
  );
}
