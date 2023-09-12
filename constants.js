const constants = {
    TITLE: "Exam Rank College Predictor",
    CATEGORY_LABEL: "Select Category:",
    CATEGORY_OPTIONS: [
        { value: "AI", label: "AI" },
        { value: "HS", label: "HS" },
        { value: "OS", label: "OS" },
    ],
    RANK_LABEL: "Enter Category Rank",
    NEET_RANK_LABEL: "Enter Rank",
    GENDER_LABEL: "Select Gender:",
    EXAM_LABEL: "Select Exam:",
    STATE_LABEL: "Select Your Home State:",
    ROUND_NUMBER_LABEL: "Select Round Number:",
    ROUND_NUMBER_OPTIONS: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
    ],
    CATEGORY_OPTIONS: [
        { value: "ews_pwd", label: "EWS (PwD)" },
        { value: "ews", label: "EWS" },
        { value: "obc_ncl_pwd", label: "OBC-NCL (PwD)" },
        { value: "obc_ncl", label: "OBC-NCL" },
        { value: "open_pwd", label: "OPEN (PwD)" },
        { value: "open", label: "OPEN" },
        { value: "sc_pwd", label: "SC (PwD)" },
        { value: "sc", label: "SC" },
        { value: "st_pwd", label: "ST (PwD)" },
        { value: "st", label: "ST" },
    ],
    GENDER_OPTIONS: [
        { value: "gender_neutral", label: "Gender-Neutral" },
        {
            value: "female_only",
            label: "Female-only (including Supernumerary)",
        },
    ],
    EXAM_OPTIONS: [
        {value: "jee_main", label: "JEE Main"},
        {value: "jee_advanced", label: "JEE Advanced"},
        {value: "neet", label: "NEET"}
    ],
    STATE_OPTIONS: [
        { value: 'all_india', label: 'All India' },
        { value: 'andhra_pradesh', label: 'Andhra Pradesh' },
        { value: 'arunachal_pradesh', label: 'Arunachal Pradesh' },
        { value: 'assam', label: 'Assam' },
        { value: 'bihar', label: 'Bihar' },
        { value: 'chhatisgarh', label: 'Chhatisgarh' },
        { value: 'diu', label: 'Diu' },
        { value: 'goa', label: 'Goa' },
        { value: 'gujarat', label: 'Gujarat' },
        { value: 'haryana', label: 'Haryana' },
        { value: 'himachal_pradesh', label: 'Himachal Pradesh' },
        { value: 'jharkhand', label: 'Jharkhand' },
        { value: 'jammu_&_kashmir', label: 'Jammu & Kashmir' },
        { value: 'karnataka', label: 'Karnataka' },
        { value: 'kerala', label: 'Kerala' },
        { value: 'madhya_pradesh', label: 'Madhya Pradesh' },
        { value: 'maharashtra', label: 'Maharashtra' },
        { value: 'manipur', label: 'Manipur' },
        { value: 'meghalaya', label: 'Meghalaya' },
        { value: 'mizoram', label: 'Mizoram' },
        { value: 'nagaland', label: 'Nagaland' },
        { value: 'new_delhi', label: 'New Delhi' },
        { value: 'odisha', label: 'Odisha' },
        { value: 'puducherry', label: 'Puducherry' },
        { value: 'punjab', label: 'Punjab' },
        { value: 'rajasthan', label: 'Rajasthan' },
        { value: 'sikkim', label: 'Sikkim' },
        { value: 'tamil_nadu', label: 'Tamil Nadu' },
        { value: 'telangana', label: 'Telangana' },
        { value: 'tripura', label: 'Tripura' },
        { value: 'uttar_pradesh', label: 'Uttar Pradesh' },
        { value: 'uttarakhand', label: 'Uttarakhand' },
        { value: 'west_bengal', label: 'West Bengal' }
    ],
    SCHOLARSHIP_TITLE: "Scholarship Finder",
    NUMBER_STATES_IN_SCHOLARSHIP_SHEET: 8,
    NUMBER_CITIES_IN_SCHOLARSHIP_SHEET: 4,
    STATUS_LABEL: "Enter Scholarship Status:",
    GRADE_LABEL: "Enter Grade:",
    STREAM_LABEL: "Enter Stream:",
    CITY_LABEL: "Enter City Name:",
    FAMILY_INCOME_LABEL: "Enter your family income in lakhs",
    FAMILY_INCOME_HELP_TEXT: "For example, Rs. 1,20,000 to be entered as 1.2",
    GRADE_OPTIONS: [
        { value: "11", label: "11" },
        { value: "12", label: "12" },
    ],
    STREAM_OPTIONS: [
        {value: "any", label: "Any Stream"},
        {value: "engineering", label: "Engineering"},
        {value: "medical", label: "Medical"}
    ],
    SCHOLARSHIP_GENDER_OPTIONS: [
        { value: "show_both", label: "Show Both" },
        { value: "male", label: "Male" },
        { value: "female", label: "Female" }
    ],
    SCHOLARSHIP_STATUS_OPTIONS: [
        { value: "open", label: "Open" },
        { value: "closed", label: "Closed" },
        { value: "show_both", label: "Both" },
    ],
    CITY_OPTIONS: [
        { value: 'all_india', label: 'All India' },
        { value: 'mumbai', label: 'Mumbai' },
        { value: 'delhi_ncr', label: 'Delhi NCR' },
        { value: 'ahmedabad', label: 'Ahmedabad' },
        { value: 'bangalore', label: 'Bangalore' },
        { value: 'pune', label: 'Pune' }
    ],
};

constants["SCHOLARSHIP_CATEGORY_OPTIONS"] = [...constants["CATEGORY_OPTIONS"], { value: "others", label: "Others" }];

export default function getConstants() {
    return constants;
}
