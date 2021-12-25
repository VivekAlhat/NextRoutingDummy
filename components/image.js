import Image from "next/image";

const ImageComponent = ({ src, alt }) => {
  return (
    <div className="imageContainer">
      <Image alt={alt} src={src} layout="fill" objectFit="cover" />
    </div>
  );
};

export default ImageComponent;
