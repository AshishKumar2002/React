#parcel
-Dev Build
-Local Server
-HMR=Hot Module Replacement
-File watching Algorithm
-Caching-Faster Build
-Image Optimization
-Bundling
-Compress
-Consistent Hashing
-Differential Bundlinhg - to support older browser
-Code spliting
-Error Handling
-Tree shaking - remove unused item
//JSX(transpiled before it reaches the JS engine)-Parcel-Babelp
//JSX => react Element => react /js object --> HTML(render)

/react element
// const jsxheading = (
// <h1 className="heading" tabIndex="1">
// Hello React
// </h1>
// );
//React element=>React Object ==> when we render this to dom the it become html element
//const heading = React.createElement("h1",{id:"heading"},"This is a react element");
//React Functional component
const TitleComponent = () => (

  <h1 className="title" tabIndex="2">Hello New component</h1>
);
const HeadingComponent = () =>(
  <div id="container">
  <TitleComponent/>
  <h2>{100+290}</h2>
    <h1 className="heading">Namaste React Functional component</h1>
  </div>
);

#Two type of Export/Import
  -Default Export/Import
     =>export default component
     =>import component from "path"
  -Named Export/Import
    =>export const component
    =>import {component} from "path"
#// useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setlistofRestaurant(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurant
  //   );
  // };

  <Outlet/>
   ->An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

<Link>
  -A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to. This means that things like right-clicking a <Link> work as you'd expect. You can use <Link reloadDocument> to skip client side routing and let the browser handle the transition normally (as if it were an <a href>).
# 2-types of Routing in web app
  -> client side routing-all the component are loaded already
  -> server side routing-make a network call 