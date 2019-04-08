# DESCRIPTION:

This project is the front-end for the Admin Console and Admin Settings Service.  The latter (the Settings Service) is
slowly being replaced by the Admin Console's Kafka notification topic and library.  There are many features in the admin
console, but primarily, it serves settings for our various services.

Information is presented in pages, sections, and fields. Pages are logical groupings of settings groups.  Sections are 
groups of settings for one system or another.  Within each settings group, each setting is then represented by a field. 
In this sense, a field can be as simple as a single form field, or as complex as a full editable table with multiple form 
fields therein.

Lastly, within the interface JSON, one can declare "groups" that have access to a particular page and/or section.  When 
users log in, the whitelist fields and their associated settings groups are retrieved from the interface JSON.  The 
corresponding settings groups are then looked up, and the user assigned security groups to match those they have access 
to.

# LOCAL EDITING:
There is a NodeJS project in the "local_node_editor" folder.  This project exists to make local development easier.  One 
can use this local editor in conjunction with their local version of the interface JSON, or choose to point to one of our
actual environments for the JSON.

## 1) Getting started
1 - Begin by opening a terminal and navigating to the `/local_node_editor` folder

2 - Run `npm install`

3 - Run `npm start`

4 - Open a browser to `http://localhost:3000/tester.html`

Note that you will have to re-start the process if you make any changes to the app.js file in the local_node_editor folder.

## 2) Making changes
The NodeJS project serves all of the files required for the console from their in-situ locations.
Most of the files are found underneath:
> /src/main/resources/static/

The main interface html file is at:
> /src/main/resources/templates/dynconsole.html

## 3) Feigning different logins
Within the local_node_editor folder is app.js.  Within this file, near the top, the user's access level is defined.  If 
you change this access level, the navigation won't respond as it would in the actual admin console, but the pages, 
themselves, will.  Sections will not appear if your group does not have access to them.  Please remember to change it 
back to "msg-admin-console" when done working.

# WORKING IN THE ADMIN CONSOLE
## 1) Interface JSON:
The "msg-admin-console-interface-json" project has its own readme that defines how to interact with the JSON.  Please 
become very familiar with it before continuing to work on the admin console.  A description of how each feature works is
defined in the Interface JSON section below.

## 2) Field Types
Also defined in the Interface JSON section below are definitions of all of the re-usable field types defined for the admin 
console. If you're working on a feature and find that there is not a field available that covers your implemenation, you 
can create your own new field type.  Theoretically, fields should be re-usable across multiple applications.  If you are 
creating something so complex that its field will not be re-usable across multiple implementations, then you should 
consider making a custom section, instead.

Creation of a new field type requires addition of the new directive script tag to dynconsole.html, as well as an entry 
added to:
> views/sections/interface-section.html

Please add your entry alphabetically.

## 3) Standard and Tabbed Sections
Standard sections are all managed by the interface JSON.  They automatically retrieve all settings required, populate 
fields accordingly, perform save actions, and handle errors.

## 4) Custom Sections
When a user experience or the settings a field is trying to represent require a one-off interface, you should use a custom
section.  This directive basically takes over for all of the functionality that exists in either a standard or a tabbed 
section.  It will have to do all of the things that a standard section would do: retrieve settings, populate the interface, 
provide a save/action button, and perform any error handling from these actions.

Custom sections require addition of the new directive script tag to dynconsole.html, as well as an entry added to:
> views/page/interface-page.html

Please add your entry alphabetically.

## 5) Navigation
If you're adding a whole new page to the admin console, please work with our UX team to determine where the new page/settings 
group should be represented in the navigation and overall structure.  As will be defined later, the navigation is smart 
and only presents the pages that should be available to the user.  If a page is not represented in the navigation, it will
be added to the right side of the main nav.

# INTERFACE JSON
We should always work together with two different cohorts when creating new pages or sections in the admin console:

1. UI/UX - Work with the UI/UX team to determine where, within the console navigation/page structure, your new settings 
or page belongs
1. Business Partners - Work with your development and/or product lead to determine who should have access to your new 
page or settings group, you may need to add a whole new white list or a group to an existing whitelist on the Access page.  

## Pages
The "pages" element of the interface JSON is a huge array of all the pages defined for the admin console.  Every settings 
group exists within a page.  Pages should have a reference in the navigation (see below).  If not found in the navigation,
the "link" property is used to append a link to the right side of the navigation.

