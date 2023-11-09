import { useLoaderData } from "react-router-dom";
import { get } from "../../utils/remoteFetcher";
import LinkTo from "../../components/LinkTo";

export const loader = async () => {
  const users = await get(`users`);
  return { users };
};

export default function Users() {
  const { users } = useLoaderData();

  return (
    <div className="flex flex-col gap-1 mt-4">
      {users.map((user) => (
        <LinkTo key={user.id} url={`/users/${user.id}`}>
          {user.name}
        </LinkTo>
      ))}
    </div>
  );
}
