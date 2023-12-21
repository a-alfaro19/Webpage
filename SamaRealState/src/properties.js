export const properties = [
    {
        id: 1,
        title: "Deluxe Penthouse",
        location: "Tijuana, Mexico",
        coordinates: {
          latitude: 37.7749, 
          longitude: -122.4194,
        },
        price: "$500",
        images: [
          "https://wallpapercave.com/wp/wp2231079.jpg",
          "https://getwallpapers.com/wallpaper/full/8/b/5/1085265-gorgerous-world-beautiful-places-wallpapers-2560x1920-for-lockscreen.jpg",
          "https://img.budgettravel.com/_galleryImage/golden-gate-bridge-san-francisco-952012-114744_original.jpeg?mtime=20140903194435",
          "https://assets.architecturaldesigns.com/plan_assets/23604/large/23604JD_B_02_1556117473.jpg",
          "https://res.cloudinary.com/luxuryp/image/upload/q_auto:good,f_auto,w_1920,c_limit/bMM90GiMKicOv1LO",
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        bedrooms: 5,
        bathrooms: 2
    },

    {
        id: 2,
        title: "Deluxe Cabin",
        location: "Cartago, Costa Rica",
        coordinates: {
          latitude: 37.7749, 
          longitude: -122.4194,
        },
        price: "$300",
        images: [
          "https://th.bing.com/th/id/OIP.QLeDGOqR89OKPs8VNBII_AHaE8?rs=1&pid=ImgDetMain",
          "https://assets.architecturaldesigns.com/plan_assets/23604/large/23604JD_B_02_1556117473.jpg",
          "https://res.cloudinary.com/luxuryp/image/upload/q_auto:good,f_auto,w_1920,c_limit/bMM90GiMKicOv1LO",
          "https://th.bing.com/th/id/OIP.1YleXo4V9lWcYBdhhZXCvgHaEy?w=1500&h=971&rs=1&pid=ImgDetMain",
          "https://www.mesagaragedoors.com/wp-content/uploads/2017/04/GDSD-pic.jpg"
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet risus nullam eget felis. Orci sagittis eu volutpat odio facilisis mauris. Nunc mattis enim ut tellus. Augue neque gravida in fermentum et. Commodo sed egestas egestas fringilla phasellus faucibus. Ornare arcu dui vivamus arcu. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. At volutpat diam ut venenatis tellus in metus. Velit egestas dui id ornare arcu odio ut. Vestibulum sed arcu non odio euismod. Elementum eu facilisis sed odio morbi. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Blandit aliquam etiam erat velit scelerisque. Felis bibendum ut tristique et egestas quis.",
        bedrooms: 2,
        bathrooms: 1
      }
];

export const search_by_id = (id) => {
  for (let i = 0; i < properties.length; i++) {
    if (properties[i].id == id) {
      return properties[i];
    }
  }
  return null;
}

export const editProperty = (id, updatedInfo) => {
  properties = properties.map((property) => {
    if (property.id === id) {
      return {...property, ...updatedInfo};
    }
    return property;
  });
}


export default properties;