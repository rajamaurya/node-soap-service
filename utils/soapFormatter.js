const Parser = require('../utils/parser');
module.exports = class SOAPFormatter{

    static async convertJSONtoSOAPRequest(json){
        const soapBody = await Parser.convertJson2XML(json);
        console.log(soapBody)
        return `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns="http://tempuri.org/">
        <soap:Header/>
        <soap:Body>
            ${soapBody}
        </soap:Body>
        </soap:Envelope> `;
    }
}