interface skillBarProps {
  heading: string;
  skills: number;
}

export default function SkillBar({ heading, skills }: skillBarProps) {
  return (
    <div className="">
      <div className="flex justify-between items-center p-1">
        <h4 className="text-gray-100 font-semibold text-md">{heading}</h4>

        <h4 className="text-gray-100 font-semibold text-lg ">{skills} %</h4>
      </div>

      <div className="border-2 border-[#29ace0] p-2 rounded-md">
        <div className="bg-[#29ace0] p-1 rounded-md h-full "
        style={{ width: `${skills}%` }}
        ></div>
      </div>
    </div>
  );
}
