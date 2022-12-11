import classes from './social.module.css';
import Section from './section';
import SocialLinks from './social-link';


function Social() {
    return (
        <Section>
            <div className="section_title link">
                On the Web 🌐
            </div>
            <div className={`${classes.link_wrapper} section_content`}>
                <SocialLinks image="github" text="github" link="https://github.com/priteshc25" />
                <SocialLinks image="linkedin" text="linkedIn" link="www.linkedin.com/in/pritesh-chavan" />
                <SocialLinks image="stackoverflow" text="Snapchat" link="https://snapchat/priteshh25" />
                <SocialLinks image="codepen" text="Instagram" link="https://instagram/priteshh25" />
                <SocialLinks image="twitter" text="Twitter" link="https://twitter.com/priteshh25" />
                <SocialLinks image="gmail" text="mail" link="mailto:priteshsunilchavan@gmail.com" />
            </div>
        </Section>
    )
}
export default Social;