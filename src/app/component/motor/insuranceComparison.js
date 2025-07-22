"use client";
import React from "react";

const InsuranceComparison = () => {
  return (
    <section className="bg-white px-4 md:px-10 py-16 text-gray-800">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Why You Should Choose a Comprehensive (First Party) Vehicle Insurance Policy Over Third Party Insurance
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          When it comes to insuring your vehicle, the choice between Comprehensive (First Party) and Third Party Insurance can impact your safety and finances. Here’s why comprehensive insurance is a smarter choice.
        </p>
      </div>

      {/* Explanation section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
        {/* Third Party */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-primary">What is Third Party Insurance?</h2>
          <p className="text-gray-600 mb-4">
            Third party insurance is the minimum legal requirement for driving a vehicle in India.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Damage to another person’s vehicle or property</li>
            <li>Injury or death of the third party</li>
          </ul>
          <p className="text-gray-600 mt-3">However, it does NOT cover:</p>
          <ul className="list-disc pl-5 text-red-600 space-y-1">
            <li>Damage to your own vehicle</li>
            <li>Theft of your car</li>
            <li>Natural calamities or man-made damages to your vehicle</li>
          </ul>
        </div>

        {/* Comprehensive */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-primary">What is Comprehensive (First Party) Insurance?</h2>
          <p className="text-gray-600 mb-4">
            Comprehensive insurance (also known as first-party insurance) covers:
          </p>
          <ul className="list-disc pl-5 text-green-700 space-y-1">
            <li>Third-party liabilities</li>
            <li>Own vehicle damage</li>
            <li>Theft</li>
            <li>Fire</li>
            <li>Natural disasters (floods, earthquakes, etc.)</li>
            <li>Man-made causes (vandalism, riots, etc.)</li>
          </ul>
          <p className="text-gray-600 mt-3">
            It also offers optional add-ons like zero-depreciation, engine protection, roadside assistance, etc.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-xl font-semibold text-center text-primary mb-4">
          Comparison Table: Comprehensive vs. Third Party Insurance
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border text-sm text-left text-gray-700">
            <thead className="bg-gray-100 font-bold text-center">
              <tr>
                <th className="border px-4 py-2">Feature</th>
                <th className="border px-4 py-2">Third Party</th>
                <th className="border px-4 py-2">Comprehensive</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {[
                ["Legally Mandatory", "✅", "✅"],
                ["Covers Third Party Damages", "✅", "✅"],
                ["Covers Own Vehicle Damage", "❌", "✅"],
                ["Covers Theft", "❌", "✅"],
                ["Covers Natural Disasters", "❌", "✅"],
                ["Covers Fire Damage", "❌", "✅"],
                ["Add-On Options", "❌", "✅"],
                ["Repair Cost Coverage", "❌", "✅"],
                ["Financial Protection", "❌ Limited", "✅ Full"],
                ["Peace of Mind", "❌ Basic", "✅ Full"],
              ].map(([feature, third, comp], idx) => (
                <tr key={idx}>
                  <td className="border px-4 py-2 text-left">{feature}</td>
                  <td className="border px-4 py-2">{third}</td>
                  <td className="border px-4 py-2">{comp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reasons Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-primary mb-4">Top Reasons to Choose Comprehensive Insurance</h2>
          <ol className="list-decimal pl-5 text-gray-700 space-y-2">
            <li>Added Protection Against Own Damage</li>
            <li>Theft, Fire & Natural Calamity Coverage</li>
            <li>Personal Accident Cover</li>
            <li>Financial Cushion & Peace of Mind</li>
            <li>Access to Add-ons</li>
            <li>Cashless Repair Benefits</li>
          </ol>
        </div>

        <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-primary mb-4">When Might Third Party Insurance Be Enough?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>If you're driving an old vehicle with low market value</li>
            <li>If you're not using the vehicle frequently</li>
            <li>If you're only looking for legal compliance</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InsuranceComparison;
