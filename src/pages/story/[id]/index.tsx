import FacebookLogo from "@/assets/images/icons/facebook-logo";
import LinkedinLogo from "@/assets/images/icons/linkedin-logo";
import TwitterLogo from "@/assets/images/icons/twitter-logo";
import StoryAuthor from "@/components/author";
import BlogLayout from "@/components/layout/home";
import { serializeToHTML } from "@/modules/slate/serialize";
import {
  Article,
  ShareButton,
  StoryByLine,
  StoryContent,
  StoryHeading,
  StorySharing,
} from "@/styles/story.styles";
import { LinkOutlined } from "@mui/icons-material";
import Head from "next/head";
import { StoryModel } from "@/modules/backend";
import { getAnalytics } from "firebase/analytics";
import { app } from "@/modules/backend/client";
import { useRouter } from "next/router";

import type { GetServerSideProps } from "next";
import { StoryJoinedJSON } from "@/types/backend";
import { jsonify } from "@/modules/utils";

export const getServerSideProps: GetServerSideProps<StoryRouteProps> = async (
  context
) => {
  const id = context?.params?.id as string;

  const result = await StoryModel.query()
    .withGraphJoined({ author: true, draft: true })
    .findById(id);

  if (!result) throw new Error("Story Not Found");

  const transformed = jsonify(result.toJSON());

  return { props: { story: transformed } };
};

export interface StoryRouteProps {
  story: StoryJoinedJSON;
}

export default function StoryRoute(props: StoryRouteProps) {
  const story = props.story;
  const { title, content } = story.draft;

  return (
    <BlogLayout>
      <Head>
        <title>{`${title} | Disrobe`}</title>
      </Head>

      <Article>
        <StoryHeading>{title}</StoryHeading>
        <StoryByLine>
          <StoryAuthor story={story} />
          <StorySocials />
        </StoryByLine>

        <StoryContent>{serializeToHTML(content)}</StoryContent>
      </Article>
    </BlogLayout>
  );
}

function StorySocials() {
  const router = useRouter();
  const origin = typeof location !== "undefined" ? location.origin : "";
  const id = router.query.id as string;
  const storyLink = `${origin}${router.asPath}`;
  console.log("firebase app", app);
  const analytics = app && getAnalytics(app);

  const shareTwitter = () => {
    // logEvent(analytics, "share", {
    //   item_id: id,
    //   content_type: "story",
    //   method: "twitter",
    // });
  };

  const shareFacebook = () => {
    // logEvent(analytics, "share", {
    //   item_id: id,
    //   content_type: "story",
    //   method: "facebook",
    // });
  };

  const shareLinkedin = () => {
    // logEvent(analytics, "share", {
    //   item_id: id,
    //   content_type: "story",
    //   method: "linkedin",
    // });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(storyLink);
    // logEvent(analytics, "share", {
    //   item_id: "",
    //   content_type: "story",
    //   method: "copy_link",
    // });
  };

  return (
    <StorySharing>
      <ShareButton id="share-fb">
        <FacebookLogo />
      </ShareButton>

      <ShareButton id="share-lnkd">
        <LinkedinLogo />
      </ShareButton>

      <ShareButton id="share-twt">
        <TwitterLogo />
      </ShareButton>

      <ShareButton id="share-twt" onClick={copyLink}>
        <LinkOutlined />
      </ShareButton>
    </StorySharing>
  );
}
