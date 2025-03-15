import { useState } from "react";
import data from "./constants/data.json";
import List from "./components/List";

function App() {
  const [json, setJson] = useState(data);
  const [isOpen, setIsOpen] = useState({});

  const deleteElementFromList = (nodeId) => {
    const deleteNode = (tree) =>
      tree
        .filter((node) => node.id !== nodeId)
        .map((node) => ({
          ...node,
          children: deleteNode(node.children),
        }));
    setJson((prev) => deleteNode(prev));
  };

  const addElementToList = (parentId) => {
    const name = prompt("Enter folder name:");
    if (!name) return;

    const newNode = {
      id: Date.now(),
      name: name,
      isFolder: true,
      children: [],
    };

    const addNode = (tree) =>
      tree.map((node) =>
        node.id === parentId
          ? { ...node, children: [...node.children, newNode] }
          : node.children.length > 0
          ? { ...node, children: addNode(node.children) }
          : node
      );
    setJson((prev) => addNode(prev));
  };

  return (
    <div>
      <List
        data={json}
        addElementToList={addElementToList}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        deleteElementFromList={deleteElementFromList}
      />
    </div>
  );
}

export default App;
