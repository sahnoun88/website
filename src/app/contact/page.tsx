import React from "react";
import Form from "@/components/Form";

type Props = {};

function page({}: Props) {
  return (
    <>
      <h1 className="text-center text-transparent my-24 py-5 bg-gradient-to-r from-primary to-purple-300 font-semibold text-6xl bg-clip-text border ">
        Register To RPA Plug-in
      </h1>
      <Form />
    </>
  );
}

export default page;
