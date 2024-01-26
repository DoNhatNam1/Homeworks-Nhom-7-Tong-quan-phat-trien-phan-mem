"use client";

import React from "react";
import { Button, Form, Input } from "antd";

export const Bai1 = () => {
  const [data, setData] = React.useState<number[] | undefined>([]);

  const onFinish = (values: { values: any }) => {
    if (values.values < 1 || values.values > 1000000) {
      return console.log("Values không hợp lệ:", values.values);
    }
    let temp = values.values;
    let result = [temp];
    while (temp !== 1) {
      if (temp % 2 === 0) {
        temp = temp / 2;
      } else {
        temp = temp * 3 + 1;
      }
      result.push(temp);
      if (result.length > 1000) {
        console.log("Quá nhiều giá trị, dừng lại để tránh lỗi out of memory");
        setData(result);
        return;
      }
    }
    setData(result);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
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
          label="Values N"
          name="values"
          rules={[{ required: true, message: "Please input a number!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="bg-blue-950">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <div className="mt-14">
        Result:{" "}
        {data?.map((item, index) => (
          <span key={index}>
            {item}
            {index !== (data?.length ?? 0) - 1 ? ", " : ""}
          </span>
        ))}
      </div>
    </>
  );
};
