//<script>
    const regiCookieInfoHtml = `
    <form action="/userinfo">
        <div class="form-group">
            <label for="uname">Name:</label>
            <input  class="form-control" type="text" id="uname" name="uname" value="">
            <label for="youtube_addr">Youtube:</label>
            <input  class="form-control" type="text" id="youtube_addr" name="youtube_addr" value="">
            <label for="upw">Password:</label>
            <input  class="form-control" type="text" id="upw" name="upw" value="">
            <input  class="btn btn-default" type="submit" value="Submit">
        </div>
    </form> 
    `;

    const removeCookie = `
    <form action="/removecookie">
        <div class = "delCookie">
            <input  class="form-control" type="hidden" id="uname" name="uname" value="#name#">
            <input  class="form-control" type="hidden" id="upw" name="upw" value="#pw#">
            <input class="btn btn-warning" type="submit" value="remove cookie">
        </div>
    </form> 
    `;


    const regMem = `
    <form action="/register">
        <div class = "regMem">
            <button class="btn btn-primary" type="button" onclick = "">Create Account</button>
        </div>
    </form> 
    `;

    const delMem = `
    <form action="/delete">
        <div class = "delMem">
            <input  class="form-control" type="hidden" id="uname" name="uname" value="#name#">
            <input  class="form-control" type="hidden" id="upw" name="upw" value="#pw#">
            <button class="btn btn-light" id ="delbtn" type = "button">Delete Account</button>
        </div>
    </form> 
    `;

    const checkUser = `
    <form action="/check">
        <div class = "checkUser">
            <button class = "btn btn-info" type = "button" onclick = "checkuser()">Check User</button>
        </div>
    </form>
    `;  

    const youtubeAddr = `
        <iframe class="embed-responsive-item" src="#youtubeAddr#" allowfullscreen></iframe>
    `;

    function checkuser() {
        alert('Username :\t #name# \nPassword : \t#pw#');
    };

    
    // $("delbtn").off().on("click", (function(){
    //     console.log('클릭이벤트');
    //     alert('' + document.getElementByid('uname').value); 
    // }));

    
    $(document).ready(function(){
        $(".btn_area").empty();
        $("#context").empty();
        $("#youtube_context").empty();
        
        const name = $("#user").text();
        console.log(name);
        if (name == 'guest') {
            $(".btn_area").html(regMem);
            $(".btn_area").append(delMem);
            $("#context").html(regiCookieInfoHtml);
        }
        else {
            $(".btn_area").html(removeCookie);
            $(".btn_area").append(checkUser);
            $(".btn_area").append(delMem);
            $("#youtube_context").html(youtubeAddr);
        }
        });