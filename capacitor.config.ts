import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
    appId: "com.example.app",
    appName: "survey",
    webDir: "build",
    bundledWebRuntime: false,
    server: {
        cleartext: true,
    },
};

export default config;
