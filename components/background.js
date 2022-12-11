import classes from './background.module.css';
import Section from './section';
function Background() {
    return (
        <Section className={classes.background}>
            <div className={`${classes.background_title} link`}>
                BACKGROUND 👨‍💻
            </div>
            <div className={classes.background_content}>
                <p>I&rsquo;m currently pursuing Engineering in Computer Science at  className={classes.background_link} target="_blank" rel="noreferrer">Late G N Sapkal College of Engineering, Nashik.</> I&rsquo;m also a web developer. </p>
                <p>As a frontend developer, I enjoy learning new Websites and webapps. Recently I have studied Next.js which is a react framework. When developing web-apps I aim for a beautiful, responsive product with pixel-perfect user experience.</p>
                <p><span>When I&apos;m not coding</span>, I&apos;m probably reading a book, or playing online games.</p>
            </div>
        </Section>
    )

}
export default Background;