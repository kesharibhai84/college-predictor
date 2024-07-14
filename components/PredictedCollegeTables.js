const PredictedCollegesTable = ({ data = [], exam = "", counselling = "" }) => {
  const commonTableClass = "w-full mx-auto border-collapse text-sm sm:text-base";
  const commonHeaderClass = "bg-gray-200 font-bold text-center text-xs sm:text-sm md:text-base";
  const commonCellClass = "p-2 border border-gray-300 text-center text-xs sm:text-sm md:text-base";

  return (
    <>
      <div className="w-full mx-auto overflow-x-auto">
        {exam === "MHT CET" || exam === "KCET" || (exam === "JEE Main" && counselling === "JAC") ? (
          <table className={`${commonTableClass} border border-gray-300`}>
            <thead>
              <tr className={commonHeaderClass}>
                <th className="p-2 border-r border-gray-300">Institute</th>
                <th className="p-2 border-r border-gray-300">Academic Program Name</th>
                <th className="p-2 border-r border-gray-300">Closing Rank</th>
                <th className="p-2">Category</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`${commonCellClass} ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                >
                  <td className="p-2 border-r border-gray-300">{item.Institute}</td>
                  <td className="p-2 border-r border-gray-300">{item["Course"]}</td>
                  <td className="p-2 border-r border-gray-300">{item["Closing Rank"]}</td>
                  <td className="p-2">{item["Category_Key"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="w-full">
            <table className={`${commonTableClass} border border-gray-300`}>
              <thead>
                <tr className={commonHeaderClass}>
                  <th className="p-2 border-r border-gray-300">Institute Rank</th>
                  <th className="p-2 border-r border-gray-300">State</th>
                  <th className="p-2 border-r border-gray-300">Institute</th>
                  <th className="p-2 border-r border-gray-300">Academic Program Name</th>
                  <th className="p-2 border-r border-gray-300">Opening Rank</th>
                  <th className="p-2 border-r border-gray-300">Closing Rank</th>
                  <th className="p-2">Quota</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`${commonCellClass} ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                  >
                    <td className="p-2 border-r border-gray-300">{item["College Rank"]}</td>
                    <td className="p-2 border-r border-gray-300">{item["State"]}</td>
                    <td className="p-2 border-r border-gray-300">{item.Institute}</td>
                    <td className="p-2 border-r border-gray-300">{item["Academic Program Name"]}</td>
                    <td className="p-2 border-r border-gray-300">{item["Opening Rank"]}</td>
                    <td className="p-2 border-r border-gray-300">{item["Closing Rank"]}</td>
                    <td className="p-2">{item["Quota"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {data.length === 0 && (
        <>
          <tr>
              <td colSpan="4" className="p-4 text-center text-gray-700">
                No College found. Please try again with different filters.
              </td>
            </tr>
          </>
        )}
    </>
  );
};

export default PredictedCollegesTable;
