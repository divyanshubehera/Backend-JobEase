const mongoose = require("mongoose");

const pdfDetailsSchema = new mongoose.Schema({
    title:String,
    pdf: String,
    icon: String,
},{collection:"PdfDetails"})

const pdfDetails = mongoose.model( "PdfDetails", pdfDetailsSchema );

module.exports = pdfDetails ;