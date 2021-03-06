function signUpReq(user){
    return new Promise ( function(resolve, reject) {
        function reqListener(){
            var data = this.responseText;

            resolve(data);
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', reqListener);
        oReq.open('POST', '/api/users/signup', true);
        oReq.setRequestHeader('Content-Type', 'application/json');
        oReq.send(JSON.stringify(user));
    });
}

module.exports = signUpReq;