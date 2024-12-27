import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Gold Flatware', link: '/categories/mens-clothing', image: '/images/npun.jpg' },
  { name: 'Laptop', link: '/categories/womens-clothing', image: '/images/lap.jpg' },
  { name: 'Watch', link: '/categories/electronics', image: '/images/watch.jpg' },
  { name: 'Phone', link: '/categories/accessories', image: '/images/phone.jpg' },
];

export default function ShopByCategories() {
  return (
    <div className="container mx-auto py-10">
      {/* Responsive Layout */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
        {categories.map((category, index) => (
          <Link key={index} href={category.link}>
            <div className="category-item bg-gray-800 p-4 sm:p-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={400}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-white">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
