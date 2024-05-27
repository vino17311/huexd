//@ts-ignore

// import { DefaultConfigOptions } from "@formkit/vue";

import { defineFormKitConfig } from "@formkit/vue";
import { rootClasses } from "./formkit.theme";
// @ts-ignore
// const config: DefaultConfigOption = {
//   theme: "genesis",
//   icon: false,
// };

// export default config;
export default defineFormKitConfig({
  config: {
    rootClasses,
  },
});
