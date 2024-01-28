// import { Pagination } from "@mantine/core";
// import React from "react";

// const TablePagination = () => {
//   return <Pagination total={20} siblings={2} defaultValue={10} />;
// };

// export default TablePagination;

import { Group, Pagination, Text } from "@mantine/core";
import React from "react";

const TablePagination = ({ total, onPageChange, siblings, meta, ...props }) => {
  return (
    <div className="flex justify-between">
      <div>
        <Text size="lg" fw={500}>
          Showing {total} of {meta?.totalDocs}
        </Text>
      </div>
      {!meta?.hasNextPage ? (
        <Pagination.Root
          total={10}
          siblings={1}
          {...props}
          onChange={(page) => {
            console.log("pagination", page);
            if (onPageChange) {
              onPageChange(page);
            }
          }}
        >
          <Group gap={5} justify="center">
            <Pagination.First />
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
            <Pagination.Last />
          </Group>
        </Pagination.Root>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TablePagination;
