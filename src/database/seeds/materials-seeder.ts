exports.seed = async function (knex) {
    await knex("materials").del();
    await knex("materials").insert([
      { name: "Clinker", cost_per_unit: 50 , CO2_per_unit: 500, additional_cost_per_extra: 1, additional_CO2_per_extra: 10  },
      { name: "Limestone", cost_per_unit: 5 , CO2_per_unit: 0, additional_cost_per_extra: 0, additional_CO2_per_extra: 0  },
      { name: "Gypsum", cost_per_unit: 50 , CO2_per_unit: 0, additional_cost_per_extra: 0, additional_CO2_per_extra: 0 },
    ]);
  };
  