import { Button } from "./components/ui/button";
import { SuccessButton } from "./components/ui/success-button";
import "./index.css";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Button>Default Button</Button>
      <SuccessButton>Success Button</SuccessButton>
    </div>
  );
}

export default App;
