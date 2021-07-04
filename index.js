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
var pdf = require('html-pdf');

app.engine('html', require('ejs').renderFile);
var http = require('http'),
    fs = require('fs'),
    url = require('url');
let ejs = require("ejs");
let path = require("path");
app.set('view engine', 'ejs');
const HTMLtoDOCX = require('html-to-docx');
const filePath = './' + (Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 10)).toUpperCase() + ".docx";
var worldMapData = require('city-state-country');


var fs = require('fs');
const { error } = require('console');
const html_Docx = require('html-docx-js');

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
    listOfContent: ["./personal", "./education", "./workhistory", "./additionaldetails", "./objective", "./skills", "./summary",],
    firstName: "First Name",
    lastName: "Last Name",
    address: "ries of prompts where you can make some ",
    phoneNo: "Phone no",
    email: "Email Address",
    links: ["Social Media Links", "Professional Links"],
    professionalSummary: "This will take you through a series of prompts where you can make some changes to your MySQL installation’s security options. The first prompt will ask whether you’d like to set up the Validate Password Plugin, which can be used to test the strength of your MySQL password. Regardless of your choice, the next prompt will be to set a password for the MySQL root user. Enter and then confirm a secure password of your choice.\ From there, you can press Y and then ENTER to accept the defaults for all the subsequent questions. This will remove some anonymous users and the test database, disable remote root logins, and load these new rules so that MySQL immediately respects the changes you have made.   To initialize the MySQL data directory, you would use mysql_install_db for versions before 5.7.6, and mysqld --initialize for 5.7.6 and later. However, if you installed MySQL from the Debian distribution, as described in Step 1",
    skills: ["Skills 2lslfcsbfvjsb", "Skills 2lslfcsbfvjsb", "Skills 2lslfcsbfvjsb", "Skills 2lslfcsbfvjsb", "Skills 2lslfcsbfvjsb", "Skills 2lslfcsbfvjsb",],
    city: "City",
    state: "state",
    zipCode: "Zip Code",
    workHistory: [
        {
            "startDate": parseInt('1562005800000', 10),
            "jobTitle": "jobtitile",
            "endDate": parseInt('1562005800000', 10),
            "employer": "test Employee",
            "currentlyWorkHere": "Work Details",
            "city": "srikakulam",
            "state": "Andhra Pradesh",
            "country": "INdia",
            "responsibility": ["Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.Created and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Work Responsibilities"],
            "environment": ["dart", "java", "python"]
        },
        {
            "startDate": parseInt('1562005800000', 10),
            "jobTitle": "jobtitile",
            "endDate": parseInt('1562005800000', 10),
            "employer": "test Employee",
            "currentlyWorkHere": "Work Details",
            "city": "srikakulam",
            "state": "Andhra Pradesh",
            "country": "INdia",
            "responsibility": ["Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.Created and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Work Responsibilities"],
            "environment": ["dart", "java", "python"]
        }, {
            "startDate": parseInt('1562005800000', 10),
            "jobTitle": "jobtitile",
            "endDate": parseInt('1562005800000', 10),
            "employer": "test Employee",
            "currentlyWorkHere": "Work Details",
            "city": "srikakulam",
            "state": "Andhra Pradesh",
            "country": "INdia",
            "responsibility": ["Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.Created and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Work Responsibilities"],
            "environment": ["dart", "java", "python"]
        }, {
            "startDate": parseInt('1562005800000', 10),
            "jobTitle": "jobtitile",
            "endDate": parseInt('1562005800000', 10),
            "employer": "test Employee",
            "currentlyWorkHere": "Work Details",
            "city": "srikakulam",
            "state": "Andhra Pradesh",
            "country": "INdia",
            "responsibility": ["Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.Created and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and ReinsuranceCreated and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Designed and developed Stimulations using use cases, activity diagrams, sequence diagrams,using UML.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Created and developed new functionality in the application to meet home loan and Property & Casualty needs and Reinsurance.", "Work Responsibilities"],
            "environment": ["dart", "java", "python"]
        },

    ],
    objectives: [
        "This will take you through a series of prompts where you can make some changes to your MySQL installation’s security options. The first prompt will ask whether you’d like to set up the Validate Password Plugin, which can be used to test the strength of your MySQL password. Regardless of your choice, the next prompt will be to set a password for the MySQL root user. Enter and then confirm a secure password of your choice.\ From there, you can press Y and then ENTER to accept the defaults for all the subsequent questions. This will remove some anonymous users and the test database, disable remote root logins, and load these new rules so that MySQL immediately respects the changes you have made.   To initialize the MySQL data directory, you would use mysql_install_db for versions before 5.7.6, and mysqld --initialize for 5.7.6 and later. However, if you installed MySQL from the Debian distribution, as described in Step 1, the data directory was initialized automatically; you don’t have to do anything. If you try running the command anyway, you’ll see the following error:This will take you through a series of prompts where you can make some changes to your MySQL installation’s security options. The first prompt will ask whether you’d like to set up the Validate Password Plugin, which can be used to test the strength of your MySQL password. Regardless of your choice, the next prompt will be to set a password for the MySQL root user. Enter and then confirm a secure password of your choice.From there, you can press Y and then ENTER to accept the defaults for all the subsequent questions. This will remove some anonymous users and the test database, disable remote root logins, and load these new rules so that MySQL immediately respects the changes you have made.   To initialize the MySQL data directory, you would use mysql_install_db for versions before 5.7.6, and mysqld --initialize for 5.7.6 and later. However, if you installed MySQL from the Debian distribution, as described in Step 1, the data directory was initialized automatically; you don’t have to do anything. If you try running the command anyway, you’ll see the following error:",
        "This will take you through a series of prompts where you can make some changes to your MySQL installation’s security options. The first prompt will ask whether you’d like to set up the Validate Password Plugin, which can be used to test the strength of your MySQL password. Regardless of your choice, the next prompt will be to set a password for the MySQL root user. Enter and then confirm a secure password of your choice.\ From there, you can press Y and then ENTER to accept the defaults for all the subsequent questions. This will remove some anonymous users and the test database, disable remote root logins, and load these new rules so that MySQL immediately respects the changes you have made.   To initialize the MySQL data directory, you would use mysql_install_db for versions before 5.7.6, and mysqld --initialize for 5.7.6 and later. However, if you installed MySQL from the Debian distribution, as described in Step 1, the data directory was initialized automatically; you don’t have to do anything. If you try running the command anyway, you’ll see the following error:",
        "This will take you through a series of prompts where you can make some changFrom there, you can press Y and then ENTER to accept the defaults for all the subsequent questions. This will remove some anonymous users and the test database, disable remote root logins, and load these new rules so that MySQL immediately respects the changes you have made.   To initialize the MySQL data directory, you would use mysql_install_db for versions before 5.7.6, and mysqld --initialize for 5.7.6 and later. However, if you installed MySQL from the Debian distribution, as described in Step 1, the data directory was initialized automatically; you don’t have to do anything. If you try running the command anyway, you’ll see the following error:",


    ],
    additionalInformation: [{
        title: "title 1",
        description: "description"
    }, {
        title: "title 2",
        description: "descriptions"
    },],
    additionalDetails: [{
        key: "title 1",
        value: "description"
    }, {
        key: "title 2",
        value: "descriptions nnsnns"
    },],
    birthDate: "1999-24-08",
    education: [
        {
            "fieldOfStudy": "10 th ",
            "degree": "ssc",
            "graduationYear": 2014,
            "schoolName": "School Name",
            "schoolLocation": "School Location",
            "state": "State Details"
        },
        {
            "fieldOfStudy": "10 th ",
            "degree": "ssc",
            "graduationYear": 2014,
            "schoolName": "School Name",
            "schoolLocation": "School Location",
            "state": "State Details"
        },
        {
            "fieldOfStudy": "10 th ",
            "degree": "ssc",
            "graduationYear": 2014,
            "schoolName": "School Name",
            "schoolLocation": "School Location",
            "state": "State Details"
        }, {
            "fieldOfStudy": "10 th ",
            "degree": "ssc",
            "graduationYear": 2014,
            "schoolName": "School Name",
            "schoolLocation": "School Location",
            "state": "State Details"
        }, {
            "fieldOfStudy": "10 th ",
            "degree": "ssc",
            "graduationYear": 2014,
            "schoolName": "School Name",
            "schoolLocation": "School Location",
            "state": "State Details"
        }, {
            "fieldOfStudy": "10 th ",
            "degree": "ssc",
            "graduationYear": 2014,
            "schoolName": "School Name",
            "schoolLocation": "School Location",
            "state": "State Details"
        },
    ],
    accomplishments: ["This will take you through a series of prompts where you can make some changes to your MySQL installation’s ",
        "This will take you through a series of prompts where you can make some changes to your MySQL installation’s  2",
    ],
    affiliations: [
        "This will take you through a series of prompts where you can make some changes to your MySQL installation’s ",
        "This will take you through a series of prompts where you can make some changes to your MySQL installation’s  2",
    ],
    refrences: [{
        "name": "Reference Details",
        "position": "position",
        "email": "@gmail",
        "phone": "1234567989"
    }, {
        "name": "Reference Details",
        "position": "position",
        "email": "@gmail",
        "phone": "1234567989"
    }, {
        "name": "Reference Details",
        "position": "position",
        "email": "@gmail",
        "phone": "1234567989"
    }, {
        "name": "Reference Details",
        "position": "position",
        "email": "@gmail",
        "phone": "1234567989"
    }, {
        "name": "Reference Details",
        "position": "position",
        "email": "@gmail",
        "phone": "1234567989"
    },],
    certifications: [
        "Certifications 1",
        "Certifications 2",
        "Certifications 3",
        "Certifications 1",
        "Certifications 2",
        "Certifications 3", "Certifications 1",
        "Certifications 2",
        "Certifications 3", "Certifications 1",
        "Certifications 2",
        "Certifications 3", "Certifications 1",
        "Certifications 2",
        "Certifications 3",
    ],
    summary: [
        "Nice on acctually",
        "Nice on acctually",

    ],
    namevalue: "NOthing"
}
resdata.valie = ["bsbfs", "bbsfb"];
// console.log(resdata);
// resdata.set()

