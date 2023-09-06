import { MetadataRoute } from "next";

import { BASE_URL } from "@/lib/constants/baseUrl";

import routes from "../lib/constants/dataRoutes.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = routes.map((route) => {
    return {
      url: `${BASE_URL}${route.url}`,
      lastModified: new Date(),
    };
  });

  return [...staticUrls];
}
