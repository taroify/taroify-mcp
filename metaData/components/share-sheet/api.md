## API

### ShareSheet Props

| 参数          | 说明         | 类型              | 默认值     |
|-------------|------------|-----------------|---------|
| defaultOpen | 默认是否显示动作面板 | _boolean_       | `false` |
| open        | 是否显示动作面板   | _boolean_       | `false` |
| className   | 样式类名       | _string_        | -       |
| style       | 样式对象       | _CSSProperties_ | -       |
| rounded     | 是否为圆角      | _string_        | -       |

### ShareSheet.Backdrop Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 样式类名 | _string_        | - |
| style     | 样式对象 | _CSSProperties_ | - |
| duration  | 动画时长，单位毫秒 | _number \| string_ | `300` |
| closeable | 点击是否可以关闭  | _boolean_ | `true` |

### ShareSheet.Header Props

| 参数        | 说明   | 类型              | 默认值 |
|-----------|------|-----------------|-----|
| className | 样式类名 | _string_        | -   |
| style     | 样式对象 | _CSSProperties_ | -   |
| title     | 标题   | _string_        | -   |
| children  | 描述信息 | _string_        | -   |

### ShareSheet.Option Props

|     参数     | 说明 | 类型 | 默认值 |
| ----------- | --- | --- | --- |
| className   | 分享选项类名 | _string_ | - |
| name        | 分享渠道名称 | _string_ | - |
| value       | 选项值  | _string_        | - |
| description | 分享选项描述 | _string_ | - |
| icon        | 图标，可选值为 `wechat` `weibo` `qq` `link` `qrcode` `poster`<br/>`weapp-qrcode` `wechat-moments`，支持传入 Image 组件 | _string_ | - |
| openType    | 微信开放能力，可选值为 `contact` `contactShare` `share`<br/>`getRealnameAuthInfo` `getAuthorize` `getPhoneNumber`<br/>`getUserInfo` `lifestyle` `launchApp` `openSetting` `feedback` | _string_ | - |

### Events

| 事件名      | 说明        | 回调参数                            |
|----------|-----------|---------------------------------|
| onSelect | 点击分享选项时触发 | _event: ShareSheet.OptionEvent_ |
| onCancel | 点击取消按钮时触发 | -                               |
| onClose  | 关闭面板时触发   | -                               |