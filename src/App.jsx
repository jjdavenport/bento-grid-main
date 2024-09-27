import ai from "./components/assets/illustration-ai-content.webp";
import growth from "./components/assets/illustration-audience-growth.webp";
import schedule from "./components/assets/illustration-consistent-schedule.webp";
import create from "./components/assets/illustration-create-post.webp";
import stars from "./components/assets/illustration-five-stars.webp";
import grow from "./components/assets/illustration-grow-followers.webp";
import platforms from "./components/assets/illustration-multiple-platforms.webp";
import posts from "./components/assets/illustration-schedule-posts.webp";
import Create from "./components/create";
import Faster from "./components/faster";
import Grow from "./components/grow";
import Maintain from "./components/maintain";
import Manage from "./components/manage";
import Schedule from "./components/schedule";
import Social from "./components/social";
import Write from "./components/write";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <main className="bg-bg flex flex-col gap-8 p-4 font-custom text-lg">
        <Social icon={stars} />
        <Manage icon={platforms} />
        <Maintain icon={schedule} />
        <Schedule icon={posts} />
        <Grow icon={grow} />
        <Faster icon={growth} />
        <Create icon={create} />
        <Write icon={ai} />
      </main>
      <Footer />
    </>
  );
}

export default App;
