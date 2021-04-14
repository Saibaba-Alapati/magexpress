import React from 'react'
import CommentEditor from '../CommentEditor'
import TextEditor from '../Editor'
import '../styles/tracker.scss'
export default function Tracker() {
    return (
        <div className="tracker">
            <div className="bodyOfTracker">
                <div className="trackerInfo">
                    <p>ProjectTitle</p>
                </div>
                <div className="trackerDescription">
                    <TextEditor/>
                </div>
                <div className="comments">
                    <p>example comments one</p>
                    <p>example comments two</p>
                    <p>example comments third</p>
                </div>
                <div className="addComment">
                    <CommentEditor/>
                </div>
            </div>
            <div className="infoPanel">
                <div className="information">
                    <div className='warp'>
                        <div id="status">
                        <p>Status</p>
                        <select className="trackerStatus" id="">
                            <option value="Todo"></option>
                            <option value="InProgress"></option>
                            <option value="Done"></option>
                        </select>
                    </div>
                    <div id="assignee">
                        <p>Assignee</p>
                        <p>Saibaba Alapati</p>
                    </div>
                    <div id="labels">
                        <p>Labels</p>
                        <p id="labelsvalues">important</p>
                    </div>
                    <div id="reporter">
                        <p>Reporter</p>
                        <p>Saibaba Alapati</p>
                    </div>
                    <div id="project">
                        <p>Project</p>
                        <p>magexpress</p>
                    </div>
                    <div id="changes">
                        <p>Created at</p>
                        <p>Apr 3 2021,at 2:39PM</p>

                        <p>Updated at</p>
                        <p>Apr 6 2021,at 7:39PM</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
