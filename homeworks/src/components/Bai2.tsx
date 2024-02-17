"use client";

import React from "react";
import { Button, Form, Input } from "antd";

// ... (imports)

export const Bai2 = () => {
  const [data, setData] = React.useState<number | undefined>();
  const [inputValue1, setInputValue1] = React.useState("");
  const [inputValue2, setInputValue2] = React.useState("");
  const [error, setError] = React.useState<string>("");

  const onFinish = (values: { value1: string; value2: string }) => {
    const a = parseInt(values.value1);
    const b = parseInt(values.value2);
    if (isNaN(a) || isNaN(b)) {
      setError("Vui lòng nhập kiểu số");
      return;
    }
    if (b === 0) {
      setError("Không thể chia cho 0");
      return;
    }
    const remainder = a % b;
    setData(remainder);
    setInputValue1("");
    setInputValue2("");
    setError("");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full h-96 grid place-content-center space-y-2 px-48">
      <h1>
        2. Viết chương trình nhập vào 2 số nguyên dương a và b, cho biết kết quả
        chia lấy phần dư của a với b.
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
          label="Number a"
          name="value1"
          rules={[{ required: true, message: "Please input a number!" }]}
        >
          <Input
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            placeholder="Enter number a"
            className="bg-slate-100"
          />
        </Form.Item>

        <Form.Item
          label="Number b"
          name="value2"
          rules={[{ required: true, message: "Please input a number!" }]}
        >
          <Input
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
            placeholder="Enter number b"
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

      <div className="mt-6">
        Result:{" "}
        <Input
          value={data?.toString()}
          disabled
          className="bg-slate-100 font-bold"
        />
      </div>
    </div>
  );
};
