import { Redirect } from ".prisma/client";
import { LoaderFunction, useLoaderData } from "remix";
import Table, { TableBody, TableHead, TableRow } from "~/components/Table";
import { db } from "~/utils/db.server";

type LoaderData = { redirects: Redirect[] };
export const loader: LoaderFunction = async () => {
  const redirects = await db.redirect.findMany({ take: 25 });

  return { redirects };
};

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  {
    name: "Cody Fisher",
    title: "Product Directives Officer",
    role: "Owner",
    email: "cody.fisher@example.com",
  },
];

export default function Manage() {
  const data = useLoaderData<LoaderData>();

  return (
    <Table>
      <TableHead>
        <TableHead.Cell>Name</TableHead.Cell>
        <TableHead.Cell>Title</TableHead.Cell>
        <TableHead.Cell>Email</TableHead.Cell>
        <TableHead.Cell>Role</TableHead.Cell>
      </TableHead>
      <TableBody>
        {people.map((person, personId) => (
          <TableRow key={personId}>
            <TableRow.Cell highlight>{person.name}</TableRow.Cell>
            <TableRow.Cell>{person.title}</TableRow.Cell>
            <TableRow.Cell>{person.email}</TableRow.Cell>
            <TableRow.Cell>{person.role}</TableRow.Cell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
