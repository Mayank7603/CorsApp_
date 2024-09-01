import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Define screens in the stack */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="gender"  options={{ headerShown: false }} />
      <Stack.Screen name="weight"  options={{ headerShown: false}} />
      <Stack.Screen name="age"  options={{ headerShown: false }} />
    </Stack>
  );
}
