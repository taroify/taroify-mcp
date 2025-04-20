## API

### Props

| 参数         | 说明           | 类型                                   | 默认值        |
|------------|--------------|--------------------------------------|------------|
| value      | 倒计时时长，单位毫秒   | _number_                             | `0`        |
| format     | 时间格式         | _string_                             | `HH:mm:ss` |
| autostart  | 是否自动开始倒计时    | _boolean_                            | `true`     |
| interval   | 倒计时渲染间隔，单位毫秒 | _number_                             | `1000`     |
| onChange   | 倒计时变化时触发     | _(currentTime: CurrentTime) => void_ | -          |
| onComplete | 倒计时结束时触发     | _() => void_                         | -          |

### format 格式

| 格式  | 说明      |
|-----|---------|
| DD  | 天数      |
| HH  | 小时      |
| mm  | 分钟      |
| ss  | 秒数      |
| S   | 毫秒（1 位） |
| SS  | 毫秒（2 位） |
| SSS | 毫秒（3 位） |

### CurrentTime 格式

| 名称           | 说明          | 类型       |
|--------------|-------------|----------|
| total        | 剩余总时间（单位毫秒） | _number_ |
| days         | 剩余天数        | _number_ |
| hours        | 剩余小时        | _number_ |
| minutes      | 剩余分钟        | _number_ |
| seconds      | 剩余秒数        | _number_ |
| milliseconds | 剩余毫秒        | _number_ |

### 方法

通过 ref 可以获取到 Countdown 实例并调用实例方法。

| 方法名     | 说明                                       | 参数  | 返回值 |
|---------|------------------------------------------|-----|-----|
| start   | 开始倒计时                                    | -   | -   |
| pause   | 暂停倒计时                                    | -   | -   |
| reset   | 重设倒计时，若 `autostart` 为 `true`，重设后会自动开始倒计时 | -   | -   |
| restart | 重启倒计时                                    | -   | -   |