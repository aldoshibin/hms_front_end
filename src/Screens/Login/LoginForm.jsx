// "use client";
// import InputField from "@/components/InputField";
// import { useState } from "react";


// export default function LoginForm() {
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", form);
//   };

//   return (
//     <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
//       <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <InputField
//           label="Email"
//           name="email"
//           type="email"
//           placeholder="Enter your email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <InputField
//           label="Password"
//           name="password"
//           type="password"
//           placeholder="Enter your password"
//           value={form.password}
//           onChange={handleChange}
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
// import { Eye, EyeOff } from "lucide-react";
import { IoMdEyeOff ,IoIosEye } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import InputField from "@/components/InputField";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [showPassword, setShowPassword] = useState(false);
const router = useRouter();
  const onSubmit =async (data) => {
    console.log("Login Data:", data);
    // router.push(`/${orgId}/admin`);
    // router.push(`/admin`);
    router.push(`/abc/admin`);
//  router.push(`/abc/employee`);
      // e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      console.log("LOGIN SUCCESS:", res);
      // router.push("/dashboard"); // your path
      router.push(`/abc/admin`);
    } catch (err) {
      // console.log("Login Error:", err);
    }
  
  };



//   import api from "./axios";
// import { saveToken, removeToken } from "@/lib/storage";

// export const loginUser = async (data) => {
//   const res = await api.post("/auth/login", data);
//   if (res?.data?.token) {
//     saveToken(res.data.token);
//   }
//   return res.data;
// };

// export const logoutUser = () => {
//   removeToken();
// };


  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded-xl p-8">
      <h1 className="text-2xl font-semibold text-center mb-8">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

        {/* Email */}
        <InputField
          label="Your Email"
          placeholder="yourmail@gmail.com"
          type="email"
          {...register("email", { required: "Email is required" })}
          error={errors.email?.message}
        />

        {/* Password */}
        <div className="relative">
          <InputField
            label="Password"
            placeholder="************"
            type={showPassword ? "text" : "password"}
            {...register("password", { required: "Password is required" })}
            error={errors.password?.message}
          />

          {/* Show / Hide Password Icon */}
          <button
            type="button"
            className="absolute right-3 top-9 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoMdEyeOff  size={18} className=""/> : <IoIosEye  size={18} />}
          </button>

          <p className="text-right text-sm text-gray-600 mt-1 cursor-pointer hover:underline">
            Forgot password?
          </p>
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 cursor-pointer rounded-lg text-lg font-semibold hover:bg-green-700 transition"
        >
          Continue
        </button>

        {/* OR Divider */}
        <div className="flex items-center gap-4">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm">Or</span>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="flex items-center justify-center gap-3 border rounded-lg py-2 hover:bg-gray-50 transition"
        >
<FcGoogle/>
          {/* <img src="/google-icon.png" className="w-5 h-5" /> */}
          <span className="text-gray-700">Login with Google</span>
        </button>
      </form>

      {/* Sign Up */}
      <p className="text-center mt-6 text-gray-600">
        Don't have an account?{" "}
        <span className="text-green-600 font-semibold cursor-pointer hover:underline">
          Sign up
        </span>
      </p>
    </div>
  );
}
