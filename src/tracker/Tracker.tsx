import React from 'react'
import '../styles/tracker.scss'
import Select from 'react-select';
import chroma from 'chroma-js';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import LinkIcon from '@material-ui/icons/Link';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
export default function Tracker() {
    let createdat = "Apr 3 2021,at 2:39PM";
    let updatedat = "Apr 4 2021,at 2:39PM"
    let projectname = "projectTitle";
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
            margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
            color:'white',
            backgroundColor:'purple'
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }));
    const employeeUnderProject=[
        { value: 'shyam', label: 'shyam', color: '#00B8D9', isFixed: true },
        { value: 'ravi', label: 'ravi', color: '#0052CC', isDisabled: true },
        { value: 'balu', label: 'balu', color: '#5243AA' },
        { value: 'ankit', label: 'ankit', color: '#FF5630', isFixed: true },
        { value: 'baba', label: 'baba', color: '#FF8B00' },
        { value: 'sai', label: 'sai', color: '#FFC400' },
        { value: 'ajay', label: 'ajay', color: '#36B37E' },
        { value: 'mani', label: 'mani', color: '#00875A' },
        { value: 'Akshay', label: 'Akshay', color: '#253858' },
        { value: 'dj', label: 'dj', color: '#666666' },
    ]
    const statusOptions=[
        { value: 'Todo', label: 'Todo', color: '#FF5630', isFixed: true },
        { value: 'In Progress', label: 'In Progress', color: '#FF8B00' },
        { value: 'Done', label: 'Done', color: '#00875A' },
    ]
    const issueLabels = [
        { value: 'frontend', label: 'frontend',color: '#00B8D9' },
        { value: 'backend', label: 'backend',color:'#5243AA' },
        { value: 'database', label: 'database',color: '#36B37E' },
    ];
    const projects = [
        { value: 'website1', label: 'website1' },
        { value: 'website2', label: 'website2' },
        { value: 'website3', label: 'website3' },
        { value: 'website4', label: 'website4' },
        { value: 'App1', label: 'App1' },
        { value: 'App2', label: 'App2' },
    ];
    const colourStyles = {
        control: (styles: any) => ({ ...styles, backgroundColor: '#121212', outline: 'none',margin: 0,marginLeft: 0,border: "0px solid black", }),
        option: (styles: { [x: string]: any; }, { data, isDisabled, isFocused, isSelected }: any) => {
            const color = chroma(data.color);
            return {
            ...styles,
            backgroundColor: '#000',
            color: isDisabled
                ? '#ccc'
                : isSelected
                ? chroma.contrast(color, 'white') > 2
                ? 'white'
                : 'black'
                : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor:
                !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
            },
            };
        },
        multiValue: (styles: any, { data }: any) => {
            const color = chroma(data.color);
            return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
            };
        },
        multiValueLabel: (styles: any, { data }: any) => ({
            ...styles,
            color: data.color,
        }),
        multiValueRemove: (styles: any, { data }: any) => ({
            ...styles,
            color: data.color,
            ':hover': {
            backgroundColor: data.color,
            color: 'white',
            },
        }),
    };
    const classes = useStyles();
    return (
        <div className="tracker">
            <div className="bodyOfTracker">
                <div className="trackerInfo">
                    <p id="projectTitle">{projectname}</p>
                </div>
                <div className="linkers">
                    <button id="addAttachment" style={{margin:'10px',borderRadius:'10px',backgroundColor:'#121212',color:'white',border:'none',padding:'10px'}}>
                        <AttachFileIcon/>
                    </button>
                    <button id="subTask" style={{margin:'10px',borderRadius:'10px',backgroundColor:'#121212',color:'white',border:'none',padding:'10px'}}>
                        <LibraryAddCheckIcon/>
                    </button>
                    <button id="linkTask" style={{margin:'10px',borderRadius:'10px',backgroundColor:'#121212',color:'white',border:'none',padding:'10px'}}>
                        <LinkIcon/>
                    </button>
                </div>
                <div className="trackerDescription">
                    <textarea className="mainBodyEditor"/>
                </div>
                <div className="commentWrapper">
                    <div className="commentBox">
                        <div className="trackerComments">
                            <div className="cover">
                                <div className="comment">
                                    <Avatar className={classes.small}></Avatar>
                                    <label style={{padding:'10px',color:'white'}}>User Name</label>
                                </div>
                                <button className="moreOptions">
                                    <MoreHorizIcon/>
                                </button>
                            </div>
                            <textarea className="commentArea" style={{}}/>
                        </div>
                        <p>example comments two</p>
                        <p>example comments third</p>
                        <p>example comments fourth</p>
                        <div style={{height:'1px',width:'100%',backgroundColor:'white',opacity:'50%'}}></div>
                        <div className="addComment">
                            <textarea className="commentEditor" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="infoPanel">
                <div className="information">
                    <div className='warpper'>
                        <div className="statusSelect" style={{display:'flex',flexDirection:'column'}}>
                            <label style={{padding:'10px'}}>Status</label>
                            <Select 
                                placeholder="Search...."
                                styles={{
                                    control: (styles: any) => ({ ...styles, backgroundColor: '#121212', outline: 'none',margin: 0,marginLeft: 0,border: "0px solid black"}),
                                    option:(styles: any) => ({ ...styles, backgroundColor: '#121212', color:'white'}),
                                    singleValue:(styles: any) => ({ ...styles, backgroundColor: '#121212', color:'white'}),
                                }}
                                options={statusOptions}  
                                isSearchable
                            />
                    </div>
                    <div className="assigneeSelect" style={{display:'flex',flexDirection:'column'}}>
                        <label style={{padding:'10px'}}>Assignee</label>
                        <Select 
                        isSearchable 
                        isMulti  
                        styles={colourStyles}
                        options={employeeUnderProject} />
                    </div>
                    <div className="labelSelect" style={{display:'flex',flexDirection:'column'}}>
                        <label style={{padding:'10px'}}>Labels</label>
                        <Select 
                            defaultValue={[issueLabels[1], issueLabels[2]]}
                            isMulti
                            styles={colourStyles}
                            options={issueLabels} 
                            className="labels" 
                        />
                    </div>
                    <div className="reporterSelect" style={{display:'flex',flexDirection:'column'}}>
                        <label style={{padding:'10px'}}>Reporter</label>
                        <Select 
                        isMulti
                        styles={colourStyles}
                        isSearchable 
                        options={employeeUnderProject}
                        />
                    </div>
                    <div className="projectSelect" style={{display:'flex',flexDirection:'column'}}>
                        <label style={{padding:'10px'}}>Project</label>
                        <Select 
                        isSearchable 
                        styles={{
                            control: (styles: any) => ({ ...styles, backgroundColor: '#121212', outline: 'none',margin: 0,marginLeft: 0,border: "0px solid black"}),
                            option:(styles: any) => ({ ...styles, backgroundColor: '#121212', color:'white'}),
                            singleValue:(styles: any) => ({ ...styles, backgroundColor: '#121212', color:'white'}),
                        }}
                        options={projects}
                        />
                    </div>
                    <div className="changes"style={{display:'flex',flexDirection:'column'}}>
                        <label style={{padding:'10px'}}>Created at</label>
                        <p style={{color:'white'}}>{createdat}</p>
                        <label>Updated at</label>
                        <p style={{color:'white'}}>A{updatedat}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
