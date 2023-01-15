const axios = require("axios");
const Parser = require("../utils/parser");
const SOAPFormatter = require("../utils/soapFormatter");
const url = "http://www.dneonline.com/calculator.asmx";
module.exports =  class RemoteAPI{

    static async multiply(param1, param2){
        try{
            const payload = {
                Multiply: {
                    intA: param1,
                    intB: param2
                }   
            }
            console.log("PAYLOAD: ", payload)
            const headers = {
                headers: {
                    "Content-Type": "text/xml;charset=utf-8",
                    SOAPAction :"http://tempuri.org/Multiply"
                    
                }
            }
            const soapBody = await SOAPFormatter.convertJSONtoSOAPRequest(payload);
            const result = await axios.post(url, soapBody, headers);
            result = await Parser.convertJson2XML(result);
            return result;
        }catch(error){
            console.log(error);
        }
        
    } 
}