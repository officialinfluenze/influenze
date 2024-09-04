import { Fragment } from "react";
import videoSrc from './resources/video.mp4';
import './Page.css';
import { Bolt } from "@mui/icons-material";


const PlanCard = ({ icon, title, description }) => (
    <div className="sub-div1">
        {icon}
        <p className="title">{title}</p>
        <p className="description">{description}</p>
    </div>
);

const Page = () => {
    const plans = [
        { icon: <Bolt className="icon" />, title: "Custom plans", description: "Tailored strategies designed carefully to meet your unique business needs." },
        { icon: <Bolt className="icon" />, title: "Premium Quality", description: "We deliver top-notch quality services to elevate your brand." },
        { icon: <Bolt className="icon" />, title: "Growth Focused", description: "Our strategies are focused on driving growth and success." },
        { icon: <Bolt className="icon" />, title: "Innovative Solutions", description: "We provide cutting-edge solutions tailored to your needs." },
        { icon: <Bolt className="icon" />, title: "Affordable Pricing", description: "Get the best value with our competitively priced packages." },
        { icon: <Bolt className="icon" />, title: "Personalized Support", description: "Experience dedicated support tailored to your requirements." }
    ];

    return (
        <Fragment>
            <p className="txt">Boost Your Brand</p>
            <p className="txt-2">Innovative Social Media Marketing Solutions</p>
                <video controls style={{ minWidth:"70%",marginLeft:"120px" }}>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            <div className="flex-row">
                {plans.map((plan, index) => (
                    <PlanCard key={index} icon={plan.icon} title={plan.title} description={plan.description} />
                ))}
            </div>
        </Fragment>
    );
}

export default Page;
