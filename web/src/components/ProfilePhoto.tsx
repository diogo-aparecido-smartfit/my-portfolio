import { useState } from "react";

export default function ProfilePhoto() {
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleImageError = () => {
    setImageLoaded(false);
  };

  return (
    <div className="flex">
      {imageLoaded ? (
        <img
          className="rounded-full w-20 h-20 shadow-photoShadow"
          src="https://avatars.githubusercontent.com/u/89851406?v=4"
          alt="Imagem de perfil do GitHub"
          onError={handleImageError}
        />
      ) : (
        <div className="rounded-full w-20 h-20 shadow-photoShadow bg-gray-500 flex items-center justify-center animate-pulse">
          <p className="text-2xl text-gray-500"></p>
        </div>
      )}
      <div className="flex p-1 items-center justify-center text-center mt-10 ml-14 absolute rounded-full w-10 h-10 shadow-photoShadow bg-white hover:cursor-default">
        <p className="text-xl">👑</p>
      </div>
    </div>
  );
}
