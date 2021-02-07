## StopMotion

Create a `StopMotion` instance.

```js
import {createStopMotion} from "@convoyinteractive/factory"

const myStopMotion = createStopMotion("#stop-motion-container", {
    start: "random", // 0
    speed: 0.5 // 0.2
})
```

### Properties

| Name  | Type             |
| :---- | :--------------- |
| items | `Array[Element]` |

### Methods

| Name  | Parameters | Return |
| :---- | :--------- | :----- |
| play  | -          | void   |
| pause | -          | void   |
