export default function Home() {
  return (
    <div className={`flex justify-center w-full h-full`}>
      <div className="flex items-center flex-col mt-[80px]">
        <div className="w-[350px] aspect-square object-fill rounded-full overflow-hidden">
          <img
            className=""
            src="/assets/profile-pic.jpg"
            alt="An image of myself"
          />
        </div>
        <h1>Elliot Haigh</h1>
      </div>
    </div>
  );
}
