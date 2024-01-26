"use client";

import React from "react";
import { Button, Form, Input } from "antd";

// ... (imports)

export const Bai9 = () => {
  const [data, setData] = React.useState<number | undefined>();
  const [inputValue1, setInputValue1] = React.useState("");
  const [inputValue2, setInputValue2] = React.useState("");
  const [error, setError] = React.useState<string>("");

  const onFinish = (values: { value1: string, value2: string }) => {
    const N = parseInt(values.value1);
    const inputArr = values.value2.split(" ").map((item) => parseInt(item.trim()));
    if (N < 2 || N > 200000) {
      setError("N must be between 2 and 200,000");
      return;
    }
    if (inputArr.length !== N - 1 || inputArr.some((num) => num < 1 || num > N)) {
      setError("Invalid input for values");
      return;
    }
    const missingNumber = Array.from({ length: N }, (_, i) => i + 1).find((num) => !inputArr.includes(num));
    setData(missingNumber);
    setInputValue1("");
    setInputValue2("");
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
          label="Giới hạn N"
          name="value1"
          rules={[{ required: true, message: "Please input a number!" }]}
        >
          <Input 
            value={inputValue1} 
            onChange={(e) => setInputValue1(e.target.value)}
            placeholder="Example: 5"
            className="bg-slate-100"
          />
        </Form.Item>
        <Form.Item
          label="Các con số"
          name="value2"
          rules={[{ required: true, message: "Please input a number!" }]}
        >
          <Input 
            value={inputValue2} 
            onChange={(e) => setInputValue2(e.target.value)}
            placeholder="Example: 2 3 1 5"
            className="bg-slate-100"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="bg-blue-950">
            Submit
          </Button>
        </Form.Item>
      </Form>

      {error && <div className="text-red-500">{error}</div>}

      <div className="mt-14">
        Result: {data}
      </div>
    </div>
  );
};