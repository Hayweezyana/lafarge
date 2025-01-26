exports.seed = async function (knex) {
    await knex("teams").del();
    await knex("teams").insert([
      { id: "1", name: "Blue" },
      { id: "2", name: "Red" },
      { id: "3", name: "Green" },
      { id: "4", name: "Yellow" },
      { id: "5", name: "Orange" },
    ]);
  };
  