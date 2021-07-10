
class EndpointUtil {
    
    
    static buildQueryStringFromOptions(options) {
        
        if(options === {} || options === null) {return;}

        var paramsQuery = Object.entries(options).map(([key, value]) => `${key}=${value}`).join('&');
        //console.log("params: " + encodeURIComponent(paramsQuery));
        // return encodeURIComponent(paramsQuery);
        return paramsQuery;
        // console.log("testing: " + JSON.stringify(options))
        // return "test";
        
    }
}

module.exports = EndpointUtil;