import Editor from "@monaco-editor/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useState } from "react";
import { PlayIcon } from "@radix-ui/react-icons";
type Language = "cpp" | "javascript" | "java" | "typescript";
function EditorComponent({
  setOutput,
}: {
  setOutput: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [code, setCode] = useState<undefined | string>(
    `#include <iostream>
using namespace std;
int main(){
cout<<"hello world";
}
    `
  );
  const [selectedLang, selectLang] = useState<Language>("cpp");
  return (
    <main className="h-full">
      <nav className="p-2 flex gap-4 items-center">
        <LanguageSelector selectLang={selectLang} />
        <PlayIcon
          className="min-w-5 min-h-5 hover:cursor-pointer"
          onClick={async () => {
            setOutput("Loading...");
            const res = await fetch(`http://localhost:3000/${selectedLang}`, {
              method: "POST",
              headers: {
                "Content-Type": "text/plain",
              },
              body: code,
            });
            const output = await res.text();
            setOutput(output);
          }}
        />
      </nav>
      <Editor
        language={selectedLang}
        theme="vs-dark"
        options={{
          fontSize: 20,
          contextmenu: false,
        }}
        onChange={(e) => {
          setCode(e);
        }}
        value={code}
      />
    </main>
  );
}
export default EditorComponent;

function LanguageSelector({
  selectLang,
}: {
  selectLang: React.Dispatch<React.SetStateAction<Language>>;
}) {
  return (
    <Select
      onValueChange={(e) => {
        selectLang(e as Language);
      }}
    >
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="cpp" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="cpp" className="hover:cursor-pointer">
            C++
          </SelectItem>
          <SelectItem value="java" className="hover:cursor-pointer">
            Java
          </SelectItem>
          <SelectItem value="javascript" className="hover:cursor-pointer">
            Javascript
          </SelectItem>
          <SelectItem value="typescript" className="hover:cursor-pointer">
            Typescript
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
