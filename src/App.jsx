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
      <main className="flex flex-col gap-8 bg-bg p-4 font-custom text-lg md:grid md:grid-cols-4 md:grid-rows-6 md:gap-4">
        <Social
          icon={stars}
          className="col-span-2 row-span-2 rounded-xl bg-purple500 p-4 text-white"
        />
        <Manage
          icon={platforms}
          className="row-span-2 rounded-xl bg-yellow100 p-4"
        />
        <Maintain
          icon={schedule}
          className="row-span-2 rounded-xl bg-yellow500 pl-4 pt-4"
        />
        <Schedule
          icon={posts}
          className="col-start-4 row-span-4 row-start-1 rounded-xl bg-purple100 p-4"
        />
        <Grow
          icon={grow}
          className="col-span-2 col-start-3 row-span-2 rounded-xl bg-purple500 p-4"
        />
        <Faster
          icon={growth}
          className="col-start-2 row-span-2 row-start-5 rounded-xl bg-white p-4"
        />
        <Create
          icon={create}
          className="col-start-1 row-span-3 row-start-1 rounded-xl bg-yellow100 p-4"
        />
        <Write
          icon={ai}
          className="col-start-1 row-span-3 row-start-4 rounded-xl bg-yellow500 p-4"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
