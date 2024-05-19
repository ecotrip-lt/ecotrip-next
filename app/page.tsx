import "./styles/main.css";
import AddressesForm from "./components/AddressesForm";
import CustomLink from "./components/CustomLink";

export default function Home() {
  return (
    <main className='main'>
      <h1>Home page</h1>
      <p>Addresses here</p>
      <AddressesForm />
      <CustomLink href='/form' label='Go to Form' />
    </main>
  );
}
