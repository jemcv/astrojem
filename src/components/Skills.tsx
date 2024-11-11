import HTMLOriginalIcon from "react-devicons/html5/plain";
import CSSOriginalIcon from "react-devicons/css3/plain";
import JavascriptOriginalIcon from "react-devicons/javascript/plain";
import PHPOriginalIcon from "react-devicons/php/plain";
import MySQLOriginalIcon from "react-devicons/mysql/original";
import ReactOriginalIcon from "react-devicons/react/original";
import TailwindCSSOriginalIcon from "react-devicons/tailwindcss/original";
import AstroOriginalIcon from "react-devicons/astro/plain";
import GitOriginalIcon from "react-devicons/git/plain";
import LinuxOriginalIcon from "react-devicons/linux/plain";

export default function Skills() {
  return (
    <>
    <h1 className="font-bold mb-2">Skills</h1>
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap gap-6 border border-transparent hover:border-neutral-100 underline p-4">
        <HTMLOriginalIcon color="white" size={40} />
        <CSSOriginalIcon color="white" size={40} />
        <JavascriptOriginalIcon color="white" size={40} />
        <PHPOriginalIcon color="white" size={40} />
        <MySQLOriginalIcon color="white" size={40} />
        <ReactOriginalIcon color="white" size={40} />
        <TailwindCSSOriginalIcon color="white" size={40} />
        <AstroOriginalIcon color="white" size={40} />
        <GitOriginalIcon color="white" size={40} />
        <LinuxOriginalIcon color="white" size={40} />
      </div>
    </div>
    </>
  );
}