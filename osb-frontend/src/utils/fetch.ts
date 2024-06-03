import keys from "@/keys";

const fetchLayout = async () => {
  "use server";
  const reqOptions = {
    next: { tags: ["fetch-layout"] },
    headers: {
      Authorization: `Bearer ${keys.API_TOKEN}`,
    },
  };

  const request = await fetch(`${keys.API_URL}/api/layout?populate=*`, {
    ...reqOptions,
  });
  const response = await request.json();

  return response;
};

export { fetchLayout };
