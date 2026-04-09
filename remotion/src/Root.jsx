import { Composition } from "remotion";
import { SkillVideo } from "./SkillVideo.jsx";
import { skills } from "./skills-data.js";

export const RemotionRoot = () => {
  return (
    <>
      {skills.map((skill) => (
        <Composition
          key={skill.id}
          id={skill.id}
          component={SkillVideo}
          durationInFrames={450}
          fps={30}
          width={640}
          height={360}
          defaultProps={{ skill }}
        />
      ))}
    </>
  );
};
