  '=================================== 优先级A ==================================='

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

