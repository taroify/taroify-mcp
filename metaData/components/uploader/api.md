## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认已上传的文件列表 | _UploadFile[]_ | - |
| value | 已上传的文件列表 | _UploadFile[]_ | - |
| name | 标识符，可以在回调函数的第二项参数中获取 | _number \| string_ | - |
| multiple | 是否开启图片多选，部分安卓机型不支持 | _boolean_ | `false` |
| disabled | 是否禁用文件上传 | _boolean_ | `false` |
| readonly | 是否将上传区域设置为只读状态 | _boolean_ | `false` |
| removable | 是否展示删除按钮 | _boolean_ | `true` |
| maxFiles | 文件上传数量限制 | _number \| string_ | - |

### Events

| 事件名                | 说明                   | 回调参数            |
| --------------------- | ---------------------- | ------------------- |
| onUpload              | 点击上传区域时触发     | _event: ITouchEvent_ |
| onChange              | 已上传图片列表改变后触发 | _file: UploadFile \| UploadFile[]_  |


### UploadFile
| 参数                  | 说明                   | 类型                 |
| --------------------  | ---------------------- | -------------------  |
| url                   | 下载地址               |    _string_          |
| type                  | 文件类型(包含image时显示图标,其他显示)  |   _string_           |
| name                  | 文件名称               | _string_             |
| removable             | 是否可删除             | _boolean_            |
| status                | 上传状态(uploading|failed|completed)          | _string_             |
| message               | uploading|failed 状态时文字提示    | _string_ |