
class EndpointUtil {
    
    
    static buildQueryStringFromOptions(options) {
        
        if(options === {} || options === null) {return;}

        Object.entries(options).reduce((a,[k,v]) => (v == null ? a : (a[k]=v, a)), {})
        var paramsQuery = Object.entries(options).map(([key, value]) => `${key}=${value}`).join('&');
        

        return paramsQuery;
        
    }
}

module.exports = EndpointUtil;