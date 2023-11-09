import { Link } from "react-router-dom";

function LinkTo({ children, url, className }) {
  return (
    <Link
      className={[
        "text-stone-600 hover:text-blue-600 underline",
        className,
      ].join(" ")}
      to={url}
    >
      {children}
    </Link>
  );
}

export default LinkTo;
