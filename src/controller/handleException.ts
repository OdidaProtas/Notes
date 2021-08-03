const handleException  = async(promise : Promise<any>)=>{
    try{
        return [await promise, null]
    }catch(e){
        return [null, e]
    }
}

export default handleException;