  
import { registerPlugin, Plugin } from "@capacitor/core";

interface NativePluginInterface extends Plugin {
  NativeMethod: (options: { action: string, value: string }) => Promise<Record<"message", string>>;
  NotifyListeners: () => Promise<void>;
}

export const EchoPlugin = registerPlugin<NativePluginInterface>(
  "EchoPlugin"
);