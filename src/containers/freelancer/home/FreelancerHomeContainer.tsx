"use client";

// import BestMatchIndex from "@/app/fl/dashboard/@views/bestmatch/page";
import Button from "@/components/buttons/Button";
import SearchBox from "@/components/home/SearchBox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RootState } from "@/features/store/store";
import { useSelector } from "react-redux";
import RecentJobs from "../jobs/RecentJobs";
import SavedJobs from "../jobs/SavedJobs";
import Link from "next/link";
import BestMatch from "../jobs/BestMatch";

const FreelancerHomeContainer = (props) => {
  const { user } = useSelector((state: RootState) => state.user);
  const { views, bestmatch } = props;
  console.log("views", views);
  console.log("bestmatch", bestmatch);

  return (
    <div className="relative">
      <div className="bg-blue h-[320px] w-full absolute top-0"></div>
      <div className="relative z-10">
        <div className="grid grid-cols-12 gap-5 px-28 py-11">
          <div className="feed col-span-8">
            <div className="flex flex-col w-full mb-5">
              <div className="pb-4">
                <div className="flex justify-start flex-col py-3 h-[156px] bg-white p">
                  <h2 className="text-2a1e17 font-medium font-montserrat-medium text-base   ">
                    {new Date(Date.now()).toLocaleDateString()}
                  </h2>
                  <h2 className="font-semibold">Welcome back</h2>
                  <h1 className="text-orange">
                    {user?.user_account?.username}
                  </h1>
                </div>
              </div>
              <SearchBox />
            </div>
            <div className="pt-8">
              <div>
                <h1>Jobs you might like</h1>
              </div>
              <Tabs defaultValue="best-match" className="">
                <TabsList>
                  <TabsTrigger value="best-match">Best match</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                  <TabsTrigger value="Saved">Saved</TabsTrigger>
                </TabsList>
                <TabsContent value="best-match">
                  <BestMatch />
                </TabsContent>
                <TabsContent value="recent">
                  <RecentJobs />
                </TabsContent>
                <TabsContent value="Saved">
                  <SavedJobs />
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="account col-span-4 gap-5 flex flex-col">
            <div>
              <div className="bg-white py-12 px-6 flex flex-col gap-10">
                {/* <img src="" alt="" /> */}
                <div>Image</div>
                <div>
                  <h1>USER NAME</h1>
                </div>
                <div>
                  <progress value={80} max={"100"} />
                </div>
                <div>
                  <Button variant="outlined">Complete your profile</Button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white">
                <h1>Get Premium</h1>
              </div>
            </div>
            <div className="bg-white">
              <div>
                <h1>My Contracts</h1>
                <h1>
                  Total <span className="font-bold">10</span>
                </h1>
              </div>
            </div>
            <div className="bg-white">
              <div>
                <h1>Your bids</h1>
                <h1>
                  Total <span className="font-bold">10</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerHomeContainer;
