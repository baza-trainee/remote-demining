import { MetadataRoute } from "next";

import { BASE_URL } from "@/lib/constants/baseUrl";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/client",
      disallow: ["/admin/", "/files"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
