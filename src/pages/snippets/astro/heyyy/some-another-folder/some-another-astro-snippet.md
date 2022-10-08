---
title: hook - useDebounce
description: useDebounce - debounce your callback
layout: ../../../../../layouts/SnippetPageLayout.astro
---

# useDebounce

"Debouncing" lets you postpone execution of a function {timeout} miliseconds after it's last call. If a function is called again before timeout of the previous one ends, the previous function call is cancelled and new timeout is started by the last function call.

## Use cases:

Usage example could be a simple search input. If user strokes a key, we'd ideally want to show him actual search results each time. But in order to reduce api calls to the server, we can debounce the call so that it's executed only after user stops writing for {timeout} miliseconds.

## Code: 
```javascript
import { useCallback, useRef, useMemo } from "react";

const useDebounce = <T extends (...args: any[]) => void>(fn: T, timeout: number = 1000) => {
  const timeoutId = useRef<NodeJS.Timeout>();

  const debouncedFn: (...args: any[]) => void = useCallback(
    (...args) => {
      timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => fn(...args), timeout);
    },
    [fn, timeout]
  );

  const cancel = () => clearTimeout(timeoutId.current);

  return useMemo(() => ({ debouncedFn: debouncedFn as T, cancel }), [debouncedFn]);
};
    
export default useDebounce;
```