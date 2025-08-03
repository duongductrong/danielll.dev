import dynamic from "next/dynamic";

const HelloWorld = dynamic(() => import("./blocks/hello-world"));

export const registryPreviewComponents = {
  helloWorld: HelloWorld,
};
