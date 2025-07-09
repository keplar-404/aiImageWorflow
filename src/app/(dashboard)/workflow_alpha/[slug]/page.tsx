"use client";
import React, { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  Connection,
  BackgroundVariant,
  ViewportPortal,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import "./style.css";
 
const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        // panOnScroll={true}
        selectionOnDrag={true}
        // panOnDrag={false}
        style={{ cursor: "default" }}
      >
        <Panel position="top-left">top-left</Panel>

        <Panel position="top-right">top-right</Panel>



    <ViewportPortal>
      <div
        style={{ transform: 'translate(100px, 100px)', position: 'absolute' }}
      >
       This section is for custom components that can be zoom and panned like the nodes.
      </div>
    </ViewportPortal>

       
        <Background
          variant={BackgroundVariant.Dots}
          gap={13}
          size={1}
          color=""
        />
        
      </ReactFlow>
    </div>
  );
}
