import { Stack } from "expo-router";
import "./global.css"
import { AuthProvider } from "./lib/context/police_auth_context";

export default function RootLayout() {
  return (
    <AuthProvider>
          <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>

  );
}