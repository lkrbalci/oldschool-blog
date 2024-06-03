import keys from "@/keys";

const fetchPages = async () => {
  "use server";
  const reqOptions = {
    next: { tags: ["fetch-pages"] },
    headers: {
      Authorization: `Bearer ${keys.API_TOKEN}`,
    },
  };

  const request = await fetch(`${keys.API_URL}/api/pages`, { ...reqOptions });
  const response = await request.json();

  return response;
};

export { fetchPages };
