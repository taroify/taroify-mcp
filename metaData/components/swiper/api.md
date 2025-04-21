## API

### Swiper Props

| 参数             | 说明                     | 类型               | 默认值    |
| ---------------- | ------------------------ | ------------------ | --------- |
| defaultValue     | 默认位置索引值           | _number_ | `0`       |
| value            | 位置索引值           | _number_ | `0`       |
| autoplay         | 自动轮播间隔，单位为 ms  | _number_ | -         |
| duration         | 动画时长，单位为 ms      | _number_ | `500`     |
| width            | 滑块宽度，单位为 `px`    | _number_ | `auto`    |
| height           | 滑块高度，单位为 `px`    | _number_ | `auto`    |
| direction        | 轮播方向，可选值为 `vertical` | _string_     | `horizontal`   |
| touchable        | 是否可以通过手势滑动     | _boolean_          | `true`    |
| lazyRender       | 是否延迟渲染未展示的轮播 | _boolean_          | `false`   |
| stopPropagation  | 是否阻止滑动事件冒泡     | _boolean_          | `true`    |

### Swiper Events

| 事件名 | 说明                 | 回调参数            |
| ------ | -------------------- | ------------------- |
| onChange | 每一页轮播结束后触发 | _(index: number)_ |