"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { lssToLibre } from "@/lib/libresplit-web/convert";
import { useState } from "react";

export function AppFileUpload() {
  // Only enable button when file is selected.
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  // Handler for file uploads.
  const handleSubmit = async () => {
    // Check file has been selected.
    if (!selectedFile) {
      alert("Please select a file before submitting!");
      return;
    }

    try {
      // Get text from file and print to dev console.
      const text = await selectedFile.text();
      lssToLibre(text);
    } catch (error) {
      console.error("Error processing file: ", error);
      alert("Failed to process file. See console for details.");
    }
  };

  return (
    <div>
      <Input id="file" type="file" onChange={handleFileChange} />
      <Button onClick={handleSubmit} disabled={!selectedFile}>
        Convert
      </Button>
    </div>
  );
}
