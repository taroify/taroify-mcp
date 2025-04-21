## API

### Flex Props

| 参数                | 说明                                    | 类型       | 默认值                           |
| ------------------- | --------------------------------------- | ---------- | -------------------------------- |
| height              | 当前面板的显示高度                      | _number_   | `0`                              |
| anchors             | 设置自定义锚点, 单位 `px`               | _number[]_ | `[100, window.innerWidth * 0.6]` |
| duration            | 动画时长，单位秒，设置为 0 可以禁用动画 | _number_   | `0.3`                            |
| contentDraggable    | 允许拖拽内容容器                        | _boolean_  | `true`                           |
| safeAreaInsetBottom | 是否开启底部安全区适配                  | _boolean_  | `true`                           |