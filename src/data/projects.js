import workoutTracker from "../assets/images/workout-tracker.png";
import ghProfiles from "../assets/images/gh-profiles.png";
import shoppingCart from "../assets/images/shopping-cart.png";
import recipes from "../assets/images/recipes.png";

const projects = [
  {
    name: "Workout Tracker",
    url: "https://workout-tracker-e5479.web.app/",
    img: workoutTracker,
    description:
      "Con el uso de Firebase como database logre guardar las rutinas y ejericicios de los usuarios.",
  },
  {
    name: "Github Profile",
    url: "https://prox2005.github.io/github-profile/",
    img: ghProfiles,
    description:
      "Pagina que permite encontrar informacion de usuarios de Github, con la ayuda de un Api.",
  },
  {
    name: "Shopping Cart",
    url: "https://prox2005.github.io/shopping__cart/",
    img: shoppingCart,
    description: "Carrito de compras dinamico que simula ser un e-commerce.",
  },
  {
    name: "Recipes",
    url: "https://prox2005.github.io/recipes/",
    img: recipes,
    description:
      "Con la ayuda de un Api, los usuarios pueden encontrar recetas segun el ingrediente que ingresen. ",
  },
];

export default projects;
