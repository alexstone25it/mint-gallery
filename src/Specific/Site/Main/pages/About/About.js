import React from "react";
import styles from "./About.module.css";

import Article from "../../../../../General/containers/general/Article";
import H2General from "../../../../../General/components/typography/headings/h2/H2General";
import CursiveSpan from "../../../../../General/components/typography/spans/CursiveSpan";

const About = () => {
  const paragraphList = [
    "Lorem ipsum dolor sit amet, magna posse graecis ut qui, an quo stet impedit. Vis ferri iriure at, no nibh eirmod pro, nam ea meis verterem ullamcorper. Te qui sumo accusamus. Id pro quaestio maluisset, et eam eripuit constituam.",
    " Suas natum commune an nec. Ne nonumy iisque pertinacia sea. Ius eu affert munere, cu altera timeam cum. Sed sensibus expetenda ea, no usu noluisse laboramus.",
    " Sit tota ferri in, eum iusto placerat ex. Eam nibh equidem ad, pro no nihil legimus, te qui summo eruditi dissentiet. Libris accusata ex nam, sea fugit assum cotidieque an. Mea ut mundi facilisi persequeris, virtute ponderum iudicabit ad his.",
    "Sed ei vocibus adipiscing. Eu eum latine minimum mediocritatem, ad oporteat periculis qui, sit nemore fastidii neglegentur cu. Sed ubique labitur accommodare et, mea ea postulant intellegat, vidit reprehendunt ea vim. Mel clita viderer constituam in. Vim meis natum appetere ex, nisl minim ridens per ne, usu no brute ignota diceret.",
    " Cum homero adipisci delicata et, an vel docendi appetere contentiones. Erat dolorem intellegebat qui ut, nosemper civibus signiferumque sit, iusto animal ei usu. Ei omnesque appellantur mei, eum vidisse labitur inciderint an. No offendit abhorreant has, sea no elaboraret cotidieque. Cu duo prima nonumy dicunt, vim no semper nominavi."
  ];
  return (
    <Article
      containerSize="size85"
      containerDisplay="withflexCol"
      containerColor="withOffWhite"
    >
      <figure className={styles.fig}>
        <img
          className={styles.pic}
          src={require(`./images/author.jpg`)}
          alt="A portrait photograph of Alice"
        />
        <figcaption className={styles.figCap}>Alice</figcaption>
      </figure>
      <H2General headingType="smaller">
        About <CursiveSpan>The Photographer</CursiveSpan>
      </H2General>
      {paragraphList.map((_, index) => (
        <p className={styles.text} key={paragraphList[index]}>
          {paragraphList[index]}
        </p>
      ))}
    </Article>
  );
};

export default About;
