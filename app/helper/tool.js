

export function getDefaultParams(payload={},queryString={},isAuthRequired=false){
    let params = {...payload,...queryString}
    if(isAuthRequired){
        params.headers = {
            limitKey : localStorage.getItem('limitKey')
        }
    }
    return params
}