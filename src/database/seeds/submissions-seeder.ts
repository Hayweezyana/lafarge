exports.seed = async function (knex) {
    await knex("submissions").del();
    const seedData = [
      {
        team: 1,
        scenario_id: 1,
        cost: "True",
        constraint: "True",
        innovation: "True",
        focus: "True",
        score: 550,
      },
      {
        team: 2,
        scenario_id: 1,
        cost: "True",
        constraint: "True",
        innovation: "True",
        focus: "True",
        score: 550,
      },
      {
        team: 3,
        scenario_id: 1,
        cost: "True",
        constraint: "True",
        innovation: "True",
        focus: "True",
        score: 550,
      },
      {
        team: 4,
        scenario_id: 1,
        cost: "True",
        constraint: "True",
        innovation: "True",
        focus: "True",
        score: 550,
      },
      {
        team: 5,
        scenario_id: 1,
        cost: "True",
        constraint: "True",
        innovation: "True",
        focus: "True",
        score: 550,
      },
    ];
    await knex("submissions").insert(seedData);
  };
  