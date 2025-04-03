import {LoginFormCard} from "@/components/login-form-card";

export default function Home() {
  return (
      <div
          className="relative min-h-screen w-full flex flex-col justify-center items-center bg-cover bg-center">
          <img src="/images/bg.jpg" alt="Restaurant background" className="absolute inset-0 object-cover w-full h-full" />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70 z-0" />

          <div className="relative  w-fit">
              <LoginFormCard />
          </div>
      </div>
  );
}
