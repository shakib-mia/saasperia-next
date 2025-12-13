import { useEffect, useState } from "react";

const useColumns = () => {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(3); // PC
      } else if (window.innerWidth >= 768) {
        setColumns(2); // Tablet
      } else {
        setColumns(1); // Mobile
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return columns;
};

export default useColumns;
