import LinkTo from "../../components/LinkTo";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center m-32">
      <h1 className="text-4xl text-stone-800">404</h1>
      <h1 className="text-4xl text-stone-900">Page Not Found</h1>
      <p className="text-2xl text-stone-500 mt-4">
        Go to page
        <LinkTo className="hover:text-blue-600 ml-1" url={"/"}>
          Albums
        </LinkTo>
      </p>
    </div>
  );
}
