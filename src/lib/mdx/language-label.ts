const LANGUAGE_MAP: Record<string, string> = {
  js: "JavaScript",
  javascript: "JavaScript",
  ts: "TypeScript",
  typescript: "TypeScript",
  tsx: "TSX",
  jsx: "JSX",
  css: "CSS",
  scss: "SCSS",
  sass: "Sass",
  less: "Less",
  html: "HTML",
  xml: "XML",
  json: "JSON",
  bash: "Bash",
  shell: "Shell",
  sh: "Shell",
  zsh: "Zsh",
  python: "Python",
  py: "Python",
  go: "Go",
  rust: "Rust",
  rs: "Rust",
  sql: "SQL",
  yaml: "YAML",
  yml: "YAML",
  markdown: "Markdown",
  md: "Markdown",
  mdx: "MDX",
  toml: "TOML",
  graphql: "GraphQL",
  gql: "GraphQL",
  dockerfile: "Dockerfile",
  docker: "Docker",
  ruby: "Ruby",
  rb: "Ruby",
  php: "PHP",
  java: "Java",
  kotlin: "Kotlin",
  kt: "Kotlin",
  swift: "Swift",
  c: "C",
  cpp: "C++",
  "c++": "C++",
  csharp: "C#",
  "c#": "C#",
  cs: "C#",
};

export const getLanguageFromClassName = (className?: string): string | null => {
  if (!className) return null;

  const match = className.match(/language-(\w+)/);
  if (!match) return null;

  const lang = match[1].toLowerCase();
  return LANGUAGE_MAP[lang] || lang.toUpperCase();
};

