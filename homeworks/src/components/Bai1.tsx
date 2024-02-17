"use client";

import React from "react";
import { Button, Form, Input } from "antd";

const Bai1 = () => {
  const [data, setData] = React.useState<number | undefined>();
  const [inputValue, setInputValue] = React.useState("");
  const [error, setError] = React.useState<string>("");

  const onFinish = (values: { value: string }) => {
    const n = parseInt(values.value);
    if (isNaN(n)) {
      setError("Please input a valid number");
      return;
    }
    const absoluteValue = Math.abs(n);
    setData(absoluteValue);
    setInputValue("");
    setError("");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-full h-96 grid place-content-center">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
<Form.Item
  label="Number"
  name="value"
  rules={[
    { required: true, message: "Please input a number!" },
    { pattern: /^-?\d+$/, message: "Please input a valid integer number!" }
  ]}
>
  <Input 
    value={inputValue} 
    onChange={(e) => setInputValue(e.target.value)}
    placeholder="Enter a number"
    className="bg-slate-100"
  />
</Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="bg-blue-950">
            Calculate
          </Button>
        </Form.Item>
      </Form>

      {error && <div className="text-red-500">{error}</div>}

      <div className="mt-14">Absolute Value: {data}</div>
    </div>
  );
};

export default Bai1;
