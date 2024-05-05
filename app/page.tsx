import CustomSelect from "./components/CustomSelect";
import FetchButton from "./components/FetchButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Test</div>
      <CustomSelect
        label="Test Select"
        options={[
          {
            label: "One",
            value: "one",
          },
          {
            label: "Two",
            value: "two",
          },
          {
            label: "Three",
            value: "three",
          },
          {
            label: "Four",
            value: "four",
          },
        ]}
        // onChange={handleChange}
      />
      <FetchButton />
      <h1>AS</h1>
    </main>
  );
}
