import { BarLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <BarLoader color="#3F83F8" />
    </div>
  );
}
