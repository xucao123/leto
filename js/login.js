$(function(){
    // 1.表单校验功能
    // 引包+初始化
    $('#form').bootstrapValidator({
        //配置校验图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },
        //   配置需要校验的字段
        fields:{
            //字段1：
              username:{
                  validators:{
                      notEmpty:{
                          message:'用户名不能为空',
                      },
                      stringLength:{
                          min:2,
                          max:6,
                          message:'用户名必须在2-6位之间',
                      }
                  }
              },
              //字段2：
              password:{
                  validators:{
                      notEmpty:{
                          message:'密码不能为空',
                      },
                      stringLength:{
                          min:6,
                          max:20,
                          message:'密码必须在6-20位之间',
                      }
                  }
              },
          }
       
    })
    // 2.登录请求的功能（登录验证）
    //表单中的submit按钮默认有提交和跳转的功能，并且在插件中默认当表单检验失败时阻止了他的默认功能，只有当表单校验成功的时候才会提交，插件中自定义了一个表单校验成功的事件，我们需要在表单校验成功事件中阻止默认的提交功能，自己用ajax进行提交
    $("#form").on('success.form.bv', function (e) {
        //阻止默认的提交
        e.preventDefault();
        //使用ajax提交
        $.ajax({
            url:'/employee/employeeLogin',
            type:'post',
            // 表单序列化上传数据
            data:$('#form').serialize(),
            dataType:'json',
            success:function(res){
                console.log(res);
                if(res.success){
                    // 登录验证成功跳转首页
                    location.href='index.html'
                }
            }
        })
        
    });
    // 3.表单重置的功能：利用插件获取validator实例再去调用对应的方法
    //点击重置按钮，表单内容和校验状态都进行重置
    //我们的reset类型按钮，默认本身就会重置表单的内容，实际上我们只需要再去重置校验状态即可
    $('[type="reset"]').on('click',function(){
        var validator = $("#form").data('bootstrapValidator');  //获取表单校验实例
        validator.resetForm();//重置表单，并且会隐藏所有的错误提示和图标：参数不写或者false就是只重置校验状态，true是指重置校验状态和表单内容
    })
   

})

