"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Form, Input, Space, Typography } from "antd";
import { CenterContainer } from "@/components/common";

const SignUpPage = () => {
  const { Title } = Typography;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <CenterContainer
      vertical
      style={{
        height: "100svh",
      }}
    >
      <Title level={2}>Регистрация</Title>
      <Form
        name="basic"
        autoComplete="off"
        layout="horizontal"
        style={{
          minWidth: "300px",
        }}
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Пожалуйста, введите имя пользователя" },
          ]}
        >
          <Input autoComplete="off" placeholder="Имя пользователя" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Пожалуйста, введите почту" }]}
        >
          <Input autoComplete="off" placeholder="Почта" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
        >
          <Input.Password autoComplete="off" placeholder="Пароль" />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Создать аккаунт
            </Button>
            <Button
              type="link"
              onClick={() => router.push("/login")}
              loading={isLoading}
            >
              Уже есть аккаунт ?
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </CenterContainer>
  );
};

export default SignUpPage;
