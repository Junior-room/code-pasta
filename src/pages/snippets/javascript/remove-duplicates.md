---
title: Javascript - Remove Duplicates
description: removeDuplicates from an array
layout: ../../../layouts/SnippetPageLayout.astro
---

# removeDuplicates

You wish you had a good way of removing duplicated objects from an array? Would you like it to be typesafe? You're in a good place.

## Use cases

Imagine you're building a chat app. You fetch some pages of messages, but in between those fetches you got new messages from websocket, thus creating an offset in pages. Now it can be possible that you will have one message object twice in your state, one time from api, one from websocket. In order to not have to display one message twice, you can remove it using this function.

## Code
```javascript
const removeDuplicates = <TArr extends TElem[], TElem>(
  array: TArr,
  compareFn: (elem: TElem) => string | number // calculate comparator from array element based on which elements will be marked as duplicates
) => {
  const visitedKeys = new Set<string | number>();
  const arrayWithNoDuplicates: TElem[] = [];

  array.forEach((elem) => {
    const key = compareFn(elem);
    if (!visitedKeys.has(key)) {
      visitedKeys.add(key);
      arrayWithNoDuplicates.push(elem);
    }
  });

  return arrayWithNoDuplicates;
};

export default removeDuplicates;
```