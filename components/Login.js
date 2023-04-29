import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Head from "next/head";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="bg-sky-500 grid grid-cols-2">
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Make a web twitter clone" />
      </Head>
      <div className="h-screen grid place-items-center">
        <BsTwitter className="text-white text-8xl" />
      </div>
      <div className="grid place-items-center">
        <div
          className="flex gap-4 bg-white p-4 items-center rounded-md cursor-pointer"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="text-2xl" />
          SignIn with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
