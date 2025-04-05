
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import Layout from "@/components/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally involve API calls for authentication
    console.log("Login attempt with:", { email, password, rememberMe });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-swasthya-light/30 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col">
              {/* Top section with logo */}
              <div className="w-full bg-swasthya-primary p-8 flex flex-col items-center">
                <div className="bg-white rounded-full p-4 mb-4">
                  <svg viewBox="0 0 100 100" className="w-12 h-12 text-swasthya-primary">
                    <circle cx="50" cy="50" r="45" fill="#00806b" />
                    <path d="M30 50 Q 50 20, 70 50 T 30 50" stroke="white" strokeWidth="4" fill="none" />
                    <path d="M30 50 Q 50 80, 70 50" stroke="white" strokeWidth="4" fill="none" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
                <p className="text-white/90 mt-1">Sign in to your account</p>
              </div>
              
              {/* Login form */}
              <div className="w-full p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                      <div 
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox 
                        id="remember-me" 
                        checked={rememberMe}
                        onCheckedChange={(checked) => {
                          setRememberMe(checked === true);
                        }}
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <Link to="#" className="font-medium text-swasthya-primary hover:text-swasthya-secondary">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-swasthya-primary hover:bg-swasthya-secondary text-lg py-6">
                    Sign In
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link 
                      to="/signup" 
                      className="font-medium text-swasthya-primary hover:text-swasthya-secondary"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
