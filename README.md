# Stacks and Queues

## Takeaways

- Stacks and queues are best implemented as specialized linked lists
- Stacks (LIFO)
  - Treat the head (/first node) as the head of the stack
  - Nodes are only inserted or removed from the top to preserve $O(1)$
- Queues (FIFO)
  - Nodes are added to front and removed from the end to preserve $O(1)$
- Doubly linked lists are simpler to implement than they seem at first blush...
  - ...but you should only use them when they provide a benefit to the time complexity
