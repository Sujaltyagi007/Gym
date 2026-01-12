"use client";
import React from "react";
import TableStructure from "@/components/TableStructure";

type Props = {};

const page = (props: Props) => {
  const [data, setData] = React.useState([]);
  const columns = [
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "role", label: "Role" },
  ];
  return (
    <div>
      <h1 className="mx-5">Admin Page</h1>
      <div className=" mx-[5%] my-[5%]">
        <TableStructure
          columns={columns}
          data={data}
          setData={setData}
          className={""}
          loading={false}
        />
      </div>
    </div>
  );
};

export default page;
