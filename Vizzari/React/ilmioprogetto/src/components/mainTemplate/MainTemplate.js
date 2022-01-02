import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function MainTemplate(props) {
    const pageBody = props.children;
    const lastLineText = props.lastLineText;
    const first_logo_url = props.first_logo_url;
    const second_logo_url = props.second_logo_url;
    const pageListItem = props.pageListItem;

    return (
        <>
            <Header
                pageListItem={pageListItem}
            />
            {pageBody}
            <Footer
                lastLineText={lastLineText}
                first_logo_url={first_logo_url}
                second_logo_url={second_logo_url}
                pageListItem={pageListItem}
            />
        </>
    );
}

export default MainTemplate;