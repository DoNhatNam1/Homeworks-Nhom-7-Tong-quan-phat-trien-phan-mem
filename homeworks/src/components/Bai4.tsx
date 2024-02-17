

import React from 'react'
import { Button, Form, Input } from "antd";

const Bai4 = () => {
  const [a, setA] = React.useState("");
  const [b, setB] = React.useState("");
  const [x, setX] = React.useState<number | undefined>();
  const [error, setError] = React.useState<string>("");

  const solveLinearEquation = (a: number, b: number) => {
    if (a === 0) {
      setError("Coefficient 'a' cannot be zero");
      return;
    }
    const result = -b / a;
    setX(result);
    setError("");
  };

  const onFinish = (values: { a: string, b: string }) => {
    const coefficientA = parseFloat(values.a);
    const coefficientB = parseFloat(values.b);
    if (isNaN(coefficientA) || isNaN(coefficientB)) {
      setError("Please input valid numbers for coefficients");
      return;
    }
    solveLinearEquation(coefficientA, coefficientB);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
<div className="w-full h-96 grid place-content-center space-y-2 px-48">
  <h1>4. Giải phương trình bậc I: ax+b=0.</h1>
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
          label="Coefficient a"
          name="a"
          rules={[
            { required: true, message: "Please input the coefficient a!" },
            { pattern: /^-?\d+(\.\d+)?$/, message: "Please input a valid number for coefficient a!" }
          ]}
        >
          <Input 
            value={a} 
            onChange={(e) => setA(e.target.value)}
            placeholder="Enter coefficient a"
            className="bg-slate-100"
          />
        </Form.Item>
        <Form.Item
          label="Coefficient b"
          name="b"
          rules={[
            { required: true, message: "Please input the coefficient b!" },
            { pattern: /^-?\d+(\.\d+)?$/, message: "Please input a valid number for coefficient b!" }
          ]}
        >
          <Input 
            value={b} 
            onChange={(e) => setB(e.target.value)}
            placeholder="Enter coefficient b"
            className="bg-slate-100"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="bg-blue-950">
            Solve
          </Button>
        </Form.Item>
      </Form>

      {error && <div className="text-red-500">{error}</div>}

      <div className="mt-14">
        Result:
        <Input
          value={x?.toString()}
          disabled
          className="bg-slate-100 font-bold"
        />
      </div>
    </div>
  )
}

export default Bai4