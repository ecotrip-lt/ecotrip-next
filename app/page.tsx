import FirstStep from "./pages/steps/FirstStep";
import "./styles/main.css";
import { OptionType } from "./utils/ecotripPriceList";

export type FormFields = {
  category: OptionType | null;
};

export default function Home() {
  return (
    <main className="main">
      <FirstStep />
    </main>
  );
}
