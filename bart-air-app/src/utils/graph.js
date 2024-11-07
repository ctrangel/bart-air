// src/utils/graph.js
import { segments } from "../data/stations"; // Adjust import as needed

const buildGraph = () => {
  const graph = {};
  segments.forEach(({ from, to, concentration }) => {
    if (!graph[from]) graph[from] = [];
    graph[from].push({ node: to, concentration });
  });
  return graph;
};

export const calculateConcentration = (start, end) => {
  const graph = buildGraph();
  const distances = { [start]: 0 };
  const queue = [start];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === end) break;

    const neighbors = graph[current] || [];
    neighbors.forEach(({ node, concentration }) => {
      const newDist = distances[current] + concentration;
      if (!distances[node] || newDist < distances[node]) {
        distances[node] = newDist;
        queue.push(node);
      }
    });
  }
  return distances[end] || -1;
};
