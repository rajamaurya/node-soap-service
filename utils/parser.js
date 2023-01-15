const jsontoxml = require('jsontoxml');
const xml2js = require('xml2js').parseString
const { promisify } = require('util');
const { options } = require('../soap-apis/post_apis');
const promisifyString = promisify(xml2js);

module.exports = class Parser{

       static async convertJson2XML(jsonArgs){
        console.log("JSON : ", jsonArgs)
            const xml =  jsontoxml(jsonArgs, {html:true});
            console.log(xml)
            return xml;
       }
       static async convertXml2JSON(xmlArgs){
        const options = {trim: true, explicitArray: false, explicitRoot: false};
        return promisifyString(xmlArgs, options)
   }
}