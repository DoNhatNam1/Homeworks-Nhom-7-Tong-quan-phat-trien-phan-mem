"use client";

import React from "react";
import { Button, Form, Input } from "antd";

const Bai3 = () => {
  const [fahrenheit, setFahrenheit] = React.useState("");
  const [celsius, setCelsius] = React.useState<number | undefined>();
  const [error, setError] = React.useState<string>("");

  const convertToFahrenheit = (celsius: number) => {
    return (celsius * 9) / 5 + 32;
  };

  const convertToCelsius = (fahrenheit: number) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  const onFinish = (values: { fahrenheit: string }) => {
    const f = parseFloat(values.fahrenheit);
    if (isNaN(f)) {
      setError("Please input a valid number for Fahrenheit");
      return;
    }
    const c = convertToCelsius(f);
    setCelsius(c);
    setFahrenheit(convertToFahrenheit(c).toString());
    setError("");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full h-96 grid place-content-center space-y-2 px-48">
      <h1>
        3. Viết chương trình cho phép nhập vào một số đo nhiệt độ the độ
        Fahrenheit và xuất ra nhiệt độ tương đương của nó the độ Celsius, sử
        dụng công thức chuyển đổi: C = 5/9(F – 32).
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
          label="Fahrenheit"
          name="fahrenheit"
          rules={[
            {
              required: true,
              message: "Please input the temperature in Fahrenheit!",
            },
            {
              pattern: /^-?\d+(\.\d+)?$/,
              message: "Please input a valid number for Fahrenheit!",
            },
          ]}
        >
          <Input
            value={fahrenheit}
            onChange={(e) => setFahrenheit(e.target.value)}
            placeholder="Enter temperature in Fahrenheit"
            className="bg-slate-100"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="bg-blue-950">
            Convert
          </Button>
        </Form.Item>
      </Form>

      {error && <div className="text-red-500">{error}</div>}

      <div className="mt-14">
        Celsius:
        <Input
          value={celsius?.toString()}
          disabled
          className="bg-slate-100 font-bold"
        />
      </div>
    </div>
  );
};

export default Bai3;
