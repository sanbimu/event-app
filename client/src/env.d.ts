/// <reference types="vite/client" />
/// <reference types="vite-plugin-fast-react-svg/types" />

interface ImportMetaEnv {
  readonly VITE_SERVER_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
