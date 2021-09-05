package io.ionic.starter;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "EchoPlugin")
public class EchoPlugin extends Plugin {
  @PluginMethod
  public void NativeMethod(PluginCall call){
    JSObject result = new JSObject();
    String value = call.getString("value");
    Log.d("Console:", "Native method called. " + value);
    result.put("message", "Hello Android user!");
    call.resolve(result);
  }
}
