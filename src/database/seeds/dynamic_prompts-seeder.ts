exports.seed = async function (knex) {
    await knex("dynamic_prompts").del();
    await knex("dynamic_prompts").insert([
      { prompt: "What enhancement?", type: "text", result_impact: JSON.stringify([
        { label: "Waterproofing", cost_impact: -5, result_impact:{ materialAdjustment: { CO2_per_unit: 0, cost_per_unit: 0 } },},
        { label: "Eco-Boost", cost_impact: -3, result_impact:{ materialAdjustment: { CO2_per_unit: -25, cost_per_unit: 0 } },},
        { label: "Durability-Surge", cost_impact: -6, result_impact:{ materialAdjustment: { CO2_per_unit: -25, cost_per_unit: 0 } },},
        { label: "Smart-Strength Blend", cost_impact: -6, result_impact:{ materialAdjustment: { CO2_per_unit: -25, cost_per_unit: 0 } },},
        { label: "Industrial-Grade Boost", cost_impact: -7, result_impact:{ materialAdjustment: { CO2_per_unit: 0, cost_per_unit: 0 } },},
        { label: "Affordable Mix", cost_impact: -4, result_impact:{ materialAdjustment: { CO2_per_unit: 0, cost_per_unit: -25 } },},
        { label: "Housing Strength Boost", cost_impact: -2, result_impact:{ materialAdjustment: { CO2_per_unit: -25, cost_per_unit: 0 } },},
        { label: "Extreme Weather Shield", cost_impact: -6, result_impact:{ materialAdjustment: { CO2_per_unit: -25, cost_per_unit: 0 } },},
        { label: "Green Blend", cost_impact: -4, result_impact:{ materialAdjustment: { CO2_per_unit: -25, cost_per_unit: 0 } },},
      ])
    },
]);

}



  