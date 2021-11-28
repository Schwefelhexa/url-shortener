import { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug);

  const redirect = await db.redirect.findUnique({
    where: { slug: params.slug },
  });
  if (!redirect) return new Response(null, { status: 404 });

  return new Response(null, {
    status: 308,
    headers: { Location: redirect.target },
  });
};
