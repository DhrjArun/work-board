/** @jsxImportSource @theme-ui/core */

import { useState } from "react";
import { TaskManager } from "task-column";
import { TaskProvider } from "task-ctx";
import { Button } from "ui";
import { TextField } from "ui/text-field";

function App() {
  const [isShowArchived, setShowArchived] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div
      className="App"
      sx={{
        color: "gray.8",
        fontFamily: "body",
        fontSize: "0",
        maxWidth: "80rem",
        margin: "auto",
      }}
    >
      <TaskProvider value={{ searchValue, isShowArchived }}>
        <header
          sx={{
            mb: "3",
            display: "flex",
            alignItems: "center",
            py: "3",
            px: "3",
            borderBottom: "1px",
            borderColor: "gray.4",
            bg: "gray.1",
          }}
        >
          <TextField placeholder="Search" sx={{ width: "16rem", mr: "3" }} />
          <Button
            onClick={() => {
              setShowArchived(!isShowArchived);
            }}
          >
            {isShowArchived ? "Hide Archived" : "Show Archived"}
          </Button>
        </header>
        <TaskManager />
      </TaskProvider>
    </div>
  );
}

export default App;
