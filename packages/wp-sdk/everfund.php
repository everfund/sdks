<?php
/**
 * Plugin Name: Everfund
 * Plugin URI: https://everfund.com
 * Description: Everfund takes the friction out of donating with an easy to set up donation portal for your WordPress website that help you convert more income for your charity and give your donors the best experience possible.
 * Tags: donation, donations, nonprofit, nonprofits, charity, charities, donation widget, fundraising, payment, payments, crowdfunding, campaign, stripe, campaigns, social causes, causes, credit card, credit cards, bacs, direct-debits
 * Requires at least: 5.3
 * Requires PHP: 7.0
 * Version: 3.0.1
 * Author: Everfund
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       everfund.com
 *
 * @package           create-block
 */
function everfund_show_apple_pay_domain_verification_file()
{
    if ($_SERVER['REQUEST_URI'] == '/.well-known/apple-developer-merchantid-domain-association') {
        readfile(dirname(__FILE__).'/apple-developer-merchantid-domain-association');
        exit();
    }
}

function everfund_create_menu()
{
    add_menu_page(__('Donations', 'everfund'), __('Donations', 'everfund'), 'administrator', __FILE__, 'everfund_plugin_settings_page', 'dashicons-info');
    add_action('plugins_loaded', 'register_everfund_plugin_textdomain');
}

function everfund_admin_styles()
{
    wp_register_style('custom_wp_admin_css', plugins_url('css/style.css', __FILE__), false, '1.0.0');
    wp_enqueue_style('custom_wp_admin_css');
}

function everfund_plugin_settings_page()
{
    ?>
<div class="wrap everfund-wrap">
    <div class="everfund-modal">
        <h2 class="everfund-title"><?php _e('Everfund is Successfully Installed!', 'everfund'); ?></h2>
        <p class="everfund-subtitle"><?php _e('Your WordPress site is now powered by Everfund\'s donation platform.', 'everfund'); ?></p>
        
        <div class="everfund-columns">
            <div class="everfund-column">
                <h3 class="everfund-heading"><?php _e('Manage Your Campaigns', 'everfund'); ?></h3>
                <p><?php _e('Set up and manage your fundraising campaigns through the Everfund dashboard.', 'everfund'); ?></p>
                <a class="everfund-button everfund-neutral" href="https://dashboard.everfund.com/fundraising/campaigns" target="_blank"><?php _e('Manage Campaigns', 'everfund'); ?></a>
            </div>
            <div class="everfund-column">
                <h3 class="everfund-heading"><?php _e('View Your Donations', 'everfund'); ?></h3>
                <p><?php _e('Track and analyze your donations in real-time through the Everfund dashboard.', 'everfund'); ?></p>
                <a class="everfund-button everfund" href="https://dashboard.everfund.com/donations" target="_blank"><?php _e('View Donations', 'everfund'); ?></a>
            </div>
        </div>

        <div class="everfund-info-box">
            <h4 class="everfund-info-title"><?php _e('Important Note:', 'everfund'); ?></h4>
            <p><?php _e('All campaign management, donation processing, and analytics are handled through the Everfund dashboard. The only action required in WordPress is adding donation buttons to your pages using the block editor.', 'everfund'); ?></p>
        </div>

        <h3 class="everfund-heading"><?php _e('Adding Donation Buttons:', 'everfund'); ?></h3>
        <ol class="everfund-list">
            <li><?php _e('Edit the page where you want to add a donation button.', 'everfund'); ?></li>
            <li><?php _e('Add a new block and search for "Everfund Donation Button".', 'everfund'); ?></li>
            <li><?php _e('Configure the button settings in the block options.', 'everfund'); ?></li>
        </ol>

        <p class="everfund-support"><?php _e('Need help? ', 'everfund'); ?> 
            <a href="https://help.everfund.com/en/" target="_blank"><?php _e('Contact Support', 'everfund'); ?></a> 
            <?php _e(' or check out our ', 'everfund'); ?>
            <a href="https://docs.everfund.com/docs/js-sdk/wordpress" target="_blank"><?php _e('WordPress Integration Guide', 'everfund'); ?></a>
        </p>
    </div>
</div>
  <?php
}

function everfund_sdk_script()
{
    wp_enqueue_script('everfund', plugins_url('/js/js-sdk.global.js', __FILE__));
}

function create_block_init() {
	register_block_type(__DIR__ . '/build');
	register_block_type(__DIR__ . '/build/donation-form');
    register_block_type(__DIR__ . '/build/donate-button');
}

function everfund_add_allowed_origins($origins)
{
    $origins[] = 'https://evr.fund';
    $origins[] = 'https://animals.charity';
    $origins[] = 'https://appeal.charity';
    $origins[] = 'https://emergency.charity';
    $origins[] = 'https://giveto.charity';
    $origins[] = 'https://hospice.charity';
    $origins[] = 'https://nhs.charity';
    $origins[] = 'https://shelter.charity';
    $origins[] = 'https://urgent.charity';
    $origins[] = 'https://api.everfund.com';
    $origins[] = 'https://everfund.com';

    return $origins;
}

add_filter('allowed_http_origins', 'everfund_add_allowed_origins');
add_action('admin_enqueue_scripts', 'everfund_admin_styles');
add_action('wp_enqueue_scripts', 'everfund_sdk_script');
add_action('wp_head', 'everfund_sdk_script', 1);
add_action('plugins_loaded', 'everfund_show_apple_pay_domain_verification_file');
add_action('admin_menu', 'everfund_create_menu');
add_action('init', 'create_block_init');
