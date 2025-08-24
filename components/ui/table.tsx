interface TableProps {
  headers: string[];
  data: Array<Array<React.ReactNode>>;
}

export function Table({ headers, data }: TableProps) {
  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h} className="border px-4 py-2 text-left">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="border px-4 py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
