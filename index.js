// load the things we need
var express = require('express');
var app = express();
var grabzit = require('grabzit');
var nodemailer = require('nodemailer');
var HTMLParser = require('node-html-parser');
var bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
var http = require('http'),
    fs = require('fs'),
    url = require('url');
let ejs = require("ejs");
let path = require("path");
app.set('view engine', 'ejs');
const HTMLtoDOCX = require('html-to-docx');
const filePath = './example.docx';

var fs = require('fs');


function convertWord(htmlString){
     // // var client = new grabzit("OGMyYzcwMzViNmZlNDg2ZGI0MmE1Y2ZmZDI2NDY0ODU=", "WVgsZT8/XXs/PwQ/Pz8KfV5SPz8zEz95Pz8/LVg/Pz8=");
            // // client.html_to_docx(data);
            // // client.save_to(docfullname, function (error, id) {
            // //     if (id == null) {
            // //         fs.readFile(docfullname, function (err, content) {
            // //             if (err) {
            // //                 res.writeHead(400, { 'Content-type': 'text/html' })
            // //                 console.log(err);
            // //                 res.end("No such file");
            // //             } else {
            // //                 //specify the content type in the response will be an image
            // //                 res.writeHead(200, {
            // //                     'Content-Type': "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            // //                     'Content-disposition': 'attachment;filename=' + docfullname,
            // //                 });
            // //                 res.end(content);
            // //             }
            // //         });
            // //         fs.unlink(docfullname, function (err) {
            // //             if (err) throw err;
            // //             console.log('file deleted');
            // //         });
            // //     }
            // //     if (error != null) {
            // //         throw error;
            // //     }
            // });
}


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

app.use(express.static('./'));
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
            "responsibility": ["this was my res"],
            "environment": ["environment", "java", "python"]
        },


    ],
    objectives: [
        "object 1",
        "object 2",

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
    refrences: [{
        "name": "vidya",
        "position": "dev",
        "email": "@gmail",
        "phone": "1234567989"
    }],
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

    ],
    namevalue: "vidya"
}

function timeout(ms) { //pass a time in milliseconds to this function
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function htmldocx(htmlString) {
    const fileBuffer = await HTMLtoDOCX(htmlString, null);

    fs.writeFile(filePath, fileBuffer, (error) => {
        if (error) {
            console.log('Docx file creation failed');
            return;
        }
        console.log('Docx file created successfully');
    });
};
pathval = path.join(__dirname, 'views/resumetemplates/', "resume3.ejs")
console.log(fs.existsSync("index.js"));

app.get('/', async (req, res) => {
    const docfullname = (Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 10)).toUpperCase() + ".docx";

    ejs.renderFile(pathval, resdata, (err, data) => {
        if (err) {
            res.send(err);
            console.log(err);
        } else {

            htmldocx(data.toString());
            res.send(data.toString());
           
           
        }
    });
});

var pathejs = path.join(__dirname, 'views/resumetemplates/', "resume4.ejs")
var pathhtml = path.join(__dirname, 'views/resumetemplates/', "index.html")

app.get('/render', (req, res) => {
    ejs.renderFile(pathejs, resdata, (err, htmldata) => {
        // fs.writeFile("test.html",htmldata,(err)=>{
        //     // console.log(err);
        //     if (err==null){
        //         fs.readFile(__dirname + '/test.html', 'utf8', function(err, html){
        //             console.log(html);
        //             htmldocx(html.toString());

        //             res.writeHead(200, {'Content-Type': 'text/html'});
        //             res.write(html.toString());
        //         });
        //     }
        // });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(htmldata.toString());

        // res.sendFile('index.html', { root: app.get('views') },);
        // res.render(pathejs, resdata);
    })
});



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