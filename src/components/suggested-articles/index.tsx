import { combineURLQuery, getMediaURL, getStoryThumb } from "@/modules/utils";
import { StoryJoinedJSON } from "@/types/backend";
import {
  ArticlesSidebar,
  AuthorBox,
  AuthorImage,
  AuthorName,
  SidebarHeading,
  StoriesFlex,
  StoryItem,
  StoryItemContent,
  StoryItemContentWrapper,
  StoryItemHeading,
  StoryItemImage,
  StoryItemLink,
} from "./styles";

interface SuggestedArticlesProps {
  stories: StoryJoinedJSON[];
}

export default function SuggestedArticles(props: SuggestedArticlesProps) {
  return (
    <ArticlesSidebar>
      <SidebarHeading>Recent Posts</SidebarHeading>

      <StoriesFlex>
        {props.stories.map((story) => {
          const author = story.author;
          const thumbnail = getStoryThumb(story.draft.content);

          const storyURL = combineURLQuery(`/story/${story.id}`, {
            utm_source: "website",
            utm_medium: "sidebar",
            utm_campaign: "suggested_stories",
            utm_content: story.id,
          });

          return (
            <StoryItemLink key={story.id} href={storyURL}>
              <StoryItem>
                <StoryItemImage ImageProps={{ src: thumbnail?.url }} />
                <StoryItemContentWrapper>
                  <StoryItemContent>
                    <StoryItemHeading>{story.draft.title}</StoryItemHeading>
                    <AuthorBox>
                      <AuthorImage
                        src={getMediaURL(author.picture || "")}
                        alt={author.name}
                      />
                      <AuthorName>{author.name}</AuthorName>
                    </AuthorBox>
                  </StoryItemContent>
                </StoryItemContentWrapper>
              </StoryItem>
            </StoryItemLink>
          );
        })}
      </StoriesFlex>
    </ArticlesSidebar>
  );
}
