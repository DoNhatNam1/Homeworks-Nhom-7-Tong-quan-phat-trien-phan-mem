"use client";

import React from "react";
import { Button, Form, Input } from "antd";

const Bai5 = () => {
  const [a, setA] = React.useState("");
  const [b, setB] = React.useState("");
  const [c, setC] = React.useState("");
  const [maxValue, setMaxValue] = React.useState<number | undefined>();
  const [error, setError] = React.useState<string>("");

  const findMaxValue = (a: number, b: number, c: number) => {
    const max = Math.max(a, b, c);
    setMaxValue(max);
    setError("");
  };

  const onFinish = (values: { a: string; b: string; c: string }) => {
    const numA = parseFloat(values.a);
    const numB = parseFloat(values.b);
    const numC = parseFloat(values.c);
    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
      setError("Please input valid numbers for a, b, and c");
      return;
    }
    findMaxValue(numA, numB, numC);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-full h-96 grid place-content-center space-y-2 px-48">
      <h1>5. Nhập vào 3 số nguyên a,b,c. In ra mà hình giá trị lớn nhất.</h1>
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
          label="Number a"
          name="a"
          rules={[
            { required: true, message: "Please input number a!" },
            {
              pattern: /^-?\d+(\.\d+)?$/,
              message: "Please input a valid number for a!",
            },
          ]}
        >
          <Input
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="Enter number a"
            className="bg-slate-100"
          />
        </Form.Item>
        <Form.Item
          label="Number b"
          name="b"
          rules={[
            { required: true, message: "Please input number b!" },
            {
              pattern: /^-?\d+(\.\d+)?$/,
              message: "Please input a valid number for b!",
            },
          ]}
        >
          <Input
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="Enter number b"
            className="bg-slate-100"
          />
        </Form.Item>
        <Form.Item
          label="Number c"
          name="c"
          rules={[
            { required: true, message: "Please input number c!" },
            {
              pattern: /^-?\d+(\.\d+)?$/,
              message: "Please input a valid number for c!",
            },
          ]}
        >
          <Input
            value={c}
            onChange={(e) => setC(e.target.value)}
            placeholder="Enter number c"
            className="bg-slate-100"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="bg-blue-950">
            Find Max
          </Button>
        </Form.Item>
      </Form>

      {error && <div className="text-red-500">{error}</div>}

      <div className="mt-14">Max Value:
      <Input
          value={maxValue?.toString()}
          disabled
          className="bg-slate-100 font-bold"
        />
        </div>
    </div>
  );
};

export default Bai5;
