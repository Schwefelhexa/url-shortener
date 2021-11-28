import { Redirect } from ".prisma/client";
import { LoaderFunction, useLoaderData } from "remix";
import { PrimaryButton, PrimaryLink } from "~/components/button";
import Table, { TableBody, TableHead, TableRow } from "~/components/Table";
import { db } from "~/utils/db.server";

type LoaderData = { redirects: Redirect[] };
export const loader: LoaderFunction = async () => {
  const redirects = await db.redirect.findMany({ take: 25 });

  return { redirects };
};

export default function Manage() {
  const { redirects } = useLoaderData<LoaderData>();

  const hostname =
    typeof window === "object"
      ? window.location.protocol + "//" + window.location.host
      : "";

  return (
    <main className="space-y-6">
      <Table>
        <TableHead>
          <TableHead.Cell>Slug</TableHead.Cell>
          <TableHead.Cell>Target</TableHead.Cell>
        </TableHead>
        <TableBody>
          {redirects.map((redirect) => (
            <TableRow key={redirect.id}>
              <TableRow.Cell highlight>
                {hostname}/redirect/{redirect.slug}
              </TableRow.Cell>
              <TableRow.Cell>{redirect.target}</TableRow.Cell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PrimaryLink to="create_redirect">Create new</PrimaryLink>
    </main>
  );
}
