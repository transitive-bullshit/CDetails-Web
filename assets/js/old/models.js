/*! models.js
 * 
 * Defines all models used by this project.
 * 
 * Copyright (c) 2012-2013 Travis Fischer
 */

define(["Schema", "Model"], 
function(Schema,   Model)
{
    var CDEntity = Model.extend({
        _get_schema : function() {
            return new Schema(arguments, 
                new Schema.Element('uid',   { 'type' : "string", 'required' : true, 'primary_id' : true }), 
                new Schema.Element('name',  { 'type' : "string", 'required' : true }), 
                new Schema.Element('phone', { 'type' : "string", 'required' : true })
            );
        }
    });
    
    var CDUser = Model.extend({
        _get_schema : function() {
            return new Schema(arguments, 
                new Schema.Element('uid',               { 'type' : "string", 'required' : true, 'primary_id' : true }), 
                new Schema.Element('name',              { 'type' : "string", 'required' : true }), 
                new Schema.Element('phone',             { 'type' : "string", 'required' : true }), 
                new Schema.Element('type',              { 'type' : "string", 'required' : true }), 
                new Schema.Element('version',           { 'type' : "number", 'required' : true }), 
                new Schema.Element('login',             { 'type' : "string", 'required' : true }), 
                new Schema.Element('deleted',           { 'type' : "boolean", 'required' : true }), 
                new Schema.Element('auto_confirming',   { 'type' : "boolean", 'required' : true }), 
                new Schema.Element('auto_deleting',     { 'type' : "boolean", 'required' : true }), 
                new Schema.Element('auto_cancelling',   { 'type' : "boolean", 'required' : true }), 
                new Schema.Element('organizations',     { 'type' : "string", 'required' : true })
            );
        }
    });
    
    var CDEvent = Model.extend({
        _get_schema : function() {
            return new Schema(arguments, 
                new Schema.Element('uid',               { 'type' : "string", 'required' : true, 'primary_id' : true }), 
                new Schema.Element('time',              { 'type' : "string", 'required' : true }), 
                new Schema.Element('expiration',        { 'type' : "string", 'required' : true }), 
                new Schema.Element('type',              { 'type' : "string", 'required' : true }), 
                new Schema.Element('data',              { 'type' : "string", 'required' : true })
            );
        }
    });
    
    var CDOrganization = Model.extend({
        _get_schema : function() {
            return new Schema(arguments, 
                new Schema.Element('uid',       { 'type' : "string", 'required' : true, 'primary_id' : true }), 
                new Schema.List('users',        { }, new Schema.Element({'type' : 'string'})), 
                new Schema.List('departments',  { }, new Schema.Element({'type' : 'string'})), 
                new Schema.List('documents',    { }, new Schema.Element({'type' : 'string'}))
            );
        }
    });
    
    var CDRequest = Model.extend({
        _get_schema : function() {
            return new Schema(arguments, 
                new Schema.Element('uid',               { 'type' : "string", 'required' : true, 'primary_id' : true }), 
                new Schema.Element('sender_id',         { 'type' : "string", }), 
                new Schema.Element('receiver_id',       { 'type' : "string", }), 
                new Schema.Element('time',              { 'type' : "number", }), 
                new CDScheduleEntry('entry',            { }).schema(), 
                new Schema.List('dependent_entries',    { }, new CDScheduleEntry().schema())
            );
        }
    });
    
    var CDScheduleEntry = Model.extend({
        _get_schema : function() {
            return new Schema(arguments, 
                new Schema.Element('uid',               { 'type' : "string", 'required' : true, 'primary_id' : true }), 
                new Schema.Element('start',             { 'type' : "number", }), 
                new Schema.Element('end',               { 'type' : "number", }), 
                new Schema.Element('user_id',           { 'type' : "string", }), 
                new Schema.Element('type',              { 'type' : "string", }), 
            );
        }
    });
    
    return {
        
    };
});

