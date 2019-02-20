
//添加实例属性
'不想污染全局作用域;在原型上定义他们在每个Vue实例中可用'
      
      Vue.prototype.$appName = 'My App';

'$是在Vue所有实例中都可用的属性'


'通过axios替换Vue Resource'
{
      设置Vue.prototype.$http = axios;
      new Vue({
            el: '#app',
            data: {
              users: []
            },
            created () {
              var vm = this
              this.$http
                .get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                  vm.users = response.data
                })
            }
          })
}

//表单校验



