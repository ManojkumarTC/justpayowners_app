const EnquiryModel = {
    name: 'EnquiryModel',
    properties: {
        inquiryReference: "",
        firstName: "",
        email: "",
        phoneNumber: "",
        inquiryDetails: "",
        preferredContactMethod: "",
        inquiryStatus: "",
        AdvertiseID: "",
        CreatedBy: "Public",
        inquiryDate: new Date().toISOString(),
        createdDate: new Date().toISOString(),
        updatedDate: new Date().toISOString()
    }
};

export default EnquiryModel;