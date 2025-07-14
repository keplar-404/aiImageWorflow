"use client";
import React, { useMemo, useCallback } from "react";
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Node,
  Edge,
  Panel,
  Connection,
  ConnectionMode,
  ConnectionLineType,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import "./style.css";
import NavBar from "../../../../components/workflow/NavBar";
import CustomNode from "@/components/workflow/customNode";

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = useMemo(
    () => ({
      customNode: CustomNode,
    }),
    []
  );

  // Handle new connections between nodes
  const onConnect = useCallback(
    (params: Connection) => {
      const edge = {
        ...params,
        type: 'default', // Using default edge type (straight lines)
        animated: false, // Disabled animation for cleaner look
        style: {
          stroke: '#3b82f6',
          strokeWidth: 2,
        },
      };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  // Handle edge selection for visual feedback
  const onEdgeClick = useCallback((event: React.MouseEvent, edge: Edge) => {
    event.stopPropagation();
    setEdges((eds) =>
      eds.map((e) => ({
        ...e,
        style: {
          ...e.style,
          stroke: e.id === edge.id ? '#ef4444' : '#3b82f6', // Red when selected, blue when not
          strokeWidth: e.id === edge.id ? 3 : 2, // Thicker when selected
        },
        animated: e.id === edge.id, // Animate only selected edge
      }))
    );
  }, [setEdges]);

  // Reset edge styles when clicking on pane
  const onPaneClick = useCallback(() => {
    setEdges((eds) =>
      eds.map((e) => ({
        ...e,
        style: {
          ...e.style,
          stroke: '#3b82f6',
          strokeWidth: 2,
        },
        animated: false,
      }))
    );
  }, [setEdges]);

  const addNode = useCallback(() => {
    const newNode: Node = {
      id: `node-${Date.now()}`,
      type: "customNode",
      position: {
        x: Math.random() * 300,
        y: Math.random() * 300,
      },
      data: { 
        value: Math.floor(Math.random() * 1000),
        onDelete: (nodeId: string) => {
          setNodes((nds) => nds.filter((node) => node.id !== nodeId));
        }
      },
    };
    setNodes((nds) => [...nds, newNode]);
  }, [setNodes]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onEdgeClick={onEdgeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        panOnScroll={true}
        selectionOnDrag={true}
        panOnDrag={[1, 2]}
        minZoom={0.3}
        fitView
        connectionLineStyle={{
          stroke: '#3b82f6',
          strokeWidth: 2,
          strokeDasharray: 'none', // Solid connection line while dragging
        }}
        connectionLineType={ConnectionLineType.Straight}
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