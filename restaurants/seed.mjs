import { Restaurant } from './restaurant.model.mjs';

export const seedRestaurants = async () => {
  const restaurants = [
    {
      name: 'Bangalore Bistro',
      address: '1 MG Road, Bengaluru',
      phone: '080-1234-5678',
      email: 'info@bangalorebistro.com',
      cuisine: 'Indian',
      rating: 4.5,
      deliveryAvailable: true,
      location: {
        type: 'Point',
        coordinates: [12.9716, 77.5946], // Coordinates for Bengaluru
      },
      foodItems: [
        {
          name: 'Butter Chicken',
          description: 'Creamy and rich butter chicken served with naan.',
          price: 249.0,
          category: 'Main Course',
          imageUrl:
            'https://unsplash.com/photos/roasted-chicken-legs-in-pan-with-herbs-close-up-ngq7wIwybCk',
        },
        {
          name: 'Paneer Tikka',
          description: 'Grilled paneer marinated in spices.',
          price: 199.0,
          category: 'Appetizer',
          imageUrl: 'https://unsplash.com/photos/cooked-foods-WmKXu-bzygo',
        },
      ],
    },
    {
      name: 'Pasta Palazzo',
      address: 'Koramangala, Bengaluru',
      phone: '080-2345-6789',
      email: 'contact@pastapalazzo.com',
      cuisine: 'Italian',
      rating: 4.2,
      deliveryAvailable: true,
      location: {
        type: 'Point',
        coordinates: [12.9352, 77.6101],
      },
      foodItems: [
        {
          name: 'Spaghetti Aglio e Olio',
          description: 'Pasta with garlic, olive oil, and chili flakes.',
          price: 299.0,
          category: 'Main Course',
          imageUrl:
            'https://unsplash.com/photos/pasta-with-sauce-on-plate-KSXvrqKUxnc',
        },
        {
          name: 'Margherita Pizza',
          description: 'Classic pizza with tomatoes and mozzarella.',
          price: 399.0,
          category: 'Main Course',
          imageUrl:
            'https://unsplash.com/photos/pizza-with-berries-MQUqbmszGGM',
        },
      ],
    },
    {
      name: 'Sushi House',
      address: 'Indiranagar, Bengaluru',
      phone: '080-3456-7890',
      email: 'info@sushihouse.com',
      cuisine: 'Japanese',
      rating: 4.6,
      deliveryAvailable: true,
      location: {
        type: 'Point',
        coordinates: [12.9719, 77.6404],
      },
      foodItems: [
        {
          name: 'California Roll',
          description: 'Crab, avocado, and cucumber rolled in seaweed.',
          price: 499.0,
          category: 'Appetizer',
          imageUrl:
            'https://www.istockphoto.com/photo/paneer-tikka-shawarma-wrap-served-in-a-cutting-board-on-grey-background-side-view-of-gm1412717730-462041265?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fchicken-roll&utm_medium=affiliate&utm_source=unsplash&utm_term=chicken+roll%3A%3Areduced-affiliates%3Ahalf',
        },
        {
          name: 'Sashimi Platter',
          description: 'Assorted fresh sashimi.',
          price: 899.0,
          category: 'Main Course',
          imageUrl:
            'https://unsplash.com/photos/sliced-meat-with-vegetable-on-black-round-plate-rGm2kmR9gXU',
        },
      ],
    },
    {
      name: 'Burger King',
      address: 'MG Road, Bengaluru',
      phone: '080-4567-8901',
      email: 'contact@burgerking.com',
      cuisine: 'American',
      rating: 4.3,
      deliveryAvailable: true,
      location: {
        type: 'Point',
        coordinates: [12.9721, 77.598],
      },
      foodItems: [
        {
          name: 'Cheeseburger',
          description: 'Juicy beef burger with cheese.',
          price: 249.0,
          category: 'Main Course',
          imageUrl:
            'https://unsplash.com/photos/a-hamburger-sitting-on-top-of-a-wooden-cutting-board-jhXt7XmSqqM',
        },
        {
          name: 'French Fries',
          description: 'Crispy golden fries.',
          price: 99.0,
          category: 'Appetizer',
          imageUrl:
            'https://unsplash.com/photos/a-plate-of-french-fries-falling-into-the-air-BkWowglS_Uk',
        },
      ],
    },
    {
      name: 'Café Coffee Day',
      address: 'Brigade Road, Bengaluru',
      phone: '080-5678-9012',
      email: 'info@cafecoffeeday.com',
      cuisine: 'Cafe',
      rating: 4.0,
      deliveryAvailable: true,
      location: {
        type: 'Point',
        coordinates: [12.9716, 77.6101],
      },
      foodItems: [
        {
          name: 'Cappuccino',
          description: 'Rich espresso with steamed milk and foam.',
          price: 159.0,
          category: 'Beverage',
          imageUrl: 'http://example.com/cappuccino.jpg',
        },
        {
          name: 'Cheese Sandwich',
          description: 'Grilled cheese sandwich with a side of fries.',
          price: 149.0,
          category: 'Snack',
          imageUrl: 'http://example.com/cheese_sandwich.jpg',
        },
      ],
    },
    {
      name: 'The Spice Route',
      address: 'Jayanagar, Bengaluru',
      phone: '080-6789-0123',
      email: 'contact@spiceroute.com',
      cuisine: 'Indian',
      rating: 4.4,
      deliveryAvailable: true,
      location: {
        type: 'Point',
        coordinates: [12.9279, 77.5932],
      },
      foodItems: [
        {
          name: 'Biryani',
          description: 'Aromatic rice dish with spices and chicken.',
          price: 299.0,
          category: 'Main Course',
          imageUrl: 'http://example.com/biryani.jpg',
        },
        {
          name: 'Tandoori Chicken',
          description: 'Marinated chicken cooked in a tandoor.',
          price: 349.0,
          category: 'Main Course',
          imageUrl: 'http://example.com/tandoori_chicken.jpg',
        },
      ],
    },
    {
      name: 'Taco Bell',
      address: 'Malleshwaram, Bengaluru',
      phone: '080-7890-1234',
      email: 'info@tacobell.com',
      cuisine: 'Mexican',
      rating: 4.1,
      deliveryAvailable: true,
      location: {
        type: 'Point',
        coordinates: [13.0089, 77.5759],
      },
      foodItems: [
        {
          name: 'Tacos',
          description: 'Crunchy tacos filled with meat and veggies.',
          price: 199.0,
          category: 'Main Course',
          imageUrl: 'http://example.com/tacos.jpg',
        },
        {
          name: 'Nachos',
          description: 'Tortilla chips with cheese and jalapeños.',
          price: 149.0,
          category: 'Appetizer',
          imageUrl: 'http://example.com/nachos.jpg',
        },
      ],
    },
    {
      name: 'Dosa Delight',
      address: 'HSR Layout, Bengaluru',
      phone: '080-8901-2345',
      email: 'contact@dosadelight.com',
      cuisine: 'South Indian',
      rating: 4.7,
      deliveryAvailable: true,
      location: {
        type: 'Point',
        coordinates: [12.9225, 77.6424],
      },
      foodItems: [
        {
          name: 'Masala Dosa',
          description: 'Crispy dosa filled with spiced potatoes.',
          price: 99.0,
          category: 'Main Course',
          imageUrl: 'http://example.com/masala_dosa.jpg',
        },
        {
          name: 'Idli',
          description: 'Steamed rice cakes served with chutney.',
          price: 79.0,
          category: 'Snack',
          imageUrl: 'http://example.com/idli.jpg',
        },
      ],
    },
    {
      name: 'Chinese Dragon',
      address: 'Whitefield, Bengaluru',
      phone: '080-9012-3456',
      email: 'info@chinesedragon.com',
      cuisine: 'Chinese',
      rating: 4.3,
      deliveryAvailable: true,
      location: {
        type: 'Point',
        coordinates: [12.9653, 77.7321],
      },
      foodItems: [
        {
          name: 'Chow Mein',
          description: 'Stir-fried noodles with vegetables.',
          price: 199.0,
          category: 'Main Course',
          imageUrl: 'http://example.com/chow_mein.jpg',
        },
        {
          name: 'Spring Rolls',
          description: 'Crispy rolls filled with vegetables.',
          price: 129.0,
          category: 'Appetizer',
          imageUrl: 'http://example.com/spring_rolls.jpg',
        },
      ],
    },
    {
      name: 'Ice Cream Factory',
      address: 'BTM Layout, Bengaluru',
      phone: '080-0123-4567',
      email: 'contact@icecreamfactory.com',
      cuisine: 'Desserts',
      rating: 4.9,
      deliveryAvailable: true,
      location: {
        type: 'Point',
        coordinates: [12.9254, 77.6066],
      },
      foodItems: [
        {
          name: 'Chocolate Sundae',
          description: 'Rich chocolate ice cream topped with nuts.',
          price: 159.0,
          category: 'Dessert',
          imageUrl: 'http://example.com/chocolate_sundae.jpg',
        },
        {
          name: 'Strawberry Milkshake',
          description: 'Creamy milkshake with fresh strawberries.',
          price: 129.0,
          category: 'Beverage',
          imageUrl: 'http://example.com/strawberry_milkshake.jpg',
        },
      ],
    },
  ];

  try {
    const data = await Restaurant.find();
    if (!data?.length) {
      await Restaurant.deleteMany({}); // Clear existing data
      const result = await Restaurant.insertMany(restaurants);
      console.log('Seeded restaurants:', result);
    } else {
      console.log('restaurant data already present');
    }
  } catch (err) {
    console.error('Error seeding restaurants:', err);
  }
};
