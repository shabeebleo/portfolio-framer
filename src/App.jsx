import NavBar from "./components/NavBar";
// import Test from "./components/Test";


const App = () => {
  return (
    <div>
      <section className="">
        <NavBar/>
        {/* <Test/> */}
      </section>
      
      <section id="Parallax" className="">Parallax</section>
      <section id="Services" className="">Services</section>
      <section id="Parallax" className="">Parallax</section>
      <section id="Portfolio1" className="">Portfolio1</section>
      <section id="Portfolio2" className="">Portfolio2</section>
      <section id="Portfolio3" className="">Portfolio3</section>
      <section id="Contact" className="">Contact</section>
    </div>
  );
};

export default App;
