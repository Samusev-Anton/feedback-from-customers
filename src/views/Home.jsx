import { Comments, Hero, Loader, Section } from "../components";
import { useGetCommentsQuery } from "../redux/commentApi";

export const Home = () => {
  const { isLoading, isSuccess } = useGetCommentsQuery();
  return (
    <>
      {isLoading && <Loader />}
      <Section>
        {isSuccess && (
          <>
            <Hero
              title="What people are saying."
              subtitle="Feedback from our customers."
            />
            <Comments />
          </>
        )}
      </Section>
    </>
  );
};
