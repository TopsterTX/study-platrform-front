import { useState } from "react";
import { useRouter } from "next/navigation";
import { Space } from "@/shared";
import { Button, Input } from "@nextui-org/react";

export const SignInForm = () => {
  const [isLoading, setIsLoading] = useState();
  const router = useRouter();

  return (
    <Space className="flex flex-col gap-4">
      <Space className="flex-col max-w-72 gap-4 mb-4 justify-center items-center m-auto">
        <p className="text-3xl text-blue-600 flex text-center">Вход</p>
      </Space>
      <form
        name="basic"
        autoComplete="off"
        className="flex w-80 flex-col gap-2"
      >
        <Input autoComplete="off" placeholder="Имя пользователя" />
        <Input autoComplete="off" placeholder="Пароль" />
        <Space>
          <Button type="submit">Войти</Button>
          <Button onClick={() => router.push("/signup")}>
            Зарегистрироваться
          </Button>
        </Space>
      </form>
    </Space>
  );
};
