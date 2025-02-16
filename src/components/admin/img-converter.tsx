import React from "react";

const ImageConverter = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Image Converter</h1>
      <iframe
        src="https://img-converter-lime.vercel.app/"
        className="w-full h-[600px] border rounded-lg"
      ></iframe>
    </div>
  );
};

export default ImageConverter;
