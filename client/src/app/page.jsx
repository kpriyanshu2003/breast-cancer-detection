"use client";

import React, { useState } from "react";
import ImageUploader from "@/components/ImageUploader";
import Result from "@/components/Result";
import Footer from "@/components/Footer";

function Page() {
  const [showResults, setShowResults] = useState(false);
  const [image, setImage] = useState();
  return (
    <div>
      <div className="px-32 pt-16 scroll-smooth">
        <ImageUploader setShowResults={setShowResults} setImage={setImage} />
        <div id="results">{showResults ? <Result image={image} /> : null}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
