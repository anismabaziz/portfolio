import { Button } from "./components/ui/button";
import DecryptedText from "./components/bits/decrypted-text";

export default function App() {
  return (
    <div className="container mx-auto py-6">
      <Button>Hello world</Button>
      <div style={{ marginTop: "4rem" }}>
        <DecryptedText
          text="This text animates when in view"
          animateOn="view"
          revealDirection="center"
          speed={100}
          maxIterations={50}
        />
      </div>
    </div>
  );
}
