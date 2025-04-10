import Image from "next/image";

import Link from "next/link";

const rooms = [
  {
    id: 1,
    name: "Riverside Terrace Suite",
    price: 200,
    rating: 4.7,
    reviews: 2578,
    image: "/images/product.png",
    amenities: [
      "Free parking",
      "Pool",
      "Key card",
      "Free WiFi",
      "Housekeeping",
    ],
  },
  {
    id: 2,
    name: "Riverside Terrace Suite",
    price: 200,
    rating: 4.7,
    reviews: 2578,
    image: "/images/product.png",
    amenities: [
      "Free parking",
      "Pool",
      "Key card",
      "Free WiFi",
      "Housekeeping",
    ],
  },
  {
    id: 3,
    name: "Riverside Terrace Suite",
    price: 200,
    rating: 4.7,
    reviews: 2578,
    image: "/images/product.png",
    amenities: [
      "Free parking",
      "Pool",
      "Key card",
      "Free WiFi",
      "Housekeeping",
    ],
  },
  {
    id: 4,
    name: "Riverside Terrace Suite",
    price: 200,
    rating: 4.7,
    reviews: 2578,
    image: "/images/product.png",
    amenities: [
      "Free parking",
      "Pool",
      "Key card",
      "Free WiFi",
      "Housekeeping",
    ],
  },
  {
    id: 5,
    name: "Riverside Terrace Suite",
    price: 200,
    rating: 4.7,
    reviews: 2578,
    image: "/images/product.png",
    amenities: [
      "Free parking",
      "Pool",
      "Key card",
      "Free WiFi",
      "Housekeeping",
    ],
  },
  {
    id: 6,
    name: "Riverside Terrace Suite",
    price: 200,
    rating: 4.7,
    reviews: 2578,
    image: "/images/product.png",
    amenities: [
      "Free parking",
      "Pool",
      "Key card",
      "Free WiFi",
      "Housekeeping",
    ],
  },
];

export default function Accommodation() {
  return (
    <div className="p-10  container min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {rooms.map((room) => (
          <Link href="/room-detail" key={room.id}>
            <div className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[500px] hover:shadow-lg transition">
              <div className="relative h-[280px]">
                <Image
                  src={room.image}
                  fill
                  className="object-cover"
                  alt={room.name}
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h2 className="text-xl font-semibold">{room.name}</h2>
                <p className="text-gray-600">
                  {room.rating} ⭐ ({room.reviews} Reviews)
                </p>
                <p className="text-lg font-bold mt-2">
                  ${room.price}{" "}
                  <span className="text-sm text-gray-500">per night</span>
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {room.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-200 px-2 py-1 rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
