import React, { useEffect } from 'react'
import { Redirect, Stack, useRouter } from 'expo-router'
import { useAuth } from '../lib/context/police_auth_context';

const _layout = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace('../(root)/(tabs)/home_screen');
    }else{
      <Redirect href="./welcome" />;
    }
  }, [user, loading]);

  if (loading) return null;
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="login_screen" options={{ headerShown: false }} />
    </Stack>
  )
}

export default _layout;