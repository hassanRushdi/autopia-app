import React, { useState } from "react";
import SectionHeading from "./SectionHeading";

const BranchSection = () => {
  const regions = ["City 1", "City 2", "City 3"];
  const branches = ["Branch 1", "Branch 2", "Branch 3"];
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  return (
    <section className="w-[80%] mx-auto my-14">
      <SectionHeading heading="CHOOSE TIME & BRANCH" />

      <div className="max-w-4xl my-8 mx-auto flex justify-between gap-8">
        {/* Region Selector */}
        <div className="flex flex-col w-1/2">
          <label className="mb-6 font-medium">Choose The Region</label>
          <select
            className="p-3 rounded-md bg-black border border-white focus:border-primary focus:ring-2 focus:ring-primary"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="">City</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* Branch Selector */}
        <div className="flex flex-col w-1/2">
          <label className="mb-6 font-medium">Choose The Branch</label>
          <select
            className="p-3 rounded-md bg-black border border-white focus:border-primary focus:ring-2 focus:ring-primary"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="">Choose The Branch</option>
            {branches.map((branch, index) => (
              <option key={index} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default BranchSection;
