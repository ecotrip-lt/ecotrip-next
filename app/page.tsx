import "./styles/main.css";
import CustomLink from "./components/reusableComponents/form/select/CustomLink";

export default function Home() {
  return (
    <main className='main'>
      <h1>Home page</h1>
      <p>Addresses here</p>
      <CustomLink href='/form' label='Go to Form' />
    </main>
  );
}
