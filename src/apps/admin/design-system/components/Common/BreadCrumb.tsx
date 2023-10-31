import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import clsx from "clsx";
import React from "react";

const BreadCrumb = ({ title = "", links }: any) => {
  return (
    <React.Fragment>
      <div>
        <div>
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">{title}</h4>

            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <Link to="/">{trans("home")}</Link>
                </li>
                {links.map((link: any, index: number) => (
                  <li
                    key={link.route || index}
                    className={clsx("breadcrumb-item", {
                      active: index === links.length - 1,
                      "text-primary": index === links.length - 1,
                    })}>
                    {index === links.length - 1 && <span>{link.text}</span>}
                    {index !== links.length - 1 && (
                      <Link to={link.route}>{link.text}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BreadCrumb;
