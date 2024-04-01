import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Prisma Client queries go here

  // Add user query:
  // const users = await prisma.users.createMany({
  //   data: [
  //     {
  //       id: 1,
  //       name: "Tony Soprano",
  //       email: "tony@badabing.com",
  //       password: "bakedziti",
  //     },
  //     {
  //       id: 2,
  //       name: "Beyonce Knowles",
  //       email: "beyonce@beyonce.com",
  //       password: "texas",
  //     },
  //     {
  //       id: 3,
  //       name: "Wednesday Addams",
  //       email: "wednesday@addams.com",
  //       password: "gothgirl",
  //     },
  //     {
  //       id: 4,
  //       name: "Walter White",
  //       email: "walter@white.com",
  //       password: "heisenberg",
  //     },
  //   ],
  // });
  // console.log(users);

  //Add products query:
  // const products = await prisma.products.createMany({
  //   data: [
  //     {
  //       id: 1,
  //       name: "Aero Transistor Radio",
  //       desc: "Vintage Aero Transistor Radio, AM Band Only, Made In Hong Kong, Circa 1960s",
  //       imgURL: "Aero Transistor Radio",
  //       price: 75,
  //       category_name: "Electronics",
  //       rating: "",
  //     },
  //     {
  //       id: 2,
  //       name: "Philco Transistor Radio",
  //       desc: "Vintage Philco 6-Transistor Radio, Model T76-124, Leather Case, Circa 1958",
  //       imgURL: "Philco Transistor Radio",
  //       price: 50,
  //       category_name: "Electronics",
  //       rating: "",
  //     },
  //     {
  //       id: 3,
  //       name: "Valiant Transister Clock Radio",
  //       desc: "Vintage Valiant Transistorized Clock Radio, Model C-1600, Made In Hong Kong, Circa 1960s",
  //       imgURL: "Valiant Transistor Clock Radio",
  //       price: 150,
  //       category_name: "Electronics",
  //       rating: "",
  //     },
  //     {
  //       id: 4,
  //       name: "Babyphon Phonograph Turntable",
  //       desc: "Metz Transformatoren- und Apparatefabrik, Fürth, Germany, circa 1955",
  //       imgURL: "Babyphon Phonograph",
  //       price: 150,
  //       category_name: "Electronics",
  //       rating: "",
  //     },
  //     {
  //       id: 5,
  //       name: "Underwood Typewriter",
  //       desc: "Vintage Underwood Typewriter, circa 1900",
  //       imgURL: "Underwood Vintage Typewriter",
  //       price: 150,
  //       category_name: "Miscellaneous Collectibles",
  //       rating: "",
  //     },
  //     {
  //       id: 6,
  //       name: "Gold Vintage Safety Razor",
  //       desc: "Vintage Valet Auto Strop Safety Razor, Made In USA",
  //       imgURL: "Vintage Valet Safety Razor",
  //       price: 70,
  //       category_name: "Miscellaneous Collectibles",
  //       rating: "",
  //     },
  //     {
  //       id: 7,
  //       name: "Purple Perfume Bottle",
  //       desc: "Perfume set from Soviet Union, circa 1965",
  //       imgURL: "Vintage Perfume Bottle (Purple)",
  //       price: 40,
  //       category_name: "Miscellaneous Collectibles",
  //       rating: "",
  //     },
  //     {
  //       id: 8,
  //       name: "Aladdin Lamp Table Lighter",
  //       desc: "Vintage Aladdin Table Lamp-Style Cigarette Lighter, Made In Japan",
  //       imgURL: "Aladdin Lamp Table Lighter",
  //       price: 75,
  //       category_name: "Miscellaneous Collectibles",
  //       rating: "",
  //     },
  //     {
  //       id: 9,
  //       name: "Green Glass Table Lighter",
  //       desc: "Vintage Decorative Green Glass Table Cigarette Lighter",
  //       imgURL: "Green Glass Table Lighter",
  //       price: 50,
  //       category_name: "Miscellaneous Collectibles",
  //       rating: "",
  //     },
  //     {
  //       id: 10,
  //       name: "Vintage Gold Rupee",
  //       desc: "Rupee from 1899",
  //       imgURL: "Vintage Rupee",
  //       price: 50,
  //       category_name: "Miscellaneous Collectibles",
  //       rating: "",
  //     },
  //     {
  //       id: 11,
  //       name: "Ceramic Bear Figurine",
  //       desc: "Teal Walter Bosse Bear Figurine",
  //       imgURL: "Walter Bosse Bear",
  //       price: 150,
  //       category_name: "Miscellaneous Collectibles",
  //       rating: "",
  //     },
  //     {
  //       id: 12,
  //       name: "Steampunk Lamp",
  //       desc: "Handmade Victorian style Edison lamp made with real vintage mechanical clock and antique pieces of brass",
  //       imgURL: "Steampunk Lamp",
  //       price: 100,
  //       category_name: "Housewares",
  //       rating: "",
  //     },
  //     {
  //       id: 13,
  //       name: "McDonald's Glass",
  //       desc: "Vintage 1980s McDonald's Fast Food Restaurant Collectible Yellow and White Daisy Glass Tumbler - Retro Flower Power",
  //       imgURL: "1980's McDonald's Glass",
  //       price: 10,
  //       category_name: "Housewares",
  //       rating: "",
  //     },
  //     {
  //       id: 14,
  //       name: "Vintage German Glassware Set",
  //       desc: "5 piece glassware set from Ehrenfeld Glassworks circa 1890",
  //       imgURL: "Vintage Green Glassware Set",
  //       price: 300,
  //       category_name: "Housewares",
  //       rating: "",
  //     },
  //     {
  //       id: 15,
  //       name: "Bisque Fired Vase",
  //       desc: "Royal Oak Pottery Ltd bisque fired, handpainted vase, circa mid 1940s",
  //       imgURL: "Bisque Fired Vase",
  //       price: 150,
  //       category_name: "Housewares",
  //       rating: "",
  //     },
  //     {
  //       id: 16,
  //       name: "Vintage Coca Cola Sign",
  //       desc: "Metal Coca Cola Sign, circa 1950s",
  //       imgURL: "Coca Cola Sign",
  //       price: 40,
  //       category_name: "Decor",
  //       rating: "",
  //     },
  //     {
  //       id: 17,
  //       name: "Neon Route 66 Sign",
  //       desc: "Vintage Neon Sign from historic U.S. Route 66, circa 1950s",
  //       imgURL: "Neon Route 66 Sign",
  //       price: 150,
  //       category_name: "Decor",
  //       rating: "",
  //     },
  //     {
  //       id: 18,
  //       name: "Neon Polly Gass Sign",
  //       desc: "Vintage Polly Gas Parrot Sign, circa 1950s",
  //       imgURL: "Polly Gas Neon Sign",
  //       price: 250,
  //       category_name: "Decor",
  //       rating: "",
  //     },
  //     {
  //       id: 19,
  //       name: "Operation Game",
  //       desc: "Original 1965 edition of Operation",
  //       imgURL: "Vintage Operation Game",
  //       price: 30,
  //       category_name: "Games + Toys",
  //       rating: "",
  //     },
  //     {
  //       id: 20,
  //       name: "Ouija Board",
  //       desc: "Ouija board manufactured by the Kennard Novelty Company of Baltimore, circa 1890",
  //       imgURL: "Vintage Ouija Board",
  //       price: 70,
  //       category_name: "Games + Toys",
  //       rating: "",
  //     },
  //     {
  //       id: 21,
  //       name: "Custom Lego Chess Set",
  //       desc: "Custom Handmade Red & Blue Lego Chess Set",
  //       imgURL: "Lego Chess Set",
  //       price: 50,
  //       category_name: "Games + Toys",
  //       rating: "",
  //     },
  //     {
  //       id: 22,
  //       name: "Teddy Ruxpin",
  //       desc: "Teddy Ruxpin Mechanical Stuffed Animal Toy circa 1980s",
  //       imgURL: "Teddy Ruxpin",
  //       price: 40,
  //       category_name: "Games + Toys",
  //       rating: "",
  //     },
  //     {
  //       id: 23,
  //       name: "Perfume Brooch",
  //       desc: 'Vintage "Perfume" Cameo in Original Box',
  //       imgURL: "Perfume Cameo",
  //       price: 80,
  //       category_name: "Jewelry + Accessories",
  //       rating: "",
  //     },
  //     {
  //       id: 24,
  //       name: "Fruit Brooch",
  //       desc: "Brooch, circular enamel brooch of still life of jug and fruit, including peaches, grapes, apples, figs and vine leaves, set into engraved copper frame, pin",
  //       imgURL: "Fruit Brooch",
  //       price: 100,
  //       category_name: "Jewelry + Accessories",
  //       rating: "",
  //     },
  //     {
  //       id: 25,
  //       name: "Pocket Watch",
  //       desc: "Vintage Waltham Pocket Watch, Model 1877",
  //       imgURL: "Pocket Watch",
  //       price: 200,
  //       category_name: "Jewelry + Accessories",
  //       rating: "",
  //     },
  //     {
  //       id: 26,
  //       name: "Book of Songs and Ballads",
  //       desc: "The Book of old English songs and ballads",
  //       imgURL: "Book of Songs and Ballads",
  //       price: 85,
  //       category_name: "Books",
  //       rating: "",
  //     },
  //     {
  //       id: 27,
  //       name: "Mutt and Jeff Book",
  //       desc: "Mutt and Jeff's Big Book, 1926",
  //       imgURL: "Mutt & Jeff Book",
  //       price: 90,
  //       category_name: "Books",
  //       rating: "",
  //     },
  //     {
  //       id: 28,
  //       name: "A Yankee in the Court of King Arthur book",
  //       desc: 'A Yankee in the Court of King Arthur," book by Samuel Clemens (Mark Twain), published in 1889 by Chatto & Windus, London.',
  //       imgURL: "King Arthur Book",
  //       price: 300,
  //       category_name: "Books",
  //       rating: "",
  //     },
  //     {
  //       id: 29,
  //       name: "Cecily Parsley's Nursery Rhymes  Book",
  //       desc: "Beatrix Potter, First Edition, circa 1922",
  //       imgURL: "Nursery Rhymes Book",
  //       price: 300,
  //       category_name: "Books",
  //       rating: "",
  //     },
  //     {
  //       id: 30,
  //       name: "The Uncertain Glory Book",
  //       desc: "Harriet Lummis Smith: The Uncertain Glory , cover by Horace Weston Taylor, published in Boston, 1926",
  //       imgURL: "The Uncertain Glory Book",
  //       price: 300,
  //       category_name: "Books",
  //       rating: "",
  //     },
  //   ],
  // });
  // console.log(products);

  // View all users query:
  // const users = await prisma.users.findMany();
  // console.log(users);

  // View all products query:
  // const products = await prisma.products.findMany();
  // console.log(products);
}
main()
  .catch((error) => {
    console.error("Error", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
