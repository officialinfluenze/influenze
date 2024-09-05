import { Text,Icons } from '@influenze/ui-lib';
import videoSrc from '../../../assets/videos/video.mp4'
import { FlexRow, ImageContainer, ServicesContainer, ServiceTitle,Heading1,Heading2 } from './index.styles';
const {BoltIcon} = Icons;

const Services = ({ icon, title, description }) => (
    <ServicesContainer>
        <ImageContainer>
            {icon}
        </ImageContainer>
        <ServiceTitle>{title}</ServiceTitle>
        <Text variant='body2'>{description}</Text>
    </ServicesContainer>
);

const services = [
    { icon: <BoltIcon/>, title: "Custom plans", description: "Tailored strategies designed carefully to meet your unique business needs." },
    { icon: <BoltIcon/>, title: "Premium Quality", description: "We deliver top-notch quality services to elevate your brand." },
    { icon: <BoltIcon/>, title: "Growth Focused", description: "Our strategies are focused on driving growth and success." },
    { icon: <BoltIcon/>, title: "Innovative Solutions", description: "We provide cutting-edge solutions tailored to your needs." },
    { icon: <BoltIcon/>, title: "Affordable Pricing", description: "Get the best value with our competitively priced packages." },
    { icon: <BoltIcon/>, title: "Personalized Support", description: "Experience dedicated support tailored to your requirements." }
];
const Page = () => {
    return (
        <>
            <Heading1  variant='body1'>Boost Your Brand</Heading1>
            <Heading2 variant='h5'>Innovative Social Media Marketing Solutions</Heading2>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <video controls>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px'}}>
                <FlexRow>
                    {services.map((service, index) => (
                        <Services key={index} {...service} />
                    ))}
                </FlexRow>
            </div> 
            
        </>
        
    );
}

export default Page;
