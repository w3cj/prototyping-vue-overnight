<template>
<div>
<div id="mc_embed_signup">
<form action="https://twitter.us19.list-manage.com/subscribe/post?u=216665a27693667077a1ff68d&amp;id=31f74f96f9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe to our mailing list</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_216665a27693667077a1ff68d_31f74f96f9" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
</div>
</template>

<script>
import 'http://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';

    export default {
        name: "MailchimpSubscribe",
        props: {
            action: {
            required: true,
            type: String
            }
        },
        data() {
            return {
                email: '',
                $mcj: jQuery.noConflict(true)
            }
        },
        mounted() {
            this.initializeMC(jQuery);
        },
        methods: {
            initializeMC($) {
                window.fnames = new Array(); 
                window.ftypes = new Array();
                fnames[0]='EMAIL';
                ftypes[0]='email';
                fnames[1]='FNAME';
                ftypes[1]='text';
                fnames[2]='LNAME';
                ftypes[2]='text';
                fnames[3]='ADDRESS';
                ftypes[3]='address';
                fnames[4]='PHONE';
                ftypes[4]='phone';
                fnames[5]='BIRTHDAY';
                ftypes[5]='birthday';
            }
        }
    }
</script>

<style scoped>
@import "http://cdn-images.mailchimp.com/embedcode/classic-10_7.css";
    #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
</style>

