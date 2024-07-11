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
function EditorComponent() {
  const code = `console.log("hello there")`;
  const [selectedLang, selectLang] = useState<Language>("typescript");
  return (
    <main className="h-full">
      <nav className="p-2 flex gap-4 items-center">
        <LanguageSelector selectLang={selectLang} />
        <PlayIcon className="min-w-5 min-h-5 hover:cursor-pointer" />
      </nav>
      <Editor
        language={selectedLang}
        theme="vs-dark"
        options={{
          fontSize: 20,
          contextmenu: false,
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
        console.log(e);
        selectLang(e as Language);
      }}
    >
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Select a Language" />
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
