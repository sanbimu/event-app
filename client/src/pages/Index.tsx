import { useAuthContext } from '../hooks/useContexts';
import { WindowButton } from '../components/WindowButton';

export function Index() {
  const { isAuthorized, signOut, user } = useAuthContext();

  return (
    <div className="flex flex-col items-start gap-2	p-2">
      <WindowButton provider="google">Continue with Google</WindowButton>
      <WindowButton provider="facebook">Continue with Facebook</WindowButton>
      {isAuthorized && (
        <div className="flex items-center gap-2">
          <img src={user.avatar} className="h-9 w-9 rounded-full" />
          <div>
            {user.firstName} {user.lastName}
          </div>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
}
