function Table() {
  const headers = [
    "Rank",
    "ปัจจัยการลงทุน (Factor)",
    "โอกาสในการชนะตลาด (%)",
    "หุ้นที่น่าลงทุน",
  ];
  const data = [
    ["1", "Value (MKT)", "70%"],
    ["2", "Row 2 Col 2", "Row 2 Col 3"],
    ["3", "Row 3 Col 2", "Row 3 Col 3"],
    ["4", "Row 4 Col 2", "Row 4 Col 3"],
    ["5", "Row 5 Col 2", "Row 5 Col 3"],
    ["6", "Row 6 Col 2", "Row 6 Col 3"],
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white text-center">
        <thead className="bg-[#CFD4D0] text-gray-800">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="w-1/4 py-3 px-4 text-center">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-3 px-4">
                  {cell}
                </td>
              ))}
              <td className="py-2 px-4">
                <button className="bg-teal-500 text-white text-l w-6 h-6 rounded-full ">
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
