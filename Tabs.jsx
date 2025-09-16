import React, { useState } from 'react';
import './styles.css'

function Tabs({ tabs }) {
    const [tabId, setTabId] = useState(tabs[0])
    function handleClick(tabitem) {
        setTabId(tabitem)
    }
    return (
        <div>
            <div style={{ display: "flex" }}> {
                tabs.length > 0 ? tabs.map((tabitem, index) => {
                    return <div style={{ margin: "10px", border: "none" }}>
                        <button onClick={() => handleClick(tabitem)}>{tabitem.title || "Tab " + (index + 1)}</button>
                    </div>
                }) : "No tabs available"
            }
            </div>
            {tabId?.content || "No tabs Available"}
        </div>
    );
}

export default Tabs;

import Tabs from "./Tabs";

export default function App() {
    const tabsData = [
        { title: "Tab 1", content: "This is the content of Tab 1" },
        { title: "Tab 2", content: "This is the content of Tab 2" },
        { title: "Tab 3", content: "This is the content of Tab 3" }
    ];
    
    return <Tabs tabs={tabsData} />;
}
