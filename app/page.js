import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
const poppins = localFont({
  src: [
    {
      path: "/fonts/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[70vh] mt-15">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The Best URL Shortner.
          </p>
          <p className="px-26 text-center">ZiplyURL is a simple and efficient URL shortener designed to make sharing links effortless. With a clean interface and fast performance, it turns long, cluttered URLs into short, memorable links in just one click. Whether you're sharing content, managing projects, or posting online, ZiplyURL gives you a quick and reliable way to keep your links neat and easy to share.</p>
           <div className="flex gap-3 justify-start">
          <Link href="/shorten">
            <button className="bg-purple-500 shadow-lg rounded-lg px-4 py-1 font-bold text-white ">
              Try Now
            </button>
          </Link>

          <Link href="/github">
            <button className="bg-purple-500 shadow-lg rounded-lg px-4 py-1 font-bold text-white">
              GitHub
            </button>
          </Link>
        </div>
        </div>

        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="An image of vector"
            src="/vect.jpg"
            fill
            sizes="100vw"
          />
        </div>
      </section>
    </main>
  );
}
