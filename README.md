# node-rdstation-viral-loops-api

RD Station + Viral Loops integration using NodeJS + Express

## Getting Started

This project is a starting point if you want to integrate RD Station and Viral Loops campaigns.

## IMPORTANT / HOW TO

Remember to replace "VIRAL_LOOPS_CAMPAIGN_API_TOKEN" into 'src\controllers\participant_controller.js' with VIRAL CAMPAIGN TOKEN.

You also need to create a field named "referral" into the RD Station Form and include the code below at the Javascript Body, replacing the 'rd-text_field-id':

var _referralField = document.getElementById("rd-text_field-id");
_referralField.value = get('referral');
_referralField.style.visibility="hidden";
$('#rd-text_field-id').parents('.bricks-form__field').children('label').html(' ');

Now, create a webhook into the RD Station, pointing to your https://your-url:port/set (port is 3000 by default).
