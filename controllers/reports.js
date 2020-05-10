let DUMMY_DATA = [
    {
        application_id: 1000,
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
        application_id: 1001,
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
        application_id: 1002,
        user_id: 3,
        date: "2020-05-10T06:57:52.247Z",
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

// Function to get application by application ID
const getApplicationByAppID = (req, res, next) => {
    const applicationID = req.params.a_id;
    const report = DUMMY_DATA.find(r => {
        return r.application_id == applicationID;
    })

    if (!report) {
        return res.status(404).json({message: 'No application found.'});
    }

    res.json({report});
}

// Function to get application by user ID
const getApplicationByUserID = (req, res, next) => {
    const userID = req.params.u_id;
    const report = DUMMY_DATA.find(r => {
        return r.user_id == userID;
    })

    if (!report) {
        return res.status(404).json({message: 'No application found.'});
    }

    res.json({report});
}

// Function to create an application
const createApplication = (req, res, next) => {
    const { application_id, user_id, date, latitude, longtitude, symtoms, precondition, infected_area, infected_person, details, status } = req.body;
    const newApplication = { application_id, user_id, date, latitude, longtitude, symtoms, precondition, infected_area, infected_person, details, status };

    DUMMY_DATA.push(newApplication);

    res.status(201).json(newApplication);
};

// Function to update an application 
const updateApplication = (req, res, next) => {
    const { status } = req.body;
    const applicationID = req.params.a_id;
    
    const updatedApplication = {...DUMMY_DATA.find(r => r.application_id == applicationID)};
    const applicationPos = DUMMY_DATA.findIndex(r => r.application_id == applicationID);
    updatedApplication.status = status;
    DUMMY_DATA[applicationPos] = updatedApplication;

    res.status(200).json(updatedApplication);
}

// Function to delete an application
const deleteApplication = (req, res, next) => {
    const applicationID = req.params.a_id;
    DUMMY_DATA = DUMMY_DATA.filter(r => r.application_id != applicationID);

    res.status(200).json({message: 'Deleted'});
}


exports.getApplicationByAppID = getApplicationByAppID;
exports.getApplicationByUserID = getApplicationByUserID;
exports.createApplication = createApplication;
exports.updateApplication = updateApplication;
exports.deleteApplication = deleteApplication;