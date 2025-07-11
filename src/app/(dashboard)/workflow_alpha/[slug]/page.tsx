"use client";
import React, { useMemo, useCallback } from "react";
import {
  ReactFlow,
  Background,
  useNodesState,
  BackgroundVariant,
  Node,
  Panel,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import "./style.css";
import NavBar from "../../../../components/workflow/NavBar";
import CustomNode from "@/components/workflow/customNode";

const initialNodes: Node[] = [];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  const nodeTypes = useMemo(
    () => ({
      customNode: CustomNode,
    }),
    []
  );

  const addNode = useCallback(() => {
    const newNode: Node = {
      id: `node-${Date.now()}`,
      type: "customNode",
      position: {
        x: Math.random() * 300,
        y: Math.random() * 300,
      },
      data: { value: Math.floor(Math.random() * 1000) },
    };
    setNodes((nds) => [...nds, newNode]);
  }, [setNodes]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        panOnScroll={true}
        selectionOnDrag={true}
        panOnDrag={[1, 2]}
        minZoom={0.3} // Minimum zoom level (10%)
      >
        <NavBar />
        <Background variant={BackgroundVariant.Dots} gap={13} size={1.3} color="gray" bgColor="#EFF0F3"/>
        <Panel position="bottom-center">
          <button
            onClick={addNode}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Add Custom Node
          </button>
        </Panel>
      </ReactFlow>
    </div>
  );
}
