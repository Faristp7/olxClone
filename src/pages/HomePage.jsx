import React from "react";
import Header from "../components/header";
import Card from "../components/Card";
import Filter from "../components/Filter";

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <Filter></Filter>
      <Card></Card>
    </>
  );
}
