import { Slot, Stack } from "expo-router";
import { AuthProvider } from "./lib/context/auth_context";
import "./global.css"

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}