import { useState } from "react";
import EditorComponent from "./components/Editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable";

export default function App() {
  const [output, setOutput] = useState("output");
  return (
    <main>
      <p className="block sm:hidden text-center font-bold text-xl mt-20">
        Avaliable on Desktop only !
      </p>
      <section className="hidden sm:block">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full rounded-lg border"
        >
          <ResizablePanel className="h-screen">
            <EditorComponent setOutput={setOutput} />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Input</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">{output}</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
    </main>
  );
}
