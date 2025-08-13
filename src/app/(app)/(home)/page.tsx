import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-5">
      <div>
        <Button variant="elevated">Hello there</Button>
      </div>
      <div className="mt-5">
        <Input placeholder="hello there" />
      </div>
      <div className="mt-5">
        <Progress value={50} />
      </div>
      {/* <div className="mt-5">
        <Textarea value="hello there" />
      </div> */}
      <div className="mt-5">
        <Checkbox />
      </div>
    </div>
  );
}
