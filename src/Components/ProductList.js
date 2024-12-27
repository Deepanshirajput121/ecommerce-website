import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Men\'s Clothing', link: '/categories/mens-clothing', image: '/images/npun.jpg' },
  { name: 'Women\'s Clothing', link: '/categories/womens-clothing', image: '/images/lap.jpg' },
  { name: 'Electronics', link: '/categories/electronics', image: '/images/watch.jpg' },
  { name: 'Accessories', link: '/categories/accessories', image: '/images/phone.jpg' },
];

export default function ShopByCategories() {
  return (
    <div className="container mx-auto py-16">
      <div className="flex space-x-6 overflow-x-auto">
        {categories.map((category, index) => (
          <Link key={index} href={category.link}>
            <div className="category-item bg-gray-200 p-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <Image
                src={category.image}
                alt={category.name}
                width={300}  // Added width
                height={200} // Added height
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-slate-800 hover:text-blue-500">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
