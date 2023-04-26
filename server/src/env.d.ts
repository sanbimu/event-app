/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLIENT_HOST: string;
  readonly VITE_SERVER_HOST: string;
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_GOOGLE_CLIENT_SECRET: string;
  readonly VITE_FACEBOOK_CLIENT_ID: string;
  readonly VITE_FACEBOOK_CLIENT_SECRET: string;
  readonly VITE_DATABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
