"use server";

import keys from "@/keys";

// base request function
const fetchRequest = async (url: string, nextTags?: string[]) => {
  const reqOptions = {
    next: { tags: nextTags },
    headers: {
      Authorization: `Bearer ${keys.API_TOKEN}`,
    },
  };

  const request = await fetch(`${keys.API_URL}${url}`, {
    ...reqOptions,
  });

  const response = await request.json();

  return response;
};

const fetchLayout = async () => {
  return fetchRequest(
    "/api/layout?populate[0]=logo_img&populate[1]=social.social_img&populate[2]=pages",
    ["fetch-layout"],
  );
};

export { fetchLayout };

const fetchSpeeches = async () => {
  return fetchRequest("/api/speeches", ["fetch-speeches"]);
};
