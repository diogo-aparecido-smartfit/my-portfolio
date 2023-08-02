export default function ProfilePhoto() {
  return (
    <div className="flex ">
      <img
        className="rounded-full w-20 h-20 shadow-photoShadow"
        src="https://avatars.githubusercontent.com/u/89851406?v=4"
        alt=""
      />
      <div className="flex p-1 items-center justify-center text-center mt-10 ml-14 absolute rounded-full w-10 h-10 shadow-photoShadow  bg-white hover:cursor-default">
        <p className="text-xl">👑</p>
      </div>
    </div>
  );
}
