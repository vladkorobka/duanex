"use client";

import { useEffect, useState } from "react";
import { fetchNodes } from "@/api/fetchNodes";
import Tree from "./components/Tree";

export default function Home() {
  const [tree, setTree] = useState(null);

  useEffect(() => {
    (async () => {
      const nodes = await fetchNodes();
      setTree(nodes);
    })();
  }, []);

  return (
    <main>
      <aside>{tree ? <Tree tree={tree} /> : "Loading..."}</aside>
    </main>
  );
}
