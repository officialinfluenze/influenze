import { Fragment } from "react/jsx-runtime";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import './Plans.css';


const PlanBenefits = ({ icon, description }) => (
    <div className="sub-div">
        {icon}
        <p className="description">{description}</p>
    </div>
);
const Plans = () =>{
    const Basicbenefits = [
        { icon: <DoneIcon className="iconstyle" />, description: "1 User" },
        { icon: <DoneIcon className="iconstyle" />, description: "Email Support" },
        { icon: <DoneIcon className="iconstyle" />, description: "5 Projects" },
        { icon: <DoneIcon className="iconstyle" />, description: "Basic Analytics" },
        { icon: <DoneIcon className="iconstyle" />, description: "Limited Access" },   
    ];
    const Probenefits = [
        { icon: <DoneIcon className="iconstyle" />, description: "5 Users" },
        { icon: <DoneIcon className="iconstyle" />, description: "Priority Support" },
        { icon: <DoneIcon className="iconstyle" />, description: "Unlimited Projects" },
        { icon: <DoneIcon className="iconstyle" />, description: "Advanced Analytics" },
        { icon: <DoneIcon className="iconstyle" />, description: "Full Access" },   
        { icon: <DoneIcon className="iconstyle" />, description: "Custom Reports" },   
    ];
    
    return(
        <Fragment>
            <p>Affordable Plans</p>
            <p>Choose the perfect plan for your buisness needs.</p>
            <div className="flex">
                <Card sx={{ width:'400px' }}>
                    <CardContent>
                        <Typography gutterBottom variant="body2" component="div">Basic Plan</Typography>
                        <div className="fl">
                            <Typography variant="h4" sx={{fontWeight:'bold'}}>$4</Typography>
                            <span style={{alignSelf:'center'}}>$99/month</span>
                        </div>
                        <Typography>Ideal for personal use</Typography>
                        <hr className = "hr" />
                        <div >
                            {Basicbenefits.map((Basicbenefit, index) => (
                                <PlanBenefits key={index} icon={Basicbenefit.icon} description={Basicbenefit.description} />
                            ))}
                        </div>
                        
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined" style={{width:'100%'}}>Start Now</Button>
                    </CardActions>
                </Card>
                <Card sx={{ width:'400px' }}>
                    <CardContent>
                        <Typography gutterBottom variant="body2" component="div">Pro Plan</Typography>
                        <div className="fl">
                            <Typography variant="h4" sx={{fontWeight:'bold'}}>$12</Typography>
                            <span style={{alignSelf:'center'}}>$299/month</span>
                        </div>
                        <Typography>Perfect for teams</Typography>
                        <hr className = "hr" />
                        <div >
                            {Probenefits.map((Probenefit, index) => (
                                <PlanBenefits key={index} icon={Probenefit.icon} description={Probenefit.description} />
                            ))}
                        </div>
                        
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" style={{width:'100%'}}>Get Started</Button>
                    </CardActions>
                </Card>
            </div>
        </Fragment>
        
    );
}

export default Plans;