"use client";

import React from "react";
import { Button, Form, Input } from "antd";

const Bai6 = () => {
  const [number, setNumber] = React.useState("");
  const [sum, setSum] = React.useState<number | undefined>();
  const [error, setError] = React.useState<string>("");

  const calculateSumOfDigits = (n: number) => {
    const firstDigit = Math.floor(n / 10);
    const secondDigit = n % 10;
    const total = firstDigit + secondDigit;
    setSum(total);
    setError("");
  };

  const onFinish = (values: { number: string }) => {
    const n = parseInt(values.number);
    if (isNaN(n) || n < 10 || n > 99) {
      setError("Please input a valid two-digit positive integer");
      return;
    }
    calculateSumOfDigits(n);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full h-96 grid place-content-center space-y-2 px-48">
      <h1>
        6. Viết chương trình nhập một số nguyên dương N có 2 chữ số từ bàn phím,
        xuất ra màn hình tổng các chữ số của N.
      </h1>
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
          name="number"
          rules={[
            {
              required: true,
              message: "Please input a two-digit positive integer!",
            },
            {
              pattern: /^\d{2}$/,
              message: "Please input a valid two-digit positive integer!",
            },
          ]}
        >
          <Input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a two-digit positive integer"
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

      <div className="mt-14">
        Sum of Digits:
        <Input
          value={sum?.toString()}
          disabled
          className="bg-slate-100 font-bold"
        />
      </div>
    </div>
  );
};

export default Bai6;
