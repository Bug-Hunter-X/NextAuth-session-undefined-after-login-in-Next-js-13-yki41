```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session: session,
    },
  };
}

export default function About({ session }) {
  console.log('Session:', session);

  return (
    <div>
      <h1>About Page</h1>
      {session && <p>You are logged in as {session.user.email}</p>}
    </div>
  );
}
```