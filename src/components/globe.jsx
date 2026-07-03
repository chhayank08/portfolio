import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "react",
  "nextdotjs",
  "nodedotjs",
  "flask",
  "html5",
  "css3",
  "tailwindcss",
  "postgresql",
  "supabase",
  "docker",
  "git",
  "github",
  "vercel",
  "langchain",
  "selenium",
  "linux",
  "visualstudiocode",
  "framermotion",
  "vite",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
