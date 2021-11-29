import { Link } from "remix";
import tw from "tailwind-styled-components";

// TODO Find a way to not duplicate the class names here
export const PrimaryButton = tw.button`inline-flex items-center space-x-1 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;
export const PrimaryLink = tw(
  Link
)`inline-flex items-center space-x-1 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;
