import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React from "react";

interface FormData {
  email: string;
  password: string;
}

interface AuthLoginProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AuthLogin: React.FC<AuthLoginProps> = ({formData, onChange, onSubmit}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="Email" value="Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            sizing="md"
            className="form-control form-rounded-xl"
            value={formData.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            type="password"
            sizing="md"
            className="form-control form-rounded-xl"
            onChange={onChange}
            value={formData.password}
            required
          />
        </div>
        <div className="flex justify-between my-5">
          <div className="flex items-center gap-2">
            <Checkbox id="accept" className="checkbox" />
            <Label
              htmlFor="accept"
              className="opacity-90 font-normal cursor-pointer"
            >
              Remeber this Device
            </Label>
          </div>
          <Link href={"/"} className="text-primary text-sm font-medium">
            Forgot Password ?
          </Link>
        </div>
        <Button color={"primary"} type="submit" className="w-full bg-primary text-white rounded-xl">
          Sign in
        </Button>
      </form>
    </>
  );
};

export default AuthLogin;
