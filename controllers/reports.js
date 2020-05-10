let DUMMY_DATA = [
    {
        user_id: 1,
        date: new Date(),
        latitude: 52.5103812,
        longtitude: 13.505267,
        symtoms: 'husten',
        precondition: 0,
        infected_area: 0,
        infected_person: 0,
        details: 'My thoughts 1',
        status: 'sent'
    },
    {
        user_id: 2,
        date: new Date(),
        latitude: 52.6330641,
        longtitude: 13.2040206,
        symtoms: 'fieber, husten',
        precondition: 1,
        infected_area: 1,
        infected_person: 0,
        details: 'My thoughts 2',
        status: 'processed'
    },
    {
        user_id: 1,
        date: new Date(),
        latitude: 52.4929199,
        longtitude: 13.5316011,
        symtoms: "fieber",
        precondition: 1,
        infected_area: 0,
        infected_person: 0,
        details: "No comment",
        status: "done"
    }
];
const moongoose = require('../database/mongoose');
const Report = require('../models/report');
const collection_name = 'reports';

// Function to get all reports
const getAllReports = async (req, res, next) => {
    const reports = await Report.find();
    res.json({reports});
}

// Function to get report by report ID
const getReportByID = async (req, res, next) => {
    const reportID = req.params.r_id;
    let report;
    try {
        report = await Report.findById(reportID);
    } catch (error) {
        console.log('Failed to get report by ID ' + reportID);
        return next(error);
    }

    if (!report) {
        console.log('No report found.');
    }

    res.json({report: report.toObject( {getters: true} )});
}

// Function to get reports by user ID
const getReportsByUserID = async (req, res, next) => {
    const userID = req.params.u_id;
    let reports;
    try {
        reports = await Report.find({ user_id: userID });
    } catch (error) {
        console.log('Failed to get report by user ID ' + userID);
        return next(error);
    }

    if (!reports || reports.length == 0) {
        console.log('No reports found.');
    }

    res.json({reports: reports.map(report => report.toObject( {getters: true} ))});
}

// Function to create a report
const createReport = async (req, res, next) => {
    const { user_id, latitude, longtitude, symtoms, precondition, infected_area, infected_person, details, status } = req.body;
    const newReport = { user_id, latitude, longtitude, symtoms, precondition, infected_area, infected_person, details, status };
    const createdReport = new Report(newReport);

    try {
        const result = await createdReport.save();
    } catch (error) {
        console.log('Failed to create new report.');
        return next(error);
    }
    
    // Return the new report on success
    res.status(201).json(createdReport);
};

// Function to update an report 
const updateReport = (req, res, next) => {
    // const { status } = req.body;
    // const reportID = req.params.r_id;
    // let report;
    // try {
    //     report = await Report.findById(reportID);
    // } catch (error) {
    //     console.log('Failed to get report by ID ' + reportID);
    //     return next(error);
    // }

    // res.status(200).json();
}

// Function to delete an report
const deleteReport = (req, res, next) => {
    // const reportID = req.params.a_id;
    // DUMMY_DATA = DUMMY_DATA.filter(r => r.report_id != reportID);

    // res.status(200).json({message: 'Deleted'});
}


exports.getAllReports = getAllReports;
exports.getReportByID = getReportByID;
exports.getReportsByUserID = getReportsByUserID;
exports.createReport = createReport;
exports.updateReport = updateReport;
exports.deleteReport = deleteReport;