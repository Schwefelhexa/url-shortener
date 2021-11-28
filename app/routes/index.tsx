import type { MetaFunction } from "remix";
import tw from "tailwind-styled-components";

export let meta: MetaFunction = () => {
  return {
    title: "URL Shortener",
    description: "It shortens your URLs!",
  };
};

export const HeadingTest = tw.h1`text-3xl text-red-500`;

export default function Index() {
  return (
    <main className="text-3xl text-red-500">
      <HeadingTest>Hello URL Shortener!</HeadingTest>
    </main>
  );
}
