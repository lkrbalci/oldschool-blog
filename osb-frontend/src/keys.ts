const keys: {
  API_TOKEN: string;
  API_URL: string;
  REVALIDATE_SECRET: string;
} = {
  API_TOKEN: process.env.API_TOKEN || "",
  API_URL: process.env.API_URL || "",
  REVALIDATE_SECRET: process.env.REVALIDATE_SECRET || "",
};

export default keys;
