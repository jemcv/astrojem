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

const skills = [
  { name: "HTML", Icon: HTMLOriginalIcon },
  { name: "CSS", Icon: CSSOriginalIcon },
  { name: "JavaScript", Icon: JavascriptOriginalIcon },
  { name: "PHP", Icon: PHPOriginalIcon },
  { name: "MySQL", Icon: MySQLOriginalIcon },
  { name: "React", Icon: ReactOriginalIcon },
  { name: "TailwindCSS", Icon: TailwindCSSOriginalIcon },
  { name: "Astro", Icon: AstroOriginalIcon },
  { name: "Git", Icon: GitOriginalIcon },
  { name: "Linux", Icon: LinuxOriginalIcon },
];

const Skills: React.FC<{ color?: string; size?: number }> = ({
  color = "white",
  size = 40,
}) => {
  return (
    <section className="mt-2">
      <h1 className="font-bold mb-2">Skills</h1>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap gap-6 p-4">
          {skills.map(({ name, Icon }) => (
            <div key={name} className="group relative">
              <Icon color={color} size={size} aria-label={name} className="border border-transparent hover:border-neutral-100"/>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-neutral-200">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