function timeout(ms) { //pass a time in milliseconds to this function
    return new Promise(resolve => setTimeout(resolve, ms));
};

// app.get('/testWord'), async (req, res) => {
//     const docx = htmlDocx.asBlob(html);
//     res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//     res.setHeader('Content-Disposition', `attachment; filename=${ sluggify(name) }.docx`);
//     res.setHeader('Content-Length', docx.length);
//     res.send(docx);
// };

function grabzitapi(htmldata, response) {
    // var client = new grabzit("MTY4NTViYmUzOTliNGY3Yzk1Zjg1MWFjZWMzNDUwNTA=", "PyMYJDg/Wj8/QnE/Pz9YPz8/Pz8/RxxnPwBgPz8/Pz8=");
    // var client = new grabzit("OGMyYzcwMzViNmZlNDg2ZGI0MmE1Y2ZmZDI2NDY0ODU=", "WVgsZT8/XXs/PwQ/Pz8KfV5SPz8zEz95Pz8/LVg/Pz8=");
    // var client = new grabzit("MTAxOTIzZjU2MDkxNGEwZWFkNTBlZjI3NjU3MjExYWQ=", "Pz8zPz8BDD8/AgQ1P2BrVT95H1NZf0o/b00/Pz8/Pz8=");
    var client = new grabzit("MDUxM2U1ZjZhYzkxNGY0OWFmYjNjNWM0OGFjZGMyOWM=", "Pz8/P05OOz8/Pz8IPxA/Zz9UPz88LGY/IiA/FD8rJT8=");

    // var client = new grabzit("MDUxM2U1ZjZhYzkxNGY0OWFmYjNjNWM0OGFjZGMyOWM=", "Pz8/P05OOz8/Pz8IPxA/Zz9UPz88LGY/IiA/FD8rJT8=");
    client.html_to_docx(htmldata);
    client.save_to("result.docx", function (error, id) {
        if (error != null) {
            throw error;
        }
    });

    response.download("result.docx");
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
async function htmldocx(htmlString) {
    console.log(filePath);

    const fileBuffer = await HTMLtoDOCX(htmlString, null, {
        // table: { row: { cantSplit: true } },
        // footer: true,
        // pageNumber: true,

    });
    fs.writeFile(filePath, fileBuffer, (error) => {
        if (error) {
            console.log('Docx file creation failed');
            return;
        }
        console.log('Docx file created successfully');
    });
};
pathval = path.join(__dirname, 'views/resumetemplates/', "reordarable1.ejs")
// console.log(fs.existsSync("index.js"));
app.use("/public", express.static(__dirname + "/public/"));
app.get('/', async (req, res) => {

    ejs.renderFile(pathval, resdata, (err, data) => {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            const filePath = './' + "pdfstore/" + (Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 10)).toUpperCase() + ".pdf";
            pdf.create(data, {
                "format": "Tabloid",
                "border": {
                    "top": "0",
                    "right": "0",
                    "bottom": "0.3in",
                    "left": "0"
                },
                "header": {
                    "height": "0.3in",
                },
            }).toFile(filePath, (err, out) => {
                console.log(out);
                fs.readFile(out.filename, function (err, content) {
                    if (err) {
                        res.writeHead(400, { 'Content-type': 'text/html' })
                        console.log(err);
                        res.end("No such file");
                    } else {
                        //specify the content type in the response will be an image
                        res.writeHead(200, {
                            'Content-disposition': 'attachment;filename=' + filePath,
                        });
                        res.end(content);
                    }
                });
                fs.unlink(out.filename, function (err) {
                    if (err) throw err;
                    console.log('file deleted');
                });
            });
        }
    });
});

var pathejs = path.join(__dirname, 'views/resumetemplates/', "resume8.ejs")
var pathejstest = path.join(__dirname, 'views/resumeTempTest/2/', "resume.ejs")

// var pathhtml = path.join(__dirname, 'views/resumetemplates/', "test.html")

app.get('/testEjs', (req, res) => {
    ejs.renderFile(pathejstest, resdata, (err, htmldata) => {
        if (err) {
            console.log(err);
        }
        res.send(htmldata);
    })
});
app.get('/render', (req, res) => {
    ejs.renderFile(pathval, resdata, (err, htmldata) => {
        // htmldocx(htmldata);
        res.send(htmldata);
    });
});

// country city state


app.get("/countries", (req, res) => {
    res.json(worldMapData.getAllCountries());
})
app.get("/states", (req, res) => {
    var query = url.parse(req.url, true).query;
    country = query.country;
    const statesList = worldMapData.getAllStatesFromCountry(country);
    res.json(statesList);
})
app.get("/cities", (req, res) => {
    var query = url.parse(req.url, true).query;
    state = query.state;
    const citiesList = worldMapData.getAllCitiesFromState(state);
    res.json(citiesList);
})
const PORT = process.env.PORT || 3000
app.listen(PORT)