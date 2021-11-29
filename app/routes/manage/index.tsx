import { Redirect } from ".prisma/client";
import { LoaderFunction, useLoaderData } from "remix";
import { PlusIcon, TrashIcon } from "@heroicons/react/solid";
import { DangerButton, PrimaryButton, PrimaryLink } from "~/components/button";
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
          <TableHead.Cell screenreaderOnly>Change</TableHead.Cell>
        </TableHead>
        <TableBody>
          {redirects.map((redirect) => (
            <TableRow key={redirect.id}>
              <TableRow.Cell highlight>
                {hostname}/redirect/{redirect.slug}
              </TableRow.Cell>
              <TableRow.Cell>{redirect.target}</TableRow.Cell>
              <TableRow.Cell alignRight>
                <DangerButton>
                  <TrashIcon aria-label="Delete" className="w-5 h-5 -mx-2" />
                </DangerButton>
              </TableRow.Cell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PrimaryLink to="create_redirect">
        <PlusIcon className="w-5 h-5" /> <span>Create new</span>
      </PrimaryLink>
    </main>
  );
}
