import { Redirect } from 'expo-router';
import { useAuth } from './lib/context/auth_context';

export default function Index() {
  const { user, loading } = useAuth();

  if (loading) return null;

  return <Redirect href={user ? './(root)/(tabs)/home' : './auth/welcome'} />;
}