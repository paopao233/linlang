    $(document).ready(function() {
        $("#submit-bt").click(
            function() {
                var username = $('input[name="username"]').val();
                var password = $('input[name="password"]').val();
                if (username == "") {
                    alert("用户名不能为空")
                    return;
                }
                if (password == "") {
                    alert("密码不能为空")
                    return;
                }
                if (username == "admin" && password == "admin") {
                    alert("登录成功~")
                    window.location.href = ("./cart.html")
                    window.event.returnValue = false;

                } else {
                    alert("账户或者密码错误，请联系管理员~")
                    return;
                }
            }
        )
    })