# Vue.js 组件编码规范

## 目标

1. 导出一个清晰、组织有序的组件，使得代码易于阅读和理解，利于开发团队其他成员维护。
2. 提高复用性，提升未来的开发效率。

## 目录

- [命名规范](#命名规范)
- [template 书写风格](#template-书写风格)
- [Prop定义](#prop定义)
- [组件结构](#组件结构)

## 命名规范

1. 组件名为多个单词(根组件 App 除外)
    - `components/` 目录下 组件名为 `prefixCls-comp`，如 `emic-icon`
    - `pages/` 目录下 组件名为 `page-comp`，如 `page-icon`
2. 样式名语义化，多单词样式名使用**连字符**分隔单词，如 `.eimc-icon`
3. 样式命名使用命名空间
    ``` scss
      .#{$prefixCls}{
        &-button{
          &-success{}
          &-error{}
        }
      }
    ```
4. 事件命名语义化，多单词样式名使用**小驼峰**，如  `uploadSuccess`

## template 书写风格

1. 指令缩写 (用 : 表示 v-bind: 和用 @ 表示 v-on:)，避免混用。
2. v-for 总是用 key 配合
3. 多个props的元素应该分多行撰写，每个特性一行。

``` js
  <MyComponent
    bar="b"
    baz="c"
    foo="a"
  />
```

## Prop定义

1. 组件 props 原子化
   尽量只使用 JavaScript 原始类型（字符串、数字、布尔值）和函数。尽量避免复杂的对象。
2. props 定义按字母顺序
3. prop 定义应该尽量详细，至少需要指定其类型。

``` js
  props: {
    status: {
      type: String,                    //  确定类型
      required: true,                  //  确定是否必要
      validator: function (value) {    // 校验
        return [
          'success',
          'error'
        ].indexOf(value) !== -1
      },
      default: 'success'                 // 默认值
    }
  }
```

## 组件结构

``` bash
<template>
  <div class="emic-icon">
    <!-- ... -->
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'emic-icon',
    // 使用组件 mixins 共享通用功能
    mixins: [],
    // 组成新的组件
    extends: {},
    // 组件属性、变量
    props: {
      bar: {},
      foo: {},
      fooBar: {},
    },
    // 变量
    data() {},
    computed: {},
    // 使用其它组件
    components: {},
    // 方法
    watch: {},
    methods: {},
    // 生命周期函数
    beforeCreate() {},
    mounted() {}
  };
</script>
```