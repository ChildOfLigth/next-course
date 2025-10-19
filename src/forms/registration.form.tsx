import { Form, Input, Button } from "@heroui/react";
import React, { useState } from "react";

interface IProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const hendleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submited:", formData);

    onClose();
  };

  return (
    <Form className="w-full max-w-xs" onSubmit={hendleSubmit}>
      <Input
        aria-label="Email"
        isRequired
        name="email"
        placeholder="Enter your email"
        type="email"
        value={formData.email}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none ",
        }}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(val) => {
          if (!val) return "ПОчта обязательна";
          if (!validateEmail(val)) return "Некорректрный email";
        }}
      />

      <Input
        isRequired
        name="confirmPassword"
        placeholder="Подтвердите пароль"
        type="password"
        value={formData.confirmPassword}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none ",
        }}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        validate={(value) => {
          if (!value) return "Пароль для подтверждения обязателен";
          if (value !== formData.password) return "Пароли не совпадают";
          return null;
        }}
      />

      <div className="flex w-[100%]  gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Отмена
        </Button>
        <Button color="primary" type="submit">
          Зарегистрироваться
        </Button>
      </div>
    </Form>
  );
};

export default RegistrationForm;
