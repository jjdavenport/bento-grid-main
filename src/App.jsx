import ai from "./components/assets/illustration-ai-content.webp";
import growth from "./components/assets/illustration-audience-growth.webp";
import schedule from "./components/assets/illustration-consistent-schedule.webp";
import create from "./components/assets/illustration-create-post.webp";
import stars from "./components/assets/illustration-five-stars.webp";
import grow from "./components/assets/illustration-grow-followers.webp";
import platforms from "./components/assets/illustration-multiple-platforms.webp";
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
      <main>
        <Create icon={create} />
        <Faster icon={growth} />
        <Grow icon={grow} />
        <Maintain icon={schedule} />
        <Manage icon={platforms} />
        <Schedule icon={schedule} />
        <Social icon={stars} />
        <Write icon={ai} />
      </main>
      <Footer />
    </>
  );
}

export default App;
