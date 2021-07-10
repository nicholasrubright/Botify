
class EndpointUtil {
    
    
    static buildQueryStringFromOptions(options) {
        // if(typeof options === 'string') {
        //     return encodeURIComponent(options)
        // }

        // for each attribute in options
        // key=value&key=value...
        // var q = [];
        // for(const [key, value] of Object.entries(options)) {
        //     q += `${key}=`
        // }
        var paramsQuery = Object.entries(options).map(([key, value]) => `${key}=${value}`).join('&');
        //console.log("params: " + encodeURIComponent(paramsQuery));
        // return encodeURIComponent(paramsQuery);
        return paramsQuery;
        // console.log("testing: " + JSON.stringify(options))
        // return "test";
        
    }
}

module.exports = EndpointUtil;