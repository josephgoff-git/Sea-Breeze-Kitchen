import images from './images';


const appetizers = [
  {
    title: 'Scallop and Truffle Risotto',
    price: '$17',
    tags: 'Scallops| Truffle Oil | Shallots | Chives | Garlic',
  },
  {
    title: 'Carabinero Carpaccio',
    price: '$19',
    tags: 'Carabinero Prawns | Citrus Vinaigrette',
  },
  {
    title: 'Foie Gras Terrine',
    price: '$22',
    tags: 'Foie Gras | Caramelized Figs | Brioche Toast',
  },
  {
    title: 'Lobster and Sweet Corn Velouté ',
    price: '$18',
    tags: 'Poached Lobster | Sweet Corn | Onions | Garlic | Crème Fraîche',
  },
  {
    title: 'Sea Scallops with Brown Butter and Sage',
    price: '$23',
    tags: 'seared scallops | brown butter | sage | butternut squash',
  },
];

const entrees = [
  {
    title: 'Chilean Sea Bass',
    price: '$27',
    tags: 'Lemon Butter Sauce | roasted root vegetables | garlic mashed potatoes',
  },
  {
    title: "Lobster Linguine",
    price: '$24',
    tags: 'Herb Butter Sauce | garlic bread | mixed greens salad',
  },
  {
    title: 'Seafood Paella',
    price: '$29',
    tags: 'Shrimp | mussels | clams | chorizo | saffron rice | roasted red peppers',
  },
  {
    title: 'Grilled Swordfish and mango salsa',
    price: '$28',
    tags: 'sautéed spinach | wild rice pilaf',
  },
  {
    title: 'Crab Cakes with Remoulade Sauce',
    price: '$26',
    tags: 'crispy brussel sprouts | roasted fingerling potatoes',
  },
];

const wines = [
  {
    title: 'Sonoma Chardonnay',
    price: '$48',
    tags: 'CA | Bottle',
  },
  {
    title: 'Sancerre',
    price: '$56',
    tags: 'FR | Bottle',
  },
  {
    title: 'Albariño',
    price: '$52',
    tags: 'SP | Bottle',
  },
  {
    title: 'True North Imperial Stout ',
    price: '$18',
    tags: 'MA | 16 oz',
  },
  {
    title: 'Mayflower Porter ',
    price: '$16',
    tags: 'MA | 16 oz',
  },
  {
    title: 'Tree House Julius',
    price: '$17',
    tags: 'MA | 16 oz',
  },
];

const cocktails = [
  {
    title: 'Seaside Sangria',
    price: '$17',
    tags: 'white wine | pineapple juice | orange juice | blue curacao',
  },
  {
    title: "Dark and Stormy",
    price: '$15',
    tags: 'Dark rum | Ginger beer | lime juice',
  },
  {
    title: 'Rusty Nail',
    price: '$18',
    tags: 'blended scotch | Drambuie liqueur | lemon twist',
  },
  {
    title: 'The Sea Breeze',
    price: '$16',
    tags: 'vodka, | cranberry juice | grapefruit juice | fresh fruit',
  },
  {
    title: 'Blue Wave Margarita',
    price: '$18',
    tags: 'Blueberry infused tequila | lime juice | blue curacao | blueberries',
  },
];




const awards = [
  {
    imgUrl: images.award01,
    title: 'Sustainable Seafood Award',
    subtitle: 'Commitment to delivering exceptional seafood dishes, highlighting the quality and freshness of the ingredients and the skill and creativity of the chefs',
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Exceptional culinary skills and creativity of the head chef in creating unique and unforgettable dishes showcasing the flavors and ingredients of the sea",
  },
  {
    imgUrl: images.award05,
    title: "OpenTable Diners' Choice Award",
    subtitle: "Highest level of quality, service, and presentation, based on the reviews and feedback of diners who have eaten at the restaurant",
  },
  {
    imgUrl: images.award02,
    title: 'AA Service Award',
    subtitle: "Attentive and professional staff who go above and beyond to create a warm and welcoming environment that enhances the enjoyment of the menu",
  },
];

export default { wines, cocktails, appetizers, entrees, awards};
