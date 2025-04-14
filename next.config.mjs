import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN:
      "https://borjigingolomt.api.erxes.io/graphql/gateway",
    NEXT_PUBLIC_CP_ID: "Z7c0xUeUVpKKGQogo5yJL",
    NEXT_PUBLIC_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IndlYiIsImNyZWF0ZWRBdCI6IjIwMjUtMDQtMDNUMTE6NDY6MDUuNzk1WiIsInVzZXJHcm91cElkIjoiNEVIeWRUREFpczJMZFFuWm4iLCJleHBpcmVEYXRlIjoiMjAyNS0wNS0xNFQwODo0Njo0MS42MzNaIiwibm9FeHBpcmUiOnRydWUsImFsbG93QWxsUGVybWlzc2lvbiI6dHJ1ZSwiX2lkIjoiUncwMkMteDVKTURLZzlJUmNmcjJrIiwiX192IjowfSwiaWF0IjoxNzQ0NjIwNDE0fQ.CWpUMS0lGY7H1dvuJJQ9qUqixG1WcO129MTpg_ZQH98",
  },
};

export default withNextIntl(nextConfig);
