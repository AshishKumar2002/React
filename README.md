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