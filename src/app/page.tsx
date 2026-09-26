import { RiseLoader } from "react-spinners";

<RiseLoader color="#36d7b7" />
export default function Home() {
  
  return (
<main className="min-h-screen flex flex-col items-center justify-center relative">
  <h1 className="text-5xl uppercase md:text-7xl lg:text-9xl text-center font-bold tracking-tight">
    Coming Soon
  </h1>

  <div className="mt-8">
    <RiseLoader color="#f59e0b" />
  </div>

  <p className="absolute bottom-20 text-center text-sm uppercase font-medium">
    Created by <span className="text-red-400">wekan</span>
  </p>
</main>  );
}