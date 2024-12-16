import { UseCallback } from "@/components/UseCallback/UseCallback";
import { UseCallbackNew } from "@/components/UseCallback/UseCallbackNew";
import { UseContext } from "@/components/UseContext/UseContext";
import { UseContextNew } from "@/components/UseContext/UseContextNew";
import { UseDefferedValue } from "@/components/UseDefferedValue/UseDefferedValue";
import { UseEffect } from "@/components/UseEffect/UseEffect";
import { UseId } from "@/components/UseId/UseId";
import { UseImperativeHandle } from "@/components/UseImperativeHandle/UseImperativeHandle";
import { UseLayoutEffect } from "@/components/UseLayoutEffect/UseLayoutEffect";
import { UseMemo } from "@/components/UseMemo/UseMemo";
import { UseMemoNew } from "@/components/UseMemo/UseMemoNew";
import { UseReducer } from "@/components/UseReducer/UseReducer";
import { UseReducerNew } from "@/components/UseReducer/UseReducerNew";
import { UseRef } from "@/components/UseRef/UseRef";
import { UseState } from "@/components/UseState/UseState";
import { UseTransition } from "@/components/UseTransition/UseTransition";

export default function Page() {
  return (
    <div className="flex flex-col gap-6 w-full items-center p-6 bg-zinc-900">
      <UseState />
      <UseReducer />
      <UseReducerNew />
      <UseEffect />
      <UseRef />
      <UseLayoutEffect />
      <UseImperativeHandle />
      <UseContext />
      <UseContextNew />
      <UseMemo />
      <UseMemoNew />
      <UseCallback />
      <UseCallbackNew />
      <UseId />
      <UseTransition />
      <UseDefferedValue />
    </div>
  );
}
