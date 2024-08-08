import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { FRONTENDROUTE } from "../utils/frontendroute";
import { useState } from "react";
import { Login } from "../utils/auth";
export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await Login(email, password);
    if (response.ok) {
      response.json().then((data) => {
        console.log(data);
      });
      alert("Logged in successfully");
    } else {
      alert("An error occurred");
    }
  };

  return (
    <div
      className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black
    '
    >
      <Card className='mx-auto max-w-sm '>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
                <a href='#' className='ml-auto inline-block text-sm underline'>
                  Forgot your password?
                </a>
              </div>
              <Input
                id='password'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type='submit' className='w-full' onClick={handleSubmit}>
              Login
            </Button>
            <Button variant='outline' className='w-full'>
              Login with Google
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an account?{" "}
            <a href={FRONTENDROUTE + "signup"} className='underline'>
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
