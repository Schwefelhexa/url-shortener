import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "URL Shortener",
    description: "It shortens your URLs!",
  };
};

export default function Index() {
  return (
    <main>
      <h1>Hello URL Shortener!</h1>
    </main>
  );
}
