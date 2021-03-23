// load the things we need
var express = require('express');
var app = express();
var grabzit = require('grabzit');

var http = require('http'),
    fs = require('fs'),
    url = require('url');
let ejs = require("ejs");
let path = require("path");
app.set('view engine', 'ejs');
var htmlDocx = require("html-docx-js")
var fs = require('fs');
function exportHTML(htmldata) {
    // var sourceHTML = header+document.getElementById("source-html").innerHTML+footer;

    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(htmldata);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'document.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}

var session = require('express-session')({
    secret: "@#$%^&*(LKJLKSALYUQWEMJQWN<MNQDKLJHSALKJDHAUISDIUDYSASHDAM<SD",
    saveUninitialized: false,
    resave: false
});
app.use(session);

var resdata = {
    firstName: "Vidya Sagar",
    lastName: "Mavuduru",
    address: "Burja Village",
    phoneNo: "132345",
    email: "vidya@gmail.com",
    links: ["Vidya Sagar", "No on is there"],
    professionalSummary: "Vidya is a nice person",
    skills: ["Flutter Developer", "Node js", "Python"],
    workHistory: [
        {
            "startDate": "2020-12-01",
            "currentlyWorkHere": "Burja",
            "enddate": "2020-12-01",
            "city": "srikakulam",
            "state": "Andhra Pradesh",
        },


    ],
    birthDate: "1999-24-08",
    education: [
        {
            "fieldOfStudy": "10 th ",
            "degree": "ssc",
            "graduationYear": 2014,
            "schoolName": "ZPH school",
            "schoolLocation": "Burja",
            "state": "ANDHRA PRADESH"
        }
    ],
    accomplishments: [
        "Done 2 internships",
        "Done 2 internships",
        "Done 2 internships",
    ],
    affiliations: [
        "no appliations",
        "no appliations",
    ],
    refrences: ["Linked In", "Facebook"],
    certifications: [
        "two of then",
        "two of then",
        "two of then",

    ],
    additionalInformation: [
        {
            "title": "The Achivement no 1",
            "description": "The Achivement no description",

        },
    ],
    summary: [
        "Nice on acctually",
        "Nice on acctually",

    ]
}

function timeout(ms) { //pass a time in milliseconds to this function
    return new Promise(resolve => setTimeout(resolve, ms));
};


pathval = path.join(__dirname, 'views/resumetemplates/', "resume1.ejs")
console.log(fs.existsSync("index.js"));

app.get('/', async (req, res) => {
    const docfullname = (Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 10)).toUpperCase() + ".docx";

    ejs.renderFile(pathval, resdata, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            var client = new grabzit("MTY4NTViYmUzOTliNGY3Yzk1Zjg1MWFjZWMzNDUwNTA=", "PyMYJDg/Wj8/QnE/Pz9YPz8/Pz8/RxxnPwBgPz8/Pz8=");
            client.html_to_docx(data);
            client.save_to(docfullname, function (error, id) {
                if (id == null) {
                    fs.readFile(docfullname, function (err, content) {
                        if (err) {
                            res.writeHead(400, { 'Content-type': 'text/html' })
                            console.log(err);
                            res.end("No such file");
                        } else {
                            //specify the content type in the response will be an image
                            res.writeHead(200, {
                                'Content-Type': "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                'Content-disposition': 'attachment;filename=' + docfullname,
                            });
                            res.end(content);
                        }
                    });
                    fs.unlink(docfullname, function (err) {
                        if (err) throw err;
                        console.log('file deleted');
                    });
                }
                if (error != null) {
                    throw error;
                }
            });
        }
    });
});

var pathejs = path.join(__dirname, 'views/resumetemplates/', "resume1.ejs")

app.get('/render', async (req, res) => {
    ejs.renderFile(pathejs, resdata, (err, data) => {
        res.render("resumetemplates/resume3.ejs", resdata)
    });
})




function grabzitapi() {
    var client = new grabzit("MTY4NTViYmUzOTliNGY3Yzk1Zjg1MWFjZWMzNDUwNTA=", "PyMYJDg/Wj8/QnE/Pz9YPz8/Pz8/RxxnPwBgPz8/Pz8=");
    client.html_to_docx(data);
    client.save_to("result.docx", function (error, id) {
        if (error != null) {
            throw error;
        }
    });

    res.download("result.docx");
}



app.get("/getimage", (req, res) => {
    var query = url.parse(req.url, true).query;
    pic = query.image;

    //read the image using fs and send the image content back in the response
    fs.readFile('./' + pic, function (err, content) {
        if (err) {
            res.writeHead(400, { 'Content-type': 'text/html' })
            console.log(err);
            res.end("No such image");
        } else {
            //specify the content type in the response will be an image
            res.writeHead(200, { 'Content-type': 'image/jpg' });
            res.end(content);
        }
    });
});
const PORT = process.env.PORT || 3000
app.listen(PORT)