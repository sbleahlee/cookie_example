const regiCookieInfoHtml = `
    <form action="/userinfo">
        <div class="form-group">
            <label for="uname">Name:</label><br>
            <input  class="form-control" type="text" id="uname" name="uname" value=""><br>
            <label for="youtube_addr">Youtue:</label><br>
            <input  class="form-control" type="text" id="youtube_addr" name="youtube_addr" value=""><br><br>
            <label for="upw">Password:</label><br>
            <input  class="form-control" type="text" id="upw" name="upw" value=""><br>
            <input  class="btn btn-default" type="submit" value="Submit">
        </div>
    </form> 
    `
    const removeCookie = `
    <form action="/removecookie">
        <input  class="form-control" type="hidden" id="uname" name="uname" value="#name#"><br>
        <input  class="form-control" type="hidden" id="upw" name="upw" value="#pw#"><br>
        <input class="btn btn-warning" type="submit" value="remove cookie">
    </form> 
    `

    const checkUser = `
    <form action="/check">
        <button class = "btn btn-primary" type = "button" onclick = "checkuser()">Check User </button>
    </form>
    `   

    const youtubeAddr = `
        <iframe class="embed-responsive-item" src="#youtubeAddr#" allowfullscreen></iframe>
    `

    function checkuser() {
        alert('Username :\t #name# \nPassword : \t#pw#');
    };

    
 
    $(document).ready(function(){
        const name = $("#user").text(); 

        if (name == 'guest') {
            $("#context").html(regiCookieInfoHtml);

        }
        else {
            $("#youtube_context").html(youtubeAddr);
            $("#context").html(removeCookie);
            $("#context").append(checkUser);        
        }
    });