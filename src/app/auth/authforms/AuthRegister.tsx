import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface AuthRegisterProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AuthRegister: React.FC<AuthRegisterProps> = ({ formData, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <Label htmlFor="name" value="Name" />
        <TextInput
          id="name"
          type="text"
          value={formData.name}
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="email" value="Email Address" />
        <TextInput
          id="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-6">
        <Label htmlFor="password" value="Password" />
        <TextInput
          id="password"
          type="password"
          value={formData.password}
          onChange={onChange}
          required
        />
      </div>
      <Button type="submit" color="primary" className="w-full">Sign Up</Button>
    </form>
  );
};

export default AuthRegister;
