import Resolutions from "./resolutions";

// Resolutions.insert({
//     name: "Test Res"
// });

export default {
  Query: {
    resolutions: () => {
      return Resolutions.find({}).fetch();
    }
  },

  Mutation: {
    createResolution: (obj, { name }, context) => {
      const resolutionId = Resolutions.insert({
        name
      });
      return Resolutions.findOne(resolutionId);
    },
    deleteResolution: (obj, { id }, context) => {
      console.log(`Removing resolution with id: ${id}`);
      const numRemoved = Resolutions.remove(id);
      return id;
    }
    // updateResolution: (obj, { id, name }, context) => {
    //   Resolutions.update(id, { $set: { name } });
    // }
  }
};
