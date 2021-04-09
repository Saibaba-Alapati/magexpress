import React from 'react'
import TextEditor from '../Editor'
import '../styles/tracker.scss'
export default function Tracker() {
    return (
        <div className="tracker">
            <div className="body">
                <div className="trackerInfo"></div>
                <div className="trackerDescription">
                    <TextEditor/>
                </div>
                <div className="comments"></div>
                <div className="addComment">
                    <TextEditor/>
                </div>
            </div>
            <div className="infoPanel">
                <div>
                    <p>Status</p>
                    <select className="trackerStatus" id="">
                        <option value="Todo"></option>
                        <option value="InProgress"></option>
                        <option value="Done"></option>
                    </select>
                </div>
                <div className="assignee">
                    <p>Assignee</p>
                </div>
                <div className="labels">
                    <p>labels</p>
                </div>
                <div className="reporter">
                    <p>reporter</p>
                </div>
                <div className="project">
                    <p>project</p>
                </div>
                <div className="changes">
                    <p>Created at</p>

                    <p>Updated at</p>
                </div>
            </div>
        </div>
    )
}
