var DataTypes = require("sequelize").DataTypes;
var _assignees = require("./assignees");
var _categorycontainer = require("./categorycontainer");
var _chatroom = require("./chatroom");
var _directchat = require("./directchat");
var _directmessage = require("./directmessage");
var _linkedtrackers = require("./linkedtrackers");
var _person = require("./person");
var _roomchannel = require("./roomchannel");
var _roommessage = require("./roommessage");
var _subtrackers = require("./subtrackers");
var _tracker = require("./tracker");
var _trackercomments = require("./trackercomments");
var _trackercontainer = require("./trackercontainer");
var _userandtcs = require("./userandtcs");
var _usersandrooms = require("./usersandrooms");

function initModels(sequelize) {
  var assignees = _assignees(sequelize, DataTypes);
  var categorycontainer = _categorycontainer(sequelize, DataTypes);
  var chatroom = _chatroom(sequelize, DataTypes);
  var directchat = _directchat(sequelize, DataTypes);
  var directmessage = _directmessage(sequelize, DataTypes);
  var linkedtrackers = _linkedtrackers(sequelize, DataTypes);
  var person = _person(sequelize, DataTypes);
  var roomchannel = _roomchannel(sequelize, DataTypes);
  var roommessage = _roommessage(sequelize, DataTypes);
  var subtrackers = _subtrackers(sequelize, DataTypes);
  var tracker = _tracker(sequelize, DataTypes);
  var trackercomments = _trackercomments(sequelize, DataTypes);
  var trackercontainer = _trackercontainer(sequelize, DataTypes);
  var userandtcs = _userandtcs(sequelize, DataTypes);
  var usersandrooms = _usersandrooms(sequelize, DataTypes);

  assignees.belongsTo(person, { foreignKey: "assignee"});
  person.hasMany(assignees, { foreignKey: "assignee"});
  assignees.belongsTo(tracker, { foreignKey: "tracker"});
  tracker.hasMany(assignees, { foreignKey: "tracker"});
  categorycontainer.belongsTo(person, { foreignKey: "creator"});
  person.hasMany(categorycontainer, { foreignKey: "creator"});
  categorycontainer.belongsTo(trackercontainer, { foreignKey: "trackercontainer"});
  trackercontainer.hasMany(categorycontainer, { foreignKey: "trackercontainer"});
  directchat.belongsTo(person, { foreignKey: "user1_id"});
  person.hasMany(directchat, { foreignKey: "user1_id"});
  directchat.belongsTo(person, { foreignKey: "user2_id"});
  person.hasMany(directchat, { foreignKey: "user2_id"});
  directmessage.belongsTo(person, { foreignKey: "creator"});
  person.hasMany(directmessage, { foreignKey: "creator"});
  directmessage.belongsTo(directchat, { foreignKey: "directchat"});
  directchat.hasMany(directmessage, { foreignKey: "directchat"});
  directmessage.belongsTo(person, { foreignKey: "receiver"});
  person.hasMany(directmessage, { foreignKey: "receiver"});
  linkedtrackers.belongsTo(person, { foreignKey: "firsttracker_id"});
  person.hasMany(linkedtrackers, { foreignKey: "firsttracker_id"});
  linkedtrackers.belongsTo(person, { foreignKey: "secondtracker_id"});
  person.hasMany(linkedtrackers, { foreignKey: "secondtracker_id"});
  roomchannel.belongsTo(chatroom, { foreignKey: "room"});
  chatroom.hasMany(roomchannel, { foreignKey: "room"});
  roommessage.belongsTo(roomchannel, { foreignKey: "channel"});
  roomchannel.hasMany(roommessage, { foreignKey: "channel"});
  roommessage.belongsTo(person, { foreignKey: "privatereplyto"});
  person.hasMany(roommessage, { foreignKey: "privatereplyto"});
  roommessage.belongsTo(roommessage, { foreignKey: "replyto"});
  roommessage.hasMany(roommessage, { foreignKey: "replyto"});
  subtrackers.belongsTo(tracker, { foreignKey: "childtracker"});
  tracker.hasMany(subtrackers, { foreignKey: "childtracker"});
  subtrackers.belongsTo(tracker, { foreignKey: "parenttracker"});
  tracker.hasMany(subtrackers, { foreignKey: "parenttracker"});
  tracker.belongsTo(categorycontainer, { foreignKey: "categorycontainer"});
  categorycontainer.hasMany(tracker, { foreignKey: "categorycontainer"});
  tracker.belongsTo(person, { foreignKey: "reporter"});
  person.hasMany(tracker, { foreignKey: "reporter"});
  tracker.belongsTo(trackercontainer, { foreignKey: "trackercontainer"});
  trackercontainer.hasMany(tracker, { foreignKey: "trackercontainer"});
  trackercomments.belongsTo(person, { foreignKey: "creator"});
  person.hasMany(trackercomments, { foreignKey: "creator"});
  trackercomments.belongsTo(tracker, { foreignKey: "tracker"});
  tracker.hasMany(trackercomments, { foreignKey: "tracker"});
  trackercontainer.belongsTo(person, { foreignKey: "creator"});
  person.hasMany(trackercontainer, { foreignKey: "creator"});
  userandtcs.belongsTo(trackercontainer, { foreignKey: "trackercontainer_id"});
  trackercontainer.hasMany(userandtcs, { foreignKey: "trackercontainer_id"});
  userandtcs.belongsTo(person, { foreignKey: "trackercontainercreator"});
  person.hasMany(userandtcs, { foreignKey: "trackercontainercreator"});
  userandtcs.belongsTo(person, { foreignKey: "user_id"});
  person.hasMany(userandtcs, { foreignKey: "user_id"});
  usersandrooms.belongsTo(chatroom, { foreignKey: "chatroom_id"});
  chatroom.hasMany(usersandrooms, { foreignKey: "chatroom_id"});
  usersandrooms.belongsTo(person, { foreignKey: "roomcreator"});
  person.hasMany(usersandrooms, { foreignKey: "roomcreator"});
  usersandrooms.belongsTo(person, { foreignKey: "user_id"});
  person.hasMany(usersandrooms, { foreignKey: "user_id"});

  return {
    assignees,
    categorycontainer,
    chatroom,
    directchat,
    directmessage,
    linkedtrackers,
    person,
    roomchannel,
    roommessage,
    subtrackers,
    tracker,
    trackercomments,
    trackercontainer,
    userandtcs,
    usersandrooms,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
