  '=================================== 优先级A==================================='

  '1.组件名为多个单词；'
            Vue.component('todo-item',{
                  //.....
            })
            export default{
                  name:'TodoItem'
            }
'2.组件的data必须是一个函数'
            Vue.component('some-somp',{
                  data:function(){
                        return{
                              foo:'bar'
                        }
                  }
            })
            export default{
                  data(){
                        return{
                              foo:'bar'
                        }
                  }
            }
'3.Prop定义应该尽量详细'       
            props:{
                  status:{
                        type:String;
                        required:true;
                        validator =>{
                              return [
                                    'syncing',
                                    'synced',
                                    'version-conflict',
                                    'error'
                                    ].indexOf(value) !== -1
                              }
                        }

            }
 '4.为v-for设置键值'
            '<ul>\
                  <li> v-for="todo in todos" :key="todo.id"></li>{{todo.text}}\
            </ul>'
  '5.v-if 和 v-for 不要用在一起'   
  '好处:过滤后的列表只会在users数组发生相关变化时才被重新运行'

            computed: {//将其更换为在计算属性上遍历
                  function activUsers() {
                        return this.users.filter(function(user){
                              return user.isActive
                        })
                  }
            }
            '<ul>\
                   <li> v-for="todo in todos" :key="todo.id"></li>{{todo.text}}\
            </ul>'
            

            '<ul v-if="shouldShowUsers">\
                        <li> v-for="todo in todos" :key="todo.id"></li>{{todo.text}}\
            </ul>'
            '通过将v-if移动到容器元素,我们不会再对列表中每个用户检查shouldShowUsers\
            且不会再shouldShowUsers为否的时候运算v-for'
  '6.为组件样式设置作用域'   
  '7.私有属性名:在插件、混入等扩展中始终为自定义的私有属性使用 $_前缀。并附带一个命名空间来回避和其他作者的冲突'
            var myGreatMixin = {
                  methods: {
                        $_myGreatMixin_update:function(){
                              //...
                        }
                  },
            }

'=================================== 优先级B ==================================='
 '1.组件文件:只要有能够拼接文件的构建系统,就把每个组件单独分成文件'
            'components'
            '|- TodoList.js'
            '|- TodoItem.js'

            'components'
            '|- TodoList.Vue'
            '|- TodoItem.Vue'
'2.单文件组件的文件名应该始终单次大写开头'
            'components'
            '|- Mycomponent.Vue'
            '|- my-component.Vue'
'3.基础组件名：基础组就按可以以一个特定的前缀开头'
            'components'
            '|- BaseButton.Vue'
            '|- BaseTable.Vue'
            '|- BaseIcon.Vue'

            'components'
            '|- AppButton.Vue'
            '|- AppTable.Vue'
            '|- AppIcon.Vue'

            'components'
            '|- VButton.Vue'
            '|- VTable.Vue'
            '|- VIcon.Vue'
  '4.单例组件名:  拥有单个活跃实例的组件应该以the前缀命名，显示其唯一性' 
  
            'components'
            '|- TheHead.Vue'
            '|- TheSidebr.Vue'
'5.紧密耦合的组件名: 子组件应该以父组件名作为前缀'
            'components'
            '|- TodoList.Vue'
            '|- TodoListItem.Vue'
            '|- TodoListItemButton.Vue'
 '6.组件名中的 应以描述单次开头  修饰词结尾'
            ' components'
            '|- SearchButtonClear.vue'
            '|- SearchButtonRun.vue'
            '|- SearchInputQuery.vue'
            '|- SearchInputExcludeGlob.vue'
            '|- SettingsCheckboxTerms.vue'
            '|- SettingsCheckboxLaunchOnStartup.vue'
  '7.自闭合组件,单文件组件中大写  dom模板中 kebab-case'          
            // <!-- 在单文件组件、字符串模板和 JSX 中 -->
            '<MyComponent/>'
            // <!-- 在 DOM 模板中 -->
            '<my-component></my-component>'
   '8.在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case'  
   '9.多个特性的元素应该分多行撰写，每个特性一行。'
          '<img\
                  src="https://vuejs.org/images/logo.png"\
                  alt="Vue Logo"\
            >'

            '<MyComponent\
                  foo="a"\
                  bar="b"\
                  baz="c"\
            />'
    '10.组件模板应该只包含简单的表达式,复杂的表达式应该重构为计算属性或方法' ;
            // 在模板中
            {{normalizedFullName}}
            // 复杂表达式已经移入一个计算属性
            computed:{
                  normalizedFullName:function(){
                        return this.fullName.split(' ').map(function (word) {
                              return word[0].toUpperCase() + word.slice(1)
                            }).join(' ')
                  }
            }
     '11.复杂计算属性分割为尽可能多的简单属性'
            computed:{
                  basePrice =>{
                        return this.manufactureCost / (1 - this.profitMargin)
                  },
                  discount =>{
                        return this.basePrice * (this.discountPercent || 0)  
                  },
                  finalPrice => {
                        return this.basePrice - this.discount
                      }
            }
     '12.特性值应该始终带引号'

     '<input type="text">'
     '<AppSideBar :style="{ width:sidebarWidth+ px }"'

     '13.指令缩写   => 用：表示v-bind @表示 v-on'
            '<input\
                  v-on:input="onInput"\
                  v-on:focus="onFocus"\
            >'
'=================================== 优先级C==================================='

'1.组件实例 应有统一顺序'
            '1.1  副作用(el)'

            '1.2  全局感知(name parent)'

            '1.3  组件类型(functional)'

            '1.4  模板修改器(delimiters comments)'

            '1.5  模板依赖(components directives filters)'

            '1.6  组合(extends mixins)'

            '1.7  接口(inheritAttrs model props/propsData)'

            '1.8  本地状态(data computed)'

            '1.9  事件 watch 声明周期钩子 beforeCreate created beforeMount mounted beforeUpdate updated activated deactivated beforeDestroy destroyed'

            '1.10 非响应式属性 methods'

            '1.11  渲染  template/render  renderError'

            
            '2.单文件组件的顶级元素 <script>、<template> 和 <style>  标签的顺序保持一致'

                  // <!-- ComponentA.vue -->
                  // <script></script>
                  // <template></template>
                  // <style></style>