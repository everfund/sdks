<?php
/**
 * Plugin Name: Everfund
 * Plugin URI: https://everfund.com
 * Description: Everfund takes the friction out of donating with an easy to set up donation portal for your WordPress website that help you convert more income for your charity and give your donors the best experience possible.
 * Tags: donation, donations, nonprofit, nonprofits, charity, charities, donation widget, fundraising, payment, payments, crowdfunding, campaign, stripe, campaigns, social causes, causes, credit card, credit cards, bacs, direct-debits
 * Requires at least: 5.3
 * Requires PHP: 7.0
 * Version: 2.0.1
 * Author: Everfund
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       everfund.io
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
      <h2 class="everfund-title"><?php _e('Everfund is Installed.', 'everfund'); ?></h2>
      <p class="everfund-subtitle"><?php _e('You can now use Everfund on your website.', 'everfund'); ?></p>
      <a class="everfund-button everfund-neutral" href="https://dashboard.everfund.io/donations/"><?php _e('Go to my Widgets', 'everfund'); ?></a>
      <a class="everfund-button everfund" href="https://dashboard.everfund.io/donations/links/"><?php _e('Go to my Donations', 'everfund'); ?></a>
	  <p class="everfund-stuck"><?php _e('Stuck? Talk to ', 'everfund'); ?> <a href="https://help.everfund.co.uk/en/"> Support </a> <?php _e(' or check out the ', 'everfund'); ?><a href="https://developer.everfund.co.uk/integrations/wordpress">developer documentation </a></p>
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
	register_block_type(__DIR__ . '/build/donation-checkout-modal');
	register_block_type(__DIR__ . '/build/donation-form');
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
    $origins[] = 'https://everfund.co.uk';
    $origins[] = 'https://api.everfund.co.uk';
    $origins[] = 'https://everfund.io';
    $origins[] = 'https://api.everfund.io';

    return $origins;
}

add_filter('allowed_http_origins', 'everfund_add_allowed_origins');
add_action('admin_enqueue_scripts', 'everfund_admin_styles');
add_action('wp_enqueue_scripts', 'everfund_sdk_script');
add_action('wp_head', 'everfund_sdk_script', 1);
add_action('plugins_loaded', 'everfund_show_apple_pay_domain_verification_file');
add_action('admin_menu', 'everfund_create_menu');
add_action('init', 'create_block_init');
