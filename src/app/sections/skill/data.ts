const scrollStyle1 = { "--myScrollStyle": "15s" } as React.CSSProperties;
const scrollStyle2 = { "--myScrollStyle": "12s" } as React.CSSProperties;
const scrollStyle3 = { "--myScrollStyle": "8s" } as React.CSSProperties;
type TextType =
  | "JAVASCRIPT"
  | "CSS"
  | "HTML"
  | "TYPESCRIPT"
  | "GIT"
  | "FIGMA"
  | "GITHUB"
  | "VSCODE"
  | "GSAP"
  | "REACT"
  | "SASS"
  | "TAILWIND"
  | "NEXT";

interface SkillBoxType {
  className: `item${string}`;
  src: string;
  text: TextType;
}
interface SkillBoxContainerType {
  title: "CORE" | "TOOLS" | "FRAMEWORK";
  classNames: `skill-container`;
  style: React.CSSProperties;
  contents: {
    scrollerOne: {
      classNames: "scroller1";
      content: SkillBoxType[];
    };
    scrollerTwo: {
      classNames: "scroller2";
      content: SkillBoxType[];
    };
  };
}

export const core: SkillBoxContainerType = {
  title: "CORE",
  classNames: "skill-container",
  style: scrollStyle1,
  contents: {
    scrollerOne: {
      classNames: "scroller1",
      content: [
        {
          text: "JAVASCRIPT",
          className: "item1",
          src: "/image/jévascript.png",
        },
        {
          text: "CSS",
          className: "item2",
          src: "/image/css.png",
        },
        {
          text: "HTML",
          className: "item3",
          src: "/image/html.png",
        },
        {
          text: "TYPESCRIPT",
          className: "item4",
          src: "/image/typescript.png",
        },
      ],
    },
    scrollerTwo: {
      classNames: "scroller2",
      content: [
        {
          text: "JAVASCRIPT",
          className: "item5",
          src: "/image/jévascript.png",
        },
        {
          text: "CSS",
          className: "item6",
          src: "/image/css.png",
        },
        {
          text: "HTML",
          className: "item7",
          src: "/image/html.png",
        },
        {
          text: "TYPESCRIPT",
          className: "item8",
          src: "/image/typescript.png",
        },
      ],
    },
  },
};
export const tools: SkillBoxContainerType = {
  title: "TOOLS",
  classNames: "skill-container",
  style: scrollStyle2,
  contents: {
    scrollerOne: {
      classNames: "scroller1",
      content: [
        {
          text: "GIT",
          className: "item1",
          src: "/image/git.png",
        },
        {
          text: "FIGMA",
          className: "item2",
          src: "/image/figma.png",
        },
        {
          text: "GITHUB",
          className: "item3",
          src: "/image/github.png",
        },
        {
          text: "VSCODE",
          className: "item4",
          src: "/image/vscode.png",
        },
        {
          text: "GSAP",
          className: "item5",
          src: "/image/gsap.png",
        },
      ],
    },
    scrollerTwo: {
      classNames: "scroller2",
      content: [
        {
          text: "GIT",
          className: "item6",
          src: "/image/git.png",
        },
        {
          text: "FIGMA",
          className: "item7",
          src: "/image/figma.png",
        },
        {
          text: "GITHUB",
          className: "item8",
          src: "/image/github.png",
        },
        {
          text: "VSCODE",
          className: "item9",
          src: "/image/vscode.png",
        },
        {
          text: "GSAP",
          className: "item10",
          src: "/image/gsap.png",
        },
      ],
    },
  },
};
export const framework: SkillBoxContainerType = {
  title: "FRAMEWORK",
  classNames: "skill-container",
  style: scrollStyle3,
  contents: {
    scrollerOne: {
      classNames: "scroller1",
      content: [
        {
          text: "REACT",
          className: "item1",
          src: "/image/react.png",
        },
        {
          text: "SASS",
          className: "item2",
          src: "/image/sass.png",
        },
        {
          text: "TAILWIND",
          className: "item3",
          src: "/image/tailwind.png",
        },
        {
          text: "NEXT",
          className: "item4",
          src: "/image/next.png",
        },
      ],
    },
    scrollerTwo: {
      classNames: "scroller2",
      content: [
        {
          text: "REACT",
          className: "item5",
          src: "/image/react.png",
        },
        {
          text: "SASS",
          className: "item6",
          src: "/image/sass.png",
        },
        {
          text: "TAILWIND",
          className: "item7",
          src: "/image/tailwind.png",
        },
        {
          text: "NEXT",
          className: "item8",
          src: "/image/next.png",
        },
      ],
    },
  },
};

const coreScrollerOne = core.contents.scrollerOne;
const coreScrollerTwo = core.contents.scrollerTwo;
const toolsScrollOne = tools.contents.scrollerOne;
const toolsScrollTwo = tools.contents.scrollerTwo;
const frameworkScrollOne = framework.contents.scrollerOne;
const frameworkScrollTwo = framework.contents.scrollerTwo;
export {
  coreScrollerOne,
  coreScrollerTwo,
  toolsScrollOne,
  toolsScrollTwo,
  frameworkScrollOne,
  frameworkScrollTwo,
};
