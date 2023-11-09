import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Name from "../../components/Name";
import { get } from "../../utils/remoteFetcher";
import InfoUser from "../../components/InfoUser";
import LinkTo from "../../components/LinkTo";

export const loader = ({ params: { id } }) => {
  const user = get(`users/${id}`);
  const albums = get(`albums?userId=${id}`);

  const infoPromise = Promise.all([user, albums]);
  return { infoPromise };
};

export default function User() {
  const { infoPromise } = useLoaderData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={infoPromise} errorElement={<div>Ooops!</div>}>
        {([user, albums]) => {
          return (
            <div>
              <Name name={user.name} />

              <InfoUser
                username={user.username}
                email={user.email}
                phone={user.phone}
                website={user.website}
              />

              <div className="text-lg font-medium text-black mt-4">Albums:</div>
              <div className="flex flex-col gap-1">
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
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}
