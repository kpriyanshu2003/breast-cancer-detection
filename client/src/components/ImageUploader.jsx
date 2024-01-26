import React, { useState } from "react";
import Image from "next/image";
import defImg from "@/assets/cancer.jpg";
import { uploadImage } from "@/api/api";

function ImageUploader(props) {
  const [image, setImage] = useState({
    fileInput: null,
    imagePreview: defImg,
  });
  const [btnText, setBtnText] = useState("Submit");

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage((prevFields) => ({
        ...prevFields,
        fileInput: file,
        imagePreview: imageUrl,
      }));
    } else
      setImage((prevFields) => ({
        ...prevFields,
        fileInput: null,
        imagePreview: upload,
      }));
  };

  const handleUpload = () => {
    setBtnText("Submitting");
    if (!image.fileInput) alert("Please select an image");
    else {
      const formData = new FormData();
      formData.append("file", image.fileInput);
      props.setImage(image.imagePreview);
      uploadImage(formData)
        .then((res) => {
          console.log(res.data);
        })
        .then(() => {
          setBtnText("Submit");
          props.setShowResults(true);
          const section = document.getElementById("results");
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth" });
          }, 100);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <h1 className="text-4xl font-medium text-center">Upload Image</h1>
      <div className="mt-20 flex items-center justify-evenly">
        <Image
          src={image.imagePreview}
          alt="image"
          width={200}
          height={200}
          className="w-80 h-80 aspect-square"
        />
        <div className="">
          <input
            type="file"
            name="fileInput"
            id=""
            accept="image/*"
            className="border p-4 rounded-md font-mono"
            onChange={handleImage}
          />
          <br />
          <div className="grid place-content-center">
            <button
              className={`px-6 py-2 my-6 bg-gray-300 rounded-md flex gap-3 items-center justify-center transition-all ease-in-out duration-500 w-auto
              ${
                btnText === "Submitting"
                  ? "cursor-default"
                  : "hover:bg-gray-400"
              }
              `}
              onClick={handleUpload}
            >
              {btnText == "Submitting" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="animate-spin"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M8.124 5a8 8 0 1 0 7.752 0"
                  />
                </svg>
              )}
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageUploader;
