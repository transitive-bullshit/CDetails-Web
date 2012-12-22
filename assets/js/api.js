/*! api.js
 */

CDetailsAPI = Class.extend({
    'init' : function() {
        // temporary DEBUG
        var login      = "landon";
        var password   = "password";
        var expiration = "1365797185316";
        
        var token = this._get_hash(password + "cdetails.com");
        var hash  = this._get_hash(token + expiration);
        
        this.auth = {
            auth_login      : login, 
            auth_expiration : expiration, 
            auth_hash       : hash
        };
    }, 
    
    'snapshot' : function() {
        return this._handle_auth_get("/snapshot", { });
    }, 
    
    'poll' : function() {
        return this._handle_auth_get("/poll", {
            'start'   : '0', 
            'timeout' : '0', 
            'ignore'  : '', 
        });
    }, 
    
    'self' : function() {
        return this._handle_auth_get("/self", { });
    }, 
    
    '_handle_auth_get' : function(path, params) {
        for (var k in this.auth) {
            params[k] = this.auth[k];
        }
        
        return this._handle_get(path, params);
    }, 
    
    '_handle_get' : function(path, params) {
        return this._ajax("GET", path, params);
    }, 
    
    '_handle_post' : function(path, params) {
        return this._ajax("POST", path, params);
    }, 
    
    '_ajax' : function(type, path, params) {
        var url = "https://cdetails.com" + path;
        
        log("API - " + type + ": " + url, this);
        log(params, this);
        
        return $.ajax({
            type        : type, 
            url         : url, 
            data        : params, 
        }).pipe(function (data) {
            if (typeof(data) === 'string') {
                return $.parseJSON(data);
            } else {
                return data;
            }
        });
    }, 
    
    '_get_hash' : function(s) {
        return (new jsSHA(s, "TEXT")).getHash("SHA-512", "HEX");
    }, 
});

