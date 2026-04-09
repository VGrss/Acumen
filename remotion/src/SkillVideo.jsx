import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";

const FONT = "'SF Mono', 'Fira Code', 'Roboto Mono', monospace";
const SANS = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const BG = "#fafafa";
const FG = "#111";
const MUTED = "#555";
const FAINT = "#999";
const BORDER = "#ddd";
const SURFACE = "#fff";

// Animated element card (Mendeleev-style)
const ElementCard = ({ abbr, name, color, frame, fps }) => {
  const scale = spring({ frame, fps, from: 0.6, to: 1, durationInFrames: 20 });
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        width: 100,
        height: 100,
        border: `2px solid ${color}`,
        background: SURFACE,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      <div style={{ fontFamily: FONT, fontSize: 32, fontWeight: 700, color }}>{abbr}</div>
      <div style={{ fontFamily: FONT, fontSize: 11, color: FAINT, marginTop: 4 }}>{name}</div>
    </div>
  );
};

// Animated step item
const StepItem = ({ text, index, frame, fps }) => {
  const delay = index * 8;
  const localFrame = Math.max(0, frame - delay);
  const slideX = spring({ frame: localFrame, fps, from: 30, to: 0, durationInFrames: 15 });
  const opacity = interpolate(localFrame, [0, 8], [0, 1], { extrapolateRight: "clamp" });
  const checkOpacity = interpolate(localFrame, [10, 18], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        transform: `translateX(${slideX}px)`,
        opacity,
        marginBottom: 14,
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: `1.5px solid ${BORDER}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          color: "#3da63d",
          opacity: checkOpacity,
          background: SURFACE,
        }}
      >
        ✓
      </div>
      <span style={{ fontFamily: SANS, fontSize: 16, color: MUTED }}>{text}</span>
    </div>
  );
};

// Tagline typing effect
const TypedText = ({ text, frame, charsPerFrame = 0.8 }) => {
  const chars = Math.floor(frame * charsPerFrame);
  const displayed = text.slice(0, chars);
  const showCursor = frame % 16 < 10 && chars < text.length;

  return (
    <span style={{ fontFamily: SANS, fontSize: 17, color: MUTED, lineHeight: 1.5 }}>
      {displayed}
      {showCursor && <span style={{ color: FG }}>|</span>}
    </span>
  );
};

// Progress bar at bottom
const ProgressBar = ({ color }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = (frame / durationInFrames) * 100;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 3,
        background: BORDER,
      }}
    >
      <div style={{ width: `${progress}%`, height: "100%", background: color }} />
    </div>
  );
};

export const SkillVideo = ({ skill }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: BG, padding: 40, fontFamily: SANS }}>
      {/* Phase 1: Intro (0-90 frames / 0-3s) */}
      <Sequence from={0} durationInFrames={90}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <ElementCard abbr={skill.abbr} name={skill.name} color={skill.color} frame={frame} fps={fps} />
          <div style={{ marginTop: 16 }}>
            <TypedText text={skill.tagline} frame={Math.max(0, frame - 25)} />
          </div>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 11,
              color: FAINT,
              textTransform: "uppercase",
              letterSpacing: 2,
              marginTop: 8,
              opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
            }}
          >
            {skill.layer}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Phase 2: Steps (90-360 frames / 3-12s) */}
      <Sequence from={90} durationInFrames={270}>
        <AbsoluteFill style={{ padding: 40 }}>
          <div
            style={{
              display: "flex",
              gap: 40,
              height: "100%",
              alignItems: "center",
            }}
          >
            {/* Left: mini element */}
            <div style={{ flexShrink: 0 }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  border: `2px solid ${skill.color}`,
                  background: SURFACE,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontFamily: FONT, fontSize: 22, fontWeight: 700, color: skill.color }}>
                  {skill.abbr}
                </div>
                <div style={{ fontFamily: FONT, fontSize: 9, color: FAINT, marginTop: 2 }}>
                  {skill.name}
                </div>
              </div>
            </div>

            {/* Right: steps */}
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: FONT, fontSize: 13, color: FAINT, marginBottom: 20, letterSpacing: 1 }}>
                WHAT IT DOES
              </div>
              {skill.steps.map((step, i) => (
                <StepItem
                  key={i}
                  text={step}
                  index={i}
                  frame={Math.max(0, frame - 90)}
                  fps={fps}
                />
              ))}
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Phase 3: Outro (360-450 frames / 12-15s) */}
      <Sequence from={360} durationInFrames={90}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 28,
              fontWeight: 700,
              color: FG,
              opacity: interpolate(Math.max(0, frame - 360), [0, 15], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            {skill.name}
          </div>
          <div
            style={{
              fontFamily: FONT,
              fontSize: 13,
              color: FAINT,
              opacity: interpolate(Math.max(0, frame - 370), [0, 15], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            Part of /Acumen &mdash; Product fluency for AI
          </div>
        </AbsoluteFill>
      </Sequence>

      <ProgressBar color={skill.color} />
    </AbsoluteFill>
  );
};
