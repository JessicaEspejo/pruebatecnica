const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "62d64bd8da4722cc59753fffd23b2a7b-us17",
  server: "https://us17.api.mailchimp.com/3.0/"
});

const event = {
  name: "JS Developers Meetup"
};

const footerContactInfo = {
  company: "Mailchimp",
  address1: "675 Ponce de Leon Ave NE",
  address2: "Suite 5000",
  city: "Atlanta",
  state: "GA",
  zip: "30308",
  country: "US"
};

const campaignDefaults = {
  from_name: "Gettin' Together",
  from_email: "gettintogether@example.com",
  subject: "JS Developers Meetup",
  language: "EN_US"
};

async function run() {
  const response = await mailchimp.lists.createList({
    name: event.name,
    contact: footerContactInfo,
    permission_reminder: "permission_reminder",
    email_type_option: true,
    campaign_defaults: campaignDefaults
  });

  console.log(
    `Successfully created an audience. The audience id is ${response.id}.`
  );
}

run();