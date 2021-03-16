// load the things we need
var express = require('express');
var app = express();
let ejs = require("ejs");
let pdf = require("html-pdf");
let path = require("path");
app.set('view engine', 'ejs');
var unoconv = require('unoconv'); 
// const Blob = require("cross-blob");
var htmlDocx = require("html-docx-js")
var fs = require('fs');
function Export2Doc(element, filename = ''){


    var blob = new Blob(['\ufeff', html],{
        type: 'application/msword'
    });

    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html)
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+document.getElementById(element).innerHTML+postHtml;
    filename = filename?filename+'.doc': 'document.doc';

    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        downloadLink.href = url;

        downloadLink.download = filename;

        downloadLink.click();
    }

    document.body.removeChild(downloadLink);
}

function  Export2Pdf(htmldata,filename){
    let options = {
        "height": "11.25in",
        "width": "8.5in",
        "header": {
            "height": "20mm"
        },
        "footer": {
            "height": "20mm",
        },
    };
    pdf.create(htmldata, options).toFile(filename, function (err, htmldata) {
        // console.log(data);
        if (err) {
            res.send(err);
        } else {
            res.send("File created successfully");
        }
    });

}

var resdata = {
    firstName : "Vidya Sagar",
    lastName : "Mavuduru",
    address : "Burja Village",
    phoneNo : "132345",
    email : "vidya@gmail.com",
    links : ["Vidya Sagar","No on is there"],
    professionalSummary : "Vidya is a nice person",
    skills : ["Flutter Developer","Node js","Python"],
    workHistory : [
        {
        "startDate":"2020-12-01",
        "currentlyWorkHere":"Burja",
        "enddate":"2020-12-01",
        "city" : "srikakulam",
        "state":"Andhra Pradesh",
    },

  
],
birthDate : "1999-24-08",
    education : [
        {
            "fieldOfStudy":"10 th ",
            "degree" : "ssc",
            "graduationYear":2014,
            "schoolName" : "ZPH school",
            "schoolLocation" : "Burja",
            "state": "ANDHRA PRADESH"
        }
    ],
    accomplishments : [
        "Done 2 internships",
        "Done 2 internships",
        "Done 2 internships",
    ],
    affiliations : [
        "no appliations",
        "no appliations",
    ],
    refrences : ["Linked In","Facebook"],
    certifications : [
        "two of then",
        "two of then",
        "two of then",

    ],
    additionalInformation : [
        {
            "title" : "The Achivement no 1",
            "description" : "The Achivement no description",
            
        },
    ],
    summary : [
        "Nice on acctually",
        "Nice on acctually",

    ]
}

path  =  path.join(__dirname, 'views/resumetemplates/', "resume3.ejs")

app.get('/',async (req, res) => {
    ejs.renderFile(path,resdata, (err, data) => {
        if (err) {
              res.send(err);
        } else {           
            // Export2Doc("exportContent","vis")
            var converted = htmlDocx.asBlob(data);
            fs.writeFile("vidya.docx", converted, function(err) {
                if (err) throw err;
            });
            res.render("resumetemplates/resume3.ejs",resdata)
            // saveAs(converted, 'test.docx');
        }
    });
});

const PORT = process.env.PORT || 3000

app.listen(PORT,(req,res)=>{
    console.log(`Listening on ${ PORT }`);

});