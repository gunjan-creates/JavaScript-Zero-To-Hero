// Show how arrow functions capture the surrounding this value.
const team = {
  name: "Avengers",
  members: ["Tony", "Steve", "Natasha"],
  listMembers() {
    this.members.forEach((member) => {
      console.log(`${member} fights for ${this.name}`);
    });
  },
};

team.listMembers();