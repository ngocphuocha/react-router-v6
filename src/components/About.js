import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  console.log("About", location);
  return <>About page</>;
};

export default About;