Properties:
- id: (unique) The id for the page used by the navigation system and the URL "main" -> "console-main" in the URL
- title: The title for the page
- link: The text to use for the page link, if not found in navigation
- groups: (optional) The security groups that should have access to this page (see Security section, below)
- columns: The number of columns to break the page into, typically 2 works best
- sections: The sections for the page

## Sections
There are basically three types of section: "Standard", "Tabbed", and "Custom".

Properties:
- id: The ID of the settings group to be retrieved for this section
- title: The title of the section on the page
- description: (optional) The description of the section
- groups: (optional) The security groups that should have access to this section (see Security section, below)
- view: (optional) The custom view name to use for this section, if making a custom section
- sections: (optional) The array of sub-sections for a tabbed section
- fields: (optional) The array of fields for a standard (or tab) section

### 1) Standard Sections
Standard sections are simply lists of fields that automatically handle data retrieval, save events, and error handling. 
To make a standard section, do not define a "view" property or "sections" array underneath, just a "fields" array.

Sample:

{
  "id": "msg-admin-console",
  "title": "Access Control",
  "groups": [ "msg-admin-console" ],
  "fields": [
    //etc...
  ]
}


### 2) Tabbed Sections
Tabbed sections are simply groups of individual sections.  To create a tabbed section, do not define a "view" property or 
"fields" array underneath, just a "sections" array.

Note that within your tabbed section, the ID of subsections should correspond to the settings group from which that tab's 
settings are retrieved.  It is okay for tabs to maintain the same ID.  If your tab or section contains only text service 
or CM-Text Value fields, your ID does not need to match the settings group ID from the Dynamo.

   Sample:

{
  "id": "-tabbed-test-",
  "title": "Tabbed Test",
  "groups": [ "msg-admin-console" ],
  "sections": [
    {
      "id": "msg-copy-administration",
      "title": "Admin",
      "fields": [
        //etc...
      ]
    },
    {
      "id": "_dave-test",
      "title": "Text",
      "description": "Get text settings from text-service",
      "fields": [
        //etc...
      ]
    },
    //etc...
  ]
}


### 3) Custom Sections
Custom sections are the best place to create custom functionality specific to a particular user-experience.  To create a 
custom section, give it a "view" property that corresponds to your custom section directive name.  This property should 
match It should have a single field underneath, just to pass validations - please see examples in the existing interface 
JSON.

Note that your custom section entry still requires at least one field (for validation purposes).  Please use the 
"settings" or "none" flags for the data property of these fields. 

Sample:

{
  "id": "_msg-social-encrypt-coolness",
  "title": "Encrypt Any String",
  "description": "Encrypt it!",
  "view": "encrypt",
  "fields": [
    {
      "label": "Encrypt String",
      "type": "_encrypt",
      "data": "_none_"
    }
  ]
}


## Fields
Most every property presented in the admin console can be handled by re-usable fields.  The fields JSON is very straight-
forward.  However, there are a few special cases where values have been overloaded, depending on the field type.

Properties:
- type: The field type to be used for a setting
- label: The label to use for the field
- data: The property in the settings group that the field should use for its value(s)
- enabled_checkboxes: (optional) Array of section-fields' "data" properties that should evaluate to true for field to be enabled
- options: (optional) Array of id/label pairs that correspond to field options
- encrypted: (optional) "encrypted" Field values should be encrypted - default for "credentials" field type
- note: (optional) A note explaining the content of a field

### Overloading Options
The options array was initially conceived to contain id/label pairs for select list options.  However, as fields got more
and more complex, the use of overloaded options became a lot more common.  Using a the options array in this way keeps the
overall interface JSON definition tidy, and makes cases available for field implementations.

There are two ways to easily overload the options for complex usages: stringifying JSON or a method of codifying 
multiple pieces of data into a single option.

#### Example
I want to define columns for each of the columns of a table.  The options array allows me to set an id and a label.  For
both solutions, we'll use the id property as a unique ID for each column.

##### Solution 1 - Stringified JSON
javascript
{
  "id": "column1",
  "label": "{\"label\": \"Column 1\",\"fieldType\":\"text\"}"
}


Here, we've used stringified JSON to encode the data into the label property.  In our field definition, we would then have
to use JSON.parse() on each option's label property to retrieve the values.

