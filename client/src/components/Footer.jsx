// Icons from Material UI; refer "https://mui.com/material-ui/material-icons/"

import ContactPageIcon from '@mui/icons-material/ContactPage';
import GitHubIcon from '@mui/icons-material/GitHub';
import LockIcon from '@mui/icons-material/Lock';
import InfoIcon from '@mui/icons-material/Info';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import { Link } from 'react-router-dom';

export default function Footer() {

    const githubRepositoryUrl = "https://github.com/siddharthaasal/blockchain-organ-donation-registry";

    return (
        <>
            <div className='flex'>
                <div className='flex'>
                    <ContactPageIcon />
                    <Link to="/contact">
                        <p>Contact</p>
                    </Link>
                </div>
                <div className='flex'>
                    <LockIcon />
                    <Link to="/privacy-policy">
                        <p>Privacy Policy</p>
                    </Link>
                </div>
                <div className='flex'>
                    <InfoIcon />
                    <Link to="/about">
                        <p>About</p>
                    </Link>
                </div>
                <div className='flex'>
                    <AssignmentTurnedInIcon />
                    <Link to="/terms">
                        <p>Terms</p>
                    </Link>
                </div>
                <div className='flex'>
                    <QuestionAnswerIcon />
                    <Link to="/behind-the-scenes">
                        <p>How it Works</p>
                    </Link>
                </div>
                <div className='flex'>
                    <GitHubIcon />
                    {/* opens it in another tab */}
                    <a target='_blank'
                        rel='noopener noreferrer' href={githubRepositoryUrl}>
                        Github
                    </a>
                </div>
            </div>
        </>
    )
}