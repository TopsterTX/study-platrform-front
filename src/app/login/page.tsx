import { Button, Flex, Form, Input, Typography } from "antd";
import { CenterContainer, request } from "@/shared";
import { loginHandler } from "@/features";

const LoginPage = () => {
  const { Title } = Typography;
  // const response = await request("/users", { method: "GET" });

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
        // onFinish={loginHandler}
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
          <Flex justify="space-between">
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
            <Button type="link">Зарегистрироваться</Button>
          </Flex>
        </Form.Item>
      </Form>
    </CenterContainer>
  );
};

export default LoginPage;
