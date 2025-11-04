export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>Travel List</h1>;
}
function Form() {
  return <form></form>;
}
function PackingList() {
  return <ul></ul>;
}
function Stats() {
  return <div></div>;
}
