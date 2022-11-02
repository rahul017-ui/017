const document =require('../models/xlsx and csv');
const path = require('path');
var fs = require('fs');

const getfile= async (req,res)=>{
    try {

        const doc = await document.find();
        console.log(doc);
        res.json(doc);
        
    
      } catch (error) {
        res.json({ message: "error" });
      }
}


const getf= async (req,res)=>{
   try{

    
    // filepath = path.join(__dirname , "uploadxlsxandcsv/");
    const directoryPath = fs.createReadStream( 'uploadxlsxandcsv/' );
    // const directoryPath = "uploadxlsxandcsv/";
    res.download(directoryPath , (err) => {
    // res.download(directoryPath,filepath, (err) => {
      console.log(directoryPath);
        if (err) {
          res.status(500).send({
            message: "Could not download the file. " + err,})}})
 }
   
   catch (error) {
    res.json({ message: "error" });
  }
}
const uploadfile = async (req,res) => {
    try {

        let file = await new document({
          

        });
       
        // if (req.file) {
        //     file.document= req.file.path
        // }
        //  if (file ==null) {
        //   return res.status(400).send({ message: "Please upload a file!"+err, });
        // }
       


        console.log(file);
        file.save();
       res.json({status:'fileuploaded'})

    } catch (err) {
        res.send({ message: err });
    }

}
module.exports={
    uploadfile,
    getfile,
    getf

}