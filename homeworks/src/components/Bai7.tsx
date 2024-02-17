"use client";

import React from "react";
import { Button, Form, Input } from "antd";

const Bai7 = () => {
  const [seconds, setSeconds] = React.useState("");
  const [hours, setHours] = React.useState<number | undefined>();
  const [minutes, setMinutes] = React.useState<number | undefined>();
  const [remainingSeconds, setRemainingSeconds] = React.useState<
    number | undefined
  >();
  const [error, setError] = React.useState<string>("");

  const convertTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    setHours(h);
    setMinutes(m);
    setRemainingSeconds(sec);
    setError("");
  };

  const onFinish = (values: { seconds: string }) => {
    const s = parseInt(values.seconds);
    if (isNaN(s) || s < 0) {
      setError("Please input a valid non-negative integer for seconds");
      return;
    }
    convertTime(s);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-full h-96 grid place-content-center space-y-2 px-48">
      <h1>
        7. Viết chương trình cho phép nhập vào thời gian của một công việc mà đó
        tính bằng giây. Hãy chuyển đổi và in ra màn hình thời gian trên dưới
        dạng bao nhiêu giờ, bao nhiêu phút, bao nhiêu giây.
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
          label="Seconds"
          name="seconds"
          rules={[
            { required: true, message: "Please input the time in seconds!" },
            {
              pattern: /^\d+$/,
              message: "Please input a valid non-negative integer for seconds!",
            },
          ]}
        >
          <Input
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            placeholder="Enter time in seconds"
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
        Time: {hours} hours, {minutes} minutes, {remainingSeconds} seconds
      </div>
    </div>
  );
};

export default Bai7;
