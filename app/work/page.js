import WorkSlider from "@/components/WorkSlider";

export default function Work() {
  return (
    <div className="w-full h-full flex justify-center items-center p-4">
      <div className="w-full max-w-4xl h-auto sm:w-3/4 md:w-2/3 lg:w-1/2">
        <WorkSlider />
      </div>
    </div>
  );
};
