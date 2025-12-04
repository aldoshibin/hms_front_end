import LoginForm from "@/Screens/Login/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    
  <div className="h-screen w-full flex">
      
      {/* Left Image Section */}
      <div className="w-1/2 relative hidden lg:block">
        <Image
          src={"/assert/login-sideimage.jpg"}
          alt="Hospital Building"
          fill
          className="object-fill"
          priority
        />

       
      </div>

      {/* Right Login Form Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
        <LoginForm />
      </div>

    </div>
  );
}
