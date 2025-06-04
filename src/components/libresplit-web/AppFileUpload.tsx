import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AppFileUpload() {
  return (
    <div>
      <Input id="file" type ="file" />
      <Button>Convert</Button>
    </div>
  );
}
