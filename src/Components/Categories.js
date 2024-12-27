import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Men\'s Clothing', link: '/categories/mens-clothing', image: 'https://i.pinimg.com/564x/19/d5/c0/19d5c05fd416024abc9c586cd60a6a5d.jpg' },
  { name: 'Women\'s Clothing', link: '/categories/womens-clothing', image: 'https://i.pinimg.com/564x/f8/99/8a/f8998a79ee1ecd0143c6e2acb6a80b87.jpg' },
  { name: 'Electronics', link: '/categories/electronics', image: 'https://i.pinimg.com/564x/e1/22/34/e122343ac7ddb125851689e1fb05cc4a.jpg' },
  { name: 'Accessories', link: '/categories/accessories', image: 'https://i.pinimg.com/564x/fd/27/9c/fd279c1a784fd561c9ff8cdee0b05374.jpg' },
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
              <h3 className="text-xl font-semibold text-white hover:text-blue-500">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
