import { Pressable, Text } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

export const SignOut = () => {
  const { signOut } = useAuth();
  return (
    <Pressable
      className="rounded-lg border-2 border-gray-500 p-4"
      onPress={void signOut()}
    >
      <Text>Sign Out</Text>
    </Pressable>
  );
};