##### Solution 2 - Codified String
javascript
{
  "id": "column1",
  "label": "text|Column 1"
}


Here, we've used a codified string (using "|" as a delimiter between the field type and the column label.  As you can see,
it's a lot smaller than the JSON example above.  The field type has been put first, so that if, for any reason, one wanted
an actual "|" in the column label, we could re-join the rest of the field based on knowing that we only expect one "|".

javascript
let optionArr = optionVal.split('|');
let fieldType = optionArr.shift();
let fieldLabel = optionArr.join('|');
`

### Field Definitions
- acct-type-table - Table of account types for SMS accounts
- bubble-list - Used for arrays of strings (see skill filters on CI widget page) - field is re-used by white-list fields
- bubble-table - List of bubble lists (see card sorting on CI widget page)
- checkbox - Simple on/off checkbox for boolean settings
- checkbox-list - Multi select list of checkbox entries - options id/label correspond to checked value and label for checkboxes
- cm-text-values - Field for breaking-out select-madlib-values field into individual entries per option in the list, data
 property should be the id in the select-madlib-values option and options should match option entry for individual list entry
- credentials - Textarea field for storing encrypted credentials - will take any value given, but we typically define a JSON structure and use the "note" property to explain it in the UI
- download - A table of download options to be used in conjunction with the upload field
- json - A text area for inputting JSON
- oauth-table - A tabular input of oAuth 2 security credentials
- select - A select list - use options for list entries
- select-madlib-template - A select list tied to a text area for entering MadLib strings (deprecated for text-service)
- select-madlib-values - A select list tied to entry fields for MadLib values (deprecated for text-service)
- short-code-table - A field for SMS short-code entries
- short-code-token-table - A field for SMS short-code tokens
- text - Standard text input
- text-service-madlib-values - A field linked to MadLib values for a text-service string - "data" property should be ID 
 of string
- text-service-select-madlib-template - A field contains a dropdown list and linked to MadLib textarea for a text-service
 string - "options" property should be list of "id" and "label". "id" is ID of the string and "label" is what it presents
 in dropdown list.
- text-service-select-madlib-values - A field contains a dropdown list and linked to MadLib values for a text-service 
 string - "options" property should be list of "id" and "label". "id" is ID of the string and "label" is what it presents
 in dropdown list.
- text-service-text - A standard text field linked to text-service values - "data" property should be ID of string
- text-service-textarea - A standard textarea field linked to text-service values - "data" property should be ID of string
- textarea - Standard textarea input
- upload - Used for uploads to either a service ("forward" option) or S3 ("s3" option) - please see directive file/interface
 JSON for information and examples
- user-login-table - Table of login credentials
- white-list - A list of NTIDs to control access (see security section below)
- white-list-groups - Grouped lists of NTIDs to allow partners to control access within their own groups (see security 
 section below)

# Security
Believe it or not, all of the security for the admin console is contained in the interface JSON.  It is best described by 
explaining the actions that happen on user login:

1. User submits form with credentials
2. Credentials are checked against active directory to ensure validity
3. Interface JSON is loaded and scanned for any section containing a "white-list" or "white-list-groups" field
4. Settings for these sections are loaded and the white list data therein checked for the user's NTID
5. A user is given security groups that match the section id that their NTID was found in
    - For a "white-list" field (not grouped), the security group is simply the section id: e.g. A user whose NTID is found 
    in the white list of the msg-admin-console would be given a security group of "msg-admin-console"
    - For a "white-list-groups" field, the same, generally is true - however, the id of the group is suffixed to the section 
    id: e.g. A user whose NTID is found in the "changetext" group of the grouped white list in the "msg-sms-access" section 
    would eb given a security group of "msg-sms-access_changetext" where the formula is \[section id\]_\[group id\]
6. Once all of a users groups have been assigned them, the groups property for each page and section is compared against 
  the overall list of access groups for the user.
    - If a page maintains a "groups" property, the user must be in at least one group that has been listed for having access 
    to the page
    - If a section maintains a "groups" property, the user must be in at least one group that has been listed for having 
    access to the section
    - Only pages and sections that the user has access to will be presented in the navigation and on pages the user can access
    - When saving settings, a check is done against this same security model to ensure that the user should be allowed to 
    save the settings they are trying to save
