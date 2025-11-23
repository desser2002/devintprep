import { Question } from "@/types/category";

export const mockQuestions: Question[] = [
  // React Hooks Questions
  {
    id: "q-hooks-1",
    topicId: "react-hooks",
    title: "What is the difference between useState and useReducer?",
    isCodingChallenge: false,
  },
  {
    id: "q-hooks-2",
    topicId: "react-hooks",
    title: "Implement a custom hook for fetching data",
    isCodingChallenge: true,
  },
  {
    id: "q-hooks-3",
    topicId: "react-hooks",
    title: "Explain useEffect cleanup function",
    isCodingChallenge: false,
  },
  {
    id: "q-hooks-4",
    topicId: "react-hooks",
    title: "Create a debounce hook",
    isCodingChallenge: true,
  },

  // React Components Questions
  {
    id: "q-comp-1",
    topicId: "react-components",
    title: "What are the differences between controlled and uncontrolled components?",
    isCodingChallenge: false,
  },
  {
    id: "q-comp-2",
    topicId: "react-components",
    title: "Build a reusable modal component",
    isCodingChallenge: true,
  },
  {
    id: "q-comp-3",
    topicId: "react-components",
    title: "Implement Higher-Order Component pattern",
    isCodingChallenge: true,
  },

  // React State Management Questions
  {
    id: "q-state-1",
    topicId: "react-state",
    title: "Explain prop drilling and how to avoid it",
    isCodingChallenge: false,
  },
  {
    id: "q-state-2",
    topicId: "react-state",
    title: "Implement a simple state management with Context API",
    isCodingChallenge: true,
  },
  {
    id: "q-state-3",
    topicId: "react-state",
    title: "What is Redux and when should you use it?",
    isCodingChallenge: false,
  },

  // Next.js Routing Questions
  {
    id: "q-next-routing-1",
    topicId: "nextjs-routing",
    title: "Explain the difference between App Router and Pages Router",
    isCodingChallenge: false,
  },
  {
    id: "q-next-routing-2",
    topicId: "nextjs-routing",
    title: "Implement dynamic routes with catch-all segments",
    isCodingChallenge: true,
  },
  {
    id: "q-next-routing-3",
    topicId: "nextjs-routing",
    title: "What are Route Groups and when to use them?",
    isCodingChallenge: false,
  },

  // Next.js SSR Questions
  {
    id: "q-next-ssr-1",
    topicId: "nextjs-ssr",
    title: "Explain the difference between SSR, SSG, and ISR",
    isCodingChallenge: false,
  },
  {
    id: "q-next-ssr-2",
    topicId: "nextjs-ssr",
    title: "Implement a page with server-side data fetching",
    isCodingChallenge: true,
  },

  // TypeScript Basics Questions
  {
    id: "q-ts-basics-1",
    topicId: "ts-basics",
    title: "What are the basic types in TypeScript?",
    isCodingChallenge: false,
  },
  {
    id: "q-ts-basics-2",
    topicId: "ts-basics",
    title: "Create a type-safe function with proper typing",
    isCodingChallenge: true,
  },
  {
    id: "q-ts-basics-3",
    topicId: "ts-basics",
    title: "Explain type inference in TypeScript",
    isCodingChallenge: false,
  },

  // TypeScript Generics Questions
  {
    id: "q-ts-generics-1",
    topicId: "ts-generics",
    title: "What are generics and why are they useful?",
    isCodingChallenge: false,
  },
  {
    id: "q-ts-generics-2",
    topicId: "ts-generics",
    title: "Implement a generic Stack data structure",
    isCodingChallenge: true,
  },
  {
    id: "q-ts-generics-3",
    topicId: "ts-generics",
    title: "Create a utility type with conditional types",
    isCodingChallenge: true,
  },

  // Node.js Async Questions
  {
    id: "q-node-async-1",
    topicId: "nodejs-async",
    title: "Explain the Event Loop in Node.js",
    isCodingChallenge: false,
  },
  {
    id: "q-node-async-2",
    topicId: "nodejs-async",
    title: "Implement Promise.all from scratch",
    isCodingChallenge: true,
  },
  {
    id: "q-node-async-3",
    topicId: "nodejs-async",
    title: "What is the difference between setImmediate and process.nextTick?",
    isCodingChallenge: false,
  },

  // Arrays Basics Questions
  {
    id: "q-arrays-basics-1",
    topicId: "arrays-basics",
    title: "Find the maximum subarray sum (Kadane's Algorithm)",
    isCodingChallenge: true,
  },
  {
    id: "q-arrays-basics-2",
    topicId: "arrays-basics",
    title: "Rotate an array by k positions",
    isCodingChallenge: true,
  },
  {
    id: "q-arrays-basics-3",
    topicId: "arrays-basics",
    title: "Find duplicates in an array",
    isCodingChallenge: true,
  },

  // Two Pointers Questions
  {
    id: "q-two-pointers-1",
    topicId: "arrays-two-pointers",
    title: "Find pair with target sum in sorted array",
    isCodingChallenge: true,
  },
  {
    id: "q-two-pointers-2",
    topicId: "arrays-two-pointers",
    title: "Remove duplicates from sorted array in-place",
    isCodingChallenge: true,
  },
  {
    id: "q-two-pointers-3",
    topicId: "arrays-two-pointers",
    title: "Container with most water",
    isCodingChallenge: true,
  },

  // Trees Traversal Questions
  {
    id: "q-trees-traversal-1",
    topicId: "trees-traversal",
    title: "Implement inorder, preorder, and postorder traversal",
    isCodingChallenge: true,
  },
  {
    id: "q-trees-traversal-2",
    topicId: "trees-traversal",
    title: "Level order traversal of a binary tree",
    isCodingChallenge: true,
  },
  {
    id: "q-trees-traversal-3",
    topicId: "trees-traversal",
    title: "Find the height of a binary tree",
    isCodingChallenge: true,
  },

  // BST Questions
  {
    id: "q-bst-1",
    topicId: "trees-bst",
    title: "Validate a Binary Search Tree",
    isCodingChallenge: true,
  },
  {
    id: "q-bst-2",
    topicId: "trees-bst",
    title: "Find the kth smallest element in BST",
    isCodingChallenge: true,
  },

  // Graphs Questions
  {
    id: "q-graphs-bfs-dfs-1",
    topicId: "graphs-bfs-dfs",
    title: "Implement BFS and DFS for a graph",
    isCodingChallenge: true,
  },
  {
    id: "q-graphs-bfs-dfs-2",
    topicId: "graphs-bfs-dfs",
    title: "Detect cycle in a directed graph",
    isCodingChallenge: true,
  },
  {
    id: "q-graphs-shortest-1",
    topicId: "graphs-shortest-path",
    title: "Implement Dijkstra's algorithm",
    isCodingChallenge: true,
  },

  // Sorting Questions
  {
    id: "q-sorting-basic-1",
    topicId: "sorting-basic",
    title: "Implement bubble sort and selection sort",
    isCodingChallenge: true,
  },
  {
    id: "q-sorting-advanced-1",
    topicId: "sorting-advanced",
    title: "Implement merge sort and quick sort",
    isCodingChallenge: true,
  },

  // Dynamic Programming Questions
  {
    id: "q-dp-basics-1",
    topicId: "dp-basics",
    title: "Solve the Fibonacci problem with memoization",
    isCodingChallenge: true,
  },
  {
    id: "q-dp-patterns-1",
    topicId: "dp-patterns",
    title: "Solve the 0/1 Knapsack problem",
    isCodingChallenge: true,
  },
  {
    id: "q-dp-patterns-2",
    topicId: "dp-patterns",
    title: "Longest Common Subsequence",
    isCodingChallenge: true,
  },

  // Python Questions
  {
    id: "q-python-basics-1",
    topicId: "python-basics",
    title: "Explain list comprehensions in Python",
    isCodingChallenge: false,
  },
  {
    id: "q-python-basics-2",
    topicId: "python-basics",
    title: "Implement a function to flatten a nested list",
    isCodingChallenge: true,
  },
  {
    id: "q-python-oop-1",
    topicId: "python-oop",
    title: "Explain inheritance and polymorphism",
    isCodingChallenge: false,
  },

  // Load Balancing Questions
  {
    id: "q-lb-strategies-1",
    topicId: "lb-strategies",
    title: "Explain Round Robin load balancing",
    isCodingChallenge: false,
  },
  {
    id: "q-lb-strategies-2",
    topicId: "lb-strategies",
    title: "Implement a weighted round-robin algorithm",
    isCodingChallenge: true,
  },
  {
    id: "q-lb-strategies-3",
    topicId: "lb-strategies",
    title: "What is consistent hashing and when to use it?",
    isCodingChallenge: false,
  },

  // Caching Questions
  {
    id: "q-caching-strategies-1",
    topicId: "caching-strategies",
    title: "Explain LRU cache and implement it",
    isCodingChallenge: true,
  },
  {
    id: "q-caching-invalidation-1",
    topicId: "caching-invalidation",
    title: "What are cache invalidation strategies?",
    isCodingChallenge: false,
  },

  // Database Questions
  {
    id: "q-db-sql-1",
    topicId: "db-sql",
    title: "Explain ACID properties",
    isCodingChallenge: false,
  },
  {
    id: "q-db-nosql-1",
    topicId: "db-nosql",
    title: "When to use NoSQL over SQL?",
    isCodingChallenge: false,
  },
  {
    id: "q-db-indexing-1",
    topicId: "db-indexing",
    title: "Explain database indexing and B-trees",
    isCodingChallenge: false,
  },
];
