"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function AppFileUpload() {
  // Only enable button when file is selected.
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  return (
    <div>
      <Input id="file" type="file" onChange={handleFileChange} />
      <Button disabled={!selectedFile}>Convert</Button>
    </div>
  );
}
