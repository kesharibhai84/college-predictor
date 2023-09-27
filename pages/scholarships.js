import React, { useState } from "react";
import Script from "next/script";
import Dropdown from "../components/dropdown";
import { useRouter } from "next/router";
import Link from "next/link";
import getConstants from "../constants";

const ScholarshipPage = () => {
  const categoryOptions = getConstants().SCHOLARSHIP_CATEGORY_OPTIONS || [];

  const genderOptions = getConstants().SCHOLARSHIP_GENDER_OPTIONS || [];

  const statusOptions = getConstants().SCHOLARSHIP_STATUS_OPTIONS;

  const gradeOptions = getConstants().GRADE_OPTIONS;

  const stateOptions = getConstants().STATE_OPTIONS;

  const familyincomeOptions = getConstants().FAMILY_INCOME_OPTIONS;

  const cityOptions = getConstants().CITY_OPTIONS;

  const streamOptions = getConstants().STREAM_OPTIONS;

  const [familyIncome, setFamilyIncome] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [grade, setGrade] = useState("");
  const [stream, setStream] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const router = useRouter();

  const handleCategoryDropdownChange = (selectedOption) => {
    setCategory(selectedOption.label);
  };

  const handleStatusDropdownChange = (selectedOption) => {
    setStatus(selectedOption.label);
  };

  const handleGradeDropdownChange = (selectedOption) => {
    setGrade(selectedOption.label);
  };

  const handleGenderDropdownChange = (selectedOption) => {
    setGender(selectedOption.label);
  };

  const handleStreamDropdownChange = (selectedOption) => {
    setStream(selectedOption.label);
  };

  const handleStateNameDropdownChange = (selectedOption) => {
    setStateName(selectedOption.label);
  };

  const handleCityNameDropdownChange = (selectedOption) => {
    setCityName(selectedOption.label);
  };

  const handleFamilyIncomeChange = (selectedOption) => {
    setFamilyIncome(selectedOption.label);
  };

  const handleSubmit = () => {
    router.push(
      `/scholarship_finder?status=${status}&category=${category}&familyIncome=${familyIncome}&stream=${stream}&grade=${grade}&stateName=${stateName}&cityName=${cityName}&gender=${gender}`
    );
  };

  const isCategoryInOptions = categoryOptions.some(
    (option) => option.label === category
  );
  const isGenderInOptions = genderOptions.some(
    (option) => option.label === gender
  );
  const isGradeInOptions = gradeOptions.some(
    (option) => option.label === grade
  );
  const isStreamInOptions = streamOptions.some(
    (option) => option.label === stream
  );
  const isStatusInOptions = statusOptions.some(
    (option) => option.label === status
  );
  const isStateNameInOptions = stateOptions.some(
    (option) => option.label === stateName
  );
  const isCityNameInOptions = cityOptions.some(
    (option) => option.label === cityName
  );
  const isFamilyIncomeInOptions = familyincomeOptions.some(
    (option) => option.label === familyIncome
  );

  const isSubmitDisabled =
    !isFamilyIncomeInOptions ||
    !isCategoryInOptions ||
    !isStatusInOptions ||
    !isGenderInOptions ||
    !isStateNameInOptions ||
    !isCityNameInOptions ||
    !isStreamInOptions ||
    !isGradeInOptions;

  return (
    <div className="flex justify-center items-center p-2">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FHGVRT52L7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-FHGVRT52L7');
                `}
      </Script>
      <div className="text-center">
        <Link href="/">
          <h3 className="cursor-pointer mt-10 font-bold text-sm md:text-xl lg:text-2xl">
            To find colleges relevant to you, click here
          </h3>
        </Link>
        <h1 className="text-md font-semibold">
          {getConstants().SCHOLARSHIP_TITLE}
        </h1>
        <label className="block text-md font-semibold text-gray-700 m-2">
          {getConstants().STATUS_LABEL}
        </label>
        <Dropdown
          options={statusOptions}
          onChange={handleStatusDropdownChange}
        />

        <label className="block text-md font-semibold text-gray-700 m-2">
          {getConstants().GRADE_LABEL}
        </label>
        <Dropdown options={gradeOptions} onChange={handleGradeDropdownChange} />

        <label className="block text-md font-semibold text-gray-700 m-2">
          {getConstants().STREAM_LABEL}
        </label>
        <Dropdown
          options={streamOptions}
          onChange={handleStreamDropdownChange}
        />

        <label className="font-semibold text-md text-gray-700">
          {getConstants().CATEGORY_LABEL}
        </label>
        <br />
        <label className="font-medium text-sm text-gray-700 m-2 block">
          {getConstants().CATEGORY_HELP_TEXT}
        </label>
        <Dropdown
          options={categoryOptions}
          onChange={handleCategoryDropdownChange}
        />

        <label className="text-md font-semibold text-gray-700 ">
          {getConstants().FAMILY_INCOME_LABEL}
        </label>
        <br />
        <label className="block m-2 text-sm font-medium text-gray-700">
          {getConstants().FAMILY_INCOME_HELP_TEXT}
        </label>
        <Dropdown
          options={familyincomeOptions}
          onChange={handleFamilyIncomeChange}
        />

        <label className="block text-md font-semibold text-gray-700 m-2">
          {getConstants().GENDER_LABEL}
        </label>
        <Dropdown
          options={genderOptions}
          onChange={handleGenderDropdownChange}
        />

        <label className="block text-md font-semibold text-gray-700 m-2">
          {getConstants().STATE_LABEL}
        </label>
        <Dropdown
          options={stateOptions}
          onChange={handleStateNameDropdownChange}
        />

        <label className="block text-md font-semibold text-gray-700 m-2">
          {getConstants().CITY_LABEL}
        </label>
        <Dropdown
          options={cityOptions}
          onChange={handleCityNameDropdownChange}
        />
        <p />
        <p />

        <button
          className={`mt-4 px-8 py-2.5 bg-[#B52326] text-white rounded cursor-pointer hover:bg-[#B52326] active:bg-[#B52326] focus:outline-none ${
            isSubmitDisabled ? "bg-gray-300 cursor-not-allowed" : ""
          }`}
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ScholarshipPage;
