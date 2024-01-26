"use client";

import React, { useState } from "react";
import ImageUploader from "@/components/ImageUploader";
import Result from "@/components/Result";

function Page() {
  const [showResults, setShowResults] = useState(false);
  const [image, setImage] = useState();
  return (
    <div className="px-32 py-16 scroll-smooth">
      <ImageUploader setShowResults={setShowResults} setImage={setImage} />
      <div id="results">{showResults ? <Result image={image} /> : null}</div>
    </div>
  );
}

export default Page;
