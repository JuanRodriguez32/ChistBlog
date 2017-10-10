import { Mongo } from 'meteor/mongo';
 
export const Tasks = new Mongo.Collection('tasks');


//No existen los metodos de Meteor.publish y Meteor.methods()
