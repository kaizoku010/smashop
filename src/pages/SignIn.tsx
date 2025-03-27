
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, LogIn, House } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Logo from "../media/logo.png"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const SignIn = () => {


  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real implementation, this would authenticate with your backend
    console.log("Sign in data:", data);
    
    // Show success toast and redirect
    toast({
      title: "Sign in successful",
      description: "Welcome back to Sembeza Africa Store!",
    });
    
    setTimeout(() => {
      navigate("/profile");
    }, 1500);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleBack = () => {
    navigate("/")  };

  return (

<div className="login-page">
  <div className="login-page-side-a">side a</div>
    <div id="login-form-section">
      {/* <Navbar /> */}
      <div className="container mx-auto px-4 py-16 max-w-md">
        <div className="mb-10 text-center">
          {/* <h1 className="text-3xl font-bold mb-3 text-xstore-black">Sign In</h1> */}
          <img className="login-logo" src={Logo}/>
          <p className="text-xstore-dark-gray">Welcome back to SembezaAfrica store</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••" 
                        {...field} 
                      />
                      <button 
                        type="button" 
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xstore-dark-gray" 
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                     
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="rounded border-xstore-light-gray" 
                />
                <label htmlFor="remember" className="text-xstore-dark-gray">Remember me</label>
              </div>
              <a href="#" className="text-xstore-green hover:underline">Forgot password?</a>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-xstore-green hover:bg-xstore-green/90"
            >
              <LogIn size={18} className="mr-2" />
              Sign In
            </Button>
            <Link id="back-home" to="/">
            <House size={18} className="mr-2" />
              Home
            </Link>
            
            <div className="text-center mt-6">
              <p className="text-xstore-dark-gray">
                Don't have an account?{" "}
                <Link to="/sign-up" className="text-xstore-green hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
      {/* <Footer /> */}
    </div>
</div>

  
  );
};

export default SignIn;
