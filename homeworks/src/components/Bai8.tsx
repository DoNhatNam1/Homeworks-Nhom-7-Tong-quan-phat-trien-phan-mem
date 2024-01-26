"use client";

import React from "react";
import { Button, Form, Input } from "antd";

export const Bai8 = () => {
  const [data, setData] = React.useState<number[] | undefined>([]);
  const [inputValue, setInputValue] = React.useState("");

  // Logic when Submitted Successfully
  const onFinish = (values: { values: number }) => {
    if (typeof (values.values * 1) !== 'number' || values.values * 1 < 1 || values.values * 1 > 1000000) {
      console.log("Values không hợp lệ:", values.values);
      setInputValue("");
      setData([])
      return;
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
        setInputValue("");
        return;
      }
    }
    setData(result);
    setInputValue("");
  };

    // Logic when Submitted Fail
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
          label="Values N"
          name="values"
          rules={[{ required: true, message: "Please input a number!" }]}
        >
          <Input 
          type="number" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Example: 3"
          className="bg-slate-100"
          />
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
    </div>
  );
};
