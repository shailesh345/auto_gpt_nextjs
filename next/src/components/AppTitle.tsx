import PopIn from "./motions/popin";
import Badge from "./Badge";
import React from "react";
import { useTranslation } from "next-i18next";

const AppTitle = () => {
  const { i18n } = useTranslation();

  return (
    <div id="title" className="relative flex flex-col items-center font-mono">
      <div className="flex flex-row items-start">
        {/* <span className="text-xl font-bold text-[#C0C0C0] xs:text-xl sm:text-xl">Ai</span>
        <span className="text-xl font-bold text-white xs:text-xl sm:text-xl">Clone</span>
         */}
        <PopIn delay={0.5}>
          <Badge colorClass="bg-gradient-to-t from-sky-500 to-sky-600 border-2 border-white/20">
            {i18n?.t("AiClone.me", {
              ns: "indexPage",
            })}
            &nbsp;
          </Badge>
        </PopIn>
      </div>
      <div className="mt-1 text-center font-mono text-[0.7em] font-bold text-white">
        <p>
          {i18n.t("HEADING_DESCRIPTION", {
            ns: "indexPage",
          })}
        </p>
      </div>
    </div>
  );
};

export default AppTitle;
