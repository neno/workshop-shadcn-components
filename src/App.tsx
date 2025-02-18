import { Button } from "./components/ui/button";
import { MDButton } from "./components/ui/md-button";
import "./index.css";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Button>Default Button</Button>
      <MDButton>Success Button</MDButton>
    </div>
  );
}

export default App;
