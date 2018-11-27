
import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="content">
                    <div className="left-area">
                        <div className="left-area-2">
                            <div className="left-area-2-a"></div>
                            <div clcg className="left-area-2-b"></div>
                            <div className="left-area-2-c"></div>
                        </div>
                    </div>
                    <div className="right-area">
                    <div className="right-area-2">
                            <div className="right-area-2-a"></div>
                            <div className="right-area-2-b"></div>
                            <div className="right-area-2-c"></div>
                            <div className="right-area-2-d"></div>
                        </div>
                    </div>
                </div>
                <div className="footer"></div>
          </div>
        );
    }
}

export default App;