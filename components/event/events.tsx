"use client";

import Link from "next/link";
import { useQuery } from "@apollo/client";
import { queries } from "@/sdk/graphql/cms";
import { Users, Clock, ParkingCircle } from "lucide-react";
import Image from "../ui/image";

export default function Events() {
  const { data: tagsData } = useQuery(queries.CmsTags, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID!,
      page: 1,
      perPage: 20,
    },
  });

  const tags = tagsData?.cmsTags || [];
  const eventTagId = tags.find((tag: any) => tag.slug === "events")?._id;

  const { data, loading, error } = useQuery(queries.PostList, {
    variables: {
      clientPortalId: process.env.NEXT_PUBLIC_CP_ID!,
      tagIds: [eventTagId],
    },
  });

  const posts = data?.cmsPostList.posts || [];

  if (loading) return <p className="p-10">Loading...</p>;
  if (error) return <p className="p-10 text-red-500">Error: {error.message}</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 mb-[60px]">
      <div className="text-center mb-10">
        <h1 className="text-[30px] font-semibold mb-2">Meetings & Events</h1>
        <p className="text-sm">
          Unparalleled spaces to celebrate or strategise
        </p>
      </div>

      <div className="space-y-12">
        {posts.map((post: any) => {
          {
            /*          const features = {
            capacity: post.content.includes("120 people"),
            freeHour: post.content.includes("First hour free"),
            parking: post.content.includes("Free parking"),
          };*/
          }

          return (
            <div
              key={post._id}
              className="grid grid-cols-1 container md:grid-cols-2 gap-6 items-center"
            >
              <Image
                src={post.thumbnail?.url || "/images/default.jpg"}
                alt={post.title}
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  {/*          {features.capacity && (
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      120 people
                    </div>
                  )}
                  {features.freeHour && (
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      First hour free
                    </div>
                  )}
                  {features.parking && (
                    <div className="flex items-center gap-1">
                      <ParkingCircle size={16} />
                      Free parking
                    </div>
                  )}*/}
                </div>

                <Link href={`/events-details/${post._id}`} passHref>
                  <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                    View more →
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
