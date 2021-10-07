const App = (): JSX.Element => {
  return (
    <div>
      <h1 data-testid="title">Hello DEV!</h1>
      <p>VITE_CUSTOM: {import.meta.env.VITE_CUSTOM}</p>
    </div>
  );
};
export default App;
