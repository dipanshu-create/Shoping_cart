export default function Header() {
  return (
    <div className="flex items-center justify-between h-20 mx-w-6xl mx-auto">
      <Link to={"/"}>
        <div className="ml-5">
          <h1 className="text-red-900 font-bold text-transparent text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
            React REDUX SHOPING CART
          </h1>
        </div>
      </Link>
    </div>
  );
}
