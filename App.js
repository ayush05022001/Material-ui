import React from "react";
import Search from "./search";
import './search.css';
import { ReactOneDriveFilePicker } from "react-onedrive-filepicker";

export default function App() {
  return (
    <div className="App">
      <Search />
      <ReactOneDriveFilePicker
        clientID="c3e71009-3dd7-4fc8-9127-2de5ac14c89f"
        action="share"
        multiSelect={true}
        onSuccess={(result) => {
          alert(JSON.stringify(result));
        }}
        onCancel={(result) => {
          alert(JSON.stringify(result));
        }}
      >
        <button>Upload here</button>
      </ReactOneDriveFilePicker>
      
    </div>
  );
}
