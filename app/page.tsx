import Breadcrumds from "./components/Breadcrumds";
import Divider from "./components/Divider";
import AddressForm from "./components/AddressForm";

import "./styles/main.css";

export default function Home() {
  return (
    <main className='main'>
      <Breadcrumds />
      <Divider />
      <AddressForm />
    </main>
  );
}
