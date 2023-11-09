import { useLoaderData } from "react-router-dom";
import { get } from "../../utils/remoteFetcher";
import LinkTo from "../../components/LinkTo";

export const loader = async () => {
  const albums = await get("albums");
  return { albums };
};

export default function Albums() {
  const { albums } = useLoaderData();

  return (
    <div className="flex flex-col gap-1 mt-4">
      <div className="text-lg font-medium text-black mt-4">Albums:</div>
      {albums.map((album) => (
        <LinkTo
          url={`/albums/${album.id}`}
          className="flex items-center gap-1"
          key={album.id}
        >
          <img src="/images/picture.svg" alt="Album icon" />
          {album.title}
        </LinkTo>
      ))}
    </div>
  );
}
