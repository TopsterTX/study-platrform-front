"use client";

import { Button, Form, Input, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CenterContainer } from "@/components/common";
import { loginHandler } from "@/app/login/helpers";

const LoginPage = () => {
  const { Title } = Typography;

  const router = useRouter();
  const [_, setBody] = useState<unknown>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  useEffect(() => {
    if (isAuthenticate) {
      router.push("/dashboard");
    }
  }, [isAuthenticate]);

  return (
    <CenterContainer
      vertical
      style={{
        height: "100svh",
      }}
    >
      <Title level={2}>Вход</Title>
      <Form
        name="basic"
        autoComplete="off"
        layout="horizontal"
        style={{
          minWidth: "300px",
        }}
        onFinish={loginHandler({ setBody, setIsLoading, setIsAuthenticate })}
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
          name="password"
          rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
        >
          <Input.Password autoComplete="off" placeholder="Пароль" />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Войти
            </Button>
            <Button
              type="link"
              onClick={() => router.push("/signup")}
              loading={isLoading}
            >
              Зарегистрироваться
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </CenterContainer>
  );
};

export default LoginPage;
