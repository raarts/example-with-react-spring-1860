import { Button, View } from "react-native";
import { useToastContext } from "./Toaster/useToastContext";

export default function Main() {
  const addToast = useToastContext();

  return (
    <View>
      <Button
        title={"info"}
        color="green"
        onPress={() =>
          addToast(
            "info",
            "Hello World. This planet will be demolished by orders of the supreme command"
          )
        }
      />
      <Button
        title={"error"}
        color="red"
        onPress={() => addToast("error", "Bye bye World")}
      />
    </View>
  );
}
