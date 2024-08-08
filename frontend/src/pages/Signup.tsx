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
import { Register } from "../utils/auth";
export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await Register(email, password);
    if (response.ok) {
      alert("Account created successfully");
    } else {
      alert("An error occurred");
    }
  };
  return (
    <div className='min-h-[95vh] flex items-center justify-center bg-gray-100 dark:bg-black'>
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-xl'>Sign Up</CardTitle>

          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            {/* <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='first-name'>First name</Label>
                <Input id='first-name' placeholder='Max' required />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='last-name'>Last name</Label>
                <Input
                  id='last-name'
                  placeholder='Robinson'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div> */}
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
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type='submit' className='w-full' onClick={handleSubmit}>
              Create an account
            </Button>
            <Button variant='outline' className='w-full'>
              Sign up with GitHub
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            Already have an account?{" "}
            <a href={FRONTENDROUTE + "login"} className='underline'>
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
