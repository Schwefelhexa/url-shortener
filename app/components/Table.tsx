import { PropsWithChildren } from "react";
import classnames from "~/utils/classnames";

export function TableHead({ children }: PropsWithChildren<{}>) {
  return (
    <thead className="bg-gray-50">
      <tr>{children}</tr>
    </thead>
  );
}

type TableHeadCellProps = { screenreaderOnly?: boolean };
function TableHeadCell({
  children,
  screenreaderOnly = false,
}: PropsWithChildren<TableHeadCellProps>) {
  if (screenreaderOnly)
    return (
      <th scope="col" className="relative px-6 py-3">
        <span className="sr-only">{children}</span>
      </th>
    );

  return (
    <th
      scope="col"
      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
    >
      {children}
    </th>
  );
}
TableHead.Cell = TableHeadCell;

export function TableBody({ children }: PropsWithChildren<{}>) {
  return (
    <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
  );
}

export function TableRow({ children }: PropsWithChildren<{}>) {
  return <tr>{children}</tr>;
}

type TableRowCellProps = { highlight?: boolean; alignRight?: boolean };
function TableRowCell({
  children,
  highlight = false,
  alignRight = false,
}: PropsWithChildren<TableRowCellProps>) {
  return (
    <td
      className={classnames(
        "whitespace-nowrap px-6 py-4 text-sm",
        !highlight && "text-gray-500",
        highlight && "font-medium text-gray-900",
        alignRight && "text-right"
      )}
    >
      {children}
    </td>
  );
}
TableRow.Cell = TableRowCell;

export default function Table({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col">
      <div className="sm:-mx-6 lg:-mx-8 -my-2 overflow-x-auto">
        <div className="sm:px-6 lg:px-8 inline-block min-w-full py-2 align-middle">
          <div className="sm:rounded-lg overflow-hidden border-b border-gray-200 shadow">
            <table className="min-w-full divide-y divide-gray-200">
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
