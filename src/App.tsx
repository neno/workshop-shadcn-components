import { useRef } from "react";
import { Button } from "./components/ui/button";

import "./index.css";

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    console.log(inputRef.current?.value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="w-1/4 mx-auto grid gap-4">
        <Button>Default Button</Button>
        <Button className="bg-blue-500">Custom Styled Button</Button>
        <Button variant="info">Info Button</Button>
        <Button variant="success">Sucess Button</Button>
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <ol className="grid gap-4">
              <li>
                <input
                  ref={inputRef}
                  type="text"
                  className="border w-full p-2 rounded-sm"
                />
              </li>
              <li>
                <Button type="submit">Submit</Button>
              </li>
            </ol>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
