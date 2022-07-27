.env.development是工作环境
.env.production是生产环境

## export 与 export default的区别

export与export default均可用于导出常量、函数、文件、模块等
在一个文件或模块中，export、import可以有多个，export default仅有一个
通过export方式导出，在导入时要加{ }，export default则不需要，并可以起任意名称

1. 输出单个值，使用export default
2. 输出多个值，使用export
3. export default与普通的export不要同时使用

## v-model
 v-model 指令在表单及元素上创建双向数据绑定

## promise
promise其实是一个构造函数

## props
props 是我们在不同组件之间传递变量和其他信息的方式。
props 通过组件树传递给后代（不是向下的方式传递）
props 是只读，不能修改的