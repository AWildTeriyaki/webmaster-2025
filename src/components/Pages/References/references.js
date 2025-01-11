import './references.css';
import references from '../../../assets/references.pdf';
import plan_of_work from '../../../assets/plan_of_work.pdf';
import copyright_checklist from '../../../assets/copyright.pdf';

const References = () => (
    <div className="references">
        <a href={references} target="_blank" rel="noopener noreferrer">References</a>
        <a href={plan_of_work} target="_blank" rel="noopener noreferrer">Plan of Work</a>
        <a href={copyright_checklist} target="_blank" rel="noopener noreferrer">Copyright Checklist</a>
    </div>
);

export default References;