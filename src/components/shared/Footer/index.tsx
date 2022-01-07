import React from "react";
import CardCateg from "./CardCateg";
import Credits from "./Credits";
import TitleCateg from "./TitleCateg";
import { ICateg } from "../../../redux/interfaces";

const Footer = () => {
  const dataCategoria1: ICateg[] = [
    { name: "lorem ipsum 1" },
    { name: "lorem ipsum 2" },
    { name: "lorem ipsum 3" }
  ];

  const dataCategoria2: ICateg[] = [
    { name: "lorem ipsum 1" },
    { name: "lorem ipsum 2" },
  ];

  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <TitleCateg title={'Lorem'} />
                <nav className="list-none mb-8">
                    {dataCategoria1.map((item) => (<CardCateg key={Date.now()} item={item} />))}
                </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
                <nav className="list-none xl:mt-10 lg:mt-10 mb-3">
                    {dataCategoria1.map((item) => (<CardCateg key={Date.now()} item={item} />))}
                </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
                <TitleCateg title={'Venta distribution'} />
                <nav className="list-none mb-10">
                    {dataCategoria1.map((item) => (<CardCateg key={Date.now()} item={item} />))}
                </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
                <TitleCateg title={'Lorem Ipsum'} />
                <nav className="list-none mb-10">
                    {dataCategoria2.map((item) => (<CardCateg key={Date.now()} item={item} />))}
                </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
                <TitleCateg title={'Lorem Ipsum'} />
                <nav className="list-none mb-10">
                    {dataCategoria2.map((item) => (<CardCateg key={Date.now()} item={item} />))}
                </nav>
            </div>
          </div>
        </div>
        <Credits item={ {name: 'Venta distribution', autor: 'edvalenzuela | timejobs'} } />
      </footer>
    </>
  );
};

export default Footer;
