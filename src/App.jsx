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
import ManageDesktop from "./components/manage-desktop";
import ScheduleDesktop from "./components/schedule-desktop";
import Social from "./components/social";
import Write from "./components/write";
import Footer from "./components/footer";
import ScheduleMobile from "./components/schedule-mobile";
import ManageMobile from "./components/manage-mobile";
import { useMediaQuery } from "react-responsive";

function App() {
  const desktop = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <div className="flex h-full min-h-screen flex-col bg-main md:justify-between">
        <div className="flex flex-1 items-center justify-center">
          <main className="max-w-screen-lgx flex flex-col font-custom text-lg font-normal leading-6 ~md/lg:~gap-4/8 ~md/xl:~px-4/0 ~md/xl:~py-4/16 md:grid md:max-h-[62rem] md:grid-cols-4 md:grid-rows-6">
            <Social
              icon={stars}
              className="col-span-2 row-span-2 flex flex-col items-center justify-center gap-4 rounded-xl bg-purple500 p-8 text-center leading-none text-white"
            />
            {desktop ? (
              <ManageDesktop
                icon={platforms}
                className="relative row-span-2 flex flex-col overflow-hidden rounded-xl bg-white p-4 md:justify-between md:pl-6 md:pr-0 md:pt-6"
              />
            ) : (
              <ManageMobile
                icon={platforms}
                className="relative row-span-2 flex flex-col overflow-hidden rounded-xl bg-white p-4 md:justify-between md:pl-6 md:pr-0 md:pt-6"
              />
            )}
            <Maintain
              icon={schedule}
              className="row-span-2 flex flex-col gap-2 overflow-hidden rounded-xl bg-yellow500 ~md/xl:~pt-4/6 ~md/xl:~pr-4/8 ~md/xl:~pl-4/8 md:items-center md:justify-between md:gap-0"
            />
            {desktop ? (
              <ScheduleDesktop
                icon={posts}
                className="relative col-start-4 row-span-4 row-start-1 flex flex-col justify-center gap-4 overflow-hidden rounded-xl bg-purple100 p-4 py-6 text-center md:p-0 md:text-left"
              />
            ) : (
              <ScheduleMobile
                icon={posts}
                className="relative col-start-4 row-span-4 row-start-1 flex flex-col gap-4 overflow-hidden rounded-xl bg-purple100 p-4 py-6 text-center md:p-0 md:text-left"
              />
            )}

            <Grow
              icon={grow}
              className="col-span-2 col-start-3 row-span-2 flex flex-col items-center gap-6 rounded-xl bg-purple500 p-6 text-center md:flex-row md:gap-2 md:pr-1 md:text-left"
            />
            <Faster
              icon={growth}
              className="col-start-2 row-span-2 row-start-5 flex flex-col justify-between gap-4 rounded-xl bg-white p-6 md:gap-0"
            />
            <Create
              icon={create}
              className="col-start-1 row-span-3 row-start-1 flex flex-col gap-4 rounded-xl bg-yellow100 ~md/xl:~px-4/8 ~md/xl:~py-8/0 md:justify-center"
            />
            <Write
              icon={ai}
              className="col-start-1 row-span-3 row-start-4 flex flex-col justify-between gap-4 rounded-xl bg-yellow500 p-6 md:gap-0"
            />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
