import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Name from "../../components/Name";
import { get } from "../../utils/remoteFetcher";
import LinkTo from "../../components/LinkTo";

export const loader = async ({ params: { id } }) => {
  const album = await get(`albums/${id}`);
  const photos = get(`photos?albumId=${id}`);
  const user = get(`users/${album.userId}`);

  const infoPromise = Promise.all([album, photos, user]);

  return { infoPromise };
};

export default function Album() {
  let { infoPromise: promise } = useLoaderData();

  return (
    <Suspense fallback={<div>Processing...</div>}>
      <Await resolve={promise} errorElement={<div>Ooops!</div>}>
        {([album, photos, user]) => (
          <div>
            <Name name={album.title} />

            <div className="flex flex-row gap-1 text-stone-600">
              <p>Created by: </p>
              <LinkTo url={`/users/${user.id}`}>{user.name}</LinkTo>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {photos.map((photo) => (
                <img key={photo.id} alt={photo.id} src={photo.url} />
              ))}
            </div>
          </div>
        )}
      </Await>
    </Suspense>
  );
}
