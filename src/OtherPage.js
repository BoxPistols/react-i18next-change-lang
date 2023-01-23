// import React, { useEffect } from "react";
import React from "react";
import { useTranslation } from "react-i18next";

const OtherPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h2>String: {t("login")}</h2>
      <hr />
      <p>i18n.language: {i18n.language}</p>
    </>
  );
};

export default OtherPage;
